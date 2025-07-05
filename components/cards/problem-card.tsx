interface ProblemCardProps {
  problem: {
    emoji: string;
    title: string;
    description: string;
  };
  index: number;
}

export function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div className="relative group h-full">
      {/* Enhanced card with modern design */}
      <div className="bg-white border border-white/20 p-8 relative overflow-hidden h-full flex flex-col hover:shadow-xl transition-all duration-700 group-hover:border-secondary/30 group-hover:bg-gray-50/50">
        {/* Top accent with animated expansion */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out"></div>

        {/* Side accent */}
        <div className="absolute left-0 top-0 w-1 h-full bg-secondary/20 transition-all duration-500 group-hover:w-2 group-hover:bg-secondary"></div>

        {/* Index number with enhanced styling */}
        <div className="absolute top-6 right-6 w-10 h-10 bg-primary text-white font-mono text-xs flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Emoji with glow effect */}
        <div className="mb-6 transition-all duration-300 group-hover:scale-110">
          <div className="text-4xl mb-2 filter drop-shadow-lg">
            {problem.emoji}
          </div>
          <div className="w-12 h-0.5 bg-gradient-to-r from-secondary to-primary transition-all duration-500 group-hover:w-20"></div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 mb-4 leading-tight transition-all duration-300 group-hover:text-primary">
          {problem.title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 text-sm leading-relaxed flex-1 transition-all duration-300 group-hover:text-gray-900">
          {problem.description}
        </p>

        {/* Bottom geometric accent */}
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-br from-secondary/10 to-primary/10 transform transition-all duration-500 group-hover:w-16 group-hover:h-16 group-hover:from-secondary/20 group-hover:to-primary/20"></div>

        {/* Hover glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Corner cuts for modern look */}
        <div className="absolute top-0 left-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  );
}
