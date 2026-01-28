import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import authRoutes from './routes/authRoutes';
import userRoutes from './routes/userRoutes';
import jobRoutes from './routes/jobRoutes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/jobs', jobRoutes);

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

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
