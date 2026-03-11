import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Me', id: 'about' },
    { name: 'Work', id: 'work' },
    { name: 'Contact', id: 'contact' }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200; // offset

      // At top of page, force home active
      if (window.scrollY < 100) {
        setActiveSection('home');
        return;
      }

      // simple logic to find current section based on scroll
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-[60] flex justify-center px-4 md:px-6 animate-fade-in pointer-events-none">
        <div className="flex items-center justify-between w-full max-w-4xl px-2 py-2 bg-[#141414] border border-white/10 shadow-2xl rounded-full pointer-events-auto">
          
          {/* Left: Logo */}
          <div className="flex items-center gap-3 cursor-pointer group pl-2">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-black text-sm shadow-[0_0_10px_rgba(255,255,255,0.2)] group-hover:scale-105 transition-transform duration-300">
              P
            </div>
            <span className="hidden md:block text-white font-bold tracking-tight text-[14px]">Piumi Kulasekara</span>
          </div>
          
          {/* Center: Desktop Navigation Glass Pill */}
          <div className="hidden md:flex items-center rounded-full mx-4 relative">
            {navLinks.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={`relative px-6 py-2 text-[13px] font-medium tracking-wide transition-colors duration-300 cursor-pointer rounded-full ${activeSection === item.id ? 'text-white' : 'text-white/50 hover:text-white/80'}`}
              >
                <span className="relative z-10">{item.name}</span>
                {/* Liquid Glass Highlight */}
                <div 
                  className={`absolute inset-0 bg-[#2A2A2A] rounded-full shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-opacity duration-300 z-0 ${activeSection === item.id ? 'opacity-100' : 'opacity-0'}`}
                ></div>
              </a>
            ))}
          </div>

          {/* Right: Desktop CTA Button */}
          <div className="hidden md:block pr-2">
            <button className="px-6 py-2.5 rounded-full bg-black border border-white/5 text-white font-bold tracking-wide text-[13px] hover:bg-[#222] transition-colors duration-300 cursor-pointer shadow-lg">
              Let's Connect
            </button>
          </div>

          {/* Mobile Hamburger Icon */}
          <button 
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 focus:outline-none cursor-pointer mr-2"
            onClick={() => setIsOpen(true)}
          >
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
            <div className="w-4 h-0.5 bg-white"></div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        ></div>
        
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-gradient-to-b from-black via-[#0a001a] to-black border-l border-white/10 flex flex-col p-8 transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) shadow-[-10px_0_30px_rgba(0,0,0,0.8)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="flex justify-between items-center w-full">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/50">Menu</span>
            <button 
              className="p-3 bg-white/5 rounded-full hover:bg-white/10 text-white hover:scale-105 transition-all cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-10 mt-16">
            {navLinks.map((item, index) => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={`text-4xl font-medium tracking-tighter text-white hover:text-brand-purple hover:translate-x-2 transition-all duration-300 flex items-baseline cursor-pointer ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                style={{ transitionDelay: `${index * 100 + 300}ms` }}
                onClick={(e) => handleScrollTo(e, item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="mt-auto mb-8">
            <button className="group w-full py-4 rounded-full bg-transparent border border-white/20 text-white font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-brand-purple hover:border-brand-purple flex items-center justify-center gap-3 cursor-pointer">
              Let's Connect
              <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
