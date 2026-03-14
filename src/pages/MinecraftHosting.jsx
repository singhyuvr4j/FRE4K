import React, { useState } from "react";
import FAQSection from "/src/components/FAQSection";
import { Helmet } from "react-helmet";
import {
  HelpCircle,
  ArrowRight,
  Check,
  X,
  Gift,
  Terminal,
  Shield,
  MessageCircle,
  GitBranch,
  Trophy,
  Star,
  Users,
  Clock,
} from "lucide-react";

const CustomTooltip = ({ content, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute z-50 w-48 p-2 text-sm text-white bg-zinc-900 rounded-lg shadow-lg -top-2 left-6 border border-zinc-700/50">
          {content}
        </div>
      )}
    </div>
  );
};

const IconCard = ({
  icon,
  title,
  description,
  highlightBorder = false,
  stat,
  label,
}) => (
  <div
    className={`text-center p-6 rounded-xl border ${
      highlightBorder ? "border-primarytext" : "border-zinc-700"
    } bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300`}
  >
    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primarytext/10 flex items-center justify-center text-primarytext">
      {icon}
    </div>
    {stat && label ? (
      <>
        <h3 className="text-2xl font-bold text-white mb-2">{stat}</h3>
        <p className="text-blue-100">{label}</p>
      </>
    ) : (
      <>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-blue-100">{description}</p>
      </>
    )}
  </div>
);

// Modpack/Plugin Card
const GameCard = ({ name, players, version, href }) => (
  <div className="group rounded-xl border border-zinc-700 bg-zinc-800/50 p-4 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-square rounded-lg bg-zinc-900 mb-4 flex items-center justify-center">
      <img src={href} alt={name} className="w-auto h-full" />
    </div>
    <h3 className="font-medium text-white mb-1">{name}</h3>
    <div className="flex justify-between text-sm">
      <span className="text-blue-100">{players}</span>
      <span className="text-zinc-400">v{version}</span>
    </div>
  </div>
);

