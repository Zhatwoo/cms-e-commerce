import { Request, Response } from 'express';
import User from '../models/User';
import { cacheGet, cacheSet } from '../services/cacheService';

const USERS_CACHE_KEY = 'users:all';

// @desc    Get all users
// @route   GET /api/users
// @access  Private
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('🔄 Fetching all users from database...');

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
        console.error('❌ Error fetching users:', error);

        res.status(500).json({
            success: false,
            message: '❌ Error fetching users',
            error: error.message,
        });
    }
};
