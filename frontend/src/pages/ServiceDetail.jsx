import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, BadgeCheck, IndianRupee, Phone, CheckCircle } from 'lucide-react';
import { servicesData, categoryMeta } from '../data/servicesData';

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = servicesData.find(s => s.slug === slug);

  if (!service) return <Navigate to="/services" replace />;

  const meta = categoryMeta[service.category];
  const related = servicesData.filter(s => s.category === service.category && s.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-16">

      {/* Hero image banner */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <img src={service.image} alt={service.title}
          className="w-full h-full object-cover"
          onError={e => { e.target.src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80'; }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 max-w-5xl mx-auto">
          <Link to="/services" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm font-medium mb-3 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-3 ${meta.badge}`}>
            {meta.label}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">{service.title}</h1>
          <p className="text-gray-300 mt-2 text-sm md:text-base max-w-2xl">{service.tagline}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left — description + pricing */}
          <div className="lg:col-span-2 space-y-8">

            {/* About */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-sagar-blue mb-3">About This Service</h2>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>

              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {[
                  { icon: <BadgeCheck className="h-5 w-5 text-emerald-500" />, text: 'Pay After Work' },
                  { icon: <CheckCircle className="h-5 w-5 text-blue-500" />, text: 'Certified Engineers' },
                  { icon: <Phone className="h-5 w-5 text-amber-500" />, text: '24/7 Available' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-xl px-3 py-2.5">
                    {item.icon}
                    <span className="text-sm font-semibold text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-sagar-blue mb-1 flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-sagar-yellow" /> Pricing Breakdown
              </h2>
              <p className="text-sm text-gray-400 mb-4">Estimates based on standard work. Final price confirmed after site visit.</p>

              <div className={`rounded-xl border ${meta.border} overflow-hidden`}>
                {service.pricing.map((row, i) => (
                  <div key={i} className={`flex items-center justify-between px-4 py-3 ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                    <span className="text-gray-600 text-sm">{row.work}</span>
                    <span className="font-bold text-sagar-blue text-sm whitespace-nowrap ml-4">{row.price}</span>
                  </div>
                ))}
                <div className="px-4 py-3 bg-emerald-50 flex items-center gap-2 border-t border-emerald-100">
                  <BadgeCheck className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span className="text-sm font-semibold text-emerald-700">Payment only after work is completed — No advance required</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — booking CTA */}
          <div className="space-y-5">
            <div className={`bg-gradient-to-br ${meta.color} rounded-2xl p-6 text-white shadow-lg`}>
              <h3 className="text-lg font-extrabold mb-2">Book This Service</h3>
              <p className="text-sm opacity-80 mb-5">Fill a quick form and our team will confirm your appointment.</p>
              <Link to={`/request?service=${encodeURIComponent(service.title)}`}
                className="block w-full text-center bg-white text-sagar-blue font-bold py-3 rounded-xl hover:bg-yellow-50 transition-colors shadow-md">
                Book Now
              </Link>
              <a href="tel:+919448305184"
                className="block w-full text-center mt-3 border-2 border-white/40 text-white font-bold py-3 rounded-xl hover:bg-white/10 transition-colors">
                📞 Call Us Directly
              </a>
            </div>

            <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
              <h4 className="font-bold text-sagar-blue mb-3 text-sm">Why Choose Us?</h4>
              {['Licensed & Certified Engineers', 'On-site Assessment', 'No Advance Payment', '24/7 Emergency Service', 'Pan-Karnataka Coverage'].map((item, i) => (
                <div key={i} className="flex items-center gap-2 py-1.5 border-b border-gray-50 last:border-0">
                  <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0" />
                  <span className="text-sm text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related services */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-bold text-sagar-blue mb-5">Related Services</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
              {related.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                  <div className="h-32 overflow-hidden">
                    <img src={s.image} alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80'; }} />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-bold text-sagar-blue leading-snug">{s.title}</p>
                    <p className="text-xs text-gray-400 mt-1">{s.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
