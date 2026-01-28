import { NextFunction, Request, Response } from 'express';
import {
    RateLimiterMemory,
    RateLimiterRedis,
    RateLimiterRes,
} from 'rate-limiter-flexible';
import { connectRedis } from '../config/redis';
import logger from '../utils/logger';

const rateLimitPoints = Number(process.env.RATE_LIMIT_POINTS || 120);
const rateLimitDuration = Number(process.env.RATE_LIMIT_DURATION || 60);
const rateLimitBlockDuration = Number(process.env.RATE_LIMIT_BLOCK_DURATION || 60);
const rateLimitPrefix = process.env.RATE_LIMIT_PREFIX || 'ratelimit';

let limiterPromise:
    | Promise<RateLimiterRedis | RateLimiterMemory>
    | null = null;

const initLimiter = async (): Promise<RateLimiterRedis | RateLimiterMemory> => {
    if (!limiterPromise) {
        limiterPromise = (async () => {
            const redisClient = await connectRedis();
            if (redisClient) {
                return new RateLimiterRedis({
                    storeClient: redisClient,
                    points: rateLimitPoints,
                    duration: rateLimitDuration,
                    blockDuration: rateLimitBlockDuration,
                    keyPrefix: rateLimitPrefix,
                    insuranceLimiter: new RateLimiterMemory({
                        points: rateLimitPoints,
                        duration: rateLimitDuration,
                    }),
                });
            }

            return new RateLimiterMemory({
                points: rateLimitPoints,
                duration: rateLimitDuration,
                blockDuration: rateLimitBlockDuration,
            });
        })();
    }

    return limiterPromise;
};

const getRateLimitKey = (req: Request): string => {
    if (req.user?.uid) {
        return `user:${req.user.uid}`;
    }
    return req.ip || req.socket.remoteAddress || 'unknown';
};

const shouldSkip = (req: Request): boolean => {
    if (process.env.RATE_LIMIT_DISABLED === 'true') {
        return true;
    }

    const path = req.path || '';
    return path.startsWith('/health') || path.startsWith('/metrics');
};

const applyHeaders = (res: Response, rateLimiterRes: RateLimiterRes) => {
    const resetSeconds = Math.ceil((Date.now() + rateLimiterRes.msBeforeNext) / 1000);
    res.setHeader('X-RateLimit-Limit', rateLimitPoints.toString());
    res.setHeader(
        'X-RateLimit-Remaining',
        Math.max(rateLimiterRes.remainingPoints, 0).toString()
    );
    res.setHeader('X-RateLimit-Reset', resetSeconds.toString());
};

export const rateLimiter = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    if (shouldSkip(req)) {
        next();
        return;
    }

    try {
        const limiter = await initLimiter();
        const rateLimiterRes = await limiter.consume(getRateLimitKey(req));
        applyHeaders(res, rateLimiterRes);
        next();
    } catch (error: any) {
        if (error instanceof RateLimiterRes) {
            applyHeaders(res, error);
            res.setHeader('Retry-After', Math.ceil(error.msBeforeNext / 1000));
            res.status(429).json({ error: 'Too many requests' });
            return;
        }

        logger.error('rate-limit-error', { error });
        next();
    }
};
