import React from 'react';
import meImage from '../assets/images/me.png';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-gradient-to-b from-[#FDFBFF] to-[#F4EBFF] text-black py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-neon-purple-deep/10 blur-[150px] rounded-full translate-x-[20%] translate-y-[-20%]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 lg:gap-12">

        {/* LEFT COLUMN - Profile Card */}
        <ScrollReveal className="xl:col-span-4 flex flex-col" delay={0}>
          <div 
            className="group relative bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2"
            style={{ boxShadow: '8px 8px 0px #A020F0' }}
          >

            {/* Image in a neo-brutalism frame */}
            <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-50 rounded-full flex items-end justify-center overflow-hidden mb-8 relative border-[3px] border-black shadow-inner">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-purple/10 to-transparent"></div>
              <img src={meImage} alt="Piumi Kulasekara" className="w-[100%] h-auto object-contain translate-y-2 scale-125 relative z-10 transition-transform duration-700 group-hover:scale-130" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-black mb-2">Piumi Kulasekara</h3>
            <p className="text-brand-purple text-sm font-bold tracking-widest uppercase mb-auto">piumikulasekara6@gmail.com</p>

            <a 
              href="/My.pdf" 
              download="Piumi_Kulasekara_CV.pdf"
              className="flex items-center justify-center gap-2 w-full mt-10 py-5 rounded-2xl bg-black text-white font-bold uppercase tracking-widest transition-all duration-300 text-[11px] cursor-pointer hover:bg-brand-purple shadow-lg"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN - Bio Card */}
        <ScrollReveal className="xl:col-span-8 flex flex-col" delay={200}>
          <div 
            className="group relative h-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 md:p-12 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            style={{ boxShadow: '10px 10px 0px #000000' }}
          >
            {/* Background Accent */}
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#A020F0]/5 blur-[80px] rounded-full pointer-events-none"></div>

            {/* Decorative Top-Right Corner Accent */}
            <div className="absolute -top-12 -right-12 w-40 h-40 flex items-center justify-center pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500">
              <div className="w-full h-full rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" width="100" height="100" className="absolute w-full h-full text-black overflow-visible">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                  </defs>
                  <text fontSize="11" fontWeight="900" letterSpacing="3" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%">
                      BASED IN SRI LANKA • AVAILABLE FOR CONSULTING •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-8">About Me</h2>

            {/* Open to Work Badge - Neo-brutalism style */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-[3px] border-black bg-[#4ADE80] text-black text-[12px] font-bold uppercase tracking-widest mb-10 shadow-[4px_4px_0px_black]">
              <span className="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
              Available for Consulting
            </div>

            <div className="space-y-6 text-gray-800 font-medium leading-relaxed text-sm md:text-base">
              <p>
                I help organizations that do meaningful work build the systems they need to grow. My approach is human-centered—I believe good systems should ultimately serve the people behind the mission.
              </p>
              <p>
                My path into operations started in aerospace avionics and aviation management, where I developed a deep fascination with how complex systems work. Over the past nine years, I've applied that curiosity across education, nonprofits, and social impact spaces in Sri Lanka and South Asia.
              </p>
              <p>
                As <strong className="text-black font-extrabold underline decoration-brand-purple/30 decoration-4">COO at Tilli</strong>—a Stanford and UNICEF-backed EdTech company—I managed a <strong className="text-black font-bold">$430K+ grant portfolio</strong>, built company-wide SOPs, and led operations as we expanded across Sri Lanka, India, and the Middle East. One project I'm especially proud of is leading the rollout of a Social Emotional Learning program across <strong className="text-black font-bold">17 UNRWA schools in Jordan</strong>, reaching over <strong className="text-brand-purple font-black tracking-wider uppercase">6,500 refugee children</strong>.
              </p>
              <p>
                Today, I work independently with growing organizations to design operational systems, strengthen people processes, and build partnerships that scale impact. Much of my work happens in rural and underserved communities because lasting change starts with understanding the people it's meant to serve.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

export default About;
