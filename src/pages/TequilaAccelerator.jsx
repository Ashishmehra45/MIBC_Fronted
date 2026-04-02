import React from 'react';
import { Lightbulb, FileText, Share2, Rocket, Check, Zap } from 'lucide-react';
import TequilaHero from '../assets/images/blog/tachila.png'; // Path check kar lena bhai

const TequilaAccelerator = () => {
  
  const content = {
    title: "Tequila Accelerator",
    subtitle: "Market Entry Program for Mexican Tequila & Spirits Companies in India",
    overview: {
      badge: "PROGRAM OVERVIEW",
      title: "Unlocking the Tequila Opportunity",
      desc: "India is one of the world's fastest-growing premium spirits markets, with rising disposable incomes and a young population embracing international brands. Yet Mexican tequila and mezcal remain dramatically under-represented, creating a significant market entry opportunity for Mexican producers.",
      highlight: "The Tequila Accelerator is MIBC's dedicated program to help Mexican artisanal and spirits brands establish distribution and market presence in India."
    },
    grids: [
      {
        title: "Market Intelligence",
        icon: <Lightbulb size={24} />,
        badge: "INSIGHTS",
        items: [
          "Indian spirits market landscape and consumer segmentation",
          "Competitive positioning analysis",
          "Pricing strategy for Indian market",
          "Target channel identification (HoReCa, retail, e-commerce)"
        ]
      },
      {
        title: "Regulatory Navigation",
        icon: <FileText size={24} />,
        badge: "COMPLIANCE",
        items: [
          "State-by-state licensing (28 states with unique excise laws)",
          "Import documentation and customs procedures",
          "Labelling and packaging compliance",
          "Excise registration and ongoing compliance"
        ]
      },
      {
        title: "Distribution & Partners",
        icon: <Share2 size={24} />,
        badge: "PARTNERS",
        items: [
          "Curated introductions to leading importers and distributors",
          "Hospitality partner connections (premium hotels, bars)",
          "Firm client facilitation and handholding",
          "Contract negotiation support"
        ]
      },
      {
        title: "Brand Launch Support",
        icon: <Rocket size={24} />,
        badge: "LAUNCH",
        items: [
          "Launch event coordination in key metros",
          "Trade and consumer outreach",
          "Media and influencer connections",
          "Ongoing market development support"
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
            Flagship Program
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
            src={TequilaHero} 
            alt="Premium Tequila Bottles" 
            className="w-full h-auto md:max-h-[650px] object-cover"
          />
        </div>
      </section>

      {/* --- OVERVIEW CARD --- */}
      <section className="container mx-auto px-4 max-w-7xl mb-12">
        <div className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-14 shadow-sm border border-gray-50 dark:border-slate-800 relative overflow-hidden transition-colors duration-500">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative z-10">
            <div className="flex flex-col gap-6 max-w-4xl">
              <div className="w-12 h-12 bg-[#A98842] text-white rounded-xl flex items-center justify-center shadow-lg dark:shadow-none transition-colors">
                <Zap size={24} />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white transition-colors">
                {content.overview.title}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-medium transition-colors">
                {content.overview.desc}
              </p>
              <p className="text-[#A98842] font-bold text-lg leading-relaxed italic border-l-4 border-[#A98842] pl-6 transition-colors">
                {content.overview.highlight}
              </p>
            </div>
            <span className="bg-[#FFF9E6] dark:bg-[#A98842]/20 text-[#A98842] px-4 py-1.5 rounded-md text-[9px] font-black tracking-widest transition-colors">
              {content.overview.badge}
            </span>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID (4 COLUMNS) --- */}
      <section className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {content.grids.map((grid, i) => (
            <div 
              key={i} 
              className="bg-white dark:bg-slate-900 rounded-[40px] p-8 md:p-12 shadow-sm border border-gray-50 dark:border-slate-800 transition-all duration-500 hover:shadow-xl hover:border-[#A98842]/30 group"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-[#A98842]/10 text-[#A98842] rounded-xl flex items-center justify-center group-hover:bg-[#A98842] group-hover:text-white transition-colors">
                  {grid.icon}
                </div>
                <span className="text-[#A98842] text-[9px] font-black tracking-widest opacity-40 group-hover:opacity-100 transition-opacity uppercase">
                  {grid.badge}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-8 tracking-tight transition-colors">
                {grid.title}
              </h3>
              
              <div className="space-y-3">
                {grid.items.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start gap-4 bg-[#faf9f6]/60 dark:bg-slate-800/50 p-4 rounded-2xl border border-gray-50 dark:border-slate-700/50 group-hover:bg-white dark:group-hover:bg-slate-800 transition-all duration-300"
                  >
                    <Check size={16} className="text-[#A98842] mt-1 shrink-0" strokeWidth={3} />
                    <span className="text-gray-700 dark:text-gray-200 text-sm font-bold tracking-tight leading-snug transition-colors">
                      {item}
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

export default TequilaAccelerator;