import React from 'react';
import { QrCode, Smartphone, Zap } from 'lucide-react';

const ShowcaseScanner = () => {
  return (
    <section className="py-20 bg-sagar-blue text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sagar-yellow/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-sagar-yellow rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/20">
              <QrCode className="h-4 w-4" /> Digital Showcase
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Scan to Visit <br />
              <span className="text-sagar-yellow text-glow">Sagar Electricals</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
              Experience our full range of professional electrical services, view our recent projects, and book a service directly from your smartphone. 
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Smartphone className="h-6 w-6 text-sagar-yellow" />
                </div>
                <div>
                  <p className="font-bold">Instant Access</p>
                  <p className="text-sm text-gray-400">Open the camera on your phone to scan.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white/10 p-3 rounded-xl border border-white/20">
                  <Zap className="h-6 w-6 text-sagar-yellow" />
                </div>
                <div>
                  <p className="font-bold">Lightning Fast</p>
                  <p className="text-sm text-gray-400">Jump directly to our services page.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-sagar-yellow to-blue-400 rounded-[3rem] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border border-white/20">
                <div className="bg-gray-50 p-4 rounded-2xl border-2 border-dashed border-gray-200 relative overflow-hidden">
                  <img 
                    src="/assets/website_qr.png" 
                    alt="Sagar Electricals Website QR" 
                    className="w-64 h-64 md:w-80 md:h-80 relative z-10"
                  />
                  {/* Subtle scanning animation line */}
                  <div className="absolute inset-x-0 h-1 bg-sagar-yellow/50 top-0 animate-scan z-20"></div>
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sagar-blue font-bold text-lg">Official Website Scanner</p>
                  <p className="text-gray-500 text-xs mt-1 italic">sagar-electricals-kakati.vercel.app</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .text-glow {
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
        }
        @keyframes scan {
          0% { top: 0; }
          100% { top: 100%; }
        }
        .animate-scan {
          animation: scan 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ShowcaseScanner;
