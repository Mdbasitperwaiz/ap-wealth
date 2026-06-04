import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import apiRouter from './routes';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Mount API Routing
app.use('/api', apiRouter);

// Handle 404 Route Errors
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start listening
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
