import React from 'react';
import { Package, Globe, Check } from 'lucide-react';
import TradeHeroImg from '../assets/images/blog/trade.png';

const TradePromotion = () => {

  const tradeContent = {
    title: "Trade Promotion",
    subtitle: "Connecting exporters with buyers, navigating regulations, and coordinating missions that deliver results.",
    sections: [
      {
        type: "Mexican Exports to India",
        badge: "EXPORTS TO INDIA",
        icon: "Package",
        desc: "MIBC supports Mexican exporters with tailored intelligence, matchmaking, and on-ground execution to unlock opportunities in India's high-growth markets.",
        points: [
          "Buyer identification and market intelligence",
          "Trade mission coordination and B2B matchmaking",
          "Participation support for Indian exhibitions",
          "Regulatory and certification guidance",
          "Distributor and channel partner mapping"
        ]
      },
      {
        type: "Indian Exports to México",
        badge: "EXPORTS TO MÉXICO",
        icon: "Globe",
        desc: "MIBC enables Indian exporters to navigate Mexican market requirements and build trusted importer relationships.",
        points: [
          "Market access advisory and tariff analysis",
          "Importer identification and introductions",
          "Compliance and documentation support",
          "Logistics and customs navigation"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-20 pb-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-[#A98842] mb-4 uppercase tracking-tight">
            Trade Promotion
          </h1>
          <p className="max-w-3xl mx-auto text-gray-900 font-bold text-[11px] md:text-xs leading-relaxed uppercase tracking-widest opacity-80">
            {tradeContent.subtitle}
          </p>
        </div>
      </section>

      {/* --- HERO IMAGE SECTION --- */}
      <section className="container mx-auto px-4 mb-20">
        <div className="rounded-[30px] overflow-hidden shadow-2xl border-4 border-white">
          <img 
            src={TradeHeroImg} 
            alt="Trade Promotion Bilateral" 
            className="w-full h-auto md:max-h-[600px] object-cover"
          />
        </div>
      </section>

      {/* --- BILATERAL TRADE CARDS --- */}
      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {tradeContent.sections.map((section, idx) => (
              <div key={idx} className="bg-white rounded-[40px] p-8 md:p-14 shadow-[0_20px_60px_rgba(0,0,0,0.03)] flex flex-col transition-all duration-500 hover:shadow-xl hover:-translate-y-2 border border-transparent hover:border-[#A98842]/10">
                
                {/* Header Badge & Icon */}
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 bg-[#A98842] text-white rounded-2xl flex items-center justify-center shadow-lg transition-transform group-hover:rotate-6">
                    {section.icon === "Package" ? <Package size={28} /> : <Globe size={28} />}
                  </div>
                  <span className={`px-5 py-2 rounded-full text-[9px] font-black tracking-[0.2em] ${idx === 0 ? 'bg-[#FFF9E6] text-[#A98842]' : 'bg-[#1a1a1a] text-white'}`}>
                    {section.badge}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">
                  For {section.type}
                </h2>
                
                {/* Fixed Description Alignment */}
                <p className="text-gray-600 text-[15px] leading-relaxed mb-10 font-medium md:min-h-[70px]">
                  {section.desc}
                </p>

                {/* Checklist Points - Fixed spacing and alignment */}
                <div className="space-y-4 flex-1 flex flex-col justify-start">
                  {section.points.map((point, i) => (
                    <div key={i} className="flex items-center gap-4 bg-[#faf9f6]/60 p-5 rounded-2xl border border-gray-50 hover:bg-white hover:shadow-sm transition-all">
                      <div className="shrink-0 text-[#A98842]">
                        <Check size={18} strokeWidth={3} />
                      </div>
                      <span className="text-gray-700 text-sm font-bold tracking-tight">
                        {point}
                      </span>
                    </div>
                  ))}
                  {/* Empty Spacer to push content up if one card has fewer points */}
                  <div className="flex-grow"></div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
};

export default TradePromotion;