import React, { useState, useEffect } from "react";
import { Check, Copy, X, Zap } from "lucide-react";

const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasCopied, setHasCopied] = useState(false);
  const [isLightning, setIsLightning] = useState(false);

  const promoCode = "26BZ";
  const STORAGE_KEY = "promoBannerDismissed";
  const ONE_DAY_MS = 24 * 60 * 60 * 1000; // 24 hours

  useEffect(() => {
    const checkBannerVisibility = () => {
      const storedData = localStorage.getItem(STORAGE_KEY);
      if (storedData) {
        const { dismissedAt } = JSON.parse(storedData);
        const now = new Date().getTime();
        if (now - dismissedAt < ONE_DAY_MS) {
          setIsVisible(false);
        } else {
          localStorage.removeItem(STORAGE_KEY);
          setIsVisible(true);
        }
      }
    };

    checkBannerVisibility();
  }, []);

  useEffect(() => {
    const triggerLightning = () => {
      setIsLightning(true);
      setTimeout(() => setIsLightning(false), 400);
    };

    const initialTimeout = setTimeout(() => {
      triggerLightning();

      const interval = setInterval(() => {
        triggerLightning();
      }, 5000);

      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(promoCode);
      setHasCopied(true);
      setTimeout(() => setHasCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleDismiss = () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        dismissedAt: new Date().getTime(),
      })
    );
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="relative bg-zinc-950 border-b border-white/10">
      <style>
        {`
          @keyframes strike {
            0% {
              stroke-dashoffset: 100;
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            50% {
              stroke-dashoffset: 0;
            }
            90% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      </style>

      <div className="py-3 text-center flex items-center justify-center gap-x-4">
        <div className="relative hidden sm:block">
          <Zap
            className={`
              w-4 h-4 text-primarytext
              transition-all duration-200 
              ${isLightning ? "scale-125 rotate-12 animate-pulse" : ""}
            `}
          />
          {isLightning && (
            <div className="absolute inset-0 animate-[strike_0.4s_ease-in]">
              <svg className="w-full h-full" viewBox="0 0 16 16">
                <path
                  d="M8,0 L10,6 L6,10 L8,16"
                  stroke="currentColor"
                  className="text-primarytext animate-[strike_0.4s_ease-in]"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="100"
                  strokeDashoffset="100"
                  opacity="0.5"
                />
              </svg>
            </div>
          )}
        </div>

        <span className="text-slate-200 text-sm font-medium">
          <span className="hidden md:inline">Spring Special:</span> Get 30% off
          your first 3 months with code{" "}
          <span
            className={`
              font-mono px-2 py-0.5 rounded 
              transition-all duration-200
              relative
              ${
                isLightning
                  ? "bg-primarytext/10 border-primarytext/30 scale-105"
                  : "bg-slate-900 border-slate-800"
              } 
              border
            `}
          >
            {promoCode}
            {isLightning && (
              <div className="absolute inset-0 overflow-hidden">
                <svg
                  className="w-full h-full"
                  viewBox="0 0 100 30"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M30,0 L45,15 L35,20 L50,30"
                    stroke="currentColor"
                    className="text-primarytext animate-[strike_0.4s_ease-in]"
                    strokeWidth="1"
                    fill="none"
                    strokeDasharray="100"
                    strokeDashoffset="100"
                    opacity="0.3"
                  />
                </svg>
              </div>
            )}
          </span>
        </span>

        <button
          onClick={handleCopy}
          className="hidden sm:inline-flex items-center gap-x-1.5 text-primarytext text-sm font-semibold hover:text-primarytext/80 transition-colors group"
        >
          {hasCopied ? (
            <>
              <Check className="w-4 h-4" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Copy Code</span>
            </>
          )}
        </button>

        <button
          onClick={handleDismiss}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-primarytext hover:text-primarytext/80 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
