import { Router } from 'express';
import { adminLogin, getAllContacts, updateContactStatus } from '../controllers/admin.controller';
import { authMiddleware } from '../middleware/auth';

const router = Router();

// Public Admin Route
router.post('/login', adminLogin);

// Protected Admin Routes
router.get('/contacts', authMiddleware, getAllContacts);
router.patch('/contacts/:id', authMiddleware, updateContactStatus);

export default router;
