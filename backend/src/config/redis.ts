import Redis from 'ioredis';

let redisClient: Redis | null = null;

const buildRedisClient = (): Redis | null => {
    const redisUrl = process.env.REDIS_URL;
    const host = process.env.REDIS_HOST;
    const port = process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : undefined;
    const password = process.env.REDIS_PASSWORD;

    if (!redisUrl && !host) {
        return null;
    }

    const client = redisUrl
        ? new Redis(redisUrl, { lazyConnect: true, maxRetriesPerRequest: 2 })
        : new Redis({
              host,
              port: port || 6379,
              password,
              lazyConnect: true,
              maxRetriesPerRequest: 2,
          });

    client.on('error', (error) => {
        console.error('❌ Redis error:', error);
    });

    return client;
};

export const getRedisClient = (): Redis | null => {
    if (!redisClient) {
        redisClient = buildRedisClient();
    }
    return redisClient;
};

export const connectRedis = async (): Promise<Redis | null> => {
    const client = getRedisClient();
    if (!client) {
        return null;
    }

    if (client.status === 'wait') {
        await client.connect();
    }

    return client;
};
