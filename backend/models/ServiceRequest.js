const mongoose = require('mongoose');

const serviceRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  serviceType: { type: String, required: true },
  description: { type: String, required: true },
  preferredTime: { type: String, required: true },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Completed', 'Cancelled'],
    default: 'New'
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ServiceRequest', serviceRequestSchema);
