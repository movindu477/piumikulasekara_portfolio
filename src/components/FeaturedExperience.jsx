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
      impact: "Created the operational clarity and structure needed for Tilli to scale confidently across three regions, with systems still guiding the organization today."
    },
    {
      title: "Bringing SEL to 6,500 Refugee Children in Jordan",
      organization: "Tilli x UNRWA (United Nations Relief and Works Agency)",
      role: "Project Manager",
      timeline: "2023 \u2013 2024",
      context: "UNRWA operates schools serving Palestinian refugee children across the Middle East. They wanted to bring quality Social Emotional Learning to students in Jordan, recognizing the unique emotional needs of children in displacement.",
      challenge: "Rolling out a new program across 17 UNRWA schools meant coordinating with multiple layers of stakeholders\u2014UNRWA leadership, master trainers, teachers, and school leaders\u2014each with their own priorities and constraints. The program had to work in a complex, real-world environment.",
      solution: [
        "Project managed the initiative from the ground up, building relationships with every stakeholder group",
        "Worked closely with master trainers and teachers to adapt program delivery to the unique context of refugee children",
        "Coordinated logistics, training schedules, and program delivery across all 17 schools",
        "Maintained constant communication to address challenges as they arose"
      ],
      impact: "Successfully brought high-quality Social Emotional Learning to over 6,500 refugee children in one of the most complex educational environments in the world. This project remains the one closest to my heart."
    },
    {
      title: "Building Systems for a Volunteer-Driven Nonprofit",
      organization: "Without Borders Sri Lanka",
      role: "Head of Human Resources & Assistant Project Manager",
      timeline: "August 2022 \u2013 November 2024 (Concurrent with Tilli role)",
      context: "Without Borders Sri Lanka leverages innovative education models to empower the next generation of critical thinkers and creative problem-solvers. They design learning experiences accessible to every child, regardless of where they come from.",
      challenge: "The organization relied heavily on volunteers to deliver its mission, but lacked systems to manage growth, retain talent, and secure sustainable funding. They needed structure without losing their grassroots energy.",
      solution: [
        "Handled a cohort of over 80 volunteers and a paid team, putting people systems in place to support them",
        "Organized three large-scale recruitment events, leading to numerous new partnerships and a significant hike in monthly sign-up rates for volunteer teachers",
        "Secured a three-year partnership and funding from Iluka Resources Australia for a project in an at-risk community in Puttalam, Sri Lanka",
        "Secured a grant of USD 50,000 from the English Access Microscholarship Program, an international project created by the U.S. Department of State supporting teens from economically disadvantaged backgrounds",
        "Created and scheduled all social media content to build awareness and engagement"
      ],
      impact: "Strengthened the organization's human resources and financial stability, enabling it to serve more communities and reach more children. The systems built during this time continue to support volunteer recruitment and retention."
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen bg-transparent text-white py-24 md:py-32 overflow-hidden px-6 md:px-12 lg:px-24">
      <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col items-center">

        {/* Header */}
        <ScrollReveal className="text-center mb-16 md:mb-24 w-full max-w-4xl mx-auto" delay={0}>
          <p className="text-brand-purple text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-4">Featured Experience</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-white mb-8">Case Studies</h2>
          <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
            I've spent the past nine years working with organizations trying to do meaningful work in the world, particularly across education, nonprofits, and social impact spaces in Sri Lanka and South Asia. Here are some of the projects I'm most proud of.
          </p>
        </ScrollReveal>

        {/* Clean Modern Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
          {cases.map((study, index) => (
            <ScrollReveal key={index} delay={index * 200} className="w-full h-full">
              {/* Clean Dark Mode Card */}
              <div
                className="group relative h-full bg-[#110A1F] border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col transition-all duration-300 hover:border-brand-purple/30 hover:bg-[#150d26] hover:shadow-[8px_8px_0px_#A020F0] hover:-translate-y-2 hover:-translate-x-2"
              >

                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-brand-purple transition-colors duration-300">{study.title}</h3>
                  <div className="space-y-1">
                    <p className="text-brand-purple font-semibold text-xs uppercase tracking-wider">{study.organization}</p>
                    <p className="text-gray-300 text-xs font-medium">{study.role}</p>
                    <p className="text-gray-500 text-[10px] font-bold tracking-widest uppercase">{study.timeline}</p>
                  </div>
                </div>

                <div className="space-y-6 flex-grow">
                  {/* Context */}
                  <div>
                    <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-1">The Context</h4>
                    <p className="text-gray-400 font-light text-[11px] md:text-xs leading-relaxed">{study.context}</p>
                  </div>

                  {/* Challenge */}
                  <div>
                    <h4 className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-1">The Challenge</h4>
                    <p className="text-gray-400 font-light text-[11px] md:text-xs leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h4 className="text-brand-purple/80 text-[10px] font-bold uppercase tracking-widest mb-2 border-b border-white/10 pb-1">The Solution</h4>
                    <ul className="space-y-2">
                      {study.solution.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1 h-1 rounded-full bg-brand-purple mt-1.5 flex-shrink-0"></div>
                          <span className="text-gray-300 font-medium text-[11px] md:text-xs leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact (Pinned to bottom) */}
                <div className="mt-8 pt-6 border-t border-white/10 bg-gradient-to-t from-brand-purple/5 to-transparent -mx-6 -mb-6 p-6 rounded-b-2xl">
                  <h4 className="text-white text-[11px] font-bold uppercase tracking-widest mb-2 flex items-center gap-2">
                    <svg className="w-4 h-4 text-brand-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                    The Impact
                  </h4>
                  <p className="text-white font-medium text-xs leading-relaxed italic border-l-2 border-brand-purple pl-3">{study.impact}</p>
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
