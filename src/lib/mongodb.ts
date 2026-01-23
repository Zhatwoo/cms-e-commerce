import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached: MongooseCache = global.mongoose || { conn: null, promise: null };

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      serverSelectionTimeoutMS: 10000, // 10 seconds timeout
      socketTimeoutMS: 45000, // 45 seconds socket timeout
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ MongoDB connected successfully');
      return mongoose;
    }).catch((error) => {
      console.error('❌ MongoDB connection error:', error.message);
      if (error.message.includes('ENOTFOUND')) {
        console.error('💡 DNS lookup failed. Check:');
        console.error('   1. Is your MongoDB Atlas cluster running?');
        console.error('   2. Is your internet connection working?');
        console.error('   3. Is the connection string correct?');
      } else if (error.message.includes('authentication failed') || error.message.includes('bad auth')) {
        console.error('💡 Authentication failed. Check:');
        console.error('   1. Is the username correct? (Currently: Zhatwo)');
        console.error('   2. Is the password correct? (Check MongoDB Atlas Database Access)');
        console.error('   3. Make sure you replaced <password> with your actual password');
        console.error('   4. URL-encode special characters in password if needed');
        console.error('');
        console.error('📝 To fix:');
        console.error('   1. Go to MongoDB Atlas → Database Access');
        console.error('   2. Find your user (Zhatwo) and verify/reset the password');
        console.error('   3. Update MONGODB_URI in .env.local with the correct password');
      }
      throw error;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;
