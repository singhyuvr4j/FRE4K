import React from "react";
import { Server, Zap, Copy, Activity, Clock, MemoryStick } from "lucide-react";

const DemoServers = () => {
  const servers = [
    {
      game: "Minecraft",
      image: "/images/icons/minecraft.png",
      serverName: "VoltForge Survival",
      ip: "mc.voltforge.com:25565",
      version: "1.19.2",
      status: "online",
      ram: "4GB",
      storage: "40GB",
      features: [
        "Survival Mode",
        "Economy System",
        "Land Protection",
        "Custom Plugins",
      ],
    },
    {
      game: "Counter-Strike 2",
      image: "/images/icons/counterstrike.webp",
      serverName: "VoltForge Competitive",
      ip: "cs.voltforge.com:27015",
      version: "Latest",
      status: "online",
      ram: "4GB",
      storage: "40GB",
      features: ["128 Tick", "Anti-Cheat", "Competitive Mode", "Custom Maps"],
    },
    {
      game: "ARK",
      image: "/images/icons/ark-se.png",
      serverName: "VoltForge PvE",
      ip: "ark.voltforge.com:27015",
      version: "v2.0",
      status: "maintenance",
      ram: "4GB",
      storage: "40GB",
      features: ["3x Rates", "Modified Drops", "Stack Mod", "Structure Plus"],
    },
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Try Our
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext to-primarytext/90">
              Demo Servers
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            Experience our hosting quality firsthand with our demo servers
          </p>
        </div>

        {/* Servers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servers.map((server) => (
            <div
              key={server.game}
              className="group relative rounded-2xl border border-zinc-700 bg-zinc-800/50 backdrop-blur-sm overflow-hidden hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Server Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={server.image}
                  alt={server.game}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />

                {/* Status Badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 
                  ${
                    server.status === "online"
                      ? "bg-black/80 text-primarytext ring-1 ring-primarytext/20"
                      : "bg-black/80 text-yellow-400 ring-1 ring-yellow-500/20"
                  }`}
                >
                  <div
                    className={`w-2 h-2 rounded-full ${
                      server.status === "online"
                        ? "bg-primarytext"
                        : "bg-yellow-400"
                    }`}
                  />
                  {server.status === "online" ? "Online" : "Maintenance"}
                </div>

                {/* Game Title */}
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {server.game}
                  </h3>
                  <p className="text-blue-100">{server.serverName}</p>
                </div>
              </div>

              {/* Server Info */}
              <div className="p-6 space-y-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primarytext mb-1">
                      <MemoryStick className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-blue-100">RAM</p>
                    <p className="font-semibold text-white">{server.ram}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primarytext mb-1">
                      <Activity className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-blue-100">Version</p>
                    <p className="font-semibold text-white">{server.version}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primarytext mb-1">
                      <Clock className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-blue-100">storage</p>
                    <p className="font-semibold text-white">{server.storage}</p>
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-white font-medium mb-3">
                    Server Features
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {server.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <Zap className="w-4 h-4 text-primarytext mr-2" />
                        <span className="text-blue-100">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Server IP */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-zinc-700/30">
                    <div className="flex items-center gap-2">
                      <Server className="w-4 h-4 text-primarytext" />
                      <span className="text-white font-mono">{server.ip}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(server.ip)}
                      className="p-2 rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                      <Copy className="w-4 h-4 text-primarytext" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemoServers;
