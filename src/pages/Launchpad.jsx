import React from 'react';
import { Rocket, TrendingUp, Globe, Check } from 'lucide-react';
import LaunchpadHero from '../assets/images/blog/connect.png'; // Path check kar lena bhai

const Launchpad = () => {
  
  const content = {
    title: "India–México Launchpad",
    subtitle: "A structured soft-landing program enabling startups and growth-stage companies to establish operations and scale in the counterpart market.",
    overview: {
      badge: "LAUNCHPAD OVERVIEW",
      title: "India–México Launchpad",
      desc: "India–México Launchpad is a structured soft-landing platform designed for startups and growth-stage companies seeking to establish operations in the other market. The program reduces market entry risk through validated market intelligence, operational infrastructure, and curated ecosystem introductions."
    },
    sections: [
      {
        type: "Entering India",
        badge: "MEXICAN STARTUPS",
        icon: <TrendingUp size={24} />,
        desc: "Unlock opportunities in one of the world's largest consumer and digital economies with our tailored soft-landing support.",
        points: [
          "Market validation and opportunity assessment",
          "Virtual office facilities in Mumbai/Delhi",
          "Regulatory and entity set-up advisory",
          "Banking and payment infrastructure introductions",
          "Investor and partner introductions",
          "Ecosystem access to Indian incubators and accelerators"
        ]
      },
      {
        type: "Entering México",
        badge: "INDIAN STARTUPS",
        icon: <Globe size={24} />,
        desc: "Leverage México's strategic position as a gateway to the Americas and the USMCA market with institutional guidance.",
        points: [
          "USMCA market access strategy development",
          "Soft-landing infrastructure in México City/Guadalajara",
          "Company incorporation and de-structuring",
          "Talent acquisition advisory",
          "Customer and partner introductions",
          "Government liaison and incentive navigation"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] dark:bg-slate-950 font-sans pb-24 transition-colors duration-500">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <span className="text-[#A98842] font-bold text-[10px] tracking-[0.3em] uppercase mb-2 block transition-colors">
            Soft Landing Program
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#A98842] mb-4 tracking-tight transition-colors">
            {content.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-900 dark:text-gray-300 font-bold text-[10px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80 transition-colors">
            {content.subtitle}
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE --- */}
      <section className="container mx-auto px-4 mb-16">
        <div className="rounded-[30px] overflow-hidden shadow-2xl dark:shadow-black/50 border-4 border-white dark:border-slate-800 max-w-7xl mx-auto transition-colors">
          <img 
            src={LaunchpadHero} 
            alt="Economic Forum India Mexico" 
            className="w-full h-auto md:max-h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- OVERVIEW CARD --- */}
      <section className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-50 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
            <div className="flex flex-col gap-6 max-w-4xl">
              <div className="w-12 h-12 bg-[#A98842] text-white rounded-xl flex items-center justify-center shadow-lg dark:shadow-none transition-colors">
                <Rocket size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white transition-colors">
                {content.overview.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium transition-colors">
                {content.overview.desc}
              </p>
            </div>
            <span className="bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] px-4 py-1.5 rounded-md text-[9px] font-black tracking-widest uppercase transition-colors">
              {content.overview.badge}
            </span>
          </div>
          {/* Subtle Bottom Accent Line like Image */}
          <div className="absolute bottom-0 left-0 w-full h-1 bg-[#A98842]/20 transition-colors"></div>
        </div>
      </section>

      {/* --- DUAL DIRECTIONAL GRIDS --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {content.sections.map((section, idx) => (
            <div 
              key={idx} 
              className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-50 dark:border-slate-800 transition-all duration-500 hover:shadow-xl dark:hover:shadow-lg dark:hover:border-[#A98842]/30 flex flex-col group"
            >
              
              {/* Card Header */}
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-[#A98842] text-white rounded-xl flex items-center justify-center shadow-md dark:shadow-none transition-colors">
                  {section.icon}
                </div>
                <span 
                  className={`px-4 py-1.5 rounded-full text-[9px] font-black tracking-widest transition-colors ${
                    idx === 1 
                      ? 'bg-[#1a1a1a] dark:bg-slate-800 text-white dark:text-gray-200' 
                      : 'bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842]'
                  }`}
                >
                  {section.badge}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white mb-6 tracking-tight transition-colors">
                {section.type}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed mb-10 font-medium min-h-[60px] transition-colors">
                {section.desc}
              </p>

              {/* Checklist Points */}
              <div className="space-y-3 flex-grow">
                {section.points.map((point, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 bg-[#faf9f6]/60 dark:bg-slate-800/50 p-4 rounded-2xl border border-gray-50 dark:border-slate-700/50 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300"
                  >
                    <Check size={16} className="text-[#A98842] mt-1 shrink-0" strokeWidth={3} />
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-bold tracking-tight leading-snug transition-colors">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Launchpad;