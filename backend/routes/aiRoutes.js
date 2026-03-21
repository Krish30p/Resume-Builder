import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { generateSummary } from '../controllers/aiControllers.js';

const aiRouter = express.Router();

aiRouter.post('/generate-summary', protect, generateSummary);

export default aiRouter;
