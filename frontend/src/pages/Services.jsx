import React from 'react';
import { Home, Settings, Fan, Box, ShieldAlert, Wrench, Zap } from 'lucide-react';

const Services = () => {
  const serviceList = [
    { id: 1, title: 'House Wiring', desc: 'Secure, code-compliant residential wiring, rewiring, and circuit planning for entire homes.', icon: <Home className="h-8 w-8"/> },
    { id: 2, title: 'Electrical Installation', desc: 'Expert installation of appliances, panels, breakers, and new power outlets.', icon: <Settings className="h-8 w-8"/> },
    { id: 3, title: 'Fan & Light Installation', desc: 'Ceiling fans, chandeliers, recessed lighting, and outdoor landscape lighting.', icon: <Fan className="h-8 w-8"/> },
    { id: 4, title: 'Switchboard Repair', desc: 'Troubleshooting and fixing sparking outlets, old switchboards, and failing switches.', icon: <Box className="h-8 w-8"/> },
    { id: 5, title: 'Electrical Maintenance', desc: 'Routine check-ups, panel upgrades, and preventative maintenance for commercial properties.', icon: <Wrench className="h-8 w-8"/> },
    { id: 6, title: 'Emergency Repair', desc: '24/7 emergency dispatch for power outages, electrical fires, and hazard mitigations.', icon: <ShieldAlert className="h-8 w-8"/> },
  ];

  return (
    <div id="services" className="py-20 bg-sagar-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-full mb-6 text-sagar-blue">
            <Zap className="h-8 w-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-6 tracking-tight">
            Our Services
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            From minor fixes to major installations, our expert electricians are equipped to handle any challenge safely and efficiently.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative group overflow-hidden">
              <div className="w-16 h-16 bg-blue-50 text-sagar-blue rounded-xl flex items-center justify-center mb-6 group-hover:bg-sagar-yellow transition-colors relative z-10">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-sagar-blue mb-3 relative z-10">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed relative z-10">{service.desc}</p>
              
              {/* Decorative background element on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sagar-yellow opacity-0 group-hover:opacity-10 rounded-full transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Services;
