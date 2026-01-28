import { Job, Worker } from 'bullmq';
import { getQueueConnection } from '../queues/connection';
import { EmailJobData, EmailJobNames, QueueNames } from '../queues/jobTypes';

export const createEmailWorker = () => {
    const worker = new Worker<EmailJobData>(
        QueueNames.email,
        async (job: Job<EmailJobData>) => {
            if (job.name === EmailJobNames.welcome) {
                const { email, name } = job.data;
                console.log(`📧 Sending welcome email to ${name} <${email}>`);
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
        console.log(`✅ Job ${job.id} completed (${job.name})`);
    });

    worker.on('failed', (job, error) => {
        console.error(`❌ Job ${job?.id} failed (${job?.name})`, error);
    });

    return worker;
};
