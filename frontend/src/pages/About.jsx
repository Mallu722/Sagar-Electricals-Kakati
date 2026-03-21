import { Shield, Clock, ThumbsUp, Wrench, CheckCircle, ShieldCheck, Download, MapPin, Phone, Mail, Zap, Settings, User } from 'lucide-react';

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

        {/* Proprietor's Profile Section */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Owner Photo & Quick Info */}
            <div className="lg:col-span-4 space-y-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-sagar-yellow to-sagar-blue rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 min-h-[400px]">
                  <img 
                    src="/assets/owner.jpeg" 
                    alt="Anil N. Deshpande" 
                    className="w-full aspect-[4/5] object-cover"
                    onError={(e) => { 
                      e.target.onerror = null;
                      e.target.src = 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=400&h=500'; // Professional fallback
                    }}
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-sagar-blue/90 via-sagar-blue/40 to-transparent p-6 text-white">
                    <p className="font-bold text-xl">Anil N. Deshpande</p>
                    <p className="text-sagar-yellow text-sm font-semibold uppercase tracking-wider">Proprietor</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-sagar-light/50 backdrop-blur-sm rounded-2xl p-6 border border-sagar-blue/5">
                <h3 className="text-sagar-blue font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-sagar-yellow" /> Contact Details
                </h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 mt-1 shrink-0 text-gray-400" />
                    <span>Plot No. 50, Siddeshwar Nagar, Kakati, Belagavi 591113</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="h-4 w-4 shrink-0 text-gray-400" />
                    <span>9739284211 / 7829759202</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-4 w-4 shrink-0 text-gray-400" />
                    <span className="break-all">sagarelectricals1999@gmail.com</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Info & Workshop Photo */}
            <div className="lg:col-span-8 space-y-8">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-sagar-blue/5 text-sagar-blue rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-sagar-blue/10">
                  <ShieldCheck className="h-4 w-4 text-sagar-yellow" /> Govt. Class - I Electrical Contractor
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-sagar-blue mb-6">
                  Leadership & <span className="text-sagar-yellow">Experience</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Under the visionary leadership of <strong>Mr. Anil N. Deshpande</strong>, Sagar Electricals has established itself as a cornerstone of electrical engineering excellence in India. With decades of hands-on expertise, we provide specialized services that power industries and stabilize infrastructure.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-sagar-blue mb-3 flex items-center gap-2">
                      <Zap className="h-5 w-5 text-sagar-yellow" /> Specialized Services
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Transformer Repair & Testing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Oil Filtration & Dehydration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Substation Power Equipment
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Supply & Calibration
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-sagar-blue mb-3 flex items-center gap-2">
                      <Settings className="h-5 w-5 text-sagar-yellow" /> Infrastructure
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Air Circuit Breakers
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Industrial Cabling & Relays
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Precision Earthpits
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" /> Safety Audits & Certification
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Company Video/Photo Section */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group bg-black">
                <video 
                  controls 
                  className="w-full h-[400px] object-cover"
                  poster="/assets/sagar_crane_maintenance.jpg"
                >
                  <source src="/assets/company_video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute top-4 left-4 bg-sagar-blue/80 backdrop-blur-md text-white px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider border border-white/20">
                  <Zap className="inline-block h-4 w-4 mr-2 text-sagar-yellow" /> Our Workshop in Action
                </div>
              </div>
            </div>
          </div>
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
