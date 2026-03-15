import React, { useState } from 'react';
import axios from 'axios';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const ServiceRequest = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    serviceType: '',
    description: '',
    preferredTime: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post(`${API_URL}/service-request`, formData);
      setStatus({ type: 'success', message: 'Your service request has been submitted successfully! We will contact you shortly.' });
      setFormData({
        name: '', phone: '', address: '', serviceType: '', description: '', preferredTime: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'There was an error submitting your request. Please try again or call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="request-service" className="py-20 bg-sagar-light min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-4 tracking-tight">
            Request a Service
          </h1>
          <p className="text-lg text-gray-600">
            Fill out the form below and our team will get back to you to confirm the appointment.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
          
          {status.message && (
            <div className={`p-4 rounded-xl mb-6 flex items-start gap-3 ${status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              {status.type === 'success' ? <CheckCircle2 className="h-6 w-6 shrink-0 mt-0.5" /> : <AlertCircle className="h-6 w-6 shrink-0 mt-0.5" />}
              <p className="font-medium">{status.message}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all" 
                  placeholder="John Doe" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all" 
                  placeholder="+91 XXXXX XXXXX" />
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Service Address *</label>
              <input required type="text" name="address" value={formData.address} onChange={handleChange} 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all" 
                placeholder="House No, Street, Landmark, City" />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Type of Service *</label>
                <select required name="serviceType" value={formData.serviceType} onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all">
                  <option value="" disabled>Select a service</option>
                  <option value="House Wiring">House Wiring</option>
                  <option value="Electrical Installation">Electrical Installation</option>
                  <option value="Fan & Light Installation">Fan & Light Installation</option>
                  <option value="Switchboard Repair">Switchboard Repair</option>
                  <option value="Maintenance">Electrical Maintenance</option>
                  <option value="Emergency">Emergency Repair</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Preferred Time *</label>
                <select required name="preferredTime" value={formData.preferredTime} onChange={handleChange} 
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all">
                  <option value="" disabled>Select preferred time</option>
                  <option value="As soon as possible (Emergency)">As soon as possible (Emergency)</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM - 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM - 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM - 8 PM)</option>
                </select>
              </div>

            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-700">Problem Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all resize-none" 
                placeholder="Please describe the issue in detail..."></textarea>
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-sagar-blue text-white hover:bg-gray-900 focus:ring-4 focus:ring-sagar-blue/20 disabled:bg-gray-400 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2">
              {loading ? <><Loader2 className="animate-spin h-5 w-5" /> Submitting Request...</> : 'Submit Request'}
            </button>
            
          </form>

        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
