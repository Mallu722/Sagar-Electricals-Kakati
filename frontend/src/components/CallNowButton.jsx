import React from 'react';
import { Phone } from 'lucide-react';

const CallNowButton = () => {
  return (
    <a
      href="tel:+919739284211"
      className="md:hidden fixed bottom-6 left-6 z-50 bg-sagar-yellow text-sagar-blue p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center animate-bounce"
      aria-label="Call Now"
    >
      <Phone className="w-7 h-7" fill="currentColor" />
    </a>
  );
};

export default CallNowButton;
