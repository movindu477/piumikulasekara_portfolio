import React from 'react';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const educationData = [
    {
      year: "2022 \u2013 2026",
      qualification: "Bachelor of Aviation Management",
      institution: "Massey University - School of Aviation",
    },
    {
      year: "2025 \u2013 2026",
      qualification: "Professional Consulting Qualification (Level 7)",
      institution: "Chartered Management Institute (CMI)",
    },
    {
      year: "2018 \u2013 2021",
      qualification: "Diploma in Aerospace Avionics",
      institution: "Republic Polytechnic - School of Engineering",
    },
    {
      year: "2016 \u2013 2017",
      qualification: "General Diploma in English, Mathematics, Business and IT",
      institution: "Asia Pacific Institute of Information Technology (APIT)",
    }
  ];

  return (
    <section id="education" className="relative w-full min-h-screen bg-gradient-to-b from-[#FDFBFF] to-[#F4EBFF] text-black py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[40vw] h-[40vw] bg-brand-purple/5 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24 w-full" delay={0}>
          <p className="text-brand-purple text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">Academic Background</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-black mb-8">Education</h2>
          <div className="w-24 h-2 bg-brand-purple mx-auto rounded-full"></div>
        </ScrollReveal>

        {/* Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full">
          {educationData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} className="w-full h-full">
              <div 
                className="group relative h-full bg-white border-[3px] border-black rounded-[2.5rem] p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:-translate-x-1"
                style={{ boxShadow: '8px 8px 0px #A020F0' }}
              >
                <div className="flex flex-col h-full relative z-10">
                  {/* Year Badge */}
                  <div className="mb-8">
                    <span className="inline-block px-4 py-1.5 rounded-lg border-2 border-black bg-black text-white text-[11px] font-black tracking-widest uppercase shadow-[4px_4px_0px_#A020F0]">
                      {item.year}
                    </span>
                  </div>

                  {/* Qualification Title */}
                  <h3 className="text-xl md:text-2xl font-black text-black mb-6 leading-tight group-hover:text-brand-purple transition-colors duration-300">
                    {item.qualification}
                  </h3>

                  {/* Institution */}
                  <div className="mt-auto pt-6 border-t-2 border-black/10">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3.5 h-3.5 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <p className="text-gray-700 font-bold text-xs md:text-sm leading-relaxed">
                        {item.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
