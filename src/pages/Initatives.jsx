import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

// Images Import (Apne hisaab se paths check kar lena)
import TequilaImg from '../assets/images/blog/tachila.png';
import LaunchpadImg from '../assets/images/blog/connect.png';
import EventsImg from '../assets/images/banner/annualeventcalendar.jpg';

const Initiatives = () => {

  const initiativesList = [
    {
      step: "01. Flagship Program",
      title: "Tequila Accelerator",
      desc: "A comprehensive market entry program dedicated to helping Mexican Tequila and Spirits brands establish a dominant presence in India's rapidly growing premium beverage market.",
      image: TequilaImg,
      align: "left", // Image left, text right
      features: [
        { title: "Market Intelligence", desc: "In-depth consumer segmentation, pricing strategy, and competitive positioning." },
        { title: "Regulatory Navigation", desc: "State-by-state excise licensing, FSSAI compliance, and import customs handling." },
        { title: "Distribution Development", desc: "Direct introductions to India's leading spirits importers and HoReCa partners." },
        { title: "Brand Launch", desc: "End-to-end event coordination, B2B trade outreach and influencer campaigns." }
      ],
      buttonLink: "/initiatives/tequila-accelerator"
    },
    {
      step: "02. Soft Landing Platform",
      title: "India–México Launchpad",
      desc: "A structured soft-landing ecosystem enabling startups and growth stage companies to seamlessly establish cross-border operations without the typical market-entry risks.",
      image: LaunchpadImg,
      align: "right", // Text left, image right
      features: [
        { title: "For Mexican Startups", desc: "Market validation, physical/virtual office setup in India, and introductions to local banking & VC networks." },
        { title: "For Indian Startups", desc: "USMCA market access strategy, soft-landing infrastructure in México, and local talent acquisition." },
        { title: "Legal & Tax Structuring", desc: "End-to-end support for entity incorporation and regulatory compliance in both nations." },
        { title: "Ecosystem Access", desc: "Direct integration with top incubators, government grants, and B2B customer networks." }
      ],
      buttonLink: "/initiatives/launchpad"
    },
    {
      step: "03. B2B & G2G Engagements",
      title: "High-Impact Events & Roundtables",
      desc: "Our events serve as a critical bridge for cross-border collaboration, focusing on actionable dialogue and ensuring that every interaction translates into a tangible business outcome.",
      image: EventsImg,
      align: "left", // Image left, text right
      features: [
        { title: "Sector-Specific CEO Dialogues", desc: "Focused roundtables across IT, Pharmaceuticals, Automotive, and Food & Beverages." },
        { title: "Economic Partnership Forum", desc: "Our annual flagship summit celebrating and advancing India-México trade relations." },
        { title: "Curated Trade Delegations", desc: "Strategic inbound and outbound missions for direct B2B matchmaking and site visits." },
        { title: "Policy Briefings", desc: "Closed-door sessions with government officials to navigate bilateral compliance and frameworks." }
      ],
      buttonLink: "/initiatives/events"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] font-sans overflow-x-hidden">
      
      {/* --- HEADER SECTION --- */}
      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
         {/* Subtle Radial Gradient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(169,136,66,0.05)_0%,transparent_50%)] -z-10"></div>
        
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-white/60 text-[#A98842] px-6 py-2 rounded-xl text-[12px] font-black uppercase tracking-widest shadow-sm border border-[#A98842]/10 inline-block mb-6">
              Driving Growth
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#A98842] mb-6 tracking-tight">
              Strategic Initiatives
            </h1>
            <p className="text-gray-800 text-base md:text-lg leading-relaxed font-medium">
              MIBC is committed to transforming bilateral potential into tangible outcomes. Explore our flagship programs designed to provide structured market entry, foster startup growth, and create high-level engagements across the India-México corridor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- INITIATIVES LIST SECTION (Alternating Layout) --- */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-24 md:gap-32">
            
            {initiativesList.map((item, index) => (
              <div key={index} className="relative">
                
                {/* Visual Separator between sections (except the first one) */}
                {index !== 0 && (
                   <div className="absolute -top-12 md:-top-16 left-1/2 -translate-x-1/2 w-full max-w-[800px] flex items-center justify-center opacity-30">
                     <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#A98842] to-transparent"></div>
                   </div>
                )}

                <motion.div 
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.8 }}
                  className={`flex flex-col md:flex-row items-center gap-10 md:gap-16 ${item.align === 'right' ? 'md:flex-row-reverse' : ''}`}
                >
                  
                  {/* IMAGE SIDE */}
                  <div className="w-full md:w-1/2">
                    <div className="rounded-[32px] overflow-hidden shadow-2xl relative group">
                      <div className="absolute inset-0 bg-[#A98842]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-auto max-h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* CONTENT SIDE */}
                  <div className="w-full md:w-1/2 flex flex-col items-start text-left">
                    
                    <span className="text-[#A98842] font-bold text-[11px] tracking-widest uppercase mb-3 block">
                      {item.step}
                    </span>
                    
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
                      {item.title}
                    </h2>
                    
                    <p className="text-gray-800 text-[14px] md:text-[15px] font-medium leading-relaxed mb-8">
                      {item.desc}
                    </p>

                    <div className="space-y-4 mb-10 w-full">
                      {item.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-3">
                          <Check className="text-[#A98842] shrink-0 mt-0.5" size={18} strokeWidth={3} />
                          <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed">
                            <span className="font-bold text-[#A98842]">{feature.title}: </span>
                            <span className="font-medium">{feature.desc}</span>
                          </p>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={item.buttonLink} 
                      className="bg-[#A98842] hover:bg-[#b38e44] text-white px-8 py-3 rounded-lg font-bold text-[12px] uppercase tracking-widest transition-all shadow-md active:scale-95 inline-block"
                    >
                      Learn More
                    </a>
                    
                  </div>

                </motion.div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Initiatives;