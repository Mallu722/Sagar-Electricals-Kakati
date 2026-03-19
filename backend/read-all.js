require('dotenv').config();
const mongoose = require('mongoose');
const ServiceRequest = require('./models/ServiceRequest');

const readAll = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    const all = await ServiceRequest.find().sort({ createdAt: -1 });
    console.log('Total requests:', all.length);
    console.log('Last 5 requests:', JSON.stringify(all.slice(0, 5), null, 2));
    await mongoose.connection.close();
  } catch (err) {
    console.error('Error:', err);
  }
};

readAll();
