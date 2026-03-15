import React from 'react';
import { Zap, ShieldCheck, Clock, CheckCircle } from 'lucide-react';

const Home = () => {
  return (
    <div id="home" className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-sagar-blue text-white py-24 lg:py-36 overflow-hidden">
        
        {/* Company Photo Background Image */}
        <div 
          className="absolute inset-0 z-0 opacity-20"
          style={{ 
            backgroundImage: `url('/hero-bg.jpg')`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        <div className="absolute inset-0 opacity-20 pointer-events-none z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-sagar-yellow rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="md:w-2/3 backdrop-blur-sm bg-sagar-blue/30 p-8 rounded-3xl border border-white/10 shadow-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/70 text-sagar-yellow mb-6 border border-sagar-yellow/50 text-sm font-medium">
              <Zap className="h-4 w-4" /> Leading Electrical Services in Belagavi
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Reliable Electrical Solutions <br className="hidden md:block" />
              <span className="text-sagar-yellow">– 24/7 Service</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
              Professional, trustworthy, and prompt electrical installation and repair services for your home and business. We bring expertise to every connection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#request-service" className="px-8 py-4 bg-sagar-yellow text-sagar-blue hover:bg-yellow-400 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                Request Service
              </a>
              <a href="tel:+919448305184" className="px-8 py-4 border-2 border-white hover:border-sagar-yellow hover:text-sagar-yellow text-white text-lg font-bold rounded-lg transition-all flex items-center justify-center gap-2">
                Call Now (+91 94483 05184)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-sagar-yellow tracking-wider uppercase mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-sagar-blue">Our Premium Services</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "House Wiring", desc: "Complete residential wiring and rewiring with top-grade safety standards." },
              { title: "Switchboard Repair", desc: "Fixing faulty switches, sockets, and complex switchboard assemblies." },
              { title: "Emergency Repair", desc: "24/7 rapid response for critical electrical failures and hazards." },
            ].map((service, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="w-14 h-14 bg-blue-50 text-sagar-blue rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform group-hover:bg-sagar-yellow">
                  <Zap className="h-7 w-7" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.desc}</p>
                <a href="#services" className="text-sagar-blue font-semibold hover:text-sagar-yellow inline-flex items-center gap-1">
                  Learn more &rarr;
                </a>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="#services" className="inline-flex items-center gap-2 font-bold text-sagar-blue border-b-2 border-sagar-yellow hover:text-sagar-yellow transition-colors pb-1">
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-sagar-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-bold text-sagar-yellow tracking-wider uppercase mb-2">Why Choose Us</h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-6">Expertise You Can Trust,<br/>Service You Deserve</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              At Sagar Electricals, we don't just fix wires; we ensure the safety and peace of mind of our customers. Our track record of 5.0 ⭐ ratings proves our dedication to quality.
            </p>

            <div className="space-y-4">
              {[
                { icon: <ShieldCheck className="h-6 w-6 text-sagar-yellow"/>, text: "Licensed & Experienced Electricians" },
                { icon: <Clock className="h-6 w-6 text-sagar-yellow"/>, text: "24/7 Emergency Availability" },
                { icon: <CheckCircle className="h-6 w-6 text-sagar-yellow"/>, text: "100% Satisfaction Guarantee" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm">
                  {item.icon}
                  <span className="font-semibold text-sagar-blue text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-gray-100 rounded-3xl -z-10"></div>
             {/* Using a placeholder-like premium aesthetic block instead of image since we don't have assets */}
             <div className="bg-sagar-blue rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden h-[500px] flex flex-col justify-end">
                <div className="absolute top-0 right-0 p-8 opacity-20"><Zap className="w-64 h-64 text-sagar-yellow"/></div>
                <div className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                  <div className="flex gap-1 text-sagar-yellow mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
                  <p className="text-lg font-medium italic mb-4">"Sagar Electricals provides reliable and professional electrical services."</p>
                  <p className="font-bold text-sm text-gray-300">– Mallikarjun Hiremath</p>
                </div>
             </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
