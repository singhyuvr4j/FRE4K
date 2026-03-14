import React from "react";
import { Helmet } from "react-helmet";
import {
  Shield,
  Server,
  Cpu,
  Users,
  BarChart,
  HeadsetIcon,
  Globe,
  Clock,
  ArrowRight,
} from "lucide-react";

const AboutPage = () => {
  const stats = [
    {
      label: "Active Servers",
      value: "10K+",
      icon: <Server className="w-6 h-6" />,
    },
    { label: "Uptime", value: "99.9%", icon: <Clock className="w-6 h-6" /> },
    {
      label: "Global Locations",
      value: "15+",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      label: "Happy Gamers",
      value: "50K+",
      icon: <Users className="w-6 h-6" />,
    },
  ];

  const features = [
    {
      title: "High-Performance Servers",
      description:
        "Enterprise-grade hardware ensuring optimal gaming performance.",
      icon: <Cpu className="w-6 h-6" />,
    },
    {
      title: "DDoS Protection",
      description: "Advanced security measures to keep your servers safe.",
      icon: <Shield className="w-6 h-6" />,
    },
    {
      title: "24/7 Support",
      description: "Expert support team available around the clock.",
      icon: <HeadsetIcon className="w-6 h-6" />,
    },
    {
      title: "Real-Time Analytics",
      description: "Detailed insights into your server performance.",
      icon: <BarChart className="w-6 h-6" />,
    },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://placehold.co/75",
      description: "Gaming enthusiast with 10+ years in server hosting.",
    },
    {
      name: "Sarah Chen",
      role: "Technical Director",
      image: "https://placehold.co/75",
      description: "Expert in scalable infrastructure and optimization.",
    },
    {
      name: "Mike Roberts",
      role: "Support Lead",
      image: "https://placehold.co/75",
      description: "Dedicated to providing exceptional customer service.",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>About Us | VoltForge</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 to-black" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                About VoltForge
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Powering the future of game hosting with cutting-edge technology
              and unmatched support
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primarytext/10 flex items-center justify-center text-primarytext transition-all duration-300 group-hover:scale-110">
                {stat.icon}
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                  Our Mission
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                To provide gamers and communities with reliable,
                high-performance hosting solutions that elevate their gaming
                experience to new heights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl border border-zinc-700 bg-zinc-800/50 hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <div className="w-16 h-16 mb-4 rounded-xl bg-primarytext/10 flex items-center justify-center text-primarytext transition-all duration-300 group-hover:scale-110">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primarytext transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-100">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primarytext via-primarytext/80 to-primarytext">
                  Meet Our Team
                </span>
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Passionate professionals dedicated to delivering the best gaming
                experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="p-8 rounded-2xl border border-zinc-700 bg-zinc-800/50 text-center hover:border-primarytext/50 transition-all duration-300 hover:-translate-y-1 group"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-6 border-2 border-primarytext/20 group-hover:border-primarytext transition-all duration-300"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primarytext transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-primarytext mb-4">{member.role}</div>
                  <p className="text-blue-100">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100">
              Join thousands of satisfied gamers and experience the VoltForge
              difference.
            </p>
            <div>
              <a
                href="/games"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primarytext hover:bg-primarytext/90 text-white rounded-lg transition-all duration-300 text-lg group"
              >
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
