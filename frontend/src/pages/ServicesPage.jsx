import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, BadgeCheck, IndianRupee, ArrowRight } from 'lucide-react';
import { servicesData, categoryMeta, CATEGORY_ORDER } from '../data/servicesData';

const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...CATEGORY_ORDER];
  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">

      {/* Page Hero */}
      <div className="bg-sagar-blue text-white pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-sagar-yellow rounded-full filter blur-[120px]" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sagar-yellow/20 text-sagar-yellow text-sm font-semibold mb-4 border border-sagar-yellow/30">
            <Zap className="h-4 w-4" fill="currentColor" /> Industrial Electrical Specialists
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">Our Services</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Transparent pricing on every service. Pay only after the work is completed — no advance required.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 px-4 py-2 rounded-full text-sm font-bold">
            <BadgeCheck className="h-4 w-4" /> Pay After Work — No Advance Required
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all border ${
                activeCategory === cat
                  ? 'bg-sagar-blue text-white border-sagar-blue shadow-lg'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-sagar-blue hover:text-sagar-blue'
              }`}>
              {cat === 'All' ? 'All Services' : categoryMeta[cat]?.label || cat}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map(service => {
            const meta = categoryMeta[service.category];
            const startingPrice = service.pricing[0]?.price || '';
            return (
              <div key={service.slug} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col group">

                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={e => { e.target.src = 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80'; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full ${meta.badge}`}>
                    {meta.label}
                  </span>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                    <IndianRupee className="h-3 w-3" /> Starting {startingPrice.split('–')[0].trim()}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold text-sagar-blue mb-2 leading-snug">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">{service.tagline}</p>

                  {/* Pricing preview */}
                  <div className={`mt-4 rounded-xl border ${meta.border} overflow-hidden`}>
                    {service.pricing.slice(0, 3).map((row, i) => (
                      <div key={i} className={`flex justify-between items-center px-3 py-2 text-xs ${i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <span className="text-gray-500">{row.work}</span>
                        <span className="font-bold text-sagar-blue whitespace-nowrap ml-2">{row.price}</span>
                      </div>
                    ))}
                    {service.pricing.length > 3 && (
                      <div className="px-3 py-1.5 bg-gray-50 text-xs text-gray-400 text-center">
                        +{service.pricing.length - 3} more options
                      </div>
                    )}
                    <div className="px-3 py-2 bg-emerald-50 flex items-center gap-1.5">
                      <BadgeCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                      <span className="text-xs font-semibold text-emerald-700">Pay after work is completed</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="mt-4 flex gap-2">
                    <Link to={`/services/${service.slug}`}
                      className="flex-1 text-center py-2.5 rounded-xl text-sm font-bold border-2 border-sagar-blue text-sagar-blue hover:bg-sagar-blue hover:text-white transition-all">
                      View Details
                    </Link>
                    <Link to={`/request?service=${encodeURIComponent(service.title)}`}
                      className={`flex-1 text-center py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r ${meta.color} text-white hover:opacity-90 transition-all flex items-center justify-center gap-1`}>
                      Book Now <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 bg-sagar-blue rounded-3xl p-8 md:p-12 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-sagar-yellow rounded-full filter blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Need a custom quote?</h2>
            <p className="text-gray-300 mb-2 max-w-xl mx-auto">Our engineers will visit, assess, and give you a final price — you pay only after the job is done.</p>
            <p className="text-sagar-yellow font-bold mb-6">✓ No advance &nbsp; ✓ No hidden charges &nbsp; ✓ Pay after work</p>
            <a href="tel:+919448305184"
              className="inline-block bg-sagar-yellow text-sagar-blue px-8 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-colors shadow-lg">
              Call for Free Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
