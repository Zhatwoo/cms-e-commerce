export const QueueNames = {
    email: 'email',
} as const;

export type QueueName = (typeof QueueNames)[keyof typeof QueueNames];

export const EmailJobNames = {
    welcome: 'welcome-email',
} as const;

export type EmailJobName = (typeof EmailJobNames)[keyof typeof EmailJobNames];

export interface EmailJobData {
    userId: string;
    email: string;
    name: string;
}
