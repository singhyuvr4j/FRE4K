import React, { useState } from "react";
import FAQSection from "/src/components/FAQSection";
import { Helmet } from "react-helmet";
import {
  HelpCircle,
  ArrowRight,
  Check,
  X,
  Zap,
  Terminal,
  Gift,
  Shield,
  Database,
  Code,
  Globe2,
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

const DiscordBotHosting = () => {
  const plans = [
    {
      name: "Starter",
      icon: "🤖",
      description: "1 vCore AMD Ryzen 9 7950X",
      monthlyPrice: 2.99,
      features: [
        {
          name: "2GB DDR5 RAM",
          included: true,
          tooltip: "High-speed DDR5 memory",
        },
        {
          name: "20GB NVMe SSD",
          included: true,
          tooltip: "Ultra-fast storage with NVMe",
        },
        {
          name: "2 Bot Instances",
          included: true,
          tooltip: "Run multiple bot processes",
        },
        {
          name: "1 Database",
          included: true,
          tooltip: "MongoDB or MySQL database",
        },
        {
          name: "Daily Backups",
          included: true,
          tooltip: "Automated backup system",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "Professional",
      icon: "⚡",
      description: "2 vCore AMD Ryzen 9 7950X",
      monthlyPrice: 5.99,
      popular: true,
      features: [
        {
          name: "4GB DDR5 RAM",
          included: true,
          tooltip: "High-speed DDR5 memory",
        },
        {
          name: "40GB NVMe SSD",
          included: true,
          tooltip: "Ultra-fast storage with NVMe",
        },
        {
          name: "4 Bot Instances",
          included: true,
          tooltip: "Run multiple bot processes",
        },
        {
          name: "2 Databases",
          included: true,
          tooltip: "MongoDB or MySQL databases",
        },
        {
          name: "Advanced Backups",
          included: true,
          tooltip: "Hourly automated backups",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "Enterprise",
      icon: "💫",
      description: "4 vCore AMD Ryzen 9 7950X",
      monthlyPrice: 12.99,
      features: [
        {
          name: "8GB DDR5 RAM",
          included: true,
          tooltip: "High-speed DDR5 memory",
        },
        {
          name: "80GB NVMe SSD",
          included: true,
          tooltip: "Ultra-fast storage with NVMe",
        },
        {
          name: "Unlimited Instances",
          included: true,
          tooltip: "No instance limits",
        },
        {
          name: "5 Databases",
          included: true,
          tooltip: "MongoDB or MySQL databases",
        },
        {
          name: "Premium Backups",
          included: true,
          tooltip: "Real-time backup system",
        },
      ],
      href: "https://example.com",
    },
  ];

  const languages = [
    {
      name: "Node.js",
      version: "v16, v18, v20",
      icon: "/images/icons/nodejs.png",
    },
    {
      name: "Python",
      version: "3.8, 3.9, 3.10, 3.11",
      icon: "/images/icons/python.webp",
    },
    { name: "Java", version: "8, 11, 17, 21", icon: "/images/icons/java.png" },
    {
      name: "Go",
      version: "1.19, 1.20, 1.21",
      icon: "/images/icons/golang.webp",
    },
    { name: "Rust", version: "Latest Stable", icon: "/images/icons/rust.png" },
    { name: "Deno", version: "Latest Stable", icon: "/images/icons/deno.svg" },
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Deployment",
      description: "Deploy your bot in seconds with our automated setup system",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "DDoS Protection",
      description: "Enterprise-grade 2.5Tbps DDoS protection included free",
    },
    {
      icon: <Terminal className="w-6 h-6" />,
      title: "Language Support",
      description: "Node.js, Python, Java, Go, Rust, and Deno support",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Free Database",
      description: "Managed MongoDB or MySQL database included",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Git Integration",
      description: "One-click deployment from GitHub repositories",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Network",
      description: "Multiple locations for optimal performance",
    },
  ];

  const FeatureCard = ({ icon, title, description }) => (
    <div className="group p-6 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 hover:bg-zinc-800/80 transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primarytext/10 flex items-center justify-center text-primarytext mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primarytext transition-colors">
        {title}
      </h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Bot Hosting | VoltForge</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20 mb-8">
            <Gift className="w-4 h-4 mr-2" />
            Free MongoDB Database & DDoS Protection
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Discord Bot Hosting
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            High-performance bot hosting powered by AMD Ryzen 9 7950X
          </p>
        </div>
      </div>
      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
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
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-blue-100 mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-4">
                  ${plan.monthlyPrice}
                  <span className="text-lg text-blue-100">/mo</span>
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
                      className={
                        feature.included ? "text-blue-100" : "text-zinc-500"
                      }
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
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Advanced Features
            </span>
          </h2>
          <p className="text-blue-100 text-lg">
            Everything you need for reliable bot hosting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Languages Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                Supported Languages
              </span>
            </h2>
            <p className="text-blue-100 text-lg">
              Choose your preferred programming language
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-6 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1"
              >
                <img
                  src={lang.icon}
                  alt={lang.name}
                  className="w-12 h-12 mx-auto mb-4"
                />
                <h3 className="text-lg font-medium text-white text-center mb-2">
                  {lang.name}
                </h3>
                <p className="text-sm text-blue-100 text-center">
                  {lang.version}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <FAQSection />
    </div>
  );
};

export default DiscordBotHosting;
