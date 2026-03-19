require('dotenv').config();
const mongoose = require('mongoose');
const ServiceRequest = require('./models/ServiceRequest');

const testSave = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    const newRequest = new ServiceRequest({
      name: 'Test Persistent',
      phone: '1234567890',
      address: 'Test Address',
      serviceType: 'Transformer Repair',
      description: 'Persistent test',
      preferredTime: 'Morning (8 AM - 12 PM)'
    });

    const saved = await newRequest.save();
    console.log('Saved request:', saved._id);

    const found = await ServiceRequest.findById(saved._id);
    console.log('Found request in DB:', found ? 'Yes' : 'No');

    const all = await ServiceRequest.find();
    console.log('Total requests in DB:', all.length);

    await mongoose.connection.close();
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
};

testSave();
