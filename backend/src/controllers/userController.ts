import { Request, Response } from 'express';
import User from '../models/User';
import { cacheGet, cacheSet } from '../services/cacheService';
import logger from '../utils/logger';
import { usersTotalGauge } from '../observability/metrics';

const USERS_CACHE_KEY = 'users:all';

// @desc    Get all users
// @route   GET /api/users
// @access  Private
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        logger.info('users-fetch-start');

        const cached = await cacheGet<{
            success: boolean;
            message: string;
            total: number;
            users: Array<{
                id: string;
                name: string;
                email: string;
                role: string;
                createdAt: Date;
                updatedAt: Date;
            }>;
        }>(USERS_CACHE_KEY);

        if (cached) {
            res.status(200).json(cached);
            return;
        }

        const users = await User.find({}).select('-password').lean();

        // Count total users
        const totalUsers = await User.countDocuments({});

        usersTotalGauge.set(totalUsers);

        const responsePayload = {
            success: true,
            message: `✅ Found ${totalUsers} user(s) in database`,
            total: totalUsers,
            users: users.map((user: any) => ({
                id: user._id.toString(),
                name: user.name,
                email: user.email,
                role: user.role || 'user',
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            })),
        };

        await cacheSet(USERS_CACHE_KEY, responsePayload);
        res.status(200).json(responsePayload);
    } catch (error: any) {
        logger.error('users-fetch-error', { error });

        res.status(500).json({
            success: false,
            message: '❌ Error fetching users',
            error: error.message,
        });
    }
};
