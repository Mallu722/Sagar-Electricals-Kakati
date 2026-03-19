import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import { CheckCircle2, AlertCircle, Loader2, Zap, ArrowLeft } from 'lucide-react';
import { servicesData, CATEGORY_ORDER } from '../data/servicesData';

const API_URL = import.meta.env.VITE_API_URL || '/api';

const ServiceRequest = () => {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';

  const [formData, setFormData] = useState({
    name: '', phone: '', address: '',
    serviceType: preselected,
    description: '', preferredTime: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  // Update serviceType if query param changes
  useEffect(() => {
    if (preselected) setFormData(f => ({ ...f, serviceType: preselected }));
  }, [preselected]);

  // Group services by category for the dropdown
  const grouped = CATEGORY_ORDER.reduce((acc, cat) => {
    const items = servicesData.filter(s => s.category === cat);
    if (items.length) acc[cat] = items;
    return acc;
  }, {});

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      console.log(`Submitting service request to: ${API_URL}/service-request`);
      const res = await axios.post(`${API_URL}/service-request`, {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        address: formData.address.trim(),
        serviceType: formData.serviceType,
        description: formData.description.trim(),
        preferredTime: formData.preferredTime,
      });

      if (res.status === 201 || res.status === 200) {
        setSubmitted(true);
        console.log('Submission successful');
        setFormData({ name: '', phone: '', address: '', serviceType: '', description: '', preferredTime: '' });
      }
    } catch (err) {
      console.error('Submission error:', err);
      const msg = err?.response?.data?.message || err?.response?.data?.error || '';
      setError(msg || 'Failed to submit. Please try again or call us directly at +91 94483 05184.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 flex items-center justify-center px-4 pt-16">
        <div className="bg-white rounded-3xl p-10 shadow-xl border border-gray-100 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
            <CheckCircle2 className="h-9 w-9 text-emerald-500" />
          </div>
          <h2 className="text-2xl font-extrabold text-sagar-blue mb-3">Request Submitted!</h2>
          <p className="text-gray-500 mb-6">Our team will call you shortly to confirm your appointment. Thank you for choosing Sagar Electricals.</p>
          <div className="flex flex-col gap-3">
            <Link to="/services" className="block w-full py-3 bg-sagar-blue text-white rounded-xl font-bold hover:bg-gray-900 transition-colors">
              Browse Services
            </Link>
            <button onClick={() => setSubmitted(false)}
              className="block w-full py-3 border-2 border-gray-200 text-gray-600 rounded-xl font-bold hover:border-sagar-blue hover:text-sagar-blue transition-colors">
              Submit Another Request
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-slate-100 pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">

        <Link to="/services" className="inline-flex items-center gap-1.5 text-gray-500 hover:text-sagar-blue text-sm font-medium mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to Services
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sagar-blue/10 text-sagar-blue text-sm font-semibold mb-3">
            <Zap className="h-4 w-4 text-sagar-yellow" /> Fast Response Guaranteed
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-2 tracking-tight">Request a Service</h1>
          <p className="text-gray-500">Fill out the form and our team will confirm your appointment promptly.</p>
        </div>

        <div className="bg-white rounded-3xl p-7 md:p-10 shadow-xl border border-white">

          {error && (
            <div className="flex items-start gap-3 p-4 rounded-xl mb-5 bg-red-50 text-red-800 border border-red-200 text-sm font-medium">
              <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Full Name *</label>
                <input required type="text" name="name" value={formData.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                  placeholder="Your full name" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Phone Number *</label>
                <input required type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Service Address *</label>
              <input required type="text" name="address" value={formData.address} onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                placeholder="House No, Street, Landmark, City" />
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Type of Service *</label>
                <select required name="serviceType" value={formData.serviceType} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm">
                  <option value="" disabled>Select a service</option>
                  {Object.entries(grouped).map(([cat, items]) => (
                    <optgroup key={cat} label={`── ${cat} ──`}>
                      {items.map(s => (
                        <option key={s.title} value={s.title}>{s.title}</option>
                      ))}
                    </optgroup>
                  ))}
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700">Preferred Time *</label>
                <select required name="preferredTime" value={formData.preferredTime} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm">
                  <option value="" disabled>Select preferred time</option>
                  <option value="As soon as possible (Emergency)">As soon as possible (Emergency)</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM – 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM – 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM – 8 PM)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-bold text-gray-700">Problem Description *</label>
              <textarea required name="description" value={formData.description} onChange={handleChange} rows="4"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm resize-none"
                placeholder="Describe the issue in detail — e.g. transformer making noise, oil leaking..." />
            </div>

            <button type="submit" disabled={loading}
              className="w-full bg-sagar-blue text-white hover:bg-gray-900 disabled:bg-gray-400 py-4 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg">
              {loading
                ? <><Loader2 className="animate-spin h-5 w-5" /> Submitting...</>
                : 'Submit Service Request'}
            </button>

            <p className="text-center text-xs text-gray-400">
              Or call us directly at{' '}
              <a href="tel:+919448305184" className="font-bold text-sagar-blue hover:text-sagar-yellow">+91 94483 05184</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceRequest;
