import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      const sections = ['home', 'about', 'services', 'request-service', 'reviews', 'contact'];
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust offset to trigger active state slightly before reaching top
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
          }
        }
      }

      if (current !== activeSection) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const closeMenu = () => setIsOpen(false);

  const scrollToSection = (id) => {
    closeMenu();
    const element = document.getElementById(id);
    if (element) {
      // Offset for fixed navbar height (approx 64px)
      const offset = 64;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-sagar-blue text-white fixed w-full z-50 top-0 left-0 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 group focus:outline-none">
              <Zap className="h-8 w-8 text-sagar-yellow group-hover:scale-110 transition-transform" fill="currentColor" />
              <span className="font-bold text-xl tracking-tight">Sagar Electricals</span>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-sm font-medium transition-colors hover:text-sagar-yellow py-2 focus:outline-none ${
                    activeSection === link.id ? 'text-sagar-yellow border-b-2 border-sagar-yellow' : 'text-gray-300'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollToSection('request-service')}
              className="bg-sagar-yellow text-sagar-blue px-4 py-2 rounded-md font-bold text-sm hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg focus:outline-none"
            >
              Request Service
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6 text-sagar-yellow" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sagar-blue border-t border-gray-800 pb-3 pt-2">
          <div className="px-2 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none ${
                  activeSection === link.id ? 'bg-gray-900 text-sagar-yellow' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('request-service')}
              className="block w-full text-center mt-4 bg-sagar-yellow text-sagar-blue px-3 py-2 rounded-md font-bold text-base hover:bg-yellow-400 transition-colors focus:outline-none"
            >
              Request Service
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
