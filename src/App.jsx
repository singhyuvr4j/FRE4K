import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lenis from "lenis";

// Components & Pages (Assuming these are correctly imported)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import MinecraftHosting from "./pages/MinecraftHosting";
import GamesOverviewPage from "./pages/GamesOverviewPage";
import DiscordBotHostingPage from "./pages/BotHosting";
import WebsiteHostingPage from "./pages/WebHosting";
import LegalPage from "./pages/Legal";
import NotFoundPage from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import PartnersPage from "./pages/PartnersPage";
import CareersPage from "./pages/CareersPage";

const GeometricLoader = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="fixed inset-0 z-[10000] flex items-center justify-center bg-black"
  >
    <div className="loader"></div>
  </motion.div>
);

const MainLayout = ({ children }) => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const lenisRef = useRef(null);

  // 1. Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    // 2. Throttle the scroll check to prevent state-fighting (flicker fix)
    let lastScroll = 0;
    lenis.on('scroll', (e) => {
      const currentScroll = e.scroll;
      if (Math.abs(currentScroll - lastScroll) > 10) { // Only check every 10px of movement
        setShowTopBtn(currentScroll > 400);
        lastScroll = currentScroll;
      }
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  // 3. Handle Loader
  useEffect(() => {
    setIsLoading(true);
    if (lenisRef.current) lenisRef.current.scrollTo(0, { immediate: true });
    const timer = setTimeout(() => setIsLoading(false), 1600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const scrollToTop = useCallback(() => {
    lenisRef.current?.scrollTo(0, { duration: 1.5 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <style>{`
        /* Global Reset */
        html.lenis, html.lenis body { height: auto; }
        body { background: black; margin: 0; overflow-x: hidden; }

        /* --- LOADER --- */
        .loader {
          width: 60px; aspect-ratio: 1.154; position: relative;
          background: conic-gradient(from 120deg at 50% 64%, #0000, #f59e0b 1deg 120deg, #0000 121deg);
          animation: l27-0 1.5s infinite cubic-bezier(0.3, 1, 0, 1), pulse-glow 1.5s infinite ease-in-out;
        }
        .loader:before, .loader:after {
          content: ""; position: absolute; inset: 0; background: inherit;
          transform-origin: 50% 66%; animation: l27-1 1.5s infinite;
        }
        .loader:after { --s: -1; }
        @keyframes l27-0 { 0%, 30% { transform: rotate(0); } 70% { transform: rotate(120deg); } 70.01%, 100% { transform: rotate(360deg); } }
        @keyframes l27-1 { 0% { transform: rotate(calc(var(--s, 1) * 120deg)) translate(0); } 30%, 70% { transform: rotate(calc(var(--s, 1) * 120deg)) translate(calc(var(--s, 1) * -5px), 10px); } 100% { transform: rotate(calc(var(--s, 1) * 120deg)) translate(0); } }
        @keyframes pulse-glow { 0%, 100% { filter: drop-shadow(0 0 8px #f59e0b66); } 50% { filter: drop-shadow(0 0 20px #f59e0b99); } }

        /* --- FLICKER-FREE SCROLL TOP --- */
        .top-btn-container {
          position: fixed;
          bottom: 40px;
          right: 40px;
          z-index: 9999;
          pointer-events: none; /* Let clicks pass through if hidden */
        }

        .top-btn-active {
          pointer-events: auto; /* Re-enable clicks when visible */
        }

        .top-button {
          height: 54px;
          min-width: 54px;
          background: #111;
          border: 1px solid rgba(245, 158, 11, 0.3);
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: width 0.4s cubic-bezier(0.16, 1, 0.3, 1), 
                      background 0.3s ease, 
                      transform 0.2s ease,
                      box-shadow 0.3s ease;
          padding: 0 18px;
          overflow: hidden;
          color: #f59e0b;
          /* Force GPU Rendering to stop flickering */
          -webkit-font-smoothing: antialiased;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .top-button svg {
          width: 16px;
          height: 16px;
          fill: currentColor;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .top-button span {
          max-width: 0;
          opacity: 0;
          margin-left: 0;
          font-family: 'Zen Dots', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        /* Hover Expansion */
        @media (hover: hover) {
          .top-button:hover {
            background: #f59e0b;
            color: #000;
            box-shadow: 0 0 25px rgba(245, 158, 11, 0.5);
            border-color: #f59e0b;
          }
          .top-button:hover span {
            max-width: 120px;
            opacity: 1;
            margin-left: 10px;
          }
          .top-button:hover svg {
            transform: translateY(-2px);
          }
        }

        .top-button:active {
          transform: scale(0.92);
        }
      `}</style>
      
      <Navbar isLoading={isLoading} />

      <main className="flex-grow bg-black flex flex-col relative">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <GeometricLoader key="loader" />
          ) : (
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black flex-grow"
            >
              {children}
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Improved Wrapper */}
        <div className={`top-btn-container hidden md:block ${showTopBtn ? 'top-btn-active' : ''}`}>
          <AnimatePresence>
            {showTopBtn && !isLoading && (
              <motion.button
                key="scroll-top-btn"
                initial={{ opacity: 0, scale: 0.5, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 30 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                onClick={scrollToTop}
                className="top-button"
              >
                <svg viewBox="0 0 384 512">
                  <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
                </svg>
                <span>BACK TO TOP</span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

export default function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/games" element={<GamesOverviewPage />} />
          <Route path="/minecraft" element={<MinecraftHosting />} />
          <Route path="/bot-hosting" element={<DiscordBotHostingPage />} />
          <Route path="/web-hosting" element={<WebsiteHostingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}