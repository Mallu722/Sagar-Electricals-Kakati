const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const ServiceRequest = require('../models/ServiceRequest');

// Create reusable transporter
const createTransporter = () => nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/service-request — save + send email
router.post('/', async (req, res) => {
  try {
    const { name, phone, address, serviceType, description, preferredTime } = req.body;
    console.log(`[POST] New service request from: ${name} (${phone})`);

    // Validate required fields
    if (!name || !phone || !address || !serviceType || !description || !preferredTime) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    // Save to DB
    const newRequest = new ServiceRequest({ name, phone, address, serviceType, description, preferredTime });
    const saved = await newRequest.save();

    // Send email notification (non-blocking — don't fail the request if email fails)
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS && process.env.EMAIL_PASS !== 'your_app_password_here') {
      try {
        const transporter = createTransporter();
        const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

        await transporter.sendMail({
          from: `"Sagar Electricals Website" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_USER,
          subject: `🔔 New Service Request — ${serviceType}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8fafc; padding: 24px; border-radius: 12px;">
              <div style="background: #0D1B2A; padding: 20px 24px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: #FFC107; margin: 0; font-size: 22px;">⚡ Sagar Electricals</h1>
                <p style="color: #9ca3af; margin: 4px 0 0; font-size: 13px;">New Service Request Received</p>
              </div>
              <div style="background: white; padding: 24px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
                <table style="width: 100%; border-collapse: collapse;">
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; width: 40%; border-bottom: 1px solid #f3f4f6;">Customer Name</td>
                    <td style="padding: 10px 14px; color: #111827; border-bottom: 1px solid #f3f4f6;">${name}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Phone</td>
                    <td style="padding: 10px 14px; color: #111827; border-bottom: 1px solid #f3f4f6;"><a href="tel:${phone}" style="color: #0D1B2A; font-weight: bold;">${phone}</a></td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Address</td>
                    <td style="padding: 10px 14px; color: #111827; border-bottom: 1px solid #f3f4f6;">${address}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Service Type</td>
                    <td style="padding: 10px 14px; border-bottom: 1px solid #f3f4f6;"><span style="background: #FEF3C7; color: #92400E; padding: 3px 10px; border-radius: 20px; font-weight: bold; font-size: 13px;">${serviceType}</span></td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Preferred Time</td>
                    <td style="padding: 10px 14px; color: #111827; border-bottom: 1px solid #f3f4f6;">${preferredTime}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151; border-bottom: 1px solid #f3f4f6;">Description</td>
                    <td style="padding: 10px 14px; color: #111827; border-bottom: 1px solid #f3f4f6;">${description}</td>
                  </tr>
                  <tr style="background: #f8fafc;">
                    <td style="padding: 10px 14px; font-weight: bold; color: #374151;">Submitted At</td>
                    <td style="padding: 10px 14px; color: #6b7280; font-size: 13px;">${submittedAt} IST</td>
                  </tr>
                </table>
                <div style="margin-top: 20px; padding: 14px; background: #ecfdf5; border-radius: 8px; border: 1px solid #a7f3d0; text-align: center;">
                  <p style="margin: 0; color: #065f46; font-weight: bold; font-size: 14px;">📞 Call back: <a href="tel:${phone}" style="color: #065f46;">${phone}</a></p>
                </div>
              </div>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error('Email send failed (request still saved):', emailErr.message);
      }
    }

    res.status(201).json({ message: 'Service request created successfully', data: saved });
  } catch (error) {
    console.error('Error creating service request:', error);
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// GET /api/service-request — all requests (dashboard)
router.get('/', async (req, res) => {
  try {
    console.log('[GET] Fetching all service requests');
    const requests = await ServiceRequest.find().sort({ createdAt: -1 });
    console.log(`Found ${requests.length} requests`);
    res.status(200).json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

// PATCH /api/service-request/:id/status — update status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updated = await ServiceRequest.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updated) return res.status(404).json({ message: 'Request not found' });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
});

module.exports = router;
