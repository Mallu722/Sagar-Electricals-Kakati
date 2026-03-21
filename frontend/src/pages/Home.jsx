import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Wrench, CheckCircle, Smartphone, MapPin, ExternalLink, FileText, Download, Activity, Clock, Settings, Shield, ThumbsUp, Star, Quote, QrCode } from 'lucide-react';
import ShowcaseScanner from '../components/ShowcaseScanner';

const Home = () => {
  return (
    <div id="home" className="flex flex-col">

      {/* Hero — full-bleed, FoGo-style layout */}
      <section className="relative w-full h-screen min-h-[600px] overflow-hidden text-white">

        {/* Background image — full bleed */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Dark scrim — stronger at bottom for text legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

        {/* Bottom content row — title left, description right (like FoGo) */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-6 sm:px-10 lg:px-16 pb-12 lg:pb-16">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Big headline — bottom left */}
            <div className="lg:max-w-[55%]">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.1] sm:leading-[1.0] tracking-tight">
                Industrial<br />
                <span className="text-sagar-yellow">Transformer</span><br />
                Electrical Services
              </h1>
            </div>

            {/* Description + CTA — bottom right */}
            <div className="lg:max-w-[38%] space-y-5">
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                Specialized transformer repair, high-voltage cable testing, and industrial oil filtration services —
                Sagar Electricals delivers certified, safe solutions for power infrastructure.{' '}
                <span className="font-bold text-white">Available 24/7 across all over India.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/request"
                  className="px-6 py-3 bg-sagar-yellow text-sagar-blue font-bold rounded-full text-sm hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl text-center">
                  Request Service
                </Link>
                <a href="tel:+917829759202"
                  className="px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full text-sm hover:bg-white/20 transition-all text-center">
                  📞 +91 78297 59202
                </a>
              </div>
              {/* Trust pills */}
              <div className="flex flex-wrap gap-2">
                {['5.0 ⭐ Rated', '24/7 Emergency', 'Certified Engineers'].map(b => (
                  <span key={b} className="px-3 py-1 bg-black/30 backdrop-blur-sm border border-white/15 rounded-full text-xs font-medium text-gray-300">
                    {b}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Industrial Expertise Banner */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-white text-sm font-semibold">
            {['Transformer Repair', 'High Voltage Cable Testing', 'Oil Filtration', 'OLTC Services', 'Distribution Transformers'].map((s, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <Zap className="h-3.5 w-3.5" fill="currentColor" /> {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-bold text-sagar-yellow tracking-widest uppercase mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue">Specialized Industrial Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Certified expertise across transformer systems, high-voltage infrastructure, and industrial electrical maintenance.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="h-7 w-7" />,
                title: 'Transformer Services',
                desc: 'Power, distribution, CSP, water-cooled, and OLTC transformer repair by certified engineers.',
                color: 'from-amber-500 to-orange-500',
                link: '/services'
              },
              {
                icon: <Activity className="h-7 w-7" />,
                title: 'High Voltage Testing',
                desc: 'Cable testing, insulation diagnostics, and fault detection for industrial-grade infrastructure.',
                color: 'from-purple-500 to-purple-700',
                link: '/services'
              },
              {
                icon: <Wrench className="h-7 w-7" />,
                title: 'Industrial Maintenance',
                desc: 'Oil filtration, electrical maintenance, and preventative care for commercial properties.',
                color: 'from-emerald-500 to-teal-700',
                link: '/services'
              },
            ].map((s, i) => (
              <div key={i} className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} text-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-sagar-blue mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link to={s.link} className="text-sagar-blue font-semibold text-sm hover:text-sagar-yellow transition-colors inline-flex items-center gap-1">
                  View Services &rarr;
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 font-bold text-sagar-blue border-b-2 border-sagar-yellow hover:text-sagar-yellow transition-colors pb-1">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-bold text-sagar-yellow tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-5">Expertise You Can Trust,<br />Service You Deserve</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              At Sagar Electricals, we specialize in industrial-grade electrical infrastructure. Our 5.0 ⭐ rating reflects our commitment to safety, quality, and technical excellence in transformer and high-voltage systems.
            </p>
            <div className="space-y-3">
              {[
                { icon: <ShieldCheck className="h-5 w-5 text-sagar-yellow" />, text: 'Licensed & Certified Engineers' },
                { icon: <Clock className="h-5 w-5 text-sagar-yellow" />, text: '24/7 Emergency Availability' },
                { icon: <Wrench className="h-5 w-5 text-sagar-yellow" />, text: 'Industrial Transformer Specialists' },
                { icon: <CheckCircle className="h-5 w-5 text-sagar-yellow" />, text: '100% Satisfaction Guarantee' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-50">
                  {item.icon}
                  <span className="font-semibold text-sagar-blue">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-sagar-blue rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden h-[540px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Zap className="w-56 h-56 text-sagar-yellow" /></div>
            
            {/* Stats Grid */}
            <div className="relative z-10 grid grid-cols-2 gap-3">
              {[
                { label: 'Transformer Repairs', val: '200+' },
                { label: 'HV Cable Tests', val: '150+' },
                { label: 'Homes Wired', val: '300+' },
                { label: 'Years Active', val: '10+' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 text-center">
                  <div className="text-2xl font-extrabold text-sagar-yellow">{stat.val}</div>
                  <div className="text-xs text-gray-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Certification Badge Mini */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-lg p-1 shrink-0 overflow-hidden">
                <img src="/assets/iso_certification.png" alt="ISO Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="text-sagar-yellow font-bold text-sm">ISO 9001:2015 Certified</p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-gray-300 uppercase tracking-wider font-semibold">Quality Management System</p>
                  <a href="/assets/iso_certification_official.pdf" target="_blank" rel="noopener noreferrer" className="p-1 hover:text-sagar-yellow transition-colors" title="View PDF">
                    <FileText className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
              <div className="flex gap-1 text-sagar-yellow mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <p className="text-base font-medium italic mb-3 text-gray-100">"Sagar Electricals handled our industrial transformer repair with exceptional professionalism."</p>
              <p className="font-bold text-sm text-gray-300">– Mallikarjun Hiremath</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certification Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Certification Text */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-amber-100">
                <ShieldCheck className="h-4 w-4" /> Quality Assured
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-6">
                ISO 9001:2015 <span className="text-sagar-yellow">Certified</span> & Govt. Class-I Contractor
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                <strong>M/s Sagar Electricals</strong> is a Government Class-I Electrical Contractor, officially certified by <strong>Optimum Certifications Inc.</strong> for meeting the stringent requirements of the <strong>ISO 9001:2015</strong> Quality Management System.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 border-l-4 border-sagar-yellow p-6 rounded-r-2xl">
                  <h4 className="font-bold text-sagar-blue mb-2 uppercase text-sm tracking-widest">Scope of Activities</h4>
                  <p className="text-gray-600 text-sm leading-relaxed italic">
                    "Processing, manufacturing, service and supply transformers repair, oil filtration, dehydration, testing servicing, supply & calibration of sub station power equipments (Air Circuit Breaks, Cabs, Relays & Earthpits)"
                  </p>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-sagar-light rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Certificate Number</p>
                    <p className="font-bold text-sagar-blue">Q-0303263405</p>
                  </div>
                  <div className="p-4 bg-sagar-light rounded-xl border border-gray-100">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Verify At</p>
                    <a href="https://www.ocicert.in" target="_blank" rel="noopener noreferrer" className="font-bold text-sagar-blue hover:text-sagar-yellow transition-colors underline">www.ocicert.in</a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-6 bg-sagar-blue rounded-2xl text-white shadow-xl flex flex-col sm:flex-row items-center gap-6">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                  <ShieldCheck className="h-10 w-10 text-sagar-yellow" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-1">Government Class-I Electrical Contractor</h4>
                  <p className="text-gray-300 text-sm mb-4">Registered Office: 1305, Kakati, Belagavi, Karnataka-591113. We maintain the highest standards for critical electrical infrastructure.</p>
                  <a 
                    href="/assets/iso_certification_official.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-all border border-white/10"
                  >
                    <Download className="h-4 w-4 text-sagar-yellow" /> Download Official PDF Certificate
                  </a>
                </div>
              </div>
            </div>

            {/* Certification Image Container */}
            <div className="order-1 lg:order-2 relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-sagar-yellow/20 to-transparent rounded-[2.5rem] blur-2xl" />
              <div className="relative bg-white rounded-[2rem] shadow-2xl border-8 border-gray-50 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 group">
                {/* Real Certificate Image Link */}
                <img 
                  src="/assets/iso_certification.png" 
                  alt="ISO 9001:2015 Certification - Sagar Electricals" 
                  className="w-full h-auto"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-sagar-blue/0 group-hover:bg-sagar-blue/5 transition-colors duration-500" />
                
                {/* Official Stamp Decoration */}
                <div className="absolute bottom-10 right-10 w-24 h-24 opacity-80 pointer-events-none transform -rotate-12 group-hover:rotate-0 transition-transform duration-700">
                  <div className="w-full h-full border-4 border-red-600 rounded-full flex items-center justify-center text-center p-2">
                    <span className="text-[10px] font-black text-red-600 leading-tight uppercase tracking-tighter">Certified<br/>ISO 9001:2015<br/>Quality System</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-bold text-sagar-yellow tracking-widest uppercase mb-2">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue">About Sagar Electricals</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Your trusted partner in safe, reliable, and professional electrical services in Belagavi.</p>
          </div>

          <div className="bg-sagar-light rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sagar-yellow opacity-10 rounded-bl-full" />
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-sagar-blue mb-4 flex items-center gap-2">
                  <Wrench className="text-sagar-yellow" /> Our Story
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded with a mission to bring top-tier electrical services to the residents and businesses of Belagavi, <strong>Sagar Electricals</strong> has grown into a trusted name known for reliability and excellence.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  From transformer repairs to high-voltage cable testing, our certified team handles every job with unwavering commitment to safety and quality standards.
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
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group border-4 border-white">
                  <img 
                    src="/assets/sagar_crane_maintenance.jpg" 
                    alt="Sagar Electricals Field Work" 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-bold flex items-center gap-2">
                       <ShieldCheck className="text-sagar-yellow h-4 w-4" /> Professional Field Maintenance & Installation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QR Code Showcase */}
      <ShowcaseScanner />

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="flex gap-1 text-sagar-yellow bg-blue-50 px-4 py-2 rounded-full">
                {[1,2,3,4,5].map(i => <Star key={i} className="fill-current w-5 h-5" />)}
              </div>
            </div>
            <p className="text-sm font-bold text-sagar-yellow tracking-widest uppercase mb-2">Reviews</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue">Customer Reviews</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Don't just take our word for it — see what our customers say about our 5.0 ⭐ service.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: 'Mallikarjun Hiremath', date: '2 months ago', text: 'Sagar Electricals provides reliable and professional electrical services. Their team arrived on time and fixed our switchboard issue cleanly.' },
              { name: 'Akshay A',             date: '3 weeks ago',  text: 'Good and timely services. Highly recommended for any emergency electrical work in Belagavi.' },
              { name: 'Priya S',              date: '1 month ago',  text: 'Very professional and knowledgeable electricians. They rewired our entire office with minimal disruption.' },
              { name: 'Ramesh Kumar',         date: '4 months ago', text: 'Affordable and transparent pricing. I called them at 2 AM for a power outage and they were here within 30 minutes! Truly 24/7 service.' },
            ].map((r, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-blue-100 fill-current" />
                <div className="flex gap-1 text-sagar-yellow mb-4">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="text-gray-700 italic mb-6">"{r.text}"</p>
                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 bg-sagar-blue text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-sagar-blue text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
