import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    console.log('🔄 Testing MongoDB connection...');
    
    const mongoose = await connectDB();
    
    // Get connection state
    const state = mongoose.connection.readyState;
    const states = {
      0: 'disconnected',
      1: 'connected',
      2: 'connecting',
      3: 'disconnecting',
    };

    const connectionState = states[state as keyof typeof states] || 'unknown';
    
    // Try a simple query to verify connection works
    const dbName = mongoose.connection.db?.databaseName || 'unknown';
    const collections = await mongoose.connection.db?.listCollections().toArray();
    
    return NextResponse.json({
      success: true,
      message: '✅ MongoDB connected successfully!',
      connection: {
        state: connectionState,
        readyState: state,
        database: dbName,
        host: mongoose.connection.host,
        port: mongoose.connection.port,
        collections: collections?.map((c) => c.name) || [],
      },
    });
  } catch (error: any) {
    console.error('❌ MongoDB connection test failed:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: '❌ MongoDB connection failed',
        error: error.message,
        details: {
          name: error.name,
          code: error.code,
        },
        troubleshooting: {
          checkConnectionString: 'Verify MONGODB_URI in .env.local',
          checkClusterStatus: 'Check if MongoDB Atlas cluster is running',
          checkNetworkAccess: 'Verify IP whitelist in MongoDB Atlas',
          checkCredentials: 'Verify username and password are correct',
        },
      },
      { status: 500 }
    );
  }
}