// Pricing Plan Card
const PlanCard = ({ plan, billingCycle }) => (
  <div
    className={`relative rounded-2xl border ${
      plan.popular
        ? "border-primarytext shadow-lg shadow-primarytext/20"
        : "border-zinc-700"
    } bg-zinc-800/50 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1`}
  >
    {plan.popular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primarytext text-white text-sm rounded-full">
        Most Popular
      </div>
    )}

    <div className="text-center mb-8">
      <span className="text-4xl mb-4 block">{plan.icon}</span>
      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-blue-100 mb-4">{plan.description}</p>
      <div className="text-4xl font-bold text-white mb-4">
        ${billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
        <span className="text-lg text-blue-100">
          {billingCycle === "monthly" ? "/mo" : "/yr"}
        </span>
      </div>
    </div>

    <div className="space-y-4 mb-8">
      {plan.features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          {feature.included ? (
            <div className="w-5 h-5 rounded-full bg-primarytext/20 flex items-center justify-center">
              <Check className="w-3 h-3 text-primarytext" />
            </div>
          ) : (
            <div className="w-5 h-5 rounded-full bg-zinc-700/30 flex items-center justify-center">
              <X className="w-3 h-3 text-zinc-600" />
            </div>
          )}
          <span
            className={feature.included ? "text-blue-100" : "text-zinc-500"}
          >
            {feature.name}
          </span>
          <CustomTooltip content={feature.tooltip}>
            <HelpCircle className="w-4 h-4 text-zinc-500 cursor-help" />
          </CustomTooltip>
        </div>
      ))}
    </div>

    <a
      href={plan.href}
      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 group
        ${
          plan.popular
            ? "bg-primarytext text-white hover:bg-primarytext/90"
            : "bg-zinc-700 text-blue-100 hover:bg-zinc-600"
        }`}
    >
      Get Started
      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const MinecraftHosting = () => {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const plans = [
    {
      name: "2GB",
      icon: "⚡",
      description: "Up to 10 Players",
      monthlyPrice: 4.99,
      yearlyPrice: 49.99,
      specs: {
        storage: "Unlimited NVMe SSD",
        ddos: "Basic DDoS Protection",
        backups: "Daily Backups",
        support: "24/7 Support",
      },
      features: [
        {
          name: "Modpack Support",
          included: true,
          tooltip: "Install popular modpacks with one click",
        },
        {
          name: "Server Backup",
          included: true,
          tooltip: "Daily automated backups",
        },
        {
          name: "Plugin Support",
          included: true,
          tooltip: "Install Bukkit/Spigot plugins",
        },
        {
          name: "DDoS Protection",
          included: true,
          tooltip: "Basic protection against attacks",
        },
        {
          name: "Priority Support",
          included: false,
          tooltip: "Priority customer service",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "4GB",
      icon: "💫",
      description: "Up to 25 Players",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      popular: true,
      specs: {
        storage: "Unlimited NVMe SSD",
        ddos: "Advanced DDoS Protection",
        backups: "Daily Backups",
        support: "Priority Support",
      },
      features: [
        {
          name: "Modpack Support",
          included: true,
          tooltip: "Install popular modpacks with one click",
        },
        {
          name: "Server Backup",
          included: true,
          tooltip: "Daily automated backups",
        },
        {
          name: "Plugin Support",
          included: true,
          tooltip: "Install Bukkit/Spigot plugins",
        },
        {
          name: "DDoS Protection",
          included: true,
          tooltip: "Advanced protection against attacks",
        },
        {
          name: "Priority Support",
          included: true,
          tooltip: "Priority customer service",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "6GB",
      icon: "🚀",
      description: "Up to 40 Players",
      monthlyPrice: 14.99,
      yearlyPrice: 149.99,
      specs: {
        storage: "Unlimited NVMe SSD",
        ddos: "Premium DDoS Protection",
        backups: "Daily Backups",
        support: "Priority Support",
      },
      features: [
        {
          name: "Modpack Support",
          included: true,
          tooltip: "Install popular modpacks with one click",
        },
        {
          name: "Server Backup",
          included: true,
          tooltip: "Daily automated backups",
        },
        {
          name: "Plugin Support",
          included: true,
          tooltip: "Install Bukkit/Spigot plugins",
        },
        {
          name: "DDoS Protection",
          included: true,
          tooltip: "Premium protection against attacks",
        },
        {
          name: "Priority Support",
          included: true,
          tooltip: "Priority customer service",
        },
      ],
      href: "https://example.com",
    },
  ];

  const modpacks = [
    {
      name: "RLCraft",
      players: "23M+",
      version: "1.12.2",
      href: "https://media.forgecdn.net/avatars/thumbnails/468/243/256/256/637751369169569212.png",
    },
    {
      name: "SkyFactory 4",
      players: "11M+",
      version: "4.2.2",
      href: "https://media.forgecdn.net/avatars/thumbnails/199/573/256/256/636907930795697123.png",
    },
    {
      name: "All the Mods 6",
      players: "6M+",
      version: "1.8.0",
      href: "https://media.forgecdn.net/avatars/thumbnails/289/320/256/256/637314732010369633_animated.gif",
    },
    {
      name: "Better Minecraft",
      players: "5M+",
      version: "2.5",
      href: "https://media.forgecdn.net/avatars/thumbnails/593/71/256/256/637965640919658046.png",
    },
    {
      name: "Vault Hunters",
      players: "500K+",
      version: "3.0",
      href: "https://vaulthunters.gg/assets/vh-logo-lg-a4fbcbdd.png",
    },
  ];

  const supportFeatures = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Live Chat Support",
      description: "Get help instantly from our experts",
    },
    {
      icon: <Terminal className="w-8 h-8" />,
      title: "Technical Assistance",
      description: "Server configuration and optimization",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Security Support",
      description: "Keep your server protected 24/7",
    },
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: "Plugin Support",
      description: "Help with mods and plugins setup",
    },
  ];

  const trustIndicators = [
    {
      icon: <Trophy className="w-8 h-8" />,
      stat: "50,000+",
      label: "Servers Hosted",
    },
    {
      icon: <Users className="w-8 h-8" />,
      stat: "1M+",
      label: "Players Served",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      stat: "99.9%",
      label: "Uptime",
    },
    {
      icon: <Star className="w-8 h-8" />,
      stat: "4.9/5",
      label: "Customer Rating",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Minecraft Hosting | VoltForge</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block mx-auto px-3 py-1 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20">
              <Gift className="w-4 h-4 inline-block mr-2" />
              Free Migration from Any Host
            </span>
          </div>

          <h1 className="text-center text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Minecraft Server Hosting
            </span>
          </h1>

          <p className="text-center text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            High-performance Minecraft servers with instant setup and modpack
            support
          </p>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>
      </div>

      {/* Modpack Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Popular Modpacks
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            One-click installation for your favorite modpacks
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {modpacks.map((modpack) => (
            <GameCard key={modpack.name} {...modpack} />
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                24/7 Expert Support
              </span>
            </h2>
            <p className="text-blue-100 text-lg">
              Our Minecraft specialists are here to help you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((feature) => (
              <IconCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustIndicators.map((indicator) => (
              <IconCard key={indicator.label} {...indicator} />
            ))}
          </div>
        </div>
      </section>
      <FAQSection />
    </div>
  );
};

export default MinecraftHosting;
