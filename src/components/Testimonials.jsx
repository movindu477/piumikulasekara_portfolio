import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import person1 from '../assets/images/person1.jpg';
import person2 from '../assets/images/person2.jpg';

const Testimonials = () => {
  const reviews = [
    {
      image: person1,
      content: [
        "I had the pleasure of working with Piumi in the same team. She was always incredibly kind, supportive, and willing to help whenever needed, which made her a great colleague to work alongside.",
        "Piumi is an extremely intelligent and hardworking individual who consistently approaches her work with dedication and professionalism. I have no doubt that wherever she goes and whichever company she joins, she will quickly become a valuable asset to the team.",
        "Wishing her all the very best in everything she takes on."
      ],
      name: "Charitha Malalasekera",
      role: "Founder - Altitude Talent",
      date: "March 10, 2026 \u00b7 Charitha worked with me on the same team"
    },
    {
      image: person2,
      content: [
        "I've had the absolute privilege of working with Piumi as our COO at Tilli, and honestly, she's been one of the strongest pillars behind everything we've built so far. Piumi is exceptionally good at project managing large, complex initiatives and seeing them through end to end.",
        "She has this rare ability to bring clarity to chaos, approaching everything with calm, structure and so much heart. Any team would be lucky to work with Piumi. She's dependable, sharp, kind and someone you can truly trust to lead."
      ],
      name: "Adiesha Harischandra",
      role: "Economics, Research & EdTech | Growth Enthusiast",
      date: "January 5, 2026 \u00b7 Adiesha reported directly to me at Tilli"
    }
  ];

  return (
    <section id="testimonials" className="relative w-full py-16 md:py-24 bg-[#ECE6F5] text-black overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">
        
        {/* Decorative Icon */}
        <ScrollReveal delay={0} className="mb-4">
          <svg className="w-10 h-10 text-black mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal className="text-center mb-10 md:mb-16 w-full max-w-2xl" delay={100}>
          <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight mb-4">
            Happy & Satisfied Faces
          </h2>
          <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed">
            Here's what some of my satisfied clients have to say about my work
          </p>
        </ScrollReveal>

        {/* Grid Container */}
        <div className="w-full max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {reviews.map((review, index) => (
            <ScrollReveal key={index} delay={index * 200} className="w-full">
              {/* The Card */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-6 md:p-10 flex flex-col h-full relative transition-transform duration-300 hover:-translate-y-2">
                
                {/* Top Row: Avatar, Name, Stars */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 mb-6 md:mb-8 z-10 relative">
                  <div className="flex items-center gap-4">
                    <img 
                      src={review.image} 
                      alt={review.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                    />
                    <div>
                      <h4 className="text-[16px] font-semibold text-gray-900">{review.name}</h4>
                      <p className="text-[13px] text-gray-500">{review.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-[#F25A38]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-10 flex-grow relative z-10">
                  {review.content.map((paragraph, i) => (
                    <p key={i} className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Bottom Quote Mark */}
                <div className="absolute right-4 bottom-4 md:right-8 md:bottom-6 z-0 mix-blend-multiply opacity-60 md:opacity-80">
                  <svg className="w-10 h-10 md:w-12 md:h-12 text-[#F25A38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                     <span className="text-4xl md:text-5xl font-serif text-[#F25A38]/80 rotate-180 translate-y-2 md:translate-y-3 leading-none">”</span>
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

export default Testimonials;
