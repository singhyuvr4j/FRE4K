import React, { useState, useEffect } from "react";
import { ArrowRight, Bot, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GamesHero from "./GamesHero"; // Ensure the file path matches your project structure

const Hero = () => {
  const words = ["Game", "Cloud"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black">
      {/* HEADER SECTION */}
      <section className="relative pt-48 pb-20 overflow-hidden bg-black flex flex-col justify-start">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#f59e0b]/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-zen">
          
          {/* CENTERED BADGE SECTION */}
          <div className="flex w-full items-center justify-center mb-10">
            <div className="flex items-center gap-3">
              <Bot size={24} className="text-[#f59e0b] shrink-0 drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]" />
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-medium bg-[#f59e0b]/10 text-[#f59e0b] ring-1 ring-[#f59e0b]/20 tracking-[0.2em] whitespace-nowrap"
              >
                AI MANAGED SERVICES
              </motion.span>
            </div>
          </div>

          {/* Two-Line Title */}
          <div className="flex flex-col items-center mb-10">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-3xl md:text-6xl text-white tracking-wider mb-4 uppercase"
              style={{ fontFamily: "'Sigmar', cursive" }}
            >
              High Performance Ryzen
            </motion.h1>

            <div className="text-3xl md:text-6xl tracking-tighter flex items-center justify-center">
              <div className="relative inline-flex justify-end items-center min-w-[120px] md:min-w-[240px] mr-3 md:mr-5">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={words[index]}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-[#f59e0b] drop-shadow-[0_0_20px_rgba(245,158,11,0.5)] uppercase"
                    style={{ fontFamily: "'Sigmar', cursive" }}
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="text-white uppercase" style={{ fontFamily: "'Sigmar', cursive" }}>Servers</span>
            </div>
          </div>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm md:text-lg text-zinc-500 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            Unleash elite performance with dedicated resources and 
            enterprise-grade DDoS protection.
          </motion.p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/games"
              className="w-full sm:w-auto px-10 py-5 rounded-xl bg-[#f59e0b] hover:bg-[#f59e0b]/90 text-black text-xs font-bold transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_30px_rgba(245,158,11,0.25)] tracking-widest"
              style={{ fontFamily: "'Zen Dots', sans-serif" }}
            >
              GET STARTED
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="/about"
              className="w-full sm:w-auto px-10 py-5 rounded-xl bg-zinc-900/50 border border-zinc-800 text-white text-xs hover:bg-zinc-800 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-3 group tracking-widest"
              style={{ fontFamily: "'Zen Dots', sans-serif" }}
            >
              <Info className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors" />
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      {/* GAME SELECTION SECTION */}
    </div>
  );
};

export default Hero;