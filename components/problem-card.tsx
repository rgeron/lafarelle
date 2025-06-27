interface ProblemCardProps {
  problem: string
  index: number
}

export default function ProblemCard({ problem, index }: ProblemCardProps) {
  return (
    <div className="relative group">
      {/* Card with geometric design */}
      <div className="bg-white border-2 border-white/20 p-6 relative overflow-hidden hover-lift hover:border-secondary group-hover:shadow-lg transition-all duration-500">
        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-8 h-8 bg-secondary transform transition-all duration-300 group-hover:w-12 group-hover:h-12"></div>

        {/* Index number */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white font-mono text-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Content */}
        <div className="mt-12 transition-all duration-300 group-hover:translate-x-1">
          <div className="h-1 w-12 bg-secondary mb-4 transition-all duration-500 group-hover:w-20"></div>
          <p className="font-mono text-sm text-gray-800 leading-relaxed transition-colors duration-300 group-hover:text-gray-900">
            {problem}
          </p>
        </div>

        {/* Bottom border animation */}
        <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-700 ease-out"></div>

        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
    </div>
  )
}
