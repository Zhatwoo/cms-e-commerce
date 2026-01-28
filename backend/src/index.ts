import './observability/tracing';
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';
import storageRoutes from './routes/storageRoutes';
import { requestLogger } from './middleware/requestLogger';
import { metricsHandler, metricsMiddleware } from './observability/metrics';
import { getDependencyHealth } from './controllers/healthController';
import logger from './utils/logger';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(requestLogger);
app.use(metricsMiddleware);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/storage', storageRoutes);
app.get('/metrics', metricsHandler);

app.get('/', (req: Request, res: Response) => {
    res.send('API is running...');
});

// Health check endpoint for load balancer
app.get('/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'healthy',
        instance: process.env.HOSTNAME || 'unknown',
        port: port,
        timestamp: new Date().toISOString()
    });
});

app.get('/health/dependencies', getDependencyHealth);

app.listen(port, () => {
    logger.info('server-started', { port });
});
