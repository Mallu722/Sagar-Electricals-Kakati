import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sections = ['home', 'about', 'services', 'request-service', 'reviews', 'contact'];
      let current = '';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) current = section;
        }
      }
      if (current !== activeSection) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      window.scrollTo({ top: el.getBoundingClientRect().top + window.pageYOffset - offset, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Desktop Navbar — floating pill over hero */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-sagar-blue/95 backdrop-blur-md shadow-xl py-0'
          : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            scrolled
              ? 'h-14 px-0'
              : 'h-12 bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 px-5'
          }`}>

            {/* Logo */}
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group focus:outline-none">
              <Zap className="h-6 w-6 text-sagar-yellow group-hover:scale-110 transition-transform" fill="currentColor" />
              <span className="font-bold text-white text-base tracking-tight">Sagar Electricals</span>
            </button>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <button key={link.id} onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors focus:outline-none ${
                    activeSection === link.id ? 'text-sagar-yellow' : 'text-white/80 hover:text-white'
                  }`}>
                  {link.name}
                </button>
              ))}
              <button onClick={() => scrollToSection('request-service')}
                className="bg-sagar-yellow text-sagar-blue px-4 py-1.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-md">
                Request Service
              </button>
            </div>

            {/* Mobile hamburger */}
            <button onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1.5 rounded-lg text-white hover:bg-white/10 focus:outline-none">
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
          <div className="absolute top-0 left-0 right-0 bg-sagar-blue pt-20 pb-6 px-4 shadow-2xl rounded-b-3xl">
            {navLinks.map(link => (
              <button key={link.id} onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium mb-1 focus:outline-none ${
                  activeSection === link.id ? 'bg-white/10 text-sagar-yellow' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}>
                {link.name}
              </button>
            ))}
            <button onClick={() => scrollToSection('request-service')}
              className="block w-full text-center mt-3 bg-sagar-yellow text-sagar-blue px-4 py-3 rounded-xl font-bold text-base hover:bg-yellow-400 transition-colors">
              Request Service
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
