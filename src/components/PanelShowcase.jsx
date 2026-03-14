import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Terminal,
  Users,
  Play,
  Home,
  Server,
  Database,
  Menu,
  HardDrive,
  Network,
  MessageSquare,
} from "lucide-react";

const ConsoleLines = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const consoleRef = React.useRef(null);
  const isInView = useInView(consoleRef, { once: true, amount: 0.2 });

  const serverLogs = [
    {
      time: "[20:48:09]",
      level: "INFO",
      msg: "Starting server initialization",
      delay: 0,
    },
    {
      time: "[20:48:10]",
      level: "INFO",
      msg: "Loading server properties",
      delay: 1,
    },
    {
      time: "[20:48:11]",
      level: "INFO",
      msg: "Default game type: SURVIVAL",
      delay: 1.8,
    },
    {
      time: "[20:48:14]",
      level: "INFO",
      msg: "Starting Minecraft server version 1.19.2",
      delay: 2.4,
    },
    { time: "[20:48:15]", level: "INFO", msg: "Loading worlds...", delay: 3.2 },
    {
      time: "[20:48:18]",
      level: "INFO",
      msg: "Preparing spawn area: 0%",
      delay: 4,
    },
    {
      time: "[20:48:19]",
      level: "INFO",
      msg: "Preparing spawn area: 20%",
      delay: 4.8,
    },
    {
      time: "[20:48:20]",
      level: "INFO",
      msg: "Preparing spawn area: 40%",
      delay: 5.6,
    },
    {
      time: "[20:48:21]",
      level: "INFO",
      msg: "Preparing spawn area: 60%",
      delay: 6.4,
    },
    {
      time: "[20:48:22]",
      level: "INFO",
      msg: "Preparing spawn area: 80%",
      delay: 7.2,
    },
    {
      time: "[20:48:23]",
      level: "INFO",
      msg: "Preparing spawn area: 100%",
      delay: 8,
    },
    {
      time: "[20:48:24]",
      level: "INFO",
      msg: "Loading plugins...",
      delay: 8.8,
    },
    {
      time: "[20:48:29]",
      level: "INFO",
      msg: 'Done (20.349s)! For help, type "help"',
      delay: 9.6,
    },
  ];
  useEffect(() => {
    if (isInView && !isComplete) {
      setIsComplete(true);
      serverLogs.forEach((log, index) => {
        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, { ...log, id: index }]);
          if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
          }
        }, log.delay * 1000);
      });
    }
  }, [isInView, isComplete]);

  return (
    <div
      ref={consoleRef}
      className="flex-1 bg-black/95 p-2 sm:p-4 font-mono text-xs sm:text-sm overflow-auto"
    >
      <div className="space-y-1">
        {displayedLines.map((log) => (
          <motion.div
            key={log.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-wrap sm:flex-nowrap"
          >
            <span className="text-zinc-500 mr-2">{log.time}</span>
            <span
              className={`${
                log.level === "WARN"
                  ? "text-yellow-500"
                  : log.level === "ERROR"
                  ? "text-red-500"
                  : "text-primarytext"
              }`}
            >
              [{log.level}]
            </span>
            <span className="ml-2 text-zinc-300 break-all">{log.msg}</span>
          </motion.div>
        ))}
        {displayedLines.length === serverLogs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="text-primarytext"
          >
            ▋
          </motion.div>
        )}
      </div>
    </div>
  );
};

