import React from 'react';
import { Phone, MapPin, Clock, Zap } from 'lucide-react';

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
              <li>Transformer Repair & Services</li>
              <li>High Voltage Cable Testing</li>
              <li>Industrial Oil Filtration</li>
              <li>House Wiring & Installation</li>
              <li>Emergency Electrical Repair</li>
            </ul>
          </div>

          {/* Contact Col */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-sagar-yellow">Contact Us</h3>
            <ul className="text-gray-400 space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sagar-yellow flex-shrink-0 mt-0.5" />
                <a href="https://maps.google.com/?q=Sagar+Electricals+Plot+No.50+Siddeshwar+Nagar+Kakati" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">
                  Plot No.50, Siddeshwar Nagar, Kakati, Belagavi, Karnataka 591113
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-sagar-yellow flex-shrink-0" />
                <span>+91 94483 05184</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-sagar-yellow flex-shrink-0" />
                <span>Open 24 Hours</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sagar Electricals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
