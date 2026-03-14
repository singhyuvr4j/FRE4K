import React, { useState } from "react";
import {
  ChevronDown,
  Gamepad,
  Bot,
  HelpCircle,
  Server,
  Globe,
  FileText,
  AlertTriangle
} from "lucide-react";

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [expandedItems, setExpandedItems] = useState({});

  const tabs = [
    { id: "general", name: "General", icon: <HelpCircle className="w-5 h-5" />, index: 0 },
    { id: "games", name: "Game Servers", icon: <Gamepad className="w-5 h-5" />, index: 1 },
    { id: "vps", name: "VPS Servers", icon: <Server className="w-5 h-5" />, index: 2 },
    { id: "bots", name: "Bot Hosting", icon: <Bot className="w-5 h-5" />, index: 3 },
    { id: "web", name: "Web Hosting", icon: <Globe className="w-5 h-5" />, index: 4 },
    { id: "policies", name: "Policies", icon: <FileText className="w-5 h-5" />, index: 5 },
  ];

  const activeIndex = tabs.find((t) => t.id === activeTab).index;

  // FAQ data
  const faqData = {
    general: [
      { id: "g1", question: "How do I get started?", answer: "Simply choose your plan, complete checkout, and your services will be provisioned instantly." },
      { id: "g2", question: "What payments do you accept?", answer: "We accept Credit Cards, PayPal, and various Cryptocurrencies." },
      { id: "g3", question: "How long does setup take?", answer: "Most services are provisioned automatically within 60 seconds of payment confirmation." },
      { id: "g4", question: "Do you offer customer support?", answer: "Yes, we provide 24/7 support via ticket system and Discord." },
    ],
    games: [
      { id: "m1", question: "Do you offer DDoS protection?", answer: "Yes, all game servers include enterprise-grade 12Tbps+ DDoS protection." },
      { id: "m2", question: "Can I install mods on my server?", answer: "Absolutely! You have full FTP access and can install any mods/plugins." },
      { id: "m3", question: "What game servers do you support?", answer: "We support Minecraft, ARK, Rust, CS2, Valheim, and 50+ other games." },
    ],
    vps: [
      { id: "v1", question: "What virtualization do you use?", answer: "All our VPS nodes run on high-performance KVM virtualization for dedicated resources." },
      { id: "v2", question: "Can I upgrade my VPS later?", answer: "Yes, you can upgrade your VPS plan anytime from your client area." },
      { id: "v3", question: "What operating systems are available?", answer: "We offer Ubuntu, CentOS, Debian, Windows Server, and custom ISO support." },
    ],
    bots: [
      { id: "b1", question: "Which languages are supported?", answer: "We support Node.js, Python, Java, Go, and more." },
      { id: "b2", question: "Can I host Discord bots?", answer: "Yes, we specialize in Discord bot hosting with 99.9% uptime." },
    ],
    web: [
      { id: "w1", question: "Do you offer free SSL?", answer: "Yes, every web hosting plan comes with free Let's Encrypt SSL certificates." },
      { id: "w2", question: "How much bandwidth do I get?", answer: "All plans include unmetered bandwidth with fair usage policy." },
    ],
    policies: [
      { id: "p1", question: "What is your refund policy?", answer: "We offer a 24-hour money-back guarantee for most services if technical requirements aren't met." },
      { id: "p2", question: "Do you have a privacy policy?", answer: "Yes, we take privacy seriously. Read our full privacy policy on our website." },
      { id: "p3", question: "What are your terms of service?", answer: "Our ToS prohibits illegal activities, spam, and copyright infringement." },
    ],
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const currentFAQs = faqData[activeTab] || [];

  return (
    <section className="min-h-screen bg-black py-16 md:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-7xl text-white uppercase mb-4 leading-none" style={{ fontFamily: "'Sigmar', cursive" }}>
            The <span className="text-[#f59e0b]">Knowledge</span> Base
          </h2>
          <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.3em] max-w-2xl">
            Find answers to commonly asked questions about our services
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          
          {/* Sidebar Tabs - Mobile Horizontal, Desktop Vertical */}
          <div className="w-full lg:w-72 flex-shrink-0">
            <div className="tabs-container">
              {/* Mobile Tabs (Horizontal Scroll) - FIXED CLIPPING ISSUE */}
              <div className="lg:hidden overflow-x-auto py-2 px-4 -mx-4 scrollbar-hide">
                <div className="flex gap-3 min-w-max py-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`tab-button-mobile ${
                        activeTab === tab.id ? "active" : ""
                      }`}
                    >
                      <span className={activeTab === tab.id ? "text-[#f59e0b]" : "text-zinc-500"}>
                        {tab.icon}
                      </span>
                      <span className="whitespace-nowrap">{tab.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Desktop Tabs (Vertical with Glider) */}
              <div className="hidden lg:block radio-container" style={{ "--total-radio": tabs.length }}>
                {tabs.map((tab) => (
                  <React.Fragment key={tab.id}>
                    <input
                      type="radio"
                      id={`radio-${tab.id}`}
                      name="faq-tabs"
                      checked={activeTab === tab.id}
                      onChange={() => setActiveTab(tab.id)}
                      className="hidden"
                    />
                    <label htmlFor={`radio-${tab.id}`} className="flex items-center gap-4 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
                      <span className={activeTab === tab.id ? "text-[#f59e0b]" : "text-zinc-700"}>{tab.icon}</span>
                      <span className="whitespace-nowrap">{tab.name}</span>
                    </label>
                  </React.Fragment>
                ))}
                <div className="glider-container">
                  <div className="glider" style={{ transform: `translateY(${activeIndex * 100}%)` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Content Area with Smooth Transition */}
          <div className="flex-grow min-h-[400px]">
            <div className="faq-content-transition" key={activeTab}>
              {currentFAQs.length > 0 ? (
                <div className="space-y-4">
                  {currentFAQs.map((item, index) => (
                    <FAQItem 
                      key={item.id} 
                      item={item} 
                      expandedItems={expandedItems} 
                      toggleItem={toggleItem} 
                      index={index}
                    />
                  ))}
                </div>
              ) : (
                <EmptyState />
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        /* Desktop Radio Container */
        .radio-container {
          --main-color: #f59e0b;
          display: flex;
          flex-direction: column;
          position: relative;
          padding-left: 2rem;
        }
        
        .radio-container label {
          cursor: pointer;
          padding: 1.2rem 0;
          color: #27272a;
          transition: all 0.3s ease;
        }
        
        .radio-container input:checked + label {
          color: var(--main-color);
        }
        
        .radio-container .glider-container {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          background: rgba(255,255,255,0.02);
          width: 2px;
        }
        
        .radio-container .glider-container .glider {
          height: calc(100% / var(--total-radio));
          width: 100%;
          background: linear-gradient(0deg, transparent 0%, var(--main-color) 50%, transparent 100%);
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .radio-container .glider-container .glider::before {
          content: "";
          position: absolute;
          height: 60%;
          width: 400%;
          top: 50%;
          left: -150%;
          transform: translateY(-50%);
          background: var(--main-color);
          filter: blur(15px);
          opacity: 0.3;
        }

        /* Mobile Tab Buttons - COMPLETELY FIXED CLIPPING */
        .tab-button-mobile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          background: rgba(24, 24, 27, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 2rem;
          color: #71717a;
          font-size: 0.75rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          transition: all 0.2s ease;
          backdrop-filter: blur(10px);
          font-family: 'Zen Dots', sans-serif;
          flex-shrink: 0;
          margin: 0;
          transform: scale(1);
          transform-origin: center;
          will-change: transform;
        }
        
        .tab-button-mobile.active {
          background: rgba(245, 158, 11, 0.15);
          border-color: rgba(245, 158, 11, 0.5);
          color: #f59e0b;
          transform: scale(1.05);
          box-shadow: 0 0 25px rgba(245, 158, 11, 0.3);
          position: relative;
          z-index: 10;
          margin: 0 2px; /* Add small margin to prevent overlap clipping */
        }
        
        .tab-button-mobile:active {
          transform: scale(0.95);
        }

        /* Hide scrollbar for mobile tabs */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* FAQ Content Transition */
        .faq-content-transition {
          animation: slideIn 0.5s ease-out;
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* FAQ Item Animation */
        .faq-item {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Broken fuse animation */
        @keyframes broken-fuse {
          0%, 18%, 22%, 25%, 53%, 57%, 100% { 
            color: #dc2626; 
            filter: drop-shadow(0 0 20px #dc2626) drop-shadow(0 0 40px #dc2626);
            opacity: 1;
          }
          20%, 24%, 55% { 
            color: #ffffff; 
            filter: drop-shadow(0 0 30px #ffffff) drop-shadow(0 0 60px #ffffff);
            opacity: 1;
          }
          21%, 23%, 54%, 56% { 
            color: #3b0707; 
            filter: drop-shadow(0 0 5px #3b0707);
            opacity: 0.5;
          }
        }
        
        .animate-broken-fuse {
          animation: broken-fuse 4s infinite;
        }

        /* Error state container */
        .error-state {
          position: relative;
          isolation: isolate;
        }
        
        .error-state .glow-layer {
          position: absolute;
          inset: -100px;
          background: radial-gradient(circle at center, rgba(220, 38, 38, 0.3) 0%, transparent 70%);
          animation: pulse-glow 4s infinite;
          pointer-events: none;
          z-index: -1;
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }

        /* Responsive adjustments */
        @media (max-width: 1023px) {
          .radio-container {
            display: none;
          }
        }

        @media (min-width: 1024px) {
          .tabs-container .lg\\:hidden {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

// FAQ Item component with staggered animation
const FAQItem = ({ item, expandedItems, toggleItem, index }) => (
  <div 
    className="faq-item group rounded-2xl border border-white/5 bg-zinc-900/10 overflow-hidden hover:border-[#f59e0b]/20 transition-all duration-500"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <button 
      onClick={() => toggleItem(item.id)} 
      className="w-full px-4 md:px-6 py-4 md:py-6 flex items-center justify-between text-left"
    >
      <h3 className="text-[10px] md:text-sm text-zinc-300 uppercase tracking-widest group-hover:text-white transition-colors pr-4" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
        {item.question}
      </h3>
      <ChevronDown className={`w-3 h-3 md:w-4 md:h-4 text-[#f59e0b] transition-all duration-500 flex-shrink-0 ${
        expandedItems[item.id] ? "rotate-180" : ""
      }`} />
    </button>
    <div className={`grid transition-all duration-500 ease-in-out ${
      expandedItems[item.id] ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
    }`}>
      <div className="overflow-hidden">
        <div className="px-4 md:px-6 pb-6 md:pb-8 pt-0 md:pt-2">
          <p className="text-zinc-500 text-xs md:text-sm leading-relaxed border-l border-[#f59e0b]/20 pl-3 md:pl-5">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  </div>
);

// Empty State component
const EmptyState = () => (
  <div className="error-state flex flex-col items-center justify-center pt-20 text-center">
    <div className="relative mb-12">
      <AlertTriangle size={60} className="md:hidden animate-broken-fuse relative z-10" />
      <AlertTriangle size={80} className="hidden md:block animate-broken-fuse relative z-10" />
      <div className="glow-layer"></div>
    </div>
    <h3 className="text-xl md:text-2xl text-red-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
      No Questions Found
    </h3>
    <p className="text-zinc-600 text-[8px] md:text-[10px] uppercase tracking-widest" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
      Check back later for updates
    </p>
  </div>
);

export default FAQSection;