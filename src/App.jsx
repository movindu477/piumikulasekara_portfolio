import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
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
      </div>

      {/* Floating Scroll to Top */}
      <ScrollToTop />
    </div>
  );
}

export default App;
