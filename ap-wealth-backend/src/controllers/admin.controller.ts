import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import ContactRequest from '../models/ContactRequest';

const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'apwealth2026';
const JWT_SECRET = process.env.JWT_SECRET || 'apwealth-super-secret-key-2026';

export const adminLogin = async (req: Request, res: Response): Promise<any> => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ id: 1, role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
    return res.json({ success: true, token });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
};

export const getAllContacts = async (req: Request, res: Response): Promise<any> => {
  try {
    const contacts = await ContactRequest.find().sort({ createdAt: -1 });
    return res.json({ success: true, data: contacts });
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return res.status(500).json({ error: 'Failed to fetch contacts' });
  }
};

export const updateContactStatus = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['pending', 'contacted', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    const updatedContact = await ContactRequest.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact request not found' });
    }

    return res.json({ success: true, data: updatedContact });
  } catch (error) {
    console.error('Error updating contact:', error);
    return res.status(500).json({ error: 'Failed to update contact status' });
  }
};
