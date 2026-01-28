import { connectRedis } from '../config/redis';

const DEFAULT_TTL_SECONDS = 60;

export const cacheGet = async <T>(key: string): Promise<T | null> => {
    const client = await connectRedis();
    if (!client) {
        return null;
    }

    const value = await client.get(key);
    if (!value) {
        return null;
    }

    try {
        return JSON.parse(value) as T;
    } catch {
        return null;
    }
};

export const cacheSet = async <T>(key: string, value: T, ttlSeconds = DEFAULT_TTL_SECONDS): Promise<void> => {
    const client = await connectRedis();
    if (!client) {
        return;
    }

    await client.set(key, JSON.stringify(value), 'EX', ttlSeconds);
};

export const cacheDel = async (key: string): Promise<void> => {
    const client = await connectRedis();
    if (!client) {
        return;
    }

    await client.del(key);
};
