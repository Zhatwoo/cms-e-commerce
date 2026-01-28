import client from 'prom-client';
import { Request, Response, NextFunction } from 'express';

const registry = new client.Registry();

client.collectDefaultMetrics({ register: registry });

export const httpRequestDurationSeconds = new client.Histogram({
    name: 'http_request_duration_seconds',
    help: 'HTTP request duration in seconds',
    labelNames: ['method', 'route', 'status'],
    buckets: [0.005, 0.01, 0.05, 0.1, 0.25, 0.5, 1, 2, 5],
});

export const httpRequestErrorsTotal = new client.Counter({
    name: 'http_request_errors_total',
    help: 'Total number of HTTP 5xx responses',
    labelNames: ['method', 'route', 'status'],
});

export const usersTotalGauge = new client.Gauge({
    name: 'users_total',
    help: 'Total number of users',
});

registry.registerMetric(httpRequestDurationSeconds);
registry.registerMetric(httpRequestErrorsTotal);
registry.registerMetric(usersTotalGauge);

const resolveRouteLabel = (req: Request): string => {
    const routePath = req.route?.path ? String(req.route.path) : '';
    const baseUrl = req.baseUrl || '';
    if (routePath) {
        return `${baseUrl}${routePath}`;
    }
    return req.path || req.originalUrl || 'unknown';
};

export const metricsMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    const start = process.hrtime.bigint();

    res.on('finish', () => {
        const duration = Number(process.hrtime.bigint() - start) / 1_000_000_000;
        const labels = {
            method: req.method,
            route: resolveRouteLabel(req),
            status: String(res.statusCode),
        };

        httpRequestDurationSeconds.observe(labels, duration);

        if (res.statusCode >= 500) {
            httpRequestErrorsTotal.inc(labels);
        }
    });

    next();
};

export const metricsHandler = async (_req: Request, res: Response): Promise<void> => {
    res.setHeader('Content-Type', registry.contentType);
    res.status(200).send(await registry.metrics());
};
