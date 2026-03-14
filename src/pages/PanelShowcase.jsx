import React from "react";
import { ArrowRight, Settings, Activity, ShieldCheck, Code2, LayoutPanelLeft, Gamepad2 } from "lucide-react";
import { motion } from "framer-motion";

const PanelShowcase = () => {
  const features = [
    { icon: <Settings className="text-[#f59e0b]" size={18} />, title: "Full Access", desc: "Unrestricted SFTP & File access." },
    { icon: <Activity className="text-[#f59e0b]" size={18} />, title: "Developer Core", desc: "Native Pterodactyl stability." },
    { icon: <LayoutPanelLeft className="text-[#f59e0b]" size={18} />, title: "Verified Theme", desc: "Licensed & Secure UI." },
    { icon: <ShieldCheck className="text-[#f59e0b]" size={18} />, title: "No Bloatware", desc: "Lightweight management tool." }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-black">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[#f59e0b]/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT SIDE: Centered on Mobile, Left-aligned on PC */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div 
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-[10px] font-medium uppercase tracking-[0.2em] mb-6"
                style={{ fontFamily: "'Zen Dots', sans-serif" }}
              >
                <Code2 size={14} /> 100% Open Source Core
              </div>
              
              <h2 
                className="text-3xl md:text-5xl lg:text-6xl font-normal mb-6 text-white leading-tight uppercase"
                style={{ fontFamily: "'Sigmar', cursive" }}
              >
                Total <span className="text-[#f59e0b]">Transparency</span> <br className="hidden lg:block" />
                In Every Click
              </h2>
              
              <p className="text-zinc-400 text-sm md:text-lg mb-8 leading-relaxed font-medium max-w-2xl">
                We maintain transparency by using the industry-leading 
                <span className="text-white"> Pterodactyl Panel </span> 
                with a <span className="text-[#f59e0b]">verified theme</span> from the developer. 
                No hidden code—just pure, high-performance management.
              </p>
            </motion.div>

            {/* IMAGE: Only shows here on Mobile (Stacked) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:hidden w-full max-w-[450px] mb-12"
            >
              <img 
                src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png" 
                alt="Pterodactyl Panel Mockup"
                className="w-full h-auto drop-shadow-[0_0_40px_rgba(245,158,11,0.2)]"
              />
            </motion.div>

            {/* CARDS: Grid stacks on mobile, stays compact on PC */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 w-full">
              {features.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#f59e0b]/20 transition-all text-left">
                  <div 
                    className="flex items-center gap-2 text-[11px] md:text-xs text-white uppercase tracking-wider mb-2"
                    style={{ fontFamily: "'Zen Dots', sans-serif" }}
                  >
                    {item.icon} {item.title}
                  </div>
                  <p className="text-[10px] md:text-xs text-zinc-500">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex w-full sm:w-auto">
              <a 
                href="https://panel.fre4k.hosting" 
                target="_blank" 
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-[#f59e0b] text-black font-bold hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95 transition-all duration-300 group uppercase text-xs md:text-sm tracking-widest"
                style={{ fontFamily: "'Zen Dots', sans-serif" }}
              >
                <Gamepad2 size={20} /> Access Game Panel <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE: Only shows on PC (lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="hidden lg:flex justify-center"
          >
            <img 
              src="https://cdn.pterodactyl.io/site-assets/mockup-macbook-grey-1.0.png" 
              alt="Pterodactyl Panel Mockup"
              className="w-full h-auto drop-shadow-[0_0_80px_rgba(245,158,11,0.2)] scale-110"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default PanelShowcase;