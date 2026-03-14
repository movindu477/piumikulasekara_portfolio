import React from 'react';
import ScrollReveal from './ScrollReveal';

const FeaturedExperience = () => {
  const cases = [
    {
      title: "Scaling an EdTech Nonprofit Across Three Regions",
      organization: "Tilli (Stanford and UNICEF-backed EdTech company)",
      role: "Chief Operating Officer & Head of Operations, People and Partnerships",
      timeline: "June 2023 \u2013 Present",
      context: "Tilli is a game-based Social Emotional Learning (SEL) tool that sparks measurable behavioral change in 3-10 year-olds. Named by Lego as one of the most innovative learning products redefining the future of play, the organization was ready to scale from Sri Lanka into new markets.",
      challenge: "As Tilli expanded across Sri Lanka, India, and the Middle East, the organization needed operational structure to support growth. Without clear systems, scaling would create chaos instead of impact. They needed someone to build the backbone.",
      solution: [
        "Managed a grant portfolio of over USD 430,000, ensuring effective use of funds and full compliance with donor requirements",
        "Built and documented the complete suite of company-wide Standard Operating Procedures (SOPs) across HR, partnerships, finance, and logistics",
        "Led full-cycle recruitment for both tech and non-tech roles, building out the team strategically",
        "Established and managed all Sri Lanka operations, including banking and logistics partnerships",
        "Negotiated and closed 8 retail partnerships, driving product distribution and sales"
      ],
      impact: "Created the operational clarity and structure needed for Tilli to scale confidently across three regions, with systems still guiding the organization today.",
      shadowColor: "#A020F0", // Purple
      accentColor: "text-brand-purple"
    },
    {
      title: "Bringing SEL to 6,500 Refugee Children in Jordan",
      organization: "Tilli x UNRWA (United Nations Relief and Works Agency)",
      role: "Project Manager",
      timeline: "2023 \u2013 2024",
      context: "UNRWA operates schools serving Palestinian refugee children across the Middle East. They wanted to bring quality Social Emotional Learning to students in Jordan, recognizing the unique emotional needs of children in displacement.",
      challenge: "Rolling out a new program across 17 UNRWA schools meant coordinating with multiple layers of stakeholders—UNRWA leadership, master trainers, teachers, and school leaders—each with their own priorities and constraints. The program had to work in a complex, real-world environment.",
      solution: [
        "Project managed the initiative from the ground up, building relationships with every stakeholder group",
        "Worked closely with master trainers and teachers to adapt program delivery to the unique context of refugee children",
        "Coordinated logistics, training schedules, and program delivery across all 17 schools",
        "Maintained constant communication to address challenges as they arose"
      ],
      impact: "Successfully brought high-quality Social Emotional Learning to over 6,500 refugee children in one of the most complex educational environments in the world. This project remains the one closest to my heart.",
      shadowColor: "#3B82F6", // Blue
      accentColor: "text-blue-600"
    },
    {
      title: "Building Systems for a Volunteer-Driven Nonprofit",
      organization: "Without Borders Sri Lanka",
      role: "Head of Human Resources & Assistant Project Manager",
      timeline: "August 2022 \u2013 November 2024",
      context: "Without Borders Sri Lanka leverages innovative education models to empower the next generation of critical thinkers and creative problem-solvers. They design learning experiences accessible to every child, regardless of where they come from.",
      challenge: "The organization relied heavily on volunteers to deliver its mission, but lacked systems to manage growth, retain talent, and secure sustainable funding. They needed structure without losing their grassroots energy.",
      solution: [
        "Handled a cohort of over 80 volunteers and a paid team, putting people systems in place to support them",
        "Organized three large-scale recruitment events, leading to numerous new partnerships",
        "Secured a three-year partnership and funding from Iluka Resources Australia for a project in an at-risk community in Puttalam",
        "Secured a grant of USD 50,000 from the English Access Microscholarship Program (U.S. Department of State)",
        "Created and scheduled all social media content to build awareness and engagement"
      ],
      impact: "Strengthened the organization's human resources and financial stability, enabling it to serve more communities and reach more children.",
      shadowColor: "#EC4899", // Pink
      accentColor: "text-pink-600"
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen bg-gradient-to-b from-[#F4EBFF] to-[#FDFBFF] text-black py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vw] bg-brand-purple/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24 w-full max-w-4xl mx-auto" delay={0}>
          <p className="text-brand-purple text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">Featured Experience</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-black mb-8">Case Studies</h2>
          <p className="text-gray-600 font-medium leading-relaxed text-sm md:text-base max-w-2xl mx-auto">
            I've spent the past nine years working with organizations trying to do meaningful work in the world. Here are some of the projects I'm most proud of.
          </p>
        </ScrollReveal>

        {/* Clean Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {cases.map((study, index) => (
            <ScrollReveal key={index} delay={index * 200} className="w-full h-full">
              {/* Neo-brutalism Card */}
              <div
                className="group relative h-full bg-white border-[3px] border-black rounded-[2rem] p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2"
                style={{ boxShadow: `8px 8px 0px ${study.shadowColor}` }}
              >

                <div className="mb-8">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-4 leading-tight">{study.title}</h3>
                  <div className="space-y-2">
                    <p className={`${study.accentColor} font-bold text-xs uppercase tracking-wider`}>{study.organization}</p>
                    <p className="text-gray-700 text-xs font-bold">{study.role}</p>
                    <div className="inline-block px-2 py-0.5 border-2 border-black rounded-md text-[10px] font-black uppercase tracking-wider text-black mt-2">
                      {study.timeline}
                    </div>
                  </div>
                </div>

                <div className="space-y-8 flex-grow">
                  {/* Context */}
                  <div>
                    <h4 className="text-black text-[10px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-black"></span>
                      The Context
                    </h4>
                    <p className="text-gray-600 font-medium text-[12px] leading-relaxed">{study.context}</p>
                  </div>

                  {/* Solution */}
                  <div className="bg-gray-50 border-2 border-black/10 rounded-2xl p-4 md:p-5">
                    <h4 className="text-black text-[10px] font-black uppercase tracking-widest mb-4 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
                      The Solution
                    </h4>
                    <ul className="space-y-3">
                      {study.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-purple mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-700 font-bold text-[11px] leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact (Pinned to bottom) */}
                <div className="mt-8 pt-6 border-t-[3px] border-black bg-white -mx-6 md:-mx-8 -mb-6 md:-mb-8 p-6 md:p-8 rounded-b-[1.85rem]">
                  <h4 className="text-black text-[11px] font-black uppercase tracking-widest mb-3 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    The Impact
                  </h4>
                  <p className="text-black font-black text-sm leading-relaxed italic border-l-[3px] border-brand-purple pl-4">{study.impact}</p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedExperience;
