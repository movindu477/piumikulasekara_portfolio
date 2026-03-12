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
      qualification: "General Diploma in English, Mathematics, Business and Information Technology",
      institution: "Asia Pacific Institute of Information Technology (APIT)",
    }
  ];

  return (
    <section id="education" className="relative w-full min-h-screen bg-white text-black py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-20 w-full" delay={0}>
          <p className="text-brand-purple text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">Academic Background</p>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-black mb-6">Education</h2>
          <div className="w-24 h-1 bg-brand-purple mx-auto rounded-full"></div>
        </ScrollReveal>

        {/* Liquid Glass Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 w-full">
          {educationData.map((item, index) => (
            <ScrollReveal key={index} delay={index * 100} className="w-full h-full">
              <div className="group relative h-full bg-[#110A1F] md:bg-[#110A1F]/90 backdrop-blur-2xl border border-gray-800 rounded-[2rem] p-6 lg:p-8 flex flex-col transition-all duration-500 ease-out hover:-translate-y-3 hover:bg-[#0a0412] hover:border-brand-purple/50 hover:shadow-[0_30px_60px_-15px_rgba(160,32,240,0.4)] overflow-hidden">

                {/* Liquid glass light reflection top edge */}
                <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                {/* Inner gloss radial gradient on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <div className="flex flex-col h-full relative z-10">
                  {/* Year Badge */}
                  <div className="mb-6">
                    <span className="inline-block px-3 py-1.5 rounded-full bg-brand-purple text-white text-[10px] sm:text-[11px] font-bold tracking-widest uppercase shadow-[0_4px_15px_rgba(160,32,240,0.4)] ring-1 ring-white/10">
                      {item.year}
                    </span>
                  </div>

                  {/* Qualification Title */}
                  <h3 className="text-lg md:text-xl font-bold text-white mb-4 leading-snug group-hover:text-brand-purple transition-colors duration-300">
                    {item.qualification}
                  </h3>

                  {/* Institution */}
                  <div className="mt-auto pt-6 border-t border-white/5 group-hover:border-white/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-brand-purple/70 flex-shrink-0 mt-1 group-hover:text-brand-purple transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      <p className="text-gray-400 font-medium text-xs md:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
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
