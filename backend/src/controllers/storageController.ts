import { Request, Response } from 'express';
import { randomUUID } from 'crypto';
import { FileRepository } from '../repositories/fileRepository';
import { firestoreFieldValue } from '../services/firestoreService';
import { deleteStorageFile, getSignedDownloadUrl, getSignedUploadUrl } from '../services/storageService';
import logger from '../utils/logger';
import { trace, SpanStatusCode } from '@opentelemetry/api';

const fileRepository = new FileRepository();
const tracer = trace.getTracer('storage-controller');

const sanitizeFilename = (name: string) =>
    name.replace(/[/\\?%*:|"<>]/g, '-').replace(/\s+/g, '-').trim();

const getOwnerUid = (req: Request): string | null => {
    return req.user?.uid || null;
};

const isAdmin = (req: Request): boolean => {
    return req.user?.role === 'admin' || (Array.isArray(req.user?.roles) && req.user?.roles?.includes('admin'));
};

export const createUploadUrl = async (req: Request, res: Response): Promise<void> => {
    const span = tracer.startSpan('createUploadUrl');
    try {
        const ownerUid = getOwnerUid(req);
        span.setAttribute('owner.uid', ownerUid || '');
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const { originalName, contentType, metadata, path } = req.body || {};
        const safeName = originalName ? sanitizeFilename(originalName) : 'file';
        const filePath = typeof path === 'string' && path.length > 0
            ? path
            : `uploads/${ownerUid}/${randomUUID()}-${safeName}`;

        const { url, expiresAt } = await getSignedUploadUrl(filePath, contentType);

        const payload = {
            ownerUid,
            path: filePath,
            originalName: originalName || safeName,
            contentType,
            metadata,
            status: 'pending' as const,
            createdAt: firestoreFieldValue.serverTimestamp(),
            updatedAt: firestoreFieldValue.serverTimestamp(),
        };

        const created = await fileRepository.add(payload as any);

        res.status(201).json({
            fileId: created.id,
            filePath,
            uploadUrl: url,
            expiresAt,
        });
    } catch (error: any) {
        logger.error('upload-url-error', { error });
        span.recordException(error);
        span.setStatus({ code: SpanStatusCode.ERROR });
        res.status(500).json({ error: error.message || 'Internal server error' });
    } finally {
        span.end();
    }
};

export const createDownloadUrl = async (req: Request, res: Response): Promise<void> => {
    try {
        const ownerUid = getOwnerUid(req);
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const { fileId } = req.body || {};
        if (!fileId) {
            res.status(400).json({ error: 'fileId is required' });
            return;
        }

        const fileRecord = await fileRepository.getById(fileId);
        if (!fileRecord) {
            res.status(404).json({ error: 'File metadata not found' });
            return;
        }

        if (!isAdmin(req) && fileRecord.ownerUid !== ownerUid) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }

        const { url, expiresAt } = await getSignedDownloadUrl(fileRecord.path);

        res.status(200).json({
            fileId: fileRecord.id,
            filePath: fileRecord.path,
            downloadUrl: url,
            expiresAt,
        });
    } catch (error: any) {
        logger.error('download-url-error', { error });
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

export const listFiles = async (req: Request, res: Response): Promise<void> => {
    try {
        const ownerUid = getOwnerUid(req);
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const requestedOwner = isAdmin(req) ? (req.query.ownerUid as string | undefined) : undefined;
        const targetOwner = requestedOwner || ownerUid;
        const limit = Number(req.query.limit) || 50;

        const files = await fileRepository.listByOwner(targetOwner, limit);
        res.status(200).json({ files });
    } catch (error: any) {
        logger.error('list-files-error', { error });
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

export const getFile = async (req: Request, res: Response): Promise<void> => {
    try {
        const ownerUid = getOwnerUid(req);
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const fileId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!fileId) {
            res.status(400).json({ error: 'File id is required' });
            return;
        }

        const fileRecord = await fileRepository.getById(fileId);
        if (!fileRecord) {
            res.status(404).json({ error: 'File metadata not found' });
            return;
        }

        if (!isAdmin(req) && fileRecord.ownerUid !== ownerUid) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }

        res.status(200).json({ file: fileRecord });
    } catch (error: any) {
        logger.error('get-file-error', { error });
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

export const updateFile = async (req: Request, res: Response): Promise<void> => {
    try {
        const ownerUid = getOwnerUid(req);
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const fileId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!fileId) {
            res.status(400).json({ error: 'File id is required' });
            return;
        }

        const fileRecord = await fileRepository.getById(fileId);
        if (!fileRecord) {
            res.status(404).json({ error: 'File metadata not found' });
            return;
        }

        if (!isAdmin(req) && fileRecord.ownerUid !== ownerUid) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }

        const { status, metadata, contentType, size, originalName } = req.body || {};
        const updatePayload: Record<string, unknown> = {
            updatedAt: firestoreFieldValue.serverTimestamp(),
        };

        if (status) updatePayload.status = status;
        if (metadata) updatePayload.metadata = metadata;
        if (contentType) updatePayload.contentType = contentType;
        if (typeof size === 'number') updatePayload.size = size;
        if (originalName) updatePayload.originalName = sanitizeFilename(originalName);

        await fileRepository.update(fileId, updatePayload as any);

        res.status(200).json({ success: true });
    } catch (error: any) {
        logger.error('update-file-error', { error });
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};

export const deleteFile = async (req: Request, res: Response): Promise<void> => {
    try {
        const ownerUid = getOwnerUid(req);
        if (!ownerUid) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }

        const fileId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!fileId) {
            res.status(400).json({ error: 'File id is required' });
            return;
        }

        const fileRecord = await fileRepository.getById(fileId);
        if (!fileRecord) {
            res.status(404).json({ error: 'File metadata not found' });
            return;
        }

        if (!isAdmin(req) && fileRecord.ownerUid !== ownerUid) {
            res.status(403).json({ error: 'Forbidden' });
            return;
        }

        if (fileRecord.path) {
            await deleteStorageFile(fileRecord.path);
        }

        await fileRepository.delete(fileId);
        res.status(200).json({ success: true });
    } catch (error: any) {
        logger.error('delete-file-error', { error });
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};
