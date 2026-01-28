import mongoose from 'mongoose';
import logger from '../utils/logger';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI || '');
        logger.info('mongodb-connected', { host: conn.connection.host });
    } catch (error: any) {
        logger.error('mongodb-connection-error', { error: error.message });
        process.exit(1);
    }
};

export default connectDB;
