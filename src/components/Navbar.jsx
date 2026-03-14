import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu, X, ChevronDown, Bot, Globe, UserCircle, 
  Server, Users, Info, ShieldCheck, Scale, CreditCard
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isLoading }) => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileExpander, setMobileExpander] = useState(null);

  // FEATURE: Disable Scroll when Mobile Menu is Open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    // Cleanup on unmount
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveTab("Home");
    else if (path === "/games") setActiveTab("Game Servers");
    else if (["/vps", "/web-hosting", "/bot-hosting"].some(p => path.includes(p))) setActiveTab("Cloud Hosting");
    else if (["/about", "/team"].some(p => path.includes(p))) setActiveTab("Company");
    else if (["/terms", "/refund", "/privacy"].some(p => path.includes(p))) setActiveTab("Legal");
    else setActiveTab("");
    
    // Close menu when navigating
    setIsOpen(false);
  }, [location.pathname]);

  const cloudLinks = [
    { name: "VPS", path: "/vps", icon: <Server className="w-4 h-4" /> },
    { name: "Web Hosting", path: "/web-hosting", icon: <Globe className="w-4 h-4" /> },
    { name: "Bot Hosting", path: "/bot-hosting", icon: <Bot className="w-4 h-4" /> },
  ];

  const companyLinks = [
    { name: "About Us", path: "/about", icon: <Info className="w-4 h-4" /> },
    { name: "Our Team", path: "/team", icon: <Users className="w-4 h-4" /> },
  ];

  const legalLinks = [
    { name: "Terms", path: "/terms", icon: <Scale className="w-4 h-4" /> },
    { name: "Refund", path: "/refund", icon: <CreditCard className="w-4 h-4" /> },
    { name: "Privacy", path: "/privacy", icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  const mainLinks = [
    { name: "Home", path: "/" },
    { name: "Game Servers", path: "/games" },
    { name: "Cloud Hosting", path: "#", hasDropdown: true, subLinks: cloudLinks },
    { name: "Company", path: "#", hasDropdown: true, subLinks: companyLinks },
    { name: "Legal", path: "#", hasDropdown: true, subLinks: legalLinks },
  ];

  return (
    <>
      {/* FEATURE: Click Outside Backdrop (Mobile Only) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998] md:hidden"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div 
            className="fixed top-6 left-0 right-0 z-[9999] px-4 font-sans"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex justify-center">
              <div className="flex items-center justify-between bg-black/50 border border-white/10 backdrop-blur-[24px] py-2.5 px-8 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-full max-w-7xl relative">
                
                {/* BRANDING SECTION */}
                <Link to="/" className="flex items-center shrink-0 mr-10 group relative">
                  <div className="relative hidden md:flex items-center">
                    <img 
                      src="https://i.postimg.cc/rmYcDhGK/dcec4edb-410d-4ab2-a4fe-ae3e7e32d8c0.png" 
                      alt="FRE4K Logo" 
                      className="h-10 w-auto object-contain drop-shadow-[0_0_15px_rgba(245,158,11,0.5)] transition-transform group-hover:scale-[2.4] scale-[2.2] relative z-10"
                    />
                  </div>
                  <span 
                    className="text-[25px] whitespace-nowrap tracking-wider md:ml-8 ml-0"
                    style={{ fontFamily: "'Zen Dots', sans-serif" }}
                  >
                    <span className="text-white">FRE</span>
                    <span className="text-[#f59e0b]">4</span>
                    <span className="text-white">K</span>
                  </span>
                </Link>

                {/* Desktop Nav (Remains unchanged) */}
                <div className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 w-max">
                  {mainLinks.map((link) => (
                    <div
                      key={link.name}
                      className="relative px-0.5"
                      onMouseEnter={() => link.hasDropdown && setOpenDropdown(link.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        to={link.path}
                        className={`relative flex items-center gap-2 text-[12px] font-bold px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                          activeTab === link.name ? "text-white" : "text-white/60 hover:text-white"
                        }`}
                      >
                        {activeTab === link.name && link.name !== "Home" && (
                          <motion.div 
                            className="absolute inset-0 rounded-full -z-10 bg-[#f59e0b]/20 blur-lg" 
                            layoutId="activeGlow"
                          />
                        )}
                        <span className="relative z-10 flex items-center gap-1.5 uppercase tracking-widest">
                          {link.name}
                          {link.hasDropdown && <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                        </span>
                      </Link>

                      <AnimatePresence>
                        {link.hasDropdown && openDropdown === link.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            className="absolute top-[115%] left-0 min-w-[220px] py-3 bg-black/90 backdrop-blur-3xl border border-white/10 rounded-2xl shadow-2xl z-50"
                          >
                            {link.subLinks.map((sub) => (
                              <Link
                                key={sub.name}
                                to={sub.path}
                                className="flex items-center gap-3 px-5 py-3 text-[13px] font-bold text-zinc-300 hover:text-[#f59e0b] hover:bg-white/5 transition-all"
                              >
                                {sub.icon} {sub.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>

                <div className="hidden md:block shrink-0 ml-6">
                  <Link to="/client" className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 border border-white/10 text-white text-[11px] font-black hover:bg-[#f59e0b] hover:border-[#f59e0b] transition-all uppercase tracking-widest">
                    <UserCircle className="w-4 h-4" /> PORTAL
                  </Link>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2 relative z-[10000]">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu with Animations */}
            <AnimatePresence>
              {isOpen && (
                <div className="flex justify-center mt-4 md:hidden px-2 relative z-[9999]">
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="w-full bg-black/95 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-5"
                  >
                    {mainLinks.map((link) => (
                      <div key={link.name}>
                        {link.hasDropdown ? (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setMobileExpander(mobileExpander === link.name ? null : link.name);
                              }}
                              className="flex items-center justify-between w-full px-5 py-4 text-[13px] font-bold text-white uppercase tracking-widest hover:bg-white/5 rounded-2xl"
                            >
                              {link.name} <ChevronDown size={18} className={`transition-transform duration-300 ${mobileExpander === link.name ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                              {mobileExpander === link.name && (
                                <motion.div 
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  className="overflow-hidden bg-white/5 rounded-2xl mb-2 mx-2"
                                >
                                  {link.subLinks.map((sub) => (
                                    <Link key={sub.name} to={sub.path} className="flex items-center gap-4 px-8 py-4 text-[12px] font-semibold text-zinc-300" onClick={() => setIsOpen(false)}>
                                      {sub.icon} {sub.name}
                                    </Link>
                                  ))}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          <Link
                            to={link.path}
                            className="flex items-center px-5 py-4 text-[13px] font-bold text-white uppercase tracking-widest hover:bg-white/5 rounded-2xl block"
                            onClick={() => setIsOpen(false)}
                          >
                            {link.name}
                          </Link>
                        )}
                      </div>
                    ))}
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <Link to="/client" className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl bg-[#f59e0b] text-black text-[13px] font-black uppercase tracking-widest" onClick={() => setIsOpen(false)}>
                        <UserCircle className="w-5 h-5" /> PORTAL
                      </Link>
                    </div>
                  </motion.div>
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;