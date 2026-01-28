import express from 'express';
import {
    createDownloadUrl,
    createUploadUrl,
    deleteFile,
    getFile,
    listFiles,
    updateFile,
} from '../controllers/storageController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/upload-url', authenticate, createUploadUrl);
router.post('/download-url', authenticate, createDownloadUrl);

router.get('/files', authenticate, listFiles);
router.get('/files/:id', authenticate, getFile);
router.patch('/files/:id', authenticate, updateFile);
router.delete('/files/:id', authenticate, deleteFile);

export default router;
