import { Queue } from 'bullmq';
import { getQueueConnection } from './connection';
import { QueueNames, EmailJobData } from './jobTypes';

export const emailQueue = new Queue<EmailJobData>(QueueNames.email, {
    connection: getQueueConnection(),
    defaultJobOptions: {
        attempts: 3,
        backoff: { type: 'exponential', delay: 5000 },
        removeOnComplete: 100,
        removeOnFail: 500,
    },
});
