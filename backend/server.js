import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
import userRoutes from './src/routes/users.js';
import profileRoutes from './src/routes/profile.js';
import employerRoutes from './src/routes/employer.js';
import workerRoutes from './src/routes/worker.js';
import applicationRoutes from './src/routes/applications.js';
import jobsRouter from './src/routes/jobs.js';

app.use('/api/users', userRoutes);
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api/worker', workerRoutes);
app.use('/api/applications', applicationRoutes);

// Test route
app.get('/', (req, res) => res.send('Backend API running'));

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => console.error('❌ MongoDB connection error:', err));
