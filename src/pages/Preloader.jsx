import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from "../assets/images/logo/logo-dark.png"; 

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 1. Mount hote hi scroll lock kar do aur top pe le aao
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';

    // 2. 2.2 seconds ke baad sirf loader ko hide karne ka trigger do
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2200);

    return () => {
      clearTimeout(timer);
      // Cleanup for safety in case component unmounts unexpectedly
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    // 3. onExitComplete se assure karenge ki scroll tabhi wapas aaye jab slide up poora ho jaye
    <AnimatePresence onExitComplete={() => { document.body.style.overflow = 'auto'; }}>
      {isLoading && (
        <motion.div
          key="preloader"
          // Slide up exit animation
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Cinematic ease
          }}
          // 'inset-0' ki jagah explicit w-screen h-screen taaki slide up me width glitch na aaye
          className="fixed top-0 left-0 w-screen h-[100dvh] z-[9999] bg-[#111111] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Subtle Background Glow for Premium Feel */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A98842]/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 flex flex-col items-center">
            
            {/* LOGO ANIMATION */}
            <div className="overflow-hidden pb-4 px-4">
              <motion.img 
                src={logo} 
                alt="MIBC Logo"
                initial={{ y: 80, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.33, 1, 0.68, 1], delay: 0.3 }}
                className="h-16 md:h-24 w-auto object-contain brightness-0 invert drop-shadow-[0_10px_20px_rgba(169,136,66,0.3)]"
              />
            </div>

            {/* GOLDEN CENTER LINE */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.1 }}
              className="w-64 md:w-96 h-[2px] bg-[#A98842] origin-center my-1 shadow-[0_0_15px_rgba(169,136,66,0.6)]"
            />

            {/* SUBTITLE */}
            <div className="overflow-hidden pt-4 ">
              <motion.p 
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay: 0.5 }}
                // Cleaned up font classes
                className="text-[#A98842] text-[10px] md:text-[13px] uppercase tracking-[0.4em] text-center italic font-semibold"
              >
                Bridging Two Emerging Giants
              </motion.p>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;