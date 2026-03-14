import React, { useState, useMemo } from "react";
import { Helmet } from "react-helmet";
import {
  Search,
  Users,
  Globe2,
  Server,
  Shield,
  Zap,
  Crown,
  TrendingUp,
  Gamepad2,
  Gift,
  ArrowRight,
  Database,
  Clock,
} from "lucide-react";

const CategoryButton = ({ category, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`
      flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300
      ${
        isSelected
          ? "bg-primarytext text-white"
          : "bg-zinc-800/50 text-blue-100 hover:bg-zinc-700/50"
      }
    `}
  >
    {category.icon}
    {category.name}
  </button>
);

const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 rounded-lg bg-primarytext/10 flex items-center justify-center text-primarytext">
      {icon}
    </div>
    <span className="text-sm text-blue-100">{text}</span>
  </div>
);

const GameCard = ({ game }) => (
  <div className="rounded-2xl border border-zinc-700 bg-zinc-800/50 overflow-hidden hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group">
    <div className="relative aspect-[2/1] overflow-hidden">
      <img
        src={game.banner}
        alt={game.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />

      <div className="absolute top-4 left-4 flex gap-2">
        {game.popular && (
          <span className="px-2 py-1 rounded-full bg-primarytext/90 text-white text-xs font-medium flex items-center gap-1">
            <Crown className="w-3 h-3" /> Popular
          </span>
        )}
        {game.trending && (
          <span className="px-2 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-medium flex items-center gap-1">
            <TrendingUp className="w-3 h-3" /> Trending
          </span>
        )}
      </div>
    </div>

    <div className="p-6">
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primarytext transition-colors">
        {game.name}
      </h3>

      <p className="text-blue-100 mb-6 line-clamp-2">{game.shortDescription}</p>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {game.features.map((feature, index) => (
          <FeatureItem key={index} {...feature} />
        ))}
      </div>

      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-blue-100">
          Starting at
          <span className="text-xl font-bold text-white ml-2">
            ${game.monthlyPrice}
          </span>
          <span className="text-zinc-400">/mo</span>
        </div>
        <a
          href={game.href}
          className="px-4 py-2 rounded-lg bg-primarytext hover:bg-primarytext/90 text-white font-medium transition-all duration-300 flex items-center gap-2 group"
        >
          View Plans
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  </div>
);

const GameServerList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Games", icon: <Gamepad2 className="w-4 h-4" /> },
    {
      id: "popular",
      name: "Most Popular",
      icon: <Crown className="w-4 h-4" />,
    },
    {
      id: "trending",
      name: "Trending",
      icon: <TrendingUp className="w-4 h-4" />,
    },
    { id: "survival", name: "Survival", icon: <Shield className="w-4 h-4" /> },
    { id: "sandbox", name: "Sandbox", icon: <Globe2 className="w-4 h-4" /> },
  ];

  const games = [
    {
      name: "Minecraft",
      slug: "minecraft",
      categories: ["Sandbox", "Survival"],
      features: [
        { icon: <Zap className="w-4 h-4" />, text: "One-Click Modpacks" },
        { icon: <Server className="w-4 h-4" />, text: "Server Splitter" },
        { icon: <Clock className="w-4 h-4" />, text: "Instant Setup" },
        { icon: <Users className="w-4 h-4" />, text: "Manage Users" },
      ],
      monthlyPrice: 4.99,
      banner: "/images/icons/minecraft.png",
      href: "/minecraft",
      popular: true,
      trending: true,
      shortDescription:
        "The world's most popular building game. Craft a server with powerful tools and mods.",
    },
    {
      name: "Counter-Strike 2",
      slug: "cs2",
      categories: ["FPS", "Competitive"],
      features: [
        { icon: <Database className="w-4 h-4" />, text: "Auto-Updates" },
        { icon: <Shield className="w-4 h-4" />, text: "DDoS Protection" },
        { icon: <Server className="w-4 h-4" />, text: "Custom Config" },
        { icon: <Gamepad2 className="w-4 h-4" />, text: "Mod Support" },
      ],
      monthlyPrice: 4.99,
      banner: "/images/icons/counterstrike.webp",
      href: "/cs2",
      popular: true,
      trending: false,
      shortDescription:
        "Host your own CS2 server with advanced configuration and anti-cheat protection.",
    },
    {
      name: "ARK: Survival Evolved",
      slug: "ark-se",
      categories: ["Survival", "Adventure"],
      features: [
        { icon: <Database className="w-4 h-4" />, text: "Auto-Updates" },
        { icon: <Shield className="w-4 h-4" />, text: "DDoS Protection" },
        { icon: <Server className="w-4 h-4" />, text: "Cluster Support" },
        { icon: <Gamepad2 className="w-4 h-4" />, text: "Mod Manager" },
      ],
      monthlyPrice: 14.99,
      banner: "/images/icons/ark-se.png",
      href: "/ark-se",
      popular: true,
      trending: false,
      shortDescription:
        "Build your ARK empire with powerful cluster support and mod management.",
    },
    {
      name: "Valheim",
      slug: "valheim",
      categories: ["Survival", "Adventure"],
      features: [
        { icon: <Database className="w-4 h-4" />, text: "World Backups" },
        { icon: <Shield className="w-4 h-4" />, text: "Anti-Grief" },
        { icon: <Server className="w-4 h-4" />, text: "Easy Config" },
        { icon: <Gamepad2 className="w-4 h-4" />, text: "Mod Support" },
      ],
      monthlyPrice: 9.99,
      banner: "/images/icons/valheim.png",
      href: "/valheim",
      popular: false,
      trending: true,
      shortDescription:
        "Host your Viking adventure with automated backups and grief protection.",
    },
  ];

  const filteredGames = useMemo(() => {
    return games.filter((game) => {
      const matchesSearch =
        !searchQuery ||
        game.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        game.categories.some((cat) =>
          cat.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" ||
        (selectedCategory === "popular" && game.popular) ||
        (selectedCategory === "trending" && game.trending) ||
        game.categories.map((c) => c.toLowerCase()).includes(selectedCategory);

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Game Servers | VoltForge</title>
      </Helmet>
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block mx-auto px-3 py-1 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20">
              <Gift className="w-4 h-4 inline-block mr-2" />
              Free DDoS Protection with All Game Servers
            </span>
          </div>

          <h1 className="text-center text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Game Server Hosting
            </span>
          </h1>

          <p className="text-center text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            High-performance game servers with instant setup and powerful tools
          </p>

          <div className="max-w-2xl mx-auto flex gap-4 mb-16">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Search games..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-zinc-800/50 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-primarytext transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <CategoryButton
                key={category.id}
                category={category}
                isSelected={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGames.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-blue-100">
                No games found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameServerList;
