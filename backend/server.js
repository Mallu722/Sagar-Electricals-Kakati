require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const serviceRoutes = require('./routes/serviceRoutes');
const Service = require('./models/Service');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/service-request', serviceRoutes);

// GET /api/services - fetch all services
app.get('/api/services', async (req, res) => {
  try {
    const services = await Service.find().sort({ category: 1, title: 1 });
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error: error.message });
  }
});

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
