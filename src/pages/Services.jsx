import React from 'react';
import { motion } from 'framer-motion';
import { Home, Globe, Users, BarChart3, ChevronRight, CheckCircle2, Check } from 'lucide-react';

// Images Import
import ServicesHeroBg from '../assets/images/services/empty-office-workplace-with-table-chair.jpg (1).jpeg';
import InvestImg from '../assets/images/services/investment.jpeg';
import TradeImg from '../assets/images/services/Trade.jpeg';
import DelegationImg from '../assets/images/services/delegstions.jpeg';
import IntelImg from '../assets/images/services/intelligance.jpeg';

const Services = () => {

  const deliveryCards = [
    { title: "Investment Facilitation", icon: <Home size={32} />, img: InvestImg, backContent: ["Market Entry Strategy", "Site Selection & Real Estate", "Entity Incorporation", "Regulatory Compliance"] },
    { title: "Trade Promotion", icon: <Globe size={32} />, img: TradeImg, backContent: ["Buyer-Seller Matchmaking", "Export Documentation", "Market Intelligence Reports", "Customs & Logistics Advisory"] },
    { title: "Delegation Facilitation", icon: <Users size={32} />, img: DelegationImg, backContent: ["High-level B2B Meetings", "VIP Protocol & Logistics", "Government Liaising", "Site & Factory Visits"] },
    { title: "Intelligence & Advocacy", icon: <BarChart3 size={32} />, img: IntelImg, backContent: ["Sector Deep-dives", "Policy Representation", "Commercial Intelligence", "Market Access Advocacy"] }
  ];

  const processSteps = [
    { title: "Discovery & Assessment", desc: "Initial consultation, market opportunity assessment, regulatory landscape review, competitor analysis, and feasibility report delivery.", align: "left", step: "01" },
    { title: "Strategy & Planning", desc: "Market entry strategy development, state/city selection, partner identification criteria, regulatory roadmap, and investment structure recommendations.", align: "right", step: "02" },
    { title: "Execution & Facilitation", desc: "Government introductions, partner meetings, due diligence support, license applications, site visits, and contract negotiation assistance.", align: "left", step: "03" },
    { title: "Launch & Scale", desc: "Operational launch coordination, trade activation, performance monitoring, expansion planning, and ongoing advisory support.", align: "right", step: "04" }
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans overflow-x-hidden">
      
      {/* --- SECTION 1: HERO --- */}
      <section className="relative h-[600px] flex items-center justify-center text-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img src={ServicesHeroBg} alt="Our Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60"></div>
        </motion.div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="border border-[#A98842] text-[#A98842] px-6 py-1.5 rounded-full text-[11px] font-black uppercase mb-8 inline-block bg-[#A98842]/5"
          >
            What We Do
          </motion.span>
          <motion.h1 
            {...fadeInUp}
            className="text-white text-5xl md:text-8xl font-black mb-8 tracking-tighter"
          >
            Our <span className="text-[#A98842]">Services</span>
          </motion.h1>
          <motion.p 
            {...fadeInUp}
            transition={{ delay: 0.3 }}
            className="max-w-4xl mx-auto text-gray-200 text-lg md:text-xl font-medium leading-relaxed mb-12 opacity-90"
          >
            MIBC delivers <span className="text-white font-bold italic">institutional-grade support</span> that traditional chambers and consultants cannot replicate—combining government coordination, operational networks, and sector expertise built over <span className="text-[#A98842] font-bold">15 years of bilateral trade leadership</span>.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#A98842] text-white px-10 py-4 rounded-lg font-black text-sm uppercase tracking-widest shadow-[0_10px_30px_rgba(169,136,66,0.3)] transition-all"
          >
            Explore Solutions
          </motion.button>
        </div>
      </section>

      {/* --- SECTION 2: WHAT WE DELIVER (Flip Cards) --- */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">What We Deliver</h2>
            <p className="max-w-2xl mx-auto text-gray-500 font-medium leading-relaxed">
              MIBC goes beyond traditional chamber services. We provide institutional-grade trade promotion, investment facilitation, and market entry support—from initial assessment through operational launch.
            </p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {deliveryCards.map((card, idx) => (
              <motion.div 
                key={idx}
                variants={fadeInUp}
                className="group h-[450px] [perspective:1000px]"
              >
                <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] cursor-pointer">
                  {/* FRONT */}
                  <div className="absolute inset-0 h-full w-full rounded-[32px] overflow-hidden [backface-visibility:hidden]">
                    <img src={card.img} className="h-full w-full object-cover" alt={card.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col items-center justify-end p-8 text-center pb-12">
                      <div className="text-[#A98842] mb-4">{card.icon}</div>
                      <h3 className="text-white text-2xl font-black mb-4">{card.title}</h3>
                      <p className="text-[#A98842] text-[10px] font-black tracking-widest uppercase">Hover to Explore</p>
                    </div>
                  </div>
                  {/* BACK */}
                  <div className="absolute inset-0 h-full w-full rounded-[32px] bg-[#1a1a1a] p-10 flex flex-col justify-center [transform:rotateY(180deg)] [backface-visibility:hidden] border-2 border-[#A98842]/30">
                    <h3 className="text-[#A98842] text-xl font-black mb-8 border-b border-[#A98842]/20 pb-4">{card.title}</h3>
                    <ul className="space-y-4">
                      {card.backContent.map((point, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-300 text-sm font-bold">
                          <ChevronRight size={16} className="text-[#A98842] shrink-0 mt-0.5" /> 
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- SECTION 3: OUR PROCESS (Animated Timeline) --- */}
      <section className="py-24 bg-[#faf9f6] relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#A98842]/5 rounded-full blur-[100px] -z-0"></div>
        
        <div className="container mx-auto max-w-6xl px-4 relative z-10">
          <motion.div {...fadeInUp} className="text-center mb-24">
            <span className="text-[#A98842] text-[11px] font-black tracking-[0.3em] uppercase mb-4 block">Our Process</span>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter mb-8 leading-tight">
              How We <span className="text-[#A98842]">Work</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-500 font-medium text-lg opacity-80 leading-relaxed">
              A structured engagement model designed for cross-border success—from assessment through scale.
            </p>
          </motion.div>

          <div className="relative">
            {/* Center Line */}
            <motion.div 
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              viewport={{ once: true }}
              className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#A98842]/0 via-[#A98842]/40 to-[#A98842]/0 -translate-x-1/2 origin-top"
            ></motion.div>
            
            <div className="space-y-20">
              {processSteps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`flex flex-col md:flex-row items-center justify-between w-full ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="w-full md:w-[45%] group">
                    <div className={`bg-white p-10 rounded-[35px] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-gray-100 hover:border-[#A98842]/20 transition-all duration-500 hover:shadow-2xl relative ${step.align === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                      <span className={`absolute top-6 font-black text-7xl text-gray-400/5 select-none ${step.align === 'left' ? 'left-8' : 'right-8'}`}>
                        {step.step}
                      </span>
                      <h4 className="text-2xl font-black text-gray-950 mb-4 tracking-tight group-hover:text-[#A98842] transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed font-medium">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Center Circle */}
                  <div className="relative z-10 flex items-center justify-center py-8 md:py-0">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.5 }}
                      className="w-14 h-14 rounded-full bg-white border-[6px] border-[#faf9f6] shadow-xl flex items-center justify-center relative group-hover:scale-110 transition-transform"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#A98842] flex items-center justify-center text-white font-black text-[10px] shadow-inner">
                        {step.step}
                      </div>
                      <div className="absolute inset-0 rounded-full bg-[#A98842]/20 animate-ping -z-10"></div>
                    </motion.div>
                  </div>
                  <div className="hidden md:block w-[45%]"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 4: TABLE AND ADVANTAGES --- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <span className="text-[#A98842] text-[11px] font-black tracking-widest uppercase mb-4 block">Competitive Differentiation</span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 tracking-tighter">Why MIBC vs. Others</h2>
            <p className="text-gray-500 mt-4 font-medium">What sets us apart from traditional chambers and consultants.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-x-auto rounded-[32px] shadow-2xl mb-24 border border-gray-100"
          >
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-[#1a1a1a] text-white">
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Capability</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Traditional Chambers</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest">Consultants</th>
                  <th className="p-8 font-black uppercase text-xs tracking-widest bg-[#A98842]">MIBC</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {[
                  ["Primary Focus", "Networking events", "Generic advice", "Government-coordinated facilitation"],
                  ["Engagement Model", "Membership directories", "One-time projects", "Long-term institutional partnerships"],
                  ["Government Access", "No direct access", "Limited networks", "Direct channels to policy stakeholders"],
                  ["Sector Coverage", "Generalist", "Sector-agnostic", "Deep expertise: IT, Pharma, Auto, F&B"],
                  ["Success Metrics", "Event attendance", "Reports delivered", "Transactions facilitated, partnerships established"]
                ].map((row, i) => (
                  <motion.tr 
                    key={i} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="p-8 font-black text-gray-950 text-sm">{row[0]}</td>
                    <td className="p-8 text-gray-500 text-sm font-medium">{row[1]}</td>
                    <td className="p-8 text-gray-500 text-sm font-medium">{row[2]}</td>
                    <td className="p-8 font-black text-gray-900 text-sm bg-[#A98842]/5">{row[3]}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* ADVANTAGES GRID */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Institutional Advantages</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "CEO led both México (ProMéxico) & Canada (Ontario) trade offices in India",
              "USD 500M+ in facilitated investment leads (2011-2025)",
              "Direct coordination with Consulates, Embassies, State Governments",
              "Active partnerships: CRT, IMBC, CANIFARMA, CANIETI, CII, FICCI",
              "Outcome-focused: Success = deals closed, not events hosted",
              "15 years of bilateral trade leadership across three governments"
            ].map((text, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#faf9f6] transition-colors"
              >
                <div className="bg-[#A98842] rounded-md p-1 mt-1 shrink-0">
                  <Check className="text-white" size={16} strokeWidth={4} />
                </div>
                <p className="text-gray-600 text-[14px] font-medium leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;