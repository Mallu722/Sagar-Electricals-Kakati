import React, { useState, useEffect, useCallback } from 'react';
import { Home, Settings, Fan, Box, ShieldAlert, Wrench, Zap, Loader2, X, CheckCircle2, AlertCircle, User, Phone, MapPin, Clock, FileText } from 'lucide-react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const iconMap = {
  Home: <Home className="h-7 w-7" />,
  Settings: <Settings className="h-7 w-7" />,
  Fan: <Fan className="h-7 w-7" />,
  Box: <Box className="h-7 w-7" />,
  ShieldAlert: <ShieldAlert className="h-7 w-7" />,
  Wrench: <Wrench className="h-7 w-7" />,
  Zap: <Zap className="h-7 w-7" />,
};

const categoryMeta = {
  Residential: { label: 'Residential', color: 'from-blue-500 to-blue-700', badge: 'bg-blue-100 text-blue-800' },
  Transformer: { label: 'Transformer', color: 'from-amber-500 to-orange-600', badge: 'bg-amber-100 text-amber-800' },
  Testing: { label: 'Testing & Diagnostics', color: 'from-purple-500 to-purple-700', badge: 'bg-purple-100 text-purple-800' },
  Industrial: { label: 'Industrial', color: 'from-emerald-500 to-teal-700', badge: 'bg-emerald-100 text-emerald-800' },
};

const CATEGORY_ORDER = ['Residential', 'Transformer', 'Testing', 'Industrial'];

const fallbackServices = [
  { _id: '1', title: 'House Wiring & Installation', description: 'Safe and compliant residential wiring services.', iconName: 'Home', category: 'Residential' },
  { _id: '2', title: 'Switchboard Repair', description: 'Fixing sparking outlets, old switchboards, and failing switches.', iconName: 'Box', category: 'Residential' },
  { _id: '3', title: 'Emergency Electrical Repair', description: '24/7 emergency dispatch for power outages and hazards.', iconName: 'ShieldAlert', category: 'Residential' },
  { _id: '4', title: 'Transformer Repair & Services', description: 'Expert repair for all types of electrical transformers.', iconName: 'Wrench', category: 'Transformer' },
  { _id: '5', title: 'Power Transformer Repair & Services', description: 'Servicing for high-capacity power transformers.', iconName: 'Zap', category: 'Transformer' },
  { _id: '6', title: 'Distribution Transformer Repair & Services', description: 'Repair and overhaul of distribution transformers.', iconName: 'Zap', category: 'Transformer' },
  { _id: '7', title: 'Intank OLTC Distribution Transformer Repair', description: 'Specialized repair of On-Load Tap Changer transformers.', iconName: 'Settings', category: 'Transformer' },
  { _id: '8', title: 'High Voltage Cable Testing Services', description: 'Advanced testing for high voltage cables.', iconName: 'Zap', category: 'Testing' },
  { _id: '9', title: 'Transformer Cable Testing Services', description: 'Comprehensive testing of transformer cables.', iconName: 'ShieldAlert', category: 'Testing' },
  { _id: '10', title: 'Industrial Oil Filtration Services', description: 'Industrial oil filtration to extend transformer oil life.', iconName: 'Fan', category: 'Industrial' },
];

