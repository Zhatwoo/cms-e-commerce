import { Request, Response } from 'express';
import { getQueueByName } from '../queues';

export const getJobStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const queueParam = Array.isArray(req.params.queue) ? req.params.queue[0] : req.params.queue;
        const idParam = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;

        const queueName = queueParam || '';
        const jobId = idParam || '';

        const queue = getQueueByName(queueName);

        if (!queue) {
            res.status(404).json({ error: `Queue '${queueName}' not found` });
            return;
        }

        const job = await queue.getJob(jobId);

        if (!job) {
            res.status(404).json({ error: 'Job not found' });
            return;
        }

        const state = await job.getState();

        res.status(200).json({
            id: job.id,
            name: job.name,
            queue: queueName,
            state,
            attemptsMade: job.attemptsMade,
            failedReason: job.failedReason,
            processedOn: job.processedOn,
            finishedOn: job.finishedOn,
            data: job.data,
        });
    } catch (error: any) {
        console.error('Job status error:', error);
        res.status(500).json({ error: error.message || 'Internal server error' });
    }
};
