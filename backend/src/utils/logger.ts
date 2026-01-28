import { createLogger, format, transports } from 'winston';

const { combine, timestamp, errors, json } = format;

const logLevel = process.env.LOG_LEVEL || (process.env.NODE_ENV === 'production' ? 'info' : 'debug');

const logger = createLogger({
    level: logLevel,
    format: combine(timestamp(), errors({ stack: true }), json()),
    defaultMeta: {
        service: process.env.OTEL_SERVICE_NAME || 'cms-backend',
        env: process.env.NODE_ENV || 'development',
    },
    transports: [new transports.Console()],
});

export default logger;
