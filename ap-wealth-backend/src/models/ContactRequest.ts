import mongoose, { Schema, Document } from 'mongoose';

export interface IContactRequest extends Document {
  name: string;
  phone: string;
  email: string;
  interest: string;
  message: string;
  status: 'pending' | 'contacted' | 'resolved';
  createdAt: Date;
}

const ContactRequestSchema: Schema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  interest: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['pending', 'contacted', 'resolved'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model<IContactRequest>('ContactRequest', ContactRequestSchema);
