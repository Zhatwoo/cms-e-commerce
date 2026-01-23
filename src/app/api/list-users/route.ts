import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import User from '@/models/User';

export async function GET() {
  try {
    console.log('🔄 Fetching all users from database...');
    
    await connectDB();
    
    // Get all users (without password)
    const users = await User.find({}).select('-password').lean();
    
    // Count total users
    const totalUsers = await User.countDocuments({});
    
    return NextResponse.json({
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
    
    // If User model doesn't exist or collection is empty
    if (error.message.includes('model') || error.message.includes('collection')) {
      return NextResponse.json({
        success: true,
        message: '📭 No users found or User collection not created yet',
        total: 0,
        users: [],
        note: 'Register a user first at /auth/register',
      });
    }
    
    return NextResponse.json(
      {
        success: false,
        message: '❌ Error fetching users',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
