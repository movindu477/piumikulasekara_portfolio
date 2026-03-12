import React from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section id="contact" className="w-full flex flex-col font-sans">
      
      {/* Top CTA Section (Light Mode) */}
      <div className="w-full py-24 md:py-32 bg-[#F9F9F9] text-black px-6 flex flex-col items-center text-center">
        <ScrollReveal className="max-w-3xl flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-light tracking-tight text-black mb-6">
            Got a Vision? Let's Bring It to Life!
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-[15px] leading-relaxed max-w-2xl mb-12">
            I'm always excited to collaborate on new and innovative projects. Whether you're starting from scratch or refining an existing idea
          </p>
          <a href="mailto:piumikulasekara6@gmail.com" className="inline-flex items-center gap-2 text-[14px] font-medium border-b border-black pb-1 hover:text-brand-purple hover:border-brand-purple transition-all duration-300">
            Book A Call 
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5M19 5v10M19 5H9" />
            </svg>
          </a>
        </ScrollReveal>
      </div>

      {/* Footer Section (Dark Mode) */}
      <div className="w-full bg-[#0a001a] text-white py-16 px-6 md:px-12 lg:px-24 overflow-hidden relative border-t border-white/5">
        
        {/* Subtle purple gradient glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-purple/10 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            {/* Vertical Lines */}
            <div className="absolute top-0 left-[5%] w-[1px] h-full bg-white/5 hidden md:block"></div>
            <div className="absolute top-0 left-[25%] w-[1px] h-full bg-white/5 hidden lg:block"></div>
            <div className="absolute top-0 right-[5%] w-[1px] h-full bg-white/5 hidden md:block"></div>
            <div className="absolute top-0 right-[35%] w-[1px] h-full bg-white/5 hidden lg:block border-x border-white/10 px-[10%]"></div>
            {/* Horizontal Lines */}
            <div className="absolute top-[20%] left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
            <div className="absolute top-[60%] left-0 w-full h-[1px] bg-white/5 hidden md:block"></div>
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center w-full gap-16 lg:gap-10 py-4 lg:py-8">
          
          {/* Left: Nav Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 md:gap-4 w-full lg:w-auto">
             <button onClick={(e) => handleScrollTo(e, 'home')} className="px-5 py-2.5 rounded-full bg-brand-purple/20 text-white text-[13px] font-medium transition-colors border border-brand-purple/30 shadow-sm">Home</button>
             <button onClick={(e) => handleScrollTo(e, 'about')} className="px-5 py-2.5 rounded-full text-white/50 hover:text-white text-[13px] font-medium transition-colors">About Me</button>
             <button onClick={(e) => handleScrollTo(e, 'work')} className="px-5 py-2.5 rounded-full text-white/50 hover:text-white text-[13px] font-medium transition-colors">Work</button>
             <button onClick={(e) => handleScrollTo(e, 'testimonials')} className="px-5 py-2.5 rounded-full text-white/50 hover:text-white text-[13px] font-medium transition-colors">Reviews</button>
             <button onClick={(e) => handleScrollTo(e, 'contact')} className="px-5 py-2.5 rounded-full text-white/50 hover:text-white text-[13px] font-medium transition-colors">Contact</button>
          </div>

          {/* Right: Contact Details */}
          <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-6">
            <a href="mailto:piumikulasekara6@gmail.com" className="text-[28px] sm:text-4xl md:text-[52px] lg:text-[44px] xl:text-[56px] font-light tracking-tight text-white hover:text-white/80 transition-colors break-words w-full leading-none">
              piumikulasekara6@gmail.com
            </a>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 w-full lg:w-auto lg:justify-end">
              <a href="tel:+94777041356" className="w-full sm:w-auto text-white/70 hover:text-white font-light tracking-wider text-[15px] border border-white/10 px-6 py-3.5 rounded-full hover:bg-white/5 transition-all flex justify-center items-center gap-3 backdrop-blur-sm bg-black/20">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +94 777 041 356
              </a>

              <a 
                href="https://linkedin.com/in/piumi-kulasekara" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:border-white hover:text-black transition-all duration-300 text-white backdrop-blur-sm bg-black/20"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
