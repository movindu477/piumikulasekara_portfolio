import React from 'react';
import ScrollReveal from './ScrollReveal';
import service1Img from '../assets/images/service1.webp';
import service2Img from '../assets/images/service2.webp';
import service3Img from '../assets/images/service3.webp';

const Services = () => {
  const servicesData = [
    {
      title: "Operations",
      subtitle: "Designing for Scale",
      description: "I design systems, SOPs, workflows, and processes that help organizations run smoothly and scale without losing what makes them special.",
      practices: [
        "Creating clarity out of chaos",
        "Building playbooks that actually get used",
        "Setting up workflows that save time and reduce burnout"
      ],
      color: "from-brand-purple to-neon-purple-deep",
      shadowColor: "#A020F0",
      image: service1Img
    },
    {
      title: "Partnerships",
      subtitle: "Building for Impact",
      description: "I build meaningful partnerships with schools, NGOs, governments, and stakeholders to expand programs and reach the communities that need them most.",
      practices: [
        "Identifying aligned partners",
        "Negotiating agreements that work for everyone",
        "Managing relationships so they last"
      ],
      color: "from-blue-500 to-indigo-600",
      shadowColor: "#3B82F6",
      image: service2Img
    },
    {
      title: "People & HR Systems",
      subtitle: "Supporting Your Team",
      description: "I support hiring, onboarding, people operations, and team culture to help organizations build strong, engaged teams that stick around.",
      practices: [
        "Full-cycle recruitment that finds the right fit",
        "Onboarding that sets people up for success",
        "People operations that feel supportive, not bureaucratic"
      ],
      color: "from-pink-500 to-rose-600",
      shadowColor: "#EC4899",
      image: service3Img
    }
  ];

  return (
    <section id="work" className="relative w-full min-h-screen bg-gradient-to-b from-[#FDFBFF] to-[#F4EBFF] text-black py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-neon-purple-deep/10 blur-[150px] rounded-full translate-x-[-20%] translate-y-[-20%]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24" delay={0}>
          <p className="text-brand-purple text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4">Passion led us here</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-black mb-4">What I do</h2>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {servicesData.map((service, index) => (
            <ScrollReveal key={index} delay={index * 200} className="w-full">
              {/* Neo-brutalism styled card adapted for light theme */}
              <div 
                className="group relative h-full bg-white border-[3px] border-black rounded-[2rem] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 flex flex-col"
                style={{
                  boxShadow: `8px 8px 0px ${service.shadowColor}`
                }}
              >
                
                {/* Service Image */}
                <div className="w-full h-56 md:h-64 relative flex-shrink-0 border-b-[3px] border-black overflow-hidden bg-gray-50">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>

                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-black mb-2">{service.title}</h3>
                <h4 className="text-brand-purple text-sm font-bold uppercase tracking-wider mb-6">{service.subtitle}</h4>

                <p className="text-gray-700 font-medium leading-relaxed text-sm md:text-base mb-8">
                  {service.description}
                </p>

                <div className="mt-auto">
                  <p className="font-bold text-black text-sm mb-4">What this looks like in practice:</p>
                  <ul className="space-y-3">
                    {service.practices.map((practice, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-gray-600 font-medium leading-relaxed">{practice}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Engagement Packages Section */}
        <div className="w-full mt-24 md:mt-32">
          <ScrollReveal className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-light tracking-tight text-black mb-4">Engagement Packages</h2>
            <p className="mt-4 text-gray-600 font-medium text-sm md:text-base max-w-2xl mx-auto">
              Services start from $15/hour, with monthly or project-based retainers available depending on the scope of work.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl mx-auto">
            {/* Package 1 */}
            <ScrollReveal delay={0} className="w-full h-full">
              <div className="group relative h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                {/* Mesh Gradient Background Elements */}
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#FF8C00]/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#A020F0]/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-white/5 blur-[60px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-md">Operations Setup</h3>
                  <p className="text-white/80 font-medium leading-relaxed text-sm mb-8 drop-shadow-md max-w-[90%]">
                    Best for early-stage organizations building foundational processes
                  </p>

                  <div className="mt-auto bg-white/5 backdrop-blur-[40px] border border-white/15 rounded-[1.5rem] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-[0.8rem] bg-white flex items-center justify-center text-black shadow-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white tracking-tight">$15<span className="text-sm font-medium text-white/70 ml-1">/ hour</span></div>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.1em] mt-0.5">Starting Rate</p>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {['SOP creation', 'Hiring and onboarding systems', 'Partnership pipelines', 'Internal workflows', 'Program operations frameworks'].map((item, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <svg className="w-5 h-5 text-white/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-white font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="flex items-center justify-center gap-2 w-full bg-white text-black hover:bg-gray-100 transition-colors px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg">
                      <span>Book A Call</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Package 2 */}
            <ScrollReveal delay={200} className="w-full h-full">
              <div className="group relative h-full bg-[#0a0a0a] rounded-[2rem] overflow-hidden p-6 md:p-8 transition-transform duration-300 hover:-translate-y-2 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5">
                {/* Mesh Gradient Background Elements */}
                <div className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#3B82F6]/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#A020F0]/30 blur-[80px] rounded-full mix-blend-screen pointer-events-none"></div>
                <div className="absolute top-[20%] left-[20%] w-[60%] h-[60%] bg-white/5 blur-[60px] rounded-full pointer-events-none"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-white mb-3 tracking-tight drop-shadow-md">Operations Partner</h3>
                  <p className="text-white/80 font-medium leading-relaxed text-sm mb-8 drop-shadow-md max-w-[90%]">
                    Best for growing organizations needing ongoing leadership
                  </p>

                  <div className="mt-auto bg-white/5 backdrop-blur-[40px] border border-white/15 rounded-[1.5rem] p-6 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-[0.8rem] bg-white flex items-center justify-center text-black shadow-lg flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-white tracking-tight">$15<span className="text-sm font-medium text-white/70 ml-1">/ hour</span></div>
                        <p className="text-white/60 text-[10px] font-bold uppercase tracking-[0.1em] mt-0.5">Starting Rate</p>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {['Operations leadership', 'Team management', 'HR systems', 'Partnerships', 'Program delivery'].map((item, i) => (
                        <li key={i} className="flex items-center gap-4">
                          <svg className="w-5 h-5 text-white/50 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-white font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <a href="#contact" className="flex items-center justify-center gap-2 w-full bg-white text-black hover:bg-gray-100 transition-colors px-5 py-3 rounded-xl font-bold uppercase tracking-wider text-sm shadow-lg">
                      <span>Book A Call</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;
