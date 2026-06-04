import { Request, Response } from 'express';
import ContactRequest from '../models/ContactRequest';

export const submitContact = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, phone, email, interest, message } = req.body;

    // Validate required fields
    if (!name || !phone || !email || !message) {
      return res.status(400).json({ error: 'Please provide all required fields' });
    }

    // Save to database
    const newRequest = new ContactRequest({
      name,
      phone,
      email,
      interest,
      message
    });

    await newRequest.save();

    res.status(201).json({ success: true, message: 'Contact request submitted successfully' });
  } catch (error) {
    console.error('Contact submit error:', error);
    res.status(500).json({ error: 'Server error while submitting request' });
  }
};
