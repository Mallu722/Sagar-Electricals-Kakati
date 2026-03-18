import React from 'react';
import { Zap, ShieldCheck, Clock, CheckCircle, Wrench, Settings, Activity } from 'lucide-react';

const Home = () => {
  return (
    <div id="home" className="flex flex-col">

      {/* Hero Section */}
      <section className="relative bg-sagar-blue text-white py-28 lg:py-40 overflow-hidden">
        <div
          className="absolute inset-0 z-0 opacity-25"
          style={{ backgroundImage: `url('/hero-bg.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        ></div>
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-sagar-blue via-sagar-blue/90 to-blue-900 z-0"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sagar-yellow opacity-5 rounded-full filter blur-[120px] z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 opacity-10 rounded-full filter blur-[100px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sagar-yellow/20 text-sagar-yellow mb-6 border border-sagar-yellow/40 text-sm font-semibold">
              <Zap className="h-4 w-4" fill="currentColor" /> Trusted Electrical Experts in Belagavi
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
              Industrial &amp; <br />
              <span className="text-sagar-yellow">Residential</span><br />
              Electrical Services
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-4 max-w-2xl leading-relaxed">
              From transformer repair and high-voltage cable testing to home wiring — Sagar Electricals delivers certified, safe, and prompt solutions 24/7.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 mb-10">
              {['5.0 ⭐ Rated', '24/7 Emergency', 'Certified Engineers', 'Pan-Karnataka Service'].map(badge => (
                <span key={badge} className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-gray-200">
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#request-service" className="px-8 py-4 bg-sagar-yellow text-sagar-blue hover:bg-yellow-400 text-lg font-bold rounded-xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 text-center">
                Request Service
              </a>
              <a href="tel:+919448305184" className="px-8 py-4 border-2 border-white/40 hover:border-sagar-yellow hover:text-sagar-yellow text-white text-lg font-bold rounded-xl transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                📞 +91 94483 05184
              </a>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-8 right-8 hidden lg:flex gap-4 z-10">
          {[{ val: '500+', label: 'Projects Done' }, { val: '10+', label: 'Years Experience' }, { val: '5.0★', label: 'Google Rating' }].map(stat => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-5 py-3 text-center">
              <div className="text-2xl font-extrabold text-sagar-yellow">{stat.val}</div>
              <div className="text-xs text-gray-300 font-medium">{stat.label}</div>
            </div>
          ))}
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
            <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue">Specialized Industrial &amp; Home Services</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Certified expertise across transformer systems, high-voltage infrastructure, and residential electrical work.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Settings className="h-7 w-7" />,
                title: 'Transformer Services',
                desc: 'Power, distribution, CSP, water-cooled, and OLTC transformer repair by certified engineers.',
                color: 'from-amber-500 to-orange-500',
                link: '#services'
              },
              {
                icon: <Activity className="h-7 w-7" />,
                title: 'High Voltage Testing',
                desc: 'Cable testing, insulation diagnostics, and fault detection for industrial-grade infrastructure.',
                color: 'from-purple-500 to-purple-700',
                link: '#services'
              },
              {
                icon: <Zap className="h-7 w-7" />,
                title: 'Residential Wiring',
                desc: 'Complete home wiring, switchboard repair, fan installation, and 24/7 emergency response.',
                color: 'from-blue-500 to-blue-700',
                link: '#services'
              },
            ].map((s, i) => (
              <div key={i} className="group bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className={`w-14 h-14 bg-gradient-to-br ${s.color} text-white rounded-xl flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform`}>
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-sagar-blue mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                <a href={s.link} className="text-sagar-blue font-semibold text-sm hover:text-sagar-yellow transition-colors inline-flex items-center gap-1">
                  View Services &rarr;
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#services" className="inline-flex items-center gap-2 font-bold text-sagar-blue border-b-2 border-sagar-yellow hover:text-sagar-yellow transition-colors pb-1">
              View All Services
            </a>
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
              At Sagar Electricals, we combine industrial-grade expertise with residential care. Our 5.0 ⭐ rating reflects our commitment to safety, quality, and customer satisfaction.
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

          <div className="bg-sagar-blue rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden h-[460px] flex flex-col justify-end">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Zap className="w-56 h-56 text-sagar-yellow" /></div>
            <div className="absolute top-8 left-8 right-8">
              <div className="grid grid-cols-2 gap-3">
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
            </div>
            <div className="relative z-10 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20">
              <div className="flex gap-1 text-sagar-yellow mb-2">⭐ ⭐ ⭐ ⭐ ⭐</div>
              <p className="text-base font-medium italic mb-3">"Sagar Electricals handled our industrial transformer repair with exceptional professionalism."</p>
              <p className="font-bold text-sm text-gray-300">– Mallikarjun Hiremath</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
