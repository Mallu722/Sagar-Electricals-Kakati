import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';

const navLinks = [
  { name: 'Home',     path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'About',    path: '/about' },
  { name: 'Contact',  path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Reset scroll state when route changes
  useEffect(() => { setScrolled(false); setIsOpen(false); }, [location.pathname]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  // On home page: transparent floating pill; on other pages: solid bar
  const solidBg = scrolled || !isHome;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solidBg ? 'bg-sagar-blue/97 backdrop-blur-md shadow-xl py-0' : 'bg-transparent py-4'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className={`flex justify-between items-center transition-all duration-300 ${
            solidBg ? 'h-14 px-0' : 'h-12 bg-black/30 backdrop-blur-md rounded-2xl border border-white/15 px-5'
          }`}>

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <Zap className="h-6 w-6 text-sagar-yellow group-hover:scale-110 transition-transform" fill="currentColor" />
              <span className="font-bold text-white text-base tracking-tight">Sagar Electricals</span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6">
              {navLinks.map(link => (
                <Link key={link.path} to={link.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive(link.path) ? 'text-sagar-yellow' : 'text-white/80 hover:text-white'
                  }`}>
                  {link.name}
                </Link>
              ))}
              <Link to="/request"
                className="bg-sagar-yellow text-sagar-blue px-4 py-1.5 rounded-full font-bold text-sm hover:bg-yellow-400 transition-colors shadow-md">
                Request Service
              </Link>
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
              <Link key={link.path} to={link.path}
                className={`block px-4 py-3 rounded-xl text-base font-medium mb-1 ${
                  isActive(link.path) ? 'bg-white/10 text-sagar-yellow' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}>
                {link.name}
              </Link>
            ))}
            <Link to="/request"
              className="block text-center mt-3 bg-sagar-yellow text-sagar-blue px-4 py-3 rounded-xl font-bold text-base hover:bg-yellow-400 transition-colors">
              Request Service
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
