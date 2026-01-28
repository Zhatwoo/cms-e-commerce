import { Job, Worker } from 'bullmq';
import { getQueueConnection } from '../queues/connection';
import { EmailJobData, EmailJobNames, QueueNames } from '../queues/jobTypes';
import logger from '../utils/logger';

export const createEmailWorker = () => {
    const worker = new Worker<EmailJobData>(
        QueueNames.email,
        async (job: Job<EmailJobData>) => {
            if (job.name === EmailJobNames.welcome) {
                const { email, name } = job.data;
                logger.info('welcome-email-send', { name, email });
                return { delivered: true };
            }

            throw new Error(`Unknown email job type: ${job.name}`);
        },
        {
            connection: getQueueConnection(),
            concurrency: Number(process.env.WORKER_CONCURRENCY || 5),
        }
    );

    worker.on('completed', (job) => {
        logger.info('job-completed', { id: job.id, name: job.name });
    });

    worker.on('failed', (job, error) => {
        logger.error('job-failed', { id: job?.id, name: job?.name, error });
    });

    return worker;
};
