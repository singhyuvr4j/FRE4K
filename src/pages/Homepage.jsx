import React from "react";
import { Helmet } from "react-helmet";

// Modular Imports
import Hero from "./Hero";
import Features from "./Features";
import PanelShowcase from "./PanelShowcase";
import GamesHero from "./GamesHero";
import Locations from "./Locations";

// Component Imports
import FAQSection from "../components/FAQSection";
import InfiniteMovingCards from "../components/InfiniteMovingCards";

const Homepage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>FRE4K</title>
      </Helmet>
      
      {/* 1. HERO SECTION */}
      <Hero />

      {/* 2. FEATURES SECTION */}
      <Features />

      {/* 3. PANEL SHOWCASE SECTION */}
      <PanelShowcase />
      
      {/* 4. GAMESHERO SECTION */}
      <GamesHero />
      
      {/* 5. LOCATIONS SECTION */}
      <Locations />
      
      {/* 6. SUPPORTING SECTIONS */}
      {/* DemoServers removed as requested */}
      <InfiniteMovingCards speed="normal" pauseOnHover={true} />
      <FAQSection />
    </div>
  );
};

export default Homepage;