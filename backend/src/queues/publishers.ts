import { emailQueue } from './emailQueue';
import { EmailJobData, EmailJobNames } from './jobTypes';

export const publishWelcomeEmail = async (payload: EmailJobData) => {
    return emailQueue.add(EmailJobNames.welcome, payload);
};
