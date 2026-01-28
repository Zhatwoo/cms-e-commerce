import { Request, Response } from 'express';
import User from '../models/User';

// @desc    Get all users
// @route   GET /api/users
// @access  Public (or Private if we add middleware)
export const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        console.log('🔄 Fetching all users from database...');

        const users = await User.find({}).select('-password').lean();

        // Count total users
        const totalUsers = await User.countDocuments({});

        res.status(200).json({
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
        });
    } catch (error: any) {
        console.error('❌ Error fetching users:', error);

        res.status(500).json({
            success: false,
            message: '❌ Error fetching users',
            error: error.message,
        });
    }
};
