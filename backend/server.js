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

// Request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

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
const mongoUri = process.env.MONGODB_URI;
if (!mongoUri) {
  console.error('CRITICAL: MONGODB_URI is not defined in .env');
  process.exit(1);
}

// Add DB name if missing to ensure it doesnt default to 'test' unexpectedly
const connectionUri = mongoUri.includes('?') 
  ? mongoUri.replace('/?', '/SagarElectricals?') 
  : (mongoUri.endsWith('/') ? mongoUri + 'SagarElectricals' : mongoUri + '/SagarElectricals');

console.log('Connecting to MongoDB...');
mongoose.connect(connectionUri)
  .then(() => console.log('✅ MongoDB connected successfully to SagarElectricals DB'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err.message);
    // Print more details if it's a timeout
    if (err.name === 'MongooseServerSelectionError') {
      console.error('Hint: Check if your IP address is whitelisted in MongoDB Atlas.');
    }
  });

mongoose.connection.on('disconnected', () => console.log('⚠️ MongoDB disconnected'));
mongoose.connection.on('error', (err) => console.error('❌ MongoDB runtime error:', err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
