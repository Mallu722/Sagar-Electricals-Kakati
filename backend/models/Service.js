const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  iconName: {
    type: String,
    default: 'Zap'
  },
  category: {
    type: String,
    enum: ['Residential', 'Industrial', 'Transformer', 'Testing'],
    default: 'Industrial'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', serviceSchema);
