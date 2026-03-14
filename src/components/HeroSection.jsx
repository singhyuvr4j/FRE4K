import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Shield,
  Gauge,
  Users,
  ChevronDown,
  Gift,
  Star,
} from "lucide-react";

const pathVariants = {
  initial: { strokeDashoffset: 800, strokeDasharray: "50 800" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "20 800",
    opacity: [0, 1, 1, 0],
  },
};

const HeroSection = () => {
  const paths = [
    "M720 450C720 450 742.459 440.315 755.249 425.626C768.039 410.937 778.88 418.741 789.478 401.499C800.076 384.258 817.06 389.269 826.741 380.436C836.423 371.603 851.957 364.826 863.182 356.242C874.408 347.657 877.993 342.678 898.867 333.214C919.741 323.75 923.618 319.88 934.875 310.177C946.133 300.474 960.784 300.837 970.584 287.701C980.384 274.564 993.538 273.334 1004.85 263.087C1016.15 252.84 1026.42 250.801 1038.22 242.1C1050.02 233.399 1065.19 230.418 1074.63 215.721C1084.07 201.024 1085.49 209.128 1112.65 194.884C1139.8 180.64 1132.49 178.205 1146.43 170.636C1160.37 163.066 1168.97 158.613 1181.46 147.982C1193.95 137.35 1191.16 131.382 1217.55 125.645C1243.93 119.907 1234.19 118.899 1254.53 100.846C1274.86 82.7922 1275.12 92.8914 1290.37 76.09C1305.62 59.2886 1313.91 62.1868 1323.19 56.7536C1332.48 51.3204 1347.93 42.8082 1361.95 32.1468C1375.96 21.4855 1374.06 25.168 1397.08 10.1863C1420.09 -4.79534 1421.41 -3.16992 1431.52 -15.0078",
    "M720 450C720 450 741.044 435.759 753.062 410.636C765.079 385.514 770.541 386.148 782.73 370.489C794.918 354.83 799.378 353.188 811.338 332.597C823.298 312.005 825.578 306.419 843.707 295.493C861.837 284.568 856.194 273.248 877.376 256.48C898.558 239.713 887.536 227.843 909.648 214.958C931.759 202.073 925.133 188.092 941.063 177.621C956.994 167.151 952.171 154.663 971.197 135.041C990.222 115.418 990.785 109.375 999.488 96.1291C1008.19 82.8827 1011.4 82.2181 1032.65 61.8861",
  ];

  const colors = ["#46A5CA", "#F59E0B", "#4FAE4D", "#D6590C"];

  const stats = [
    {
      value: "99.9%",
      label: "Uptime",
      icon: <Server className="w-6 h-6" />,
      description: "Enterprise-grade reliability",
    },
    {
      value: "<20ms",
      label: "Latency",
      icon: <Gauge className="w-6 h-6" />,
      description: "Ultra-low latency servers",
    },
    {
      value: "24/7",
      label: "Support",
      icon: <Shield className="w-6 h-6" />,
      description: "Expert support team",
    },
    {
      value: "10k+",
      label: "Servers",
      icon: <Users className="w-6 h-6" />,
      description: "Active game servers",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Dynamic Background */}
      <motion.svg
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full"
      >
        {paths.map((path, idx) => (
          <motion.path
            key={`path-${idx}`}
            d={path}
            stroke={colors[idx % colors.length]}
            strokeWidth="2.3"
            strokeLinecap="round"
            variants={pathVariants}
            initial="initial"
            animate="animate"
            transition={{
              duration: 10,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
              delay: idx * 2,
            }}
          />
        ))}
      </motion.svg>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Promo Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primarytext/10 border border-primarytext/20 text-primarytext backdrop-blur-sm">
              <Gift className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">
                30% OFF automatically for new customers!
              </span>
              <Star className="w-4 h-4 ml-2 text-yellow-500" />
            </div>
          </motion.div>

          <div className="flex flex-col items-center justify-center text-center">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative mb-6 space-y-4"
            >
              <div className="absolute inset-0 bg-primarytext/20 blur-[120px] opacity-50" />

              <h1 className="relative text-5xl md:text-7xl font-bold">
                <span className="block text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/80">
                  Gaming should be easy,
                </span>
                <span className="block bg-clip-text text-transparent bg-primarytext">
                  we make it happen.
                </span>
              </h1>
            </motion.div>

            {/*  Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-3xl text-blue-100 font-light py-4 max-w-3xl"
            >
              Professional game hosting with
              <span className="text-primarytext font-semibold">
                {" "}
                instant deployment
              </span>
              .
              <br />
              From purchase to playing in under 60 seconds.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button className="group bg-primarytext text-white rounded-xl px-8 py-4 font-medium text-lg transition-all duration-300 hover:shadow-lg hover:shadow-primarytext/25 hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                Start Hosting
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/5 hover:bg-white/10 text-white rounded-xl px-8 py-4 font-medium text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/10">
                Contact Us
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="group p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primarytext/50 transition-all duration-300"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 mb-3 rounded-lg bg-gradient-to-br from-primarytext/20 to-blue-500/20 flex items-center justify-center text-primarytext group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-white mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
                      {stat.value}
                    </div>
                    <div className="text-white/90 font-medium">
                      {stat.label}
                    </div>
                    <div className="text-sm text-white/70 mt-1">
                      {stat.description}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-white/70 flex flex-col items-center gap-2 cursor-pointer hover:text-primarytext transition-colors duration-300"
              >
                <span className="text-sm font-medium">Discover More</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
