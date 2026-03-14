import React from "react";
import { Zap, ShieldCheck, Activity, Settings, BarChart3, Cloud, Cpu, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "High Performance",
      description: "Powered by latest generation processors for performance",
      icon: <Cpu className="w-5 h-5" />,
      span: "col-span-1",
    },
    {
      title: "Low Latency",
      description: "Optimized network infrastructure for minimal lag and delay",
      icon: <Zap className="w-5 h-5" />,
      span: "col-span-1",
    },
    {
      title: "Guardian Protocol",
      description: "Experience first-class transparency with ironclad security. We provide real-time node verification and multi-layered DDoS protection, so you know exactly what hardware you're on and that it's safe 24/7.",
      icon: <ShieldCheck className="w-5 h-5" />,
      span: "col-span-1 md:col-span-2",
      isHighlighted: true, 
    },
    {
      title: "Auto Recovery",
      description: "Automatic server recovery and backup systems",
      icon: <Activity className="w-5 h-5" />,
      span: "col-span-1",
    },
    {
      title: "Full Control",
      description: "Complete server control panel with advanced configuration options",
      icon: <Settings className="w-5 h-5" />,
      span: "col-span-1",
    },
    {
      title: "Resource Scaling",
      description: "Dynamic resource allocation based on server demands",
      icon: <BarChart3 className="w-5 h-5" />,
      span: "col-span-1",
    },
    {
      title: "Global Network",
      description: "Worldwide server locations for optimal connectivity",
      icon: <Cloud className="w-5 h-5" />,
      span: "col-span-1",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mb-12">
          {/* Top Badge */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/20 text-[#f59e0b] text-xs md:text-sm font-medium mb-6 uppercase tracking-wider"
            style={{ fontFamily: "'Zen Dots', sans-serif" }}
          >
            <Rocket className="w-3 h-3 md:w-4 md:h-4" />
            <span>We Won't Disappoint</span>
          </motion.div>

          {/* Title */}
          <h2 
            className="text-3xl md:text-5xl font-normal tracking-tight text-white mb-3 uppercase"
            style={{ fontFamily: "'Sigmar', cursive" }}
          >
            Elite <span className="text-[#f59e0b]">Capabilities</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg">
            Everything you need for professional game server hosting
          </p>
        </div>

        {/* Asymmetric CSS Grid - Updated for Mobile Stacking */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`
                relative p-6 rounded-xl bg-[#0f0f11] transition-all duration-300 group
                ${feature.isHighlighted 
                  ? "border border-[#f59e0b]/40 shadow-[0_0_25px_-5px_rgba(245,158,11,0.1)]" 
                  : "border border-white/5 hover:border-[#f59e0b]/30 hover:bg-[#141417]"
                }
                ${feature.span}
              `}
            >
              {/* Icon placed in the top-right corner */}
              <div className={`
                absolute top-6 right-6 p-2 rounded-lg border transition-colors duration-300
                ${feature.isHighlighted 
                  ? "border-[#f59e0b]/30 text-[#f59e0b] bg-[#f59e0b]/10" 
                  : "border-white/5 text-zinc-500 bg-black/50 group-hover:text-[#f59e0b] group-hover:border-[#f59e0b]/30"
                }
              `}>
                {feature.icon}
              </div>

              {/* Card Text */}
              <div className="mt-4 md:mt-6">
                <h3 
                  className={`text-base md:text-lg font-normal mb-2 pr-10 uppercase tracking-wide
                    ${feature.isHighlighted ? "text-[#f59e0b]" : "text-white group-hover:text-[#f59e0b]"}
                  `}
                  style={{ fontFamily: "'Zen Dots', sans-serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-xs md:text-sm text-zinc-400 leading-relaxed max-w-[95%]">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;