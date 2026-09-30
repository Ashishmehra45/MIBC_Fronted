
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/images/logo/logo-dark.png";

const Preloader = () => {
  // Check whether preloader has already been shown in this session
  const [isLoading, setIsLoading] = useState(() => {
    return sessionStorage.getItem("mibc-preloader-shown") !== "true";
  });

  useEffect(() => {
    // Agar current session me already show ho chuka hai
    if (!isLoading) {
      document.body.style.overflow = "auto";
      return;
    }

    // Page ko top par rakho
    window.scrollTo(0, 0);

    // Preloader ke time scroll disable
    document.body.style.overflow = "hidden";

    // 2.2 sec baad loader hide
    const timer = setTimeout(() => {
      setIsLoading(false);

      // Mark as shown
      sessionStorage.setItem("mibc-preloader-shown", "true");
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [isLoading]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        document.body.style.overflow = "auto";
      }}
    >
      {isLoading && (
        <motion.div
          key="preloader"
          exit={{
            y: "-100%",
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
         className="fixed inset-0 w-screen h-[100dvh] z-[2147483647] bg-[#111111] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#A98842]/10 rounded-full blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center">

            {/* LOGO */}
            <div className="overflow-hidden pb-4 px-4">
              <motion.img
                src={logo}
                alt="MIBC Logo"
                initial={{
                  y: 80,
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.3,
                }}
                className="h-16 md:h-24 w-auto object-contain brightness-0 invert drop-shadow-[0_10px_20px_rgba(169,136,66,0.3)]"
              />
            </div>

            {/* GOLDEN LINE */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.8,
                ease: "circOut",
                delay: 0.1,
              }}
              className="w-64 md:w-96 h-[2px] bg-[#A98842] origin-center my-1 shadow-[0_0_15px_rgba(169,136,66,0.6)]"
            />

            {/* SUBTITLE */}
            <div className="overflow-hidden pt-4">
              <motion.p
                initial={{
                  y: -40,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.33, 1, 0.68, 1],
                  delay: 0.5,
                }}
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

