import React from 'react';

// Images Import (Apne folder ke hisaab se path check kar lena)
import SectorHeroBg from '../assets/images/bg/sector-bg.jpeg';
import ITImg from '../assets/images/blog-grid/IT.jpg';
import PharmaImg from '../assets/images/blog-grid/pharma-Picsart-AiImageEnhancer.jpg';
import AutoImg from '../assets/images/blog-grid/automotive.jpg';
import EnergyImg from '../assets/images/blog-grid/E&M.png';
import AeroImg from '../assets/images/blog-grid/defence.png';
import ElectroImg from '../assets/images/blog-grid/electronic.jpg';
import AgriImg from '../assets/images/blog-grid/F&B.jpg';

const Sectors = () => {

  const sectorsData = {
    hero: {
      badge: "Sectors",
      title: "Focus Sectors",
      desc: "MIBC delivers strategic support in sectors where bilateral trade is growing, investment is accelerating, and collaboration is poised to scale."
    },
    category1: {
      badge: "Category 1",
      title: "Indian Investment into México",
      cards: [
        {
          title: "Information Technology",
          image: ITImg,
          details: [
            { label: "OPPORTUNITY", value: "Nearshore delivery for North America via USMCA" },
            { label: "KEY ACTIVITIES", value: "Software, IT Services, BPO, Engineering R&D" },
            { label: "WHY MÉXICO", value: "US time zones, lower costs, USMCA access" },
            { label: "INDIAN PLAYERS", value: "TCS, Infosys, Wipro, HCL, Tech Mahindra" }
          ]
        },
        {
          title: "Pharmaceuticals",
          image: PharmaImg,
          details: [
            { label: "OPPORTUNITY", value: "Generic manufacturing & LATAM access" },
            { label: "KEY ACTIVITIES", value: "APIs, generics, clinical research, vaccines" },
            { label: "WHY MÉXICO", value: "LATAM gateway, strong regulation, rising healthcare" },
            { label: "INDIAN PLAYERS", value: "Sun Pharma, Dr. Reddy’s, Lupin, Cipla" }
          ]
        },
        {
          title: "Automotive & Components",
          image: AutoImg,
          details: [
            { label: "OPPORTUNITY", value: "EV supply chain & Tier-1 operations" },
            { label: "KEY ACTIVITIES", value: "EV parts, wiring harnesses, castings" },
            { label: "WHY MÉXICO", value: "Detroit OEM access, auto cluster, USMCA rules" },
            { label: "INDIAN PLAYERS", value: "Motherson Sumi, Tata AutoComp, Bharat Forge" }
          ]
        }
      ]
    },
    category2: {
      badge: "Category 2",
      title: "Mexican Exports to India",
      cards: [
        {
          title: "Energy & Minerals",
          image: EnergyImg,
          details: [
            { label: "PRODUCTS", value: "Crude oil, refined fuels, critical minerals" },
            { label: "TRADE VALUE", value: "Largest México → India export segment" },
            { label: "OPPORTUNITY", value: "Energy diversification & manufacturing" }
          ]
        },
        {
          title: "Aerospace & Defense",
          image: AeroImg,
          details: [
            { label: "PRODUCTS", value: "Aircraft parts, avionics, defense equipment" },
            { label: "TRADE VALUE", value: "Fastest growing export segment" },
            { label: "OPPORTUNITY", value: "Make in India, offsets, MRO expansion" }
          ]
        },
        {
          title: "Electronics & Telecom",
          image: ElectroImg,
          details: [
            { label: "PRODUCTS", value: "Telecom hardware, components, semiconductors" },
            { label: "OPPORTUNITY", value: "India manufacturing push, 5G rollout" },
            { label: "FOCUS", value: "Semiconductor mission & supply chains" }
          ]
        },
        {
          title: "Agri-Food & Beverages",
          image: AgriImg,
          details: [
            { label: "PRODUCTS", value: "Tequila, mezcal, beer, processed foods" },
            { label: "TRADE VALUE", value: "High-growth premium category" },
            { label: "OPPORTUNITY", value: "India's premium spirits & retail expansion" }
          ]
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans">
      
      {/* --- HERO SECTION --- */}
      <section className="relative h-[650px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={SectorHeroBg} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <span className="bg-white text-[#A98842] px-5 py-1.5 rounded-sm text-[11px] font-black uppercase tracking-[0.3em] mb-8 inline-block shadow-lg">
            {sectorsData.hero.badge}
          </span>
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight">
            {sectorsData.hero.title}
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-lg md:text-xl leading-relaxed font-medium opacity-90">
            {sectorsData.hero.desc}
          </p>
        </div>
      </section>

      {/* --- CATEGORY 1: INDIAN INVESTMENT --- */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <span className="bg-[#f2f2f2] text-[#A98842] px-4 py-1 rounded text-[11px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              {sectorsData.category1.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
              {sectorsData.category1.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectorsData.category1.cards.map((card, idx) => (
              <SectorCard key={idx} card={card} />
            ))}
          </div>
        </div>
      </section>

      {/* --- CATEGORY 2: MEXICAN EXPORTS --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[90rem]">
          <div className="text-center mb-16">
            <span className="bg-[#f2f2f2] text-[#A98842] px-4 py-1 rounded text-[11px] font-bold uppercase tracking-[0.2em] mb-4 inline-block">
              {sectorsData.category2.badge}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1a1a1a] tracking-tight">
              {sectorsData.category2.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectorsData.category2.cards.map((card, idx) => (
              <SectorCard key={idx} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Reusable Card Component to keep code clean
const SectorCard = ({ card }) => (
  <div className="bg-white rounded-[32px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
    <div className="h-56 overflow-hidden">
      <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    </div>
    <div className="p-8">
      <h3 className="text-xl font-black text-[#1a1a1a] mb-4 tracking-tight border-b-2 border-[#A98842]/20 pb-4">
        {card.title}
      </h3>
      <div className="space-y-4">
        {card.details.map((detail, i) => (
          <div key={i} className="flex flex-col">
            <div className="flex items-center gap-2 mb-1">
               <span className="text-[#A98842] font-black text-[10px]">→</span>
               <span className="text-[#A98842] font-black text-[9px] uppercase tracking-widest leading-none">
                 {detail.label}:
               </span>
            </div>
            <p className="text-gray-700 text-[13px] font-bold leading-relaxed pl-4">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sectors;