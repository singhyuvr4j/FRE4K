import React, { useState } from "react";
import {
  Shield,
  Lock,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";

const LegalPage = () => {
  const [activeTab, setActiveTab] = useState("terms");

  const tabs = [
    {
      id: "terms",
      label: "Terms of Service",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      id: "privacy",
      label: "Privacy Policy",
      icon: <Lock className="w-5 h-5" />,
    },
    {
      id: "aup",
      label: "Acceptable Use Policy",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const termsContent = {
    lastUpdated: "2024-01-15",
    sections: [
      {
        title: "1. Agreement to Terms",
        content:
          "By accessing our services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        subsections: [
          'These Terms of Service ("Terms") govern your access to and use of our services',
          "By using our services, you agree to these Terms and our Privacy Policy",
          "If you disagree with any part of the terms, you may not access our services",
        ],
      },
      {
        title: "2. Service Description",
        content:
          "We provide game server hosting services and related tools for managing gaming servers.",
        subsections: [
          "Server hosting for various supported games",
          "Control panel access and management tools",
          "Technical support and maintenance services",
        ],
      },
      {
        title: "3. User Responsibilities",
        content:
          "Users are responsible for maintaining the security of their account and compliance with our policies.",
        subsections: [
          "Maintaining account security and confidentiality",
          "Ensuring content compliance with our policies",
          "Timely payment of service fees",
        ],
      },
    ],
  };

  const privacyContent = {
    lastUpdated: "2024-01-15",
    sections: [
      {
        title: "1. Information Collection",
        content:
          "We collect information that you provide directly to us and data about your usage of our services.",
        subsections: [
          "Personal identification information",
          "Payment information",
          "Server usage and performance data",
        ],
      },
      {
        title: "2. Data Usage",
        content:
          "We use collected information to provide and improve our services, and to communicate with you.",
        subsections: [
          "Service delivery and maintenance",
          "Communication about your account",
          "Service improvements and analytics",
        ],
      },
      {
        title: "3. Data Protection",
        content:
          "We implement security measures to protect your personal information and maintain data privacy.",
        subsections: [
          "Encryption of sensitive data",
          "Regular security audits",
          "Access controls and monitoring",
        ],
      },
    ],
  };

  const aupContent = {
    lastUpdated: "2024-01-15",
    sections: [
      {
        title: "1. Prohibited Activities",
        content:
          "The following activities are strictly prohibited on our services:",
        subsections: [
          "Hosting malicious content or malware",
          "Engaging in DDoS attacks or network abuse",
          "Hosting illegal content or services",
        ],
      },
      {
        title: "2. Resource Usage",
        content:
          "Users must adhere to resource usage limits and fair use policies.",
        subsections: [
          "CPU and memory usage limitations",
          "Network bandwidth restrictions",
          "Storage space allocations",
        ],
      },
      {
        title: "3. Enforcement",
        content:
          "Violations of this policy may result in service suspension or termination.",
        subsections: [
          "Warning and notification procedures",
          "Service suspension guidelines",
          "Account termination policies",
        ],
      },
    ],
  };

  const content = {
    terms: termsContent,
    privacy: privacyContent,
    aup: aupContent,
  };

  const contentVariants = {
    enter: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Legal | VoltForge</title>
      </Helmet>
      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/30 via-black/50 to-black" />
        </div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                Legal Information
              </h1>
              <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto">
                Our commitment to transparency and legal compliance in providing
                game hosting services
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Tab Navigation */}
        <div className="sticky top-0 z-10 bg-black/80 backdrop-blur-lg border-b border-zinc-800 -mx-4 px-4 sm:mx-0 sm:px-0">
          <nav
            className="flex overflow-x-auto no-scrollbar"
            aria-label="Legal Documents"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  relative flex items-center gap-2 px-6 py-4 
                  transition-all duration-300
                  focus:outline-none focus:ring-0
                  ${
                    activeTab === tab.id
                      ? "text-primarytext"
                      : "text-blue-100 hover:text-white"
                  }
                `}
              >
                {tab.icon}
                <span className="whitespace-nowrap">{tab.label}</span>

                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primarytext"
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Notice Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-primarytext/10 border border-primarytext/20 rounded-lg p-4 my-8"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primarytext mt-0.5" />
            <div>
              <h4 className="text-sm font-medium text-primarytext">
                Important Notice
              </h4>
              <p className="text-sm text-blue-100">
                These documents govern your use of our services. Please read
                them carefully. By using our services, you agree to these terms.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tab Content */}
        <div className="bg-zinc-900/50 border border-zinc-800 rounded-lg p-8">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
            >
              <div className="space-y-8">
                <div className="border-b border-zinc-800 pb-4">
                  <p className="text-zinc-400">
                    Last Updated: {content[activeTab].lastUpdated}
                  </p>
                </div>

                {content[activeTab].sections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-4"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {section.title}
                    </h3>
                    <p className="text-blue-100">{section.content}</p>
                    <ul className="space-y-3">
                      {section.subsections.map((subsection, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + idx * 0.05,
                          }}
                          className="flex items-start gap-3 text-blue-100"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primarytext mt-0.5 flex-shrink-0" />
                          <span>{subsection}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Have Questions?</h3>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Our legal team is here to help you understand our policies and
              terms.
            </p>
          </div>
          <a
            href="mailto:legal@example.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primarytext hover:bg-primarytext/90 text-white rounded-lg transition-all duration-300"
          >
            Contact Legal Team
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;
