import express from 'express';
import { getJobStatus } from '../controllers/jobController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.get('/:queue/:id', authenticate, getJobStatus);

export default router;
