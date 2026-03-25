import React from 'react';
import { motion } from 'framer-motion';

const MembershipPlans = () => {
  const plans = [
    {
      title: "Corporate Membership",
      desc: "Ideal for companies looking to expand trade and investment engagement between Mexico and India. Members gain access to sectoral roundtables, market intelligence, networking forums, and structured business and institutional introductions.",
      isHighlighted: false,
    },
    {
      title: "Founding Member",
      badge: "EXCLUSIVE",
      desc: "Designed for industry leaders seeking strategic influence and priority access. Founding Members receive white-glove facilitation, including exclusive site selection support, curated high-level matchmaking, and direct engagement with senior government and policy stakeholders.",
      isHighlighted: true,
    },
    {
      title: "Associate Membership",
      desc: "Created for SMEs and emerging enterprises exploring bilateral opportunities. Members benefit from market-entry guidance, opportunity alerts, open programs, and inclusion in the MIBC business network and member directory.",
      isHighlighted: false,
    }
  ];

  // Entry Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.3 } }
  };

  return (
    <section className="py-24 bg-[#faf9f6] relative font-sans overflow-hidden">
      {/* Soft Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#A98842]/5 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 max-w-7xl">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/60 text-[#A98842] px-6 py-1.5 rounded-lg text-[12px] font-black uppercase tracking-widest shadow-sm inline-block mb-4 border border-[#A98842]/10"
          >
            Membership Plans
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-950 tracking-tight"
          >
            Choose Your Membership Tier
          </motion.h2>
        </div>

        {/* --- PRICING CARDS --- */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          // items-stretch ensures all cards are the exact same height
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {plans.map((plan, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                scale: plan.isHighlighted ? 1.04 : 1.02, 
                transition: { type: "spring", stiffness: 300, damping: 15 } 
              }}
              className={`relative flex flex-col w-full rounded-[20px] transition-colors duration-300 
                ${plan.isHighlighted 
                  ? 'bg-[#181818] border-[3px] border-[#A98842] shadow-2xl z-10 lg:scale-105 py-12 px-8 lg:px-10' 
                  : 'bg-white border border-gray-100 shadow-[0_15px_40px_rgba(0,0,0,0.04)] py-10 px-8 z-0'
                }`}
            >
              {/* h-full and justify-between properly separates text and the button */}
              <div className="text-center flex flex-col h-full justify-between items-center">
                
                {/* Top Content (Title + Badge + Desc) */}
                <div className="flex flex-col items-center w-full">
                  <h3 className={`text-[22px] font-black mb-2 ${plan.isHighlighted ? 'text-[#A98842]' : 'text-[#A98842]'}`}>
                    {plan.title}
                  </h3>

                  {/* Exclusive Badge */}
                  {plan.badge && (
                    <div className="mb-2">
                      <span className="bg-[#A98842] text-black text-[11px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full shadow-md">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  {/* Description with proper line height for readability */}
                  <p className={`text-[14px] leading-[1.8] font-medium ${plan.isHighlighted ? 'text-gray-300 mt-2' : 'text-gray-900 mt-2'}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* Apply Button (Pushed to bottom) */}
                <div className=" w-full mt-2 flex justify-center">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95, transition: { type: "spring", stiffness: 400, damping: 15 } }} 
                    className={`w-[160px] py-3.5 rounded-lg font-bold text-[13px] transition-colors
                      ${plan.isHighlighted 
                        ? 'bg-white text-[#A98842] shadow-[0_10px_20px_rgba(169,136,66,0.2)] hover:bg-gray-100' 
                        : 'bg-transparent border border-gray-300 text-gray-900 hover:border-[#A98842] hover:text-[#A98842]'
                      }`}
                  >
                    Apply Now
                  </motion.button>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default MembershipPlans;