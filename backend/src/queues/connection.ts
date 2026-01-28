import IORedis, { Redis } from 'ioredis';

let queueConnection: Redis | null = null;

const buildQueueConnection = (): Redis => {
    const redisUrl = process.env.REDIS_URL;
    const host = process.env.REDIS_HOST;
    const port = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : undefined;
    const password = process.env.REDIS_PASSWORD;

    if (redisUrl) {
        return new IORedis(redisUrl, { maxRetriesPerRequest: null, enableReadyCheck: false });
    }

    if (!host) {
        throw new Error('Missing Redis configuration for BullMQ');
    }

    return new IORedis({
        host,
        port: port || 6379,
        password,
        maxRetriesPerRequest: null,
        enableReadyCheck: false,
    });
};

export const getQueueConnection = (): Redis => {
    if (!queueConnection) {
        queueConnection = buildQueueConnection();
    }

    return queueConnection;
};