// ── Booking Modal ──────────────────────────────────────────────────────────────
const BookingModal = ({ service, onClose }) => {
  const meta = categoryMeta[service.category] || categoryMeta.Industrial;
  const [form, setForm] = useState({
    name: '', phone: '', address: '', description: '', preferredTime: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });
    try {
      await axios.post(`${API_URL}/service-request`, {
        ...form,
        serviceType: service.title,
      });
      setStatus({ type: 'success', message: 'Booking confirmed! We\'ll call you shortly to schedule.' });
      setForm({ name: '', phone: '', address: '', description: '', preferredTime: '' });
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or call us directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto">

        {/* Header */}
        <div className={`bg-gradient-to-r ${meta.color} p-6 rounded-t-3xl text-white`}>
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
              {iconMap[service.iconName] || <Zap className="h-5 w-5" />}
            </div>
            <span className="text-sm font-semibold opacity-80">{meta.label}</span>
          </div>
          <h2 className="text-xl font-extrabold leading-snug">{service.title}</h2>
          <p className="text-sm opacity-75 mt-1">{service.description}</p>
        </div>

        {/* Form */}
        <div className="p-6">
          {status.message && (
            <div className={`flex items-start gap-3 p-4 rounded-xl mb-5 text-sm font-medium ${
              status.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
            }`}>
              {status.type === 'success' ? <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" /> : <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />}
              {status.message}
            </div>
          )}

          {status.type !== 'success' && (
            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                  <User className="h-4 w-4 text-gray-400" /> Full Name *
                </label>
                <input required type="text" name="name" value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                  placeholder="e.g. Ramesh Kumar" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                  <Phone className="h-4 w-4 text-gray-400" /> Phone Number *
                </label>
                <input required type="tel" name="phone" value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                  placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                  <MapPin className="h-4 w-4 text-gray-400" /> Location / Address *
                </label>
                <input required type="text" name="address" value={form.address} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm"
                  placeholder="House No, Street, Landmark, City" />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                  <FileText className="h-4 w-4 text-gray-400" /> Describe the Work *
                </label>
                <textarea required name="description" value={form.description} onChange={handleChange} rows="3"
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm resize-none"
                  placeholder="e.g. Transformer making noise, needs inspection and repair..." />
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-gray-700 flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gray-400" /> Preferred Time *
                </label>
                <select required name="preferredTime" value={form.preferredTime} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-sagar-yellow focus:ring-2 focus:ring-sagar-yellow/20 outline-none transition-all text-sm">
                  <option value="" disabled>Select a time slot</option>
                  <option value="As soon as possible (Emergency)">As soon as possible (Emergency)</option>
                  <option value="Morning (8 AM - 12 PM)">Morning (8 AM – 12 PM)</option>
                  <option value="Afternoon (12 PM - 4 PM)">Afternoon (12 PM – 4 PM)</option>
                  <option value="Evening (4 PM - 8 PM)">Evening (4 PM – 8 PM)</option>
                </select>
              </div>

              {/* Selected service (read-only display) */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 flex items-center gap-3">
                <Zap className="h-4 w-4 text-sagar-yellow shrink-0" />
                <div>
                  <p className="text-xs text-gray-400 font-medium">Selected Service</p>
                  <p className="text-sm font-bold text-sagar-blue">{service.title}</p>
                </div>
              </div>

              <button type="submit" disabled={loading}
                className={`w-full py-3.5 rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r ${meta.color} text-white hover:opacity-90 disabled:opacity-60`}>
                {loading ? <><Loader2 className="animate-spin h-5 w-5" /> Booking...</> : 'Confirm Booking'}
              </button>

              <p className="text-center text-xs text-gray-400">
                Or call us directly at <a href="tel:+919448305184" className="font-bold text-sagar-blue hover:text-sagar-yellow">+91 94483 05184</a>
              </p>
            </form>
          )}

          {status.type === 'success' && (
            <div className="text-center py-4">
              <button onClick={onClose} className="mt-2 px-6 py-2.5 bg-sagar-blue text-white rounded-xl font-bold text-sm hover:bg-gray-900 transition-colors">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// ── Service Card ───────────────────────────────────────────────────────────────
const ServiceCard = ({ service, onBook }) => {
  const meta = categoryMeta[service.category] || categoryMeta.Industrial;
  return (
    <div className="group relative bg-white/70 backdrop-blur-md border border-white/80 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
      <div className={`absolute inset-0 bg-gradient-to-br ${meta.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
      <div className="absolute -top-8 -right-8 w-24 h-24 bg-sagar-yellow opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>

      <div className={`w-14 h-14 bg-gradient-to-br ${meta.color} text-white rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        {iconMap[service.iconName] || <Zap className="h-7 w-7" />}
      </div>

      <span className={`inline-block text-xs font-bold px-2 py-0.5 rounded-full mb-3 w-fit ${meta.badge}`}>
        {meta.label}
      </span>

      <h3 className="text-lg font-bold text-sagar-blue mb-2 leading-snug">{service.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.description}</p>

      <button
        onClick={() => onBook(service)}
        className={`mt-5 w-full py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${meta.color} text-white hover:opacity-90 transition-all shadow-md hover:shadow-lg`}
      >
        Book Now
      </button>
    </div>
  );
};

// ── Main Services Page ─────────────────────────────────────────────────────────
const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/services`)
      .then(res => setServices(res.data))
      .catch(() => setServices(fallbackServices))
      .finally(() => setLoading(false));
  }, []);

  const handleBook = useCallback((service) => setSelectedService(service), []);
  const handleClose = useCallback(() => setSelectedService(null), []);

  const categories = ['All', ...CATEGORY_ORDER.filter(c => services.some(s => s.category === c))];
  const filtered = activeCategory === 'All' ? services : services.filter(s => s.category === activeCategory);

  return (
    <div id="services" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sagar-blue/10 text-sagar-blue text-sm font-semibold mb-4">
            <Zap className="h-4 w-4 text-sagar-yellow" /> Industrial & Residential Expertise
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-4 tracking-tight">Our Services</h1>
          <p className="text-lg text-gray-500 leading-relaxed">
            From residential wiring to high-voltage transformer repair — click <span className="font-semibold text-sagar-blue">Book Now</span> on any service to get started.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-sagar-blue text-white border-sagar-blue shadow-lg'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-sagar-blue hover:text-sagar-blue'
              }`}>
              {cat === 'All' ? 'All Services' : categoryMeta[cat]?.label || cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {loading ? (
          <div className="flex justify-center items-center py-24">
            <Loader2 className="h-10 w-10 animate-spin text-sagar-blue" />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(service => (
              <ServiceCard key={service._id} service={service} onBook={handleBook} />
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 bg-sagar-blue rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-sagar-yellow rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl"></div>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need a specialized industrial service?</h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">Our certified engineers handle transformer repairs, high-voltage testing, and oil filtration across Karnataka.</p>
            <a href="#request-service" className="inline-block bg-sagar-yellow text-sagar-blue px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg">
              Request a Service
            </a>
          </div>
        </div>

      </div>

      {/* Booking Modal */}
      {selectedService && <BookingModal service={selectedService} onClose={handleClose} />}
    </div>
  );
};

export default Services;
