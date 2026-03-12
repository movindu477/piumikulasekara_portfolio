import React from 'react';
import meImage from '../assets/images/me.png';
import ScrollReveal from './ScrollReveal';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-transparent text-white py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24"
    >
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#06000c] to-black opacity-80"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[70vw] h-[70vw] bg-neon-purple-deep/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-12 gap-6 lg:gap-8">

        {/* LEFT COLUMN - Profile Card */}
        <ScrollReveal className="xl:col-span-4 flex flex-col" delay={0}>
          <div className="bg-[#110A1F] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl transition-transform duration-500 hover:-translate-y-2">

            {/* Image in a soft blob/circle shape */}
            <div className="w-56 h-56 md:w-64 md:h-64 bg-brand-purple/20 rounded-full flex items-end justify-center overflow-hidden mb-8 relative border border-brand-purple/30 shadow-[0_0_30px_rgba(160,32,240,0.15)]">
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-purple/50 to-transparent"></div>
              <img src={meImage} alt="Piumi Kulasekara" className="w-[85%] h-auto object-contain translate-y-4 scale-110 relative z-10 filter contrast-110" />
            </div>

            <h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-2">Piumi Kulasekara</h3>
            <p className="text-brand-purple text-sm font-medium tracking-wide uppercase mb-auto">piumikulasekara6@gmail.com</p>

            <a 
              href="/My.pdf" 
              download="Piumi_Kulasekara_CV.pdf"
              className="block w-full mt-10 py-4 rounded-full bg-black text-white font-bold uppercase tracking-widest transition-all duration-300 text-[11px] cursor-pointer hover:bg-brand-purple shadow-lg"
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>

        {/* RIGHT COLUMN - Bento Stack */}
        <ScrollReveal className="xl:col-span-8 flex flex-col gap-6 lg:gap-8" delay={200}>

          {/* Top Right Card - About Me Bio */}
          <div className="bg-[#110A1F] backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-1">

            {/* Decorative Top-Right Corner Accent styled like reference */}
            <div className="absolute -top-12 -right-12 w-40 h-40 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-full rounded-full animate-[spin_20s_linear_infinite] flex items-center justify-center relative">
                <svg viewBox="0 0 100 100" width="100" height="100" className="absolute w-full h-full text-white overflow-visible">
                  <defs>
                    <path id="circlePath" d="M 50, 50 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0" />
                  </defs>
                  <text fontSize="12" fontWeight="bold" letterSpacing="3" fill="currentColor">
                    <textPath href="#circlePath" startOffset="0%">
                      BASED IN SRI LANKA • AVAILABLE FOR CONSULTING •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-6">About Me</h2>

            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4ADE80]/30 bg-[#4ADE80]/10 text-[#4ADE80] text-[11px] font-bold uppercase tracking-widest mb-10 shadow-[0_0_15px_rgba(74,222,128,0.15)]">
              <span className="w-2 h-2 rounded-full bg-[#4ADE80] animate-pulse"></span>
              Available for Consulting
            </div>

            <div className="space-y-4 text-white/80 font-light leading-relaxed text-sm md:text-base">
              <p>
                I help organizations that do meaningful work build the systems they need to grow. My approach is human centered I believe good systems should ultimately serve the people behind the mission.
              </p>
              <p>
                My path into operations started in aerospace avionics and aviation management, where I developed a deep fascination with how complex systems work. Over the past nine years, I've applied that curiosity across education, nonprofits, and social impact spaces in Sri Lanka and South Asia.
              </p>
              <p>
                As <strong className="text-white font-medium">COO at Tilli</strong>a Stanford and UNICEF-backed EdTech company I managed a <strong className="text-white font-medium">$430K+ grant portfolio</strong>, built company wide SOPs, and led operations as we expanded across Sri Lanka, India, and the Middle East. One project I'm especially proud of leading the rollout of a Social Emotional Learning program across <strong className="text-white font-medium">17 UNRWA schools in Jordan</strong>, reaching over <strong className="text-white font-medium tracking-widest text-brand-purple uppercase">6,500 refugee children</strong>.
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
