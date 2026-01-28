import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async () => {
    const mongoUri = process.env.MONGODB_URI;

    // MongoDB is optional - skip if not configured
    if (!mongoUri || mongoUri === 'mongodb://localhost:27017/cms-ecommerce') {
        logger.warn('mongodb-skipped', { reason: 'MONGODB_URI not configured. Using Firestore as primary database.' });
        return;
    }

    try {
        const conn = await mongoose.connect(mongoUri);
        logger.info('mongodb-connected', { host: conn.connection.host });
    } catch (error: any) {
        logger.warn('mongodb-connection-failed', { error: error.message, note: 'Continuing with Firestore as primary database' });
        // Don't exit - Firestore is the primary database
    }
};

export default connectDB;
