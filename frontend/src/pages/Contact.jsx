import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="py-20 bg-sagar-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-4 tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We're here to help! Reach out to us for any electrical emergencies, queries, or to schedule a service.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <a 
              href="https://maps.app.goo.gl/YV2aGvp7Tj2u5tRy6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer block group"
            >
              <div className="w-12 h-12 bg-blue-50 text-sagar-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sagar-yellow group-hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sagar-blue text-lg mb-1 group-hover:text-sagar-yellow transition-colors">Our Location</h3>
                <p className="text-gray-600 text-sm">Plot No.50, Siddeshwar Nagar, <br />Kakati, Belagavi, <br />Karnataka 591113</p>
              </div>
            </a>

            <a href="tel:+919448305184" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4 hover:shadow-md transition-shadow group cursor-pointer block">
              <div className="w-12 h-12 bg-blue-50 text-sagar-blue rounded-xl flex items-center justify-center shrink-0 group-hover:bg-sagar-yellow group-hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sagar-blue text-lg mb-1 group-hover:text-sagar-yellow transition-colors">Phone Number</h3>
                <p className="text-gray-600 text-sm">+91 94483 05184</p>
                <p className="text-gray-400 text-xs mt-1">Available 24/7 for emergencies</p>
              </div>
            </a>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-50 text-sagar-blue rounded-xl flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-sagar-blue text-lg mb-1">Working Hours</h3>
                <p className="text-gray-600 text-sm">Open 24 Hours</p>
                <p className="text-gray-400 text-xs mt-1">Monday - Sunday</p>
              </div>
            </div>
          </div>

          {/* Map Embed - 2 Columns wide */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden min-h-[400px]">
            <iframe 
              src="https://maps.google.com/maps?q=Sagar%20Electricals%20Plot%20No.50%2C%20Siddeshwar%20Nagar%2C%20Kakati%2C%20Belagavi&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0, minHeight: '100%' }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Sagar Electricals Location"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
