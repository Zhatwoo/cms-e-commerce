import '../observability/tracing';
import dotenv from 'dotenv';
import { createEmailWorker } from './emailWorker';
import logger from '../utils/logger';

dotenv.config();

const workers = [createEmailWorker()];

const shutdown = async () => {
    await Promise.allSettled(workers.map((worker) => worker.close()));
    process.exit(0);
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

logger.info('worker-started');
