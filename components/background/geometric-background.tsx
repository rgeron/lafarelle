"use client";

import { motion } from "motion/react";

interface GeometricBackgroundProps {
  variant?: "hero" | "section" | "card" | "minimal";
  className?: string;
}

export default function GeometricBackground({
  variant = "section",
  className = "",
}: GeometricBackgroundProps) {
  const patterns = {
    hero: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Large diamond - pas d'animation */}
        <div className="absolute top-10 right-10 w-32 h-32 border-2 border-secondary/20 transform rotate-45"></div>
        <div className="absolute top-16 right-16 w-24 h-24 bg-secondary/10 transform rotate-45"></div>

        {/* Lines pattern - pas d'animation */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary"></div>
        <div className="absolute bottom-4 left-0 w-3/4 h-0.5 bg-secondary/60"></div>
        <div className="absolute bottom-8 left-0 w-1/2 h-0.5 bg-secondary/40"></div>

        {/* Corner triangles - pas d'animation */}
        <div className="absolute top-0 left-0 w-0 h-0 border-r-[100px] border-r-transparent border-t-[100px] border-t-secondary/10"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[80px] border-l-transparent border-b-[80px] border-b-secondary/15"></div>

        {/* Floating squares – désormais animées avec Motion */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-3 h-3 bg-secondary/30 rotate-12"
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-2/3 right-1/3 w-2 h-2 bg-secondary/40"
          animate={{ y: [0, -8, 0], x: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-4 h-4 border border-secondary/30 -rotate-12"
          animate={{ scale: [1, 1.12, 1], opacity: [1, 0.6, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    ),

    section: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Grid pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-primary"></div>
            ))}
          </div>
        </div>

        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-secondary/20 to-transparent transform rotate-12 origin-top"></div>
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-secondary/15 to-transparent transform -rotate-6 origin-top"></div>

        {/* Corner accents */}
        <div className="absolute top-0 right-0 w-16 h-16 border-l-2 border-b-2 border-secondary/20"></div>
        <div className="absolute bottom-0 left-0 w-12 h-12 border-r-2 border-t-2 border-secondary/20"></div>
      </div>
    ),

    card: (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {/* Corner cuts */}
        <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-secondary/10"></div>
        <div className="absolute bottom-0 left-0 w-0 h-0 border-r-[15px] border-r-transparent border-b-[15px] border-b-secondary/10"></div>

        {/* Side accent */}
        <div className="absolute left-0 top-1/4 w-1 h-1/2 bg-secondary/30"></div>

        {/* Dots pattern */}
        <div className="absolute top-4 right-4 w-1 h-1 bg-secondary/40 rounded-full"></div>
        <div className="absolute top-6 right-6 w-1 h-1 bg-secondary/30 rounded-full"></div>
        <div className="absolute top-8 right-8 w-1 h-1 bg-secondary/20 rounded-full"></div>
      </div>
    ),

    minimal: (
      <div className={`absolute inset-0 overflow-hidden  ${className}`}>
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t border-secondary/20"></div>
      </div>
    ),
  };

  return patterns[variant];
}
