import admin from '../config/firebase';

const DEFAULT_UPLOAD_EXPIRATION_MS = 15 * 60 * 1000;
const DEFAULT_DOWNLOAD_EXPIRATION_MS = 15 * 60 * 1000;

export const getStorageBucket = () => {
    const bucket = admin.storage().bucket();
    if (!bucket?.name) {
        throw new Error('Firebase Storage bucket is not configured');
    }
    return bucket;
};

export const getSignedUploadUrl = async (
    filePath: string,
    contentType?: string,
    expiresInMs: number = DEFAULT_UPLOAD_EXPIRATION_MS
) => {
    const bucket = getStorageBucket();
    const expiresAt = Date.now() + expiresInMs;
    const options = {
        version: 'v4' as const,
        action: 'write' as const,
        expires: expiresAt,
        contentType: contentType || 'application/octet-stream',
    };

    const [url] = await bucket.file(filePath).getSignedUrl(options);
    return { url, expiresAt };
};

export const getSignedDownloadUrl = async (
    filePath: string,
    expiresInMs: number = DEFAULT_DOWNLOAD_EXPIRATION_MS
) => {
    const bucket = getStorageBucket();
    const expiresAt = Date.now() + expiresInMs;
    const [url] = await bucket.file(filePath).getSignedUrl({
        version: 'v4',
        action: 'read',
        expires: expiresAt,
    });
    return { url, expiresAt };
};

export const deleteStorageFile = async (filePath: string) => {
    const bucket = getStorageBucket();
    await bucket.file(filePath).delete({ ignoreNotFound: true });
};
