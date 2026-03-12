import React from 'react';
import meImage from '../assets/images/me.png';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen w-full bg-neon-purple overflow-hidden animate-fade-in flex items-center justify-center">
      
      {/* 1. Atmospheric Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple to-neon-purple-deep"></div>
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[80vw] h-[80vw] bg-neon-purple-deep blur-[180px] rounded-full animate-float"></div>
        {/* Absolute full-screen Black right/bottom shadow */}
        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black via-black/40 to-transparent opacity-90"></div>
      </div>



      {/* 2. Main Content Layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-start lg:justify-center px-6 md:px-20 lg:px-24 pt-32 lg:pt-0 overflow-y-auto lg:overflow-hidden">
        
        {/* DESKTOP LAYOUT (Precise restoration) */}
        <div className="hidden lg:flex relative items-center justify-center w-full h-full">
          {/* Main Branding Block */}
          <div className="absolute left-0 z-0 w-full lg:w-4/5 flex flex-col items-start text-left pt-12">
            <h3 className="text-2xl font-medium text-white uppercase tracking-[0.5em] animate-slide-up mb-3 drop-shadow-md">
              Hey, I'm
            </h3>
            <h1 className="text-[11vw] xl:text-[10.5rem] font-medium leading-none tracking-tighter text-white uppercase select-none animate-slide-up mb-12 drop-shadow-2xl">
              PIUMI <span className="text-white">KULASEKARA</span>
            </h1>
            <div className="animate-fade-in flex flex-col items-start space-y-6 max-w-2xl pl-2">
               <h4 className="text-2xl font-light text-white tracking-tight leading-relaxed drop-shadow-lg">
                 Operations, Partnerships & People Systems <span className="text-white italic">for Growing Organizations</span>
               </h4>
               <div className="flex items-center gap-4">
                 <div className="w-10 h-[1px] bg-white/40"></div>
                 <p className="text-xs font-bold uppercase tracking-[0.5em] text-white/70">
                   Independent consultant
                 </p>
               </div>
            </div>
          </div>

          {/* Portrait Image (Front) */}
          <div className="relative z-10 w-full h-full flex items-end justify-end -mr-32 animate-fade-in pointer-events-none transition-transform duration-1000">
            <img 
              src={meImage} 
              alt="Piumi Kulasekara" 
              className="h-[90%] w-auto object-contain object-bottom filter contrast-[1.1] brightness-110 drop-shadow-[0_20px_50px_#000000]"
            />
          </div>
        </div>

        {/* MOBILE LAYOUT (Modern Responsive Flow) */}
        <div className="lg:hidden relative flex flex-col items-center justify-start w-full min-h-full pb-16 gap-0">
          {/* Title - Top */}
          <div className="w-full flex flex-col items-start mt-[-20px]">
            <h3 className="text-sm font-medium text-white uppercase tracking-[0.5em] animate-slide-up mb-2">
              Hey, I'm
            </h3>
            <h1 className="text-[13vw] font-medium leading-none tracking-tighter text-white uppercase select-none animate-slide-up">
              PIUMI KULASEKARA
            </h1>
          </div>

          {/* Image inside Black Circle - Center */}
          <div className="relative z-10 w-full flex flex-1 items-center justify-center mt-4 mb-4 animate-fade-in">
            <div className="relative w-[40vh] h-[40vh] max-w-[85vw] max-h-[85vw] bg-black rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-end justify-center">
              <img 
                src={meImage} 
                alt="Piumi Kulasekara" 
                className="w-[130%] h-auto object-contain object-bottom filter contrast-[1.1] brightness-110 translate-y-6 scale-[1.25]"
              />
            </div>
          </div>

          {/* Sub-texts - Centered under Image */}
          <div className="w-full flex flex-col items-center text-center mt-auto mb-4">
            <div className="animate-fade-in flex flex-col items-center space-y-4 w-full px-4">
               <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-white">
                 Independent consultant
               </p>
               <h4 className="text-[14px] font-light text-white tracking-wide leading-relaxed italic opacity-90 mx-auto before:content-['“'] after:content-['”'] max-w-sm">
                 Operations, Partnerships & People Systems for Growing Organizations
               </h4>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default Hero;
