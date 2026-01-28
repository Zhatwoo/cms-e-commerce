import dotenv from 'dotenv';
import { createEmailWorker } from './emailWorker';

dotenv.config();

const workers = [createEmailWorker()];

const shutdown = async () => {
    await Promise.allSettled(workers.map((worker) => worker.close()));
    process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

console.log('🚀 Worker process started');
