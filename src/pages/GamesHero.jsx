import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const GamesHero = () => {
  const featuredGames = [
    { name: "Minecraft", image: "/images/icons/minecraft.png", price: "1.00", unit: "GB" },
    { name: "CounterStrike 2", image: "/images/icons/counterstrike.webp", price: "5.00", unit: "Slot" },
    { name: "Rust", image: "https://wallpapers.com/images/featured/rust-game-fvem7wo2c4nc4rfq.webp", price: "12.00", unit: "Server" },
  ];

  return (
    // Removed 'border-t border-white/5' for a seamless blend
    <section className="py-16 md:py-20 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl mb-4 uppercase"
            style={{ fontFamily: "'Sigmar', cursive" }}
          >
            Deploy Your <span className="text-[#f59e0b]">World</span>
          </motion.h2>
          
          {/* FLOATING EXPERIMENTAL NOTICE */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="w-full py-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 border-y border-white/[0.03]"
          >
            <span className="text-red-500 font-black uppercase text-[10px] tracking-[0.2em] animate-pulse flex items-center gap-2">
              <AlertTriangle size={12} /> Experimental
            </span>
            <p className="text-zinc-500 text-[10px] md:text-xs font-medium tracking-wide">
              Use <span className="text-white">Try Before You Buy</span>: Deploy at any location for <span className="text-red-500">30 MIN</span> free.
            </p>
          </motion.div>
        </div>

        {/* Compact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredGames.map((game, index) => (
            <motion.div
              key={game.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative rounded-[2rem] bg-zinc-950/40 border border-white/5 overflow-hidden hover:border-[#f59e0b]/30 transition-all duration-500"
            >
              <div 
                className="h-48 w-full relative"
                style={{
                  WebkitMaskImage: 'linear-gradient(to top, transparent 5%, black 80%)',
                  maskImage: 'linear-gradient(to top, transparent 5%, black 80%)'
                }}
              >
                <img src={game.image} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-700" alt="" />
              </div>

              <div className="p-6 -mt-8 relative z-10">
                <h3 className="text-lg md:text-xl mb-1 uppercase text-white" style={{ fontFamily: "'Zen Dots', sans-serif" }}>{game.name}</h3>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[#f59e0b] font-bold text-sm tracking-tighter" style={{ fontFamily: "'Zen Dots', sans-serif" }}>${game.price}</span>
                  <span className="text-zinc-600 text-[9px] uppercase font-bold">/ {game.unit}</span>
                </div>
                <button className="w-full py-3.5 rounded-xl bg-white text-black text-[10px] uppercase font-black tracking-[0.2em] hover:bg-[#f59e0b] transition-all flex items-center justify-center gap-2">
                  <ShoppingCart size={14} /> View Plans
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BALANCED VIEW MORE LINK */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/games" 
            className="group relative flex items-center gap-3 py-2"
          >
            <span className="text-zinc-500 group-hover:text-white text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em] transition-all duration-500 group-hover:tracking-[0.6em]">
              Explore Full Library
            </span>
            <ArrowRight size={14} className="text-[#f59e0b] group-hover:translate-x-2 transition-transform duration-300" />
            
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-[#f59e0b] to-transparent group-hover:w-full transition-all duration-700 opacity-50" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default GamesHero;