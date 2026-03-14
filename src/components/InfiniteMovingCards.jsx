import React, { useRef, useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  { quote: "Best gaming servers I've ever used. The performance is incredible!", name: "Alex Smith", title: "Pro Gamer", game: "CS2", rating: 5 },
  { quote: "Setup was super easy and the support team is amazing.", name: "Sarah Johnson", title: "Community Leader", game: "Minecraft", rating: 5 },
  { quote: "Zero downtime and amazing ping times. Couldn't ask for better.", name: "Mike Chen", title: "ESports Manager", game: "CS2", rating: 5 },
  { quote: "Perfect for our tournament needs. Rock-solid performance.", name: "Emma Wilson", title: "Organizer", game: "ARK", rating: 5 },
  { quote: "Customer support is top-notch. They're always there.", name: "David Park", title: "Admin", game: "Minecraft", rating: 5 },
];

const CardContent = ({ item }) => (
  <div className="relative flex-shrink-0 w-[260px] sm:w-[350px] rounded-2xl border border-white/5 bg-zinc-950/50 p-5 sm:p-6 transition-all duration-500 mx-3 sm:mx-4">
    <div className="flex mb-3">
      {[...Array(item.rating)].map((_, i) => (
        <Star key={i} className="w-3 h-3 fill-[#f59e0b] text-[#f59e0b]" />
      ))}
    </div>
    
    <p className="text-zinc-400 mb-6 text-xs sm:text-sm leading-relaxed font-medium min-h-[50px] sm:min-h-[60px]">
      "{item.quote}"
    </p>

    <div className="flex items-center gap-3 sm:gap-4">
      <div className="relative h-8 w-8 sm:h-10 sm:w-10 flex-shrink-0">
        <img 
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name}`} 
          alt={item.name} 
          className="h-full w-full rounded-full border border-white/10 bg-zinc-900 object-cover"
        />
      </div>

      <div>
        {/* Added Zen Dots font here */}
        <p className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider" style={{ fontFamily: "'Zen Dots', sans-serif" }}>{item.name}</p>
        <p className="text-[9px] sm:text-[10px] text-zinc-600 uppercase font-bold tracking-tight" style={{ fontFamily: "'Zen Dots', sans-serif" }}>
          {item.game} • {item.title}
        </p>
      </div>
    </div>
  </div>
);

export const InfiniteMovingCards = () => {
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (scrollerRef.current) {
      const content = Array.from(scrollerRef.current.children);
      content.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current.appendChild(duplicatedItem);
      });
      setStart(true);
    }
  }, []);

  return (
    <section className="bg-black py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 lg:gap-12">
        
        {/* --- LEFT SIDE: RATING --- */}
        <div className="w-full lg:w-[320px] flex-shrink-0 text-center lg:text-left mb-8 lg:mb-0">
          <p className="text-[#f59e0b] text-[9px] sm:text-[10px] uppercase tracking-[0.4em] font-black mb-3">Community feedback</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 uppercase leading-[0.9]" style={{ fontFamily: "'Sigmar', cursive" }}>
            We're Rated <br/><span className="text-[#f59e0b]">Excellent!</span>
          </h2>
          
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <a 
              href="https://www.trustpilot.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-fit"
            >
              <img 
                src="https://ateex.cloud/stars-4.svg" 
                alt="Trustpilot" 
                className="h-7 sm:h-8 w-auto" 
              />
            </a>
            <p className="text-zinc-500 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em]">
              <span className="text-white">3.9/5</span> on Trustpilot
            </p>
          </div>
        </div>

        {/* --- RIGHT SIDE: THE CARDS --- */}
        <div className="relative w-full overflow-hidden">
          {/* Edge Shadows - Responsive width */}
          <div className="absolute inset-y-0 left-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-32 lg:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

          <div
            ref={scrollerRef}
            className={`flex py-4 sm:py-8 w-max ${start ? "animate-scroll" : ""}`}
            style={{ pointerEvents: 'none' }} 
          >
            {testimonials.map((item, idx) => (
              <CardContent key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-50%)); }
        }
        .animate-scroll {
          /* Smooth 80s crawl, no pauses allowed */
          animation: scroll 80s linear infinite !important;
          display: flex;
        }
        @media (max-width: 640px) {
          .animate-scroll {
            animation-duration: 40s !important; 
          }
        }
      `}</style>
    </section>
  );
};

export default InfiniteMovingCards;