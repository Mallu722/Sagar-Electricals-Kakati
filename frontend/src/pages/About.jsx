import React from 'react';
import { Shield, Clock, ThumbsUp, Wrench, CheckCircle, ShieldCheck, Download } from 'lucide-react';

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

          {/* Facility & Workshop Section */}
        <div className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold text-sagar-yellow tracking-widest uppercase mb-2">Our Facility</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-4">State-of-the-Art Infrastructure</h2>
              <p className="text-gray-600">
                At our Kakati facility, we maintain modern equipment for precision testing, dehydration, and high-quality transformer manufacturing and repair.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg h-64 border-2 border-gray-100">
              <img src="/assets/sagar_test_bench.jpg" alt="Testing Bench" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <p className="text-white font-bold">Advanced Test Bench</p>
                  <p className="text-white/80 text-xs">Precision analysis for high-voltage components.</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg h-64 border-2 border-gray-100">
              <img src="/assets/sagar_transformer_windings.jpg" alt="Transformer Windings" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <p className="text-white font-bold">Transformer Internals</p>
                  <p className="text-white/80 text-xs">Expert winding and core restoration services.</p>
                </div>
              </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg h-64 border-2 border-gray-100">
              <img src="/assets/sagar_transformer_oven.jpg" alt="Dehydration Oven" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <div>
                  <p className="text-white font-bold">Industrial Dehydration Oven</p>
                  <p className="text-white/80 text-xs">Removing moisture for maximum insulation life.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Highlight */}
        <div className="bg-sagar-blue rounded-3xl p-8 md:p-12 text-white shadow-xl relative overflow-hidden mb-20 group">
          <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:rotate-12 transition-transform duration-700">
            <ShieldCheck className="w-64 h-64 text-sagar-yellow" />
          </div>
          <div className="relative z-10 grid lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-sagar-yellow rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
                <ShieldCheck className="h-4 w-4" /> ISO 9001:2015 Certified
              </div>
              <h2 className="text-3xl font-extrabold mb-6">Government Class-I Electrical Contractor</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                M/s Sagar Electricals is proud to be a **Government Class-I Electrical Contractor**, meeting the highest standards of safety and technical competence. Our **ISO 9001:2015** certification reflects our unwavering commitment to quality management and engineering excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/assets/iso_certification_official.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-sagar-yellow hover:bg-yellow-500 text-sagar-blue px-6 py-3 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2"
                >
                  <Download className="h-5 w-5" /> Download PDF Certificate
                </a>
                <div className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 font-bold text-sm flex items-center gap-2">
                  <span className="text-sagar-yellow">ID:</span> Q-0303263405
                </div>
              </div>
            </div>
            <div className="hidden lg:block shrink-0">
              <div className="bg-white p-2 rounded-2xl shadow-2xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 w-64 h-auto mx-auto overflow-hidden">
                <img 
                  src="/assets/iso_certification.png" 
                  alt="ISO Certificate" 
                  className="w-full h-auto rounded-xl object-contain"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
