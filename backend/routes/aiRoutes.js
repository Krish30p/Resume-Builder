import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import { generateSummary, enhanceExperience, enhanceProject } from '../controllers/aiControllers.js';

const aiRouter = express.Router();

aiRouter.post('/generate-summary', protect, generateSummary);
aiRouter.post('/enhance-experience', protect, enhanceExperience);
aiRouter.post('/enhance-project', protect, enhanceProject);

export default aiRouter;