const PanelShowcase = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isStatsOpen, setIsStatsOpen] = useState(false);

  return (
    <div className="py-12 sm:py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Powerful
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
              Control Panel
            </span>
          </h2>
          <p className="text-blue-100 text-base sm:text-lg">
            Full control over your game server with our intuitive panel
          </p>
        </div>

        <div className="relative rounded-xl border border-zinc-800/50 bg-black/95 overflow-hidden min-h-[500px] sm:min-h-[600px] flex flex-col sm:flex-row shadow-2xl backdrop-blur-sm">
          {/* Mobile Sidebar Toggle */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="sm:hidden absolute top-4 left-4 z-20 p-2 rounded-lg bg-zinc-800/50 text-primarytext"
          >
            {isSidebarOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>

          {/* Sidebar */}
          <div
            className={`
            fixed sm:relative inset-y-0 left-0 z-10 
            w-64 sm:w-16 bg-zinc-900/50 border-r border-zinc-800/50 
            transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            sm:translate-x-0 transition-transform duration-300 ease-in-out
          `}
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {[
                { icon: <Home className="w-5 h-5" />, active: false },
                { icon: <Terminal className="w-5 h-5" />, active: true },
                { icon: <Users className="w-5 h-5" />, active: false },
                { icon: <Database className="w-5 h-5" />, active: false },
                { icon: <HardDrive className="w-5 h-5" />, active: false },
                { icon: <Network className="w-5 h-5" />, active: false },
                { icon: <MessageSquare className="w-5 h-5" />, active: false },
              ].map((item, index) => (
                <button
                  key={index}
                  className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    item.active
                      ? "bg-primarytext text-white"
                      : "text-zinc-500 hover:bg-zinc-800/50 hover:text-primarytext"
                  }`}
                >
                  {item.icon}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 flex flex-col">
            {/* Header */}
            <div className="bg-zinc-900/50 border-b border-zinc-800/50 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
              <div className="flex items-center space-x-4 ml-8 sm:ml-0">
                <Server className="w-5 h-5 text-primarytext" />
                <div>
                  <h3 className="text-white font-medium">A BZ Theme</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primarytext" />
                    <span className="text-sm text-zinc-400">Running</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white transition-all duration-300 flex items-center justify-center gap-2 group">
                  Start
                  <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-zinc-800/50 text-zinc-300 hover:text-white hover:bg-zinc-700/50 transition-all duration-300">
                  Restart
                </button>
                <button className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-zinc-800/50 text-zinc-300 hover:text-white hover:bg-zinc-700/50 transition-all duration-300">
                  Stop
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 p-2 sm:p-4 bg-zinc-900/50 border-b border-zinc-800/50">
              {[
                { label: "Uptime", value: "1h 28m 27s" },
                { label: "CPU Load", value: "38.14%", sub: "/ 500%" },
                { label: "Memory", value: "5.2 GiB", sub: "/ 16 GiB" },
                { label: "Address", value: "65.108.128.160:1025" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-2 sm:p-3 rounded-lg bg-black/40 group hover:bg-zinc-800/30 transition-all duration-300"
                >
                  <div className="text-xs sm:text-sm text-zinc-400 mb-1 group-hover:text-primarytext transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-white font-mono text-sm sm:text-base break-all">
                    {stat.value}
                    {stat.sub && (
                      <span className="text-zinc-500 text-xs sm:text-sm">
                        {stat.sub}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <ConsoleLines />

            {/* Command Input */}
            <div className="p-2 sm:p-4 bg-zinc-900/50 border-t border-zinc-800/50">
              <div className="flex items-center space-x-2 bg-black/40 rounded-lg px-3 py-2">
                <span className="text-primarytext">❯</span>
                <input
                  type="text"
                  placeholder="Type a command..."
                  className="flex-1 bg-transparent border-none text-white placeholder-zinc-600 focus:outline-none focus:ring-0 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Right Stats Panel - Mobile Toggle */}
          <button
            onClick={() => setIsStatsOpen(!isStatsOpen)}
            className="sm:hidden absolute top-4 right-4 z-20 p-2 rounded-lg bg-zinc-800/50 text-primarytext"
          >
            <Database className="w-5 h-5" />
          </button>

          {/* Right Stats Panel */}
          <div
            className={`
            fixed sm:relative inset-y-0 right-0 z-10
            w-64 sm:w-72 bg-zinc-900/50 border-l border-zinc-800/50 
            transform ${isStatsOpen ? "translate-x-0" : "translate-x-full"}
            sm:translate-x-0 transition-transform duration-300 ease-in-out
            p-4
          `}
          >
            <div className="space-y-4">
              {[
                { label: "Disk", value: "28.14 GiB", total: "/ 320 GiB" },
                { label: "Network (Inbound)", value: "20.25 MiB" },
                { label: "Network (Outbound)", value: "553.61 MiB" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-3 rounded-lg bg-black/40 hover:bg-zinc-800/30 transition-all duration-300 group"
                >
                  <div className="text-sm text-zinc-400 group-hover:text-primarytext transition-colors">
                    {stat.label}
                  </div>
                  <div className="text-white font-mono">
                    {stat.value}
                    {stat.total && (
                      <span className="text-zinc-500 text-sm ml-1">
                        {stat.total}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelShowcase;
