import { React, useState } from "react";
import FAQSection from "/src/components/FAQSection";
import { Helmet } from "react-helmet";
import {
  HelpCircle,
  ArrowRight,
  Check,
  X,
  Gift,
  HardDrive,
  MailIcon,
  Users,
  Globe2,
  Globe,
  Star,
  Clock,
  Layout,
  Shield,
  GanttChart,
  Mail,
  Rocket,
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

const SpecDetail = ({ icon: Icon, label, value }) => (
  <div className="flex items-center space-x-2 p-1.5 rounded-lg bg-zinc-800 border border-zinc-700/50">
    <div className="flex-1 min-w-0">
      <div className="text-xs text-zinc-400 line-clamp-1">{label}</div>
      <div className="text-xs font-medium text-blue-100 line-clamp-1">
        {value}
      </div>
    </div>
  </div>
);

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

const WebsiteHosting = () => {
  const plans = [
    {
      name: "Starter",
      icon: "🚀",
      description: "Perfect for Personal Sites",
      price: 3.99,
      specs: [
        { icon: HardDrive, label: "Storage", value: "25GB NVMe SSD" },
        { icon: Globe, label: "Bandwidth", value: "Unmetered" },
        { icon: Layout, label: "Websites", value: "1 Website" },
        { icon: MailIcon, label: "Email", value: "10 Email Accounts" },
        { icon: Shield, label: "Security", value: "Free SSL Certificate" },
        { icon: Globe2, label: "Domain", value: "Free Domain (1st Year)" },
      ],
      features: [
        {
          name: "cPanel Access",
          included: true,
          tooltip: "Industry-standard hosting control panel",
        },
        {
          name: "Website Builder",
          included: true,
          tooltip: "Easy drag-and-drop builder",
        },
        {
          name: "Daily Backups",
          included: true,
          tooltip: "7-day backup retention",
        },
        {
          name: "CDN Integration",
          included: false,
          tooltip: "Global content delivery network",
        },
        {
          name: "Priority Support",
          included: false,
          tooltip: "24/7 priority support",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "Business",
      icon: "⚡",
      description: "Ideal for Small Business",
      price: 9.99,
      popular: true,
      specs: [
        { icon: HardDrive, label: "Storage", value: "100GB NVMe SSD" },
        { icon: Globe, label: "Bandwidth", value: "Unmetered" },
        { icon: Layout, label: "Websites", value: "Unlimited Sites" },
        { icon: MailIcon, label: "Email", value: "Unlimited Email" },
        { icon: Shield, label: "Security", value: "Wildcard SSL" },
        { icon: Globe2, label: "Domain", value: "Free Domain (1st Year)" },
      ],
      features: [
        {
          name: "cPanel Access",
          included: true,
          tooltip: "Industry-standard hosting control panel",
        },
        {
          name: "Website Builder",
          included: true,
          tooltip: "Premium templates included",
        },
        {
          name: "Daily Backups",
          included: true,
          tooltip: "30-day backup retention",
        },
        {
          name: "CDN Integration",
          included: true,
          tooltip: "Global content delivery network",
        },
        {
          name: "Priority Support",
          included: true,
          tooltip: "24/7 priority support",
        },
      ],
      href: "https://example.com",
    },
    {
      name: "Enterprise",
      icon: "💫",
      description: "For High-Traffic Sites",
      price: 24.99,
      specs: [
        { icon: HardDrive, label: "Storage", value: "Unlimited NVMe" },
        { icon: Globe, label: "Bandwidth", value: "Unmetered" },
        { icon: Layout, label: "Websites", value: "Unlimited Sites" },
        { icon: MailIcon, label: "Email", value: "Unlimited Email" },
        { icon: Shield, label: "Security", value: "Premium SSL" },
        { icon: Globe2, label: "Domain", value: "Free Domain (1st Year)" },
      ],
      features: [
        {
          name: "cPanel Access",
          included: true,
          tooltip: "Industry-standard hosting control panel",
        },
        {
          name: "Website Builder",
          included: true,
          tooltip: "Enterprise templates & features",
        },
        {
          name: "Daily Backups",
          included: true,
          tooltip: "90-day backup retention",
        },
        {
          name: "CDN Integration",
          included: true,
          tooltip: "Global content delivery network",
        },
        {
          name: "Priority Support",
          included: true,
          tooltip: "24/7 dedicated support",
        },
      ],
      href: "https://example.com",
    },
  ];

  const features = [
    {
      icon: <GanttChart className="w-6 h-6" />,
      title: "Modern Control Panel",
      description: "Easy-to-use cPanel with advanced features and tools",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Business Email",
      description: "Professional email with webmail and mobile access",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "1-Click Installer",
      description: "Install WordPress, Drupal, and 400+ applications",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global CDN",
      description: "Lightning-fast content delivery with Cloudflare",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Free SSL, DDoS protection, and malware scanning",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Support",
      description: "24/7 support via live chat, phone, and email",
    },
  ];

  const applications = [
    {
      name: "WordPress",
      users: "10M+",
      version: "Latest",
      image: "/images/icons/wordpress.png",
    },
    {
      name: "WooCommerce",
      users: "5M+",
      version: "Latest",
      image: "/images/icons/woo.png",
    },
    {
      name: "Drupal",
      users: "1M+",
      version: "Latest",
      image: "/images/icons/drupal.png",
    },
    {
      name: "Magento",
      users: "500K+",
      version: "Latest",
      image: "/images/icons/magento.png",
    },
    {
      name: "PrestaShop",
      users: "300K+",
      version: "Latest",
      image: "/images/icons/presta.png",
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
        <title>Web Hosting | VoltForge</title>
      </Helmet>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primarytext/10 text-primarytext ring-1 ring-primarytext/20 mb-8">
            <Gift className="w-4 h-4 mr-2" />
            Free Domain, SSL & Migration
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
              Professional Web Hosting
            </span>
          </h1>

          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Lightning-fast NVMe hosting with 99.9% uptime guarantee
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border ${
                plan.popular
                  ? "border-primarytext shadow-lg shadow-primarytext/20"
                  : "border-zinc-700"
              } bg-zinc-800/50 backdrop-blur-sm p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primarytext/50`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primarytext text-white text-sm rounded-full">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <span className="text-4xl mb-3 block">{plan.icon}</span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-blue-100 mb-3">{plan.description}</p>
                <div className="text-4xl font-bold text-white mb-6">
                  ${plan.price}
                  <span className="text-lg text-blue-100">/mo</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
                  {plan.specs.map((spec, index) => (
                    <SpecDetail
                      key={index}
                      label={spec.label}
                      value={spec.value}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-3 mb-6">
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
        {/* Features Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                Advanced Features
              </span>
            </h2>
            <p className="text-blue-100 text-lg">
              Everything you need for professional web hosting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
        {/* Applications Grid */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                One-Click Applications
              </span>
            </h2>
            <p className="text-blue-100 text-lg">
              Install your favorite applications instantly
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {applications.map((app) => (
              <div
                key={app.name}
                className="group rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square rounded-lg bg-zinc-900 mb-4 flex items-center justify-center">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="w-auto h-full"
                  />
                </div>
                <h3 className="font-medium text-white mb-1">{app.name}</h3>
                <div className="flex justify-between text-sm">
                  <span className="text-blue-100">{app.users}</span>
                  <span className="text-zinc-400">{app.version}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Trust Indicators */}
        <div className="py-24 ">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: <Globe2 className="w-12 h-12" />,
                stat: "1M+",
                label: "Websites Hosted",
              },
              {
                icon: <Users className="w-12 h-12" />,
                stat: "500K+",
                label: "Happy Customers",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                stat: "99.99%",
                label: "Uptime",
              },
              {
                icon: <Star className="w-12 h-12" />,
                stat: "4.9/5",
                label: "Customer Rating",
              },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 text-primarytext">
                  {item.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {item.stat}
                </div>
                <div className="text-blue-100">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
        <FAQSection />
      </div>
    </div>
  );
};

export default WebsiteHosting;
