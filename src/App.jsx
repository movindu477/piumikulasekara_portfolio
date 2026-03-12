import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import FeaturedExperience from './components/FeaturedExperience';
import Education from './components/Education';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-brand-purple selection:text-white">
      {/* Global Navbar */}
      <Navbar />

      {/* Standard Scrolling Layout */}
      <Hero />
      
      <div className="bg-[#0a001a] border-t border-white/5 relative z-20 overflow-hidden">
        <About />
        <Services />
        <FeaturedExperience />
        <Education />
        <Testimonials />
        <Contact />
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
