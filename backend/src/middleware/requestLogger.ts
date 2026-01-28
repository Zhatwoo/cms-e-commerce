import { NextFunction, Request, Response } from 'express';
import { randomUUID } from 'crypto';
import logger from '../utils/logger';

export const requestLogger = (req: Request, res: Response, next: NextFunction): void => {
    const headerRequestId = req.headers['x-request-id'];
    const requestId =
        (Array.isArray(headerRequestId) ? headerRequestId[0] : headerRequestId) || randomUUID();

    req.requestId = requestId;
    res.setHeader('x-request-id', requestId);

    const start = process.hrtime.bigint();

    res.on('finish', () => {
        const durationMs = Number(process.hrtime.bigint() - start) / 1_000_000;
        logger.info('request', {
            requestId,
            method: req.method,
            path: req.originalUrl,
            statusCode: res.statusCode,
            durationMs,
            userId: req.user?.uid,
        });
    });

    next();
};
