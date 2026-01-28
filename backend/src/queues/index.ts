import { Queue } from 'bullmq';
import { emailQueue } from './emailQueue';
import { QueueNames } from './jobTypes';

export const queues: Record<string, Queue> = {
    [QueueNames.email]: emailQueue,
};

export const getQueueByName = (name: string): Queue | null => {
    return queues[name] || null;
};

export { emailQueue };
