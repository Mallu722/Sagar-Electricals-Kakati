import React from 'react';
import { Shield, Clock, ThumbsUp, Wrench, CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-sagar-blue mb-6 tracking-tight">
            About Sagar Electricals
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Your trusted partner in safe, reliable, and professional electrical services in Belagavi.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-sagar-light rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 mb-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sagar-yellow opacity-10 rounded-bl-full"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-sagar-blue mb-4 flex items-center gap-2">
                <Wrench className="text-sagar-yellow" /> Our Story
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Founded with a mission to bring top-tier electrical services to the residents and businesses of Belagavi, <strong>Sagar Electricals</strong> has grown into a trusted name known for reliability and excellence. 
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                From simple home wiring fixes to comprehensive commercial electrical installations, our team handles it all with unwavering commitment to safety protocols and quality standards.
              </p>
              <div className="flex gap-4">
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-sagar-blue border border-gray-100">
                  <span className="text-sagar-yellow text-xl">5.0</span> Google Rating
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm font-bold text-sagar-blue border border-gray-100">
                  <span className="text-sagar-yellow text-xl">24/7</span> Availability
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
               {[
                 { title: "Safety First", desc: "Adhering to strict safety codes.", icon: <Shield className="h-8 w-8 text-sagar-yellow"/> },
                 { title: "Fast Response", desc: "No delays. We arrive on time.", icon: <Clock className="h-8 w-8 text-sagar-yellow"/> },
                 { title: "Experienced", desc: "Master electricians.", icon: <ThumbsUp className="h-8 w-8 text-sagar-yellow"/> },
                 { title: "100% Guaranteed", desc: "We guarantee our labor.", icon: <CheckCircle className="h-8 w-8 text-sagar-yellow"/> }
               ].map((feature, idx) => (
                 <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-50 text-center hover:shadow-md transition-shadow">
                   <div className="mx-auto w-max mb-3 bg-blue-50 p-3 rounded-full">{feature.icon}</div>
                   <h3 className="font-bold text-sagar-blue mb-1">{feature.title}</h3>
                   <p className="text-xs text-gray-500">{feature.desc}</p>
                 </div>
               ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
