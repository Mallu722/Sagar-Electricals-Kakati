const express = require('express');
const router = express.Router();
const ServiceRequest = require('../models/ServiceRequest');

// POST /api/service-request
router.post('/', async (req, res) => {
  try {
    const { name, phone, address, serviceType, description, preferredTime } = req.body;
    
    const newRequest = new ServiceRequest({
      name,
      phone,
      address,
      serviceType,
      description,
      preferredTime
    });

    const savedRequest = await newRequest.save();
    res.status(201).json({ message: 'Service request created successfully', data: savedRequest });
  } catch (error) {
    console.error('Error creating service request:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// GET /api/service-request
router.get('/', async (req, res) => {
  try {
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching service requests:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
