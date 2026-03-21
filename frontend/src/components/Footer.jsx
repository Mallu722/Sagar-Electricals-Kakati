import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Zap, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-sagar-blue text-white pt-12 pb-6 border-t-[6px] border-sagar-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Col */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Zap className="h-8 w-8 text-sagar-yellow" fill="currentColor" />
              <span className="font-bold text-2xl tracking-tight">Sagar Electricals</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Reliable, professional, and 24/7 electrical services for your home and business. We bring light to your life when you need it most.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-sagar-yellow">Our Services</h3>
            <ul className="text-gray-400 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services/transformer-repair" className="hover:text-white transition-colors">Transformer Repair & Services</Link></li>
              <li><Link to="/services/high-voltage-cable-testing" className="hover:text-white transition-colors">High Voltage Cable Testing</Link></li>
              <li><Link to="/services/oil-filtration" className="hover:text-white transition-colors">Industrial Oil Filtration</Link></li>
              <li><Link to="/services/distribution-transformer" className="hover:text-white transition-colors">Distribution Transformer Repair</Link></li>
              <li><Link to="/services/electrical-maintenance" className="hover:text-white transition-colors">Electrical Maintenance</Link></li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-sagar-yellow">Contact Us</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sagar-yellow flex-shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Sagar+Electricals+Plot+No.50+Siddeshwar+Nagar+Kakati" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                  Plot No.50, Siddeshwar Nagar, Kakati, Belagavi, India 591113
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-sagar-yellow flex-shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+917829759202" className="hover:text-white transition-colors font-bold text-sagar-yellow">+91 78297 59202</a>
                  <a href="tel:+919739284211" className="hover:text-white transition-colors">+91 97392 84211</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-sagar-yellow flex-shrink-0" />
                <a href="mailto:sagarelectricals1999@gmail.com" className="hover:text-white transition-colors">
                  sagarelectricals1999@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-sagar-yellow flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sagar Electricals. All rights reserved.</p>
          <Link to="/dashboard" className="text-gray-600 hover:text-sagar-yellow transition-colors flex items-center gap-1.5 opacity-60 hover:opacity-100 italic">
            <Zap className="h-3.5 w-3.5" /> Admin Login
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
