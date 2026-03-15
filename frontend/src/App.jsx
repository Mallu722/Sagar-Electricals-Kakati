import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import CallNowButton from './components/CallNowButton';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceRequest from './pages/ServiceRequest';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-sagar-light">
      <Navbar />
      <main className="flex-grow pt-16">
        <Home />
        <About />
        <Services />
        <ServiceRequest />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CallNowButton />
    </div>
  );
}

export default App;
