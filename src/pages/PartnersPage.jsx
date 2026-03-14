import React from "react";
import { Helmet } from "react-helmet";
import {
  Shield,
  Server,
  Users,
  ArrowRight,
  CheckCircle2,
  Globe2,
  Rocket,
  BadgeCheck,
} from "lucide-react";

const PartnersPage = () => {
  const featuredPartners = [
    {
      name: "Minecraft",
      logo: "/images/icons/minecraft.png",
      type: "Official Partner",
      description:
        "Certified Minecraft server hosting partner providing optimized performance.",
      benefits: [
        "Custom control panel",
        "One-click modpack installer",
        "Automatic backups",
        "DDoS protection",
      ],
      href: "https://minecraft.net",
    },
    {
      name: "Counter-Strike 2",
      logo: "/images/icons/counterstrike.webp",
      type: "Premium Partner",
      description:
        "Authorized CS2 server provider with competitive gaming features.",
      benefits: [
        "Anti-cheat integration",
        "Tournament support",
        "Custom plugins",
        "128-tick servers",
      ],
      href: "https://www.counter-strike.net/",
    },
    {
      name: "26BZ",
      logo: "https://cdn.discordapp.com/avatars/999168396904120412/585a62c39845040211f411d14acbbf17?size=1024",
      type: "Official Partner",
      description:
        "I build themes on the side because the rent is always due :( Can you rate the theme as well?",
      benefits: [
        "Epic updates",
        "Mod support",
        "Cluster support",
        "Advanced configuration",
      ],
      href: "https://builtbybit.com/members/26bz.473255/",
    },
  ];

  const benefits = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Infrastructure",
      description:
        "State-of-the-art hardware and network infrastructure for optimal performance.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Dedicated Resources",
      description:
        "Guaranteed CPU and RAM allocation for consistent performance.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Priority Support",
      description: "24/7 direct access to our senior technical support team.",
    },
    {
      icon: <Globe2 className="w-6 h-6" />,
      title: "Global Presence",
      description:
        "Multiple locations worldwide for optimal latency and reach.",
    },
  ];

  const testimonials = [
    {
      quote:
        "VoltForge has been instrumental in growing our gaming community. Their servers are rock-solid.",
      author: "Sarah Chen",
      role: "Community Manager",
      company: "GamersUnited",
    },
    {
      quote:
        "The level of support and technical expertise provided by VoltForge is unmatched in the industry.",
      author: "Mike Wilson",
      role: "Tournament Organizer",
      company: "ESL Gaming",
    },
    {
      quote:
        "We've seen significant growth since partnering with VoltForge. Their infrastructure is top-notch.",
      author: "David Park",
      role: "CEO",
      company: "ServerCraft",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Partners | VoltForge</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 via-black/50 to-black" />
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Our Partners
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Collaborating with industry leaders to deliver exceptional
                gaming experiences
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Partners */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-primarytext/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primarytext transition-colors">
                      {partner.name}
                    </h3>
                    <span className="inline-flex items-center gap-1 text-sm text-primarytext">
                      <BadgeCheck className="w-4 h-4" />
                      {partner.type}
                    </span>
                  </div>
                </div>
                <p className="text-blue-100 mb-4">{partner.description}</p>
                <ul className="space-y-2">
                  {partner.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-2 text-blue-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primarytext" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <a
                  href={partner.href}
                  className="mt-6 w-full px-4 py-2 bg-primarytext text-white rounded-lg hover:bg-primarytext/90 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Partner Benefits
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mt-4">
                Join our partner program and unlock exclusive benefits for your
                gaming community
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-primarytext/50 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primarytext/10 flex items-center justify-center text-primarytext mb-4 group-hover:bg-primarytext group-hover:text-white transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-blue-100">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div className="text-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Partner Testimonials
              </h2>
              <p className="text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mt-4">
                Hear what our partners have to say about working with VoltForge
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-900/50 border border-zinc-800 rounded-lg hover:border-primarytext/50 transition-all duration-300"
                >
                  <p className="text-blue-100 mb-6 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-blue-100">
                      {testimonial.role}
                    </div>
                    <div className="text-sm text-primarytext">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Become a Partner
            </h2>
            <p className="text-lg lg:text-xl text-blue-100">
              Join our network of successful partners and take your gaming
              community to the next level
            </p>
            <div className="flex justify-center">
              <a
                href="https://example.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primarytext hover:bg-primarytext/90 text-white rounded-lg transition-all duration-300 group"
              >
                Apply Now
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersPage;
