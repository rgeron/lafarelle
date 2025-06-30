interface SectionSeparatorProps {
  variant?: "zigzag" | "hexagons" | "waves" | "arrows" | "circles" | "minimal-line"
  className?: string
}

export default function SectionSeparator({ variant = "zigzag", className = "" }: SectionSeparatorProps) {
  const separators = {
    zigzag: (
      <div className={`relative h-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 200 40" className="w-64 h-10">
            <path
              d="M0,20 L20,5 L40,20 L60,5 L80,20 L100,5 L120,20 L140,5 L160,20 L180,5 L200,20"
              stroke="rgb(178, 149, 80)"
              strokeWidth="2"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    ),

    hexagons: (
      <div className={`relative h-24 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-6">
            <div className="w-8 h-8 bg-secondary/20 transform rotate-45 clip-path-hexagon"></div>
            <div className="w-6 h-6 bg-primary/30 transform rotate-45 clip-path-hexagon"></div>
            <div className="w-10 h-10 border-2 border-secondary/20 transform rotate-45 clip-path-hexagon"></div>
            <div className="w-6 h-6 bg-primary/30 transform rotate-45 clip-path-hexagon"></div>
            <div className="w-8 h-8 bg-secondary/20 transform rotate-45 clip-path-hexagon"></div>
          </div>
        </div>
      </div>
    ),

    waves: (
      <div className={`relative h-16 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg viewBox="0 0 400 60" className="w-96 h-15">
            <path
              d="M0,30 Q50,10 100,30 T200,30 T300,30 T400,30"
              stroke="rgb(29, 47, 73)"
              strokeWidth="1"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M0,35 Q50,15 100,35 T200,35 T300,35 T400,35"
              stroke="rgb(178, 149, 80)"
              strokeWidth="1"
              fill="none"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>
    ),

    arrows: (
      <div className={`relative h-18 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-8">
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[8px] border-b-secondary/30"></div>
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[6px] border-b-primary/40"></div>
            <div className="w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-b-[10px] border-b-secondary/30"></div>
            <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[6px] border-b-primary/40"></div>
            <div className="w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[8px] border-b-secondary/30"></div>
          </div>
        </div>
      </div>
    ),

    circles: (
      <div className={`relative h-20 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-4">
            <div className="w-3 h-3 bg-secondary/30 rounded-full"></div>
            <div className="w-5 h-5 border-2 border-primary/30 rounded-full"></div>
            <div className="w-7 h-7 bg-secondary/20 rounded-full"></div>
            <div className="w-4 h-4 bg-primary/40 rounded-full"></div>
            <div className="w-6 h-6 border border-secondary/30 rounded-full"></div>
            <div className="w-3 h-3 bg-primary/30 rounded-full"></div>
          </div>
        </div>
      </div>
    ),

    "minimal-line": (
      <div className={`relative h-8 overflow-hidden ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
        </div>
      </div>
    ),
  }

  return separators[variant]
}
