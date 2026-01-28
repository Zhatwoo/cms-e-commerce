import { Request, Response } from 'express';
import admin from '../config/firebase';
import { connectRedis } from '../config/redis';
import { getFirestore } from '../services/firestoreService';
import logger from '../utils/logger';

const withTimeout = async <T>(promise: Promise<T>, timeoutMs: number) => {
    return Promise.race([
        promise,
        new Promise<T>((_, reject) => setTimeout(() => reject(new Error('timeout')), timeoutMs)),
    ]);
};

export const getDependencyHealth = async (_req: Request, res: Response): Promise<void> => {
    const results: Record<string, { status: string; detail?: string }> = {};

    try {
        const redisClient = await connectRedis();
        if (!redisClient) {
            results.redis = { status: 'skipped', detail: 'not configured' };
        } else {
            const pong = await withTimeout(redisClient.ping(), 2000);
            results.redis = { status: pong === 'PONG' ? 'ok' : 'error' };
        }
    } catch (error: any) {
        results.redis = { status: 'error', detail: error?.message };
    }

    try {
        await withTimeout(getFirestore().listCollections(), 3000);
        results.firestore = { status: 'ok' };
    } catch (error: any) {
        results.firestore = { status: 'error', detail: error?.message };
    }

    try {
        const bucket = admin.storage().bucket();
        if (!bucket?.name) {
            results.storage = { status: 'skipped', detail: 'bucket not configured' };
        } else {
            const [exists] = await withTimeout(bucket.exists(), 3000);
            results.storage = { status: exists ? 'ok' : 'error', detail: exists ? undefined : 'bucket missing' };
        }
    } catch (error: any) {
        results.storage = { status: 'error', detail: error?.message };
    }

    const overall = Object.values(results).every((result) =>
        ['ok', 'skipped'].includes(result.status)
    );

    logger.info('dependency-health', { results, overall });

    res.status(overall ? 200 : 503).json({
        status: overall ? 'healthy' : 'degraded',
        checks: results,
    });
};
