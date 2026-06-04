import { Router, Request, Response } from 'express';
import contactRoutes from './contact.routes';
import adminRoutes from './admin.routes';

const router = Router();

// Health Check Endpoint
router.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', message: 'Backend is running smoothly' });
});

// Mount Sub-routers
router.use('/contact', contactRoutes);
router.use('/admin', adminRoutes);

export default router;
