const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const profileRoutes = require('./src/routes/profile');
const employerRoutes = require('./src/routes/employer');
const applicationRoutes = require('./src/routes/applications');
const jobsRouter = require('./src/routes/jobs.js');
app.use('/api/jobs', jobsRouter);
app.use('/api/profile', profileRoutes);
app.use('/api/employer', employerRoutes);
app.use('/api/applications', applicationRoutes);


// Test route
app.get('/', (req, res) => res.send('Backend API running'));

// Port
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
