import React, { useMemo } from "react";
import DottedMap from "dotted-map";
import { Globe2, ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Locations = () => {
  const mapSvg = useMemo(() => {
    const map = new DottedMap({ height: 60, grid: "diagonal" });
    
    map.addPin({ lat: 40, lng: -74, svgOptions: { radius: 0 } }); 
    map.addPin({ lat: 10, lng: 100, svgOptions: { radius: 0 } }); 

    return map.getSVG({
      radius: 0.22,
      color: "#3f3f46", 
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, []);

  const mapData = [
    { name: "USA", city: "New York", top: "35%", left: "20%" },
    { name: "Germany", city: "Frankfurt", top: "28%", left: "50%" },
    { name: "India", city: "Delhi", top: "50%", left: "72%" },
    { name: "Singapore", city: "Singapore", top: "65%", left: "79%" },
    { name: "Japan", city: "Tokyo", top: "44%", left: "90%" },
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[800px] h-[300px] md:h-[500px] bg-[#f59e0b]/5 blur-[80px] md:blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-[9px] md:text-[10px] mb-6 uppercase tracking-[0.2em]"
            style={{ fontFamily: "'Zen Dots', sans-serif" }}
          >
            <Globe2 size={12} /> Global Infrastructure
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl mb-4 uppercase text-white" style={{ fontFamily: "'Sigmar', cursive" }}>
            The <span className="text-[#f59e0b]">FRE4K</span> Network
          </h2>
        </div>

        <div className="relative w-full overflow-x-auto md:overflow-x-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-12 cursor-grab md:cursor-default active:cursor-grabbing md:active:cursor-default">
          <div className="relative min-w-[850px] md:min-w-full aspect-[21/9] flex items-center justify-center mx-auto">
            
            <div 
              className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none"
              dangerouslySetInnerHTML={{ __html: mapSvg }}
            />

            {mapData.map((loc, i) => (
              <motion.div
                key={i}
                className="absolute z-10"
                style={{ top: loc.top, left: loc.left }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              >
                <div className="relative flex flex-col items-center group">
                  <div className="relative flex items-center justify-center">
                    {/* --- REFINED SLOW PULSE --- */}
                    <div className="absolute w-5 h-5 md:w-8 md:h-8 bg-[#f59e0b]/30 rounded-full animate-luxury-pulse" />
                    <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-[#f59e0b] rounded-full shadow-[0_0_12px_#f59e0b]" />
                  </div>
                  
                  <div className="absolute -top-10 whitespace-nowrap md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-zinc-900/90 border border-white/10 px-2 py-1 rounded-md backdrop-blur-md shadow-2xl">
                      <p className="text-[9px] md:text-[10px] text-[#f59e0b] font-bold uppercase tracking-widest" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
                        {loc.city}
                      </p>
                    </div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-zinc-900 mx-auto" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex overflow-x-auto md:overflow-x-hidden md:grid md:grid-cols-5 gap-4 md:gap-8 mt-4 md:mt-20 pt-10 border-t border-white/5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {mapData.map((loc, i) => (
            <div 
              key={i} 
              className="min-w-[140px] md:min-w-0 flex-shrink-0 bg-zinc-900/20 md:bg-transparent p-4 md:p-0 rounded-2xl border border-white/[0.03] md:border-0 text-center"
            >
              <h4 className="text-[9px] md:text-[10px] text-zinc-600 uppercase tracking-widest mb-1">{loc.name}</h4>
              <p className="text-[10px] md:text-xs text-white uppercase font-bold mb-2" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
                {loc.city}
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_6px_rgba(34,197,94,0.4)]" />
                <span className="text-[9px] text-zinc-500 uppercase font-bold tracking-tighter">Latency: Low</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes luxuryPulse {
          0% {
            transform: scale(0.8);
            opacity: 0.6;
          }
          100% {
            transform: scale(2.2);
            opacity: 0;
          }
        }
        .animate-luxury-pulse {
          animation: luxuryPulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
    </section>
  );
};

export default Locations;