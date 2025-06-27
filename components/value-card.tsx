import type { LucideIcon } from "lucide-react"
import GeometricBackground from "./geometric-background"

interface ValueCardProps {
  title: string
  description: string
  icon: LucideIcon
  index: number
}

export default function ValueCard({ title, description, icon: Icon, index }: ValueCardProps) {
  return (
    <div className="relative group">
      {/* Card container with unique shape */}
      <div className="bg-white border-2 border-gray-200 relative overflow-hidden min-h-[280px] hover-lift transition-all duration-500 group-hover:border-secondary group-hover:shadow-lg">
        <GeometricBackground variant="minimal" />

        {/* Top section with icon */}
        <div className="relative p-6">
          {/* Corner number */}
          <div className="absolute top-0 left-0 w-12 h-12 bg-primary text-white font-mono text-sm font-bold flex items-center justify-center transition-all duration-300 group-hover:bg-secondary group-hover:text-primary group-hover:scale-110">
            {String(index + 1).padStart(2, "0")}
          </div>

          {/* Icon container with geometric shape */}
          <div className="flex justify-end mb-4">
            <div className="relative transition-all duration-300 group-hover:scale-110">
              <div className="w-16 h-16 bg-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-primary">
                <Icon
                  size={28}
                  className="text-primary transition-all duration-300 group-hover:text-secondary group-hover:rotate-12"
                />
              </div>
              {/* Small accent square */}
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-primary transition-all duration-300 group-hover:bg-secondary group-hover:scale-125"></div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="px-6 pb-8">
          <h3 className="font-mono text-lg font-bold text-primary mb-3 tracking-wide transition-all duration-300 group-hover:text-secondary group-hover:translate-x-1">
            {title}
          </h3>
          <p className="font-mono text-sm text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-gray-900 line-clamp-4">
            {description}
          </p>
        </div>

        {/* Bottom geometric accent */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-1 bg-secondary transition-all duration-500 group-hover:h-2"></div>
          <div className="flex">
            <div className="flex-1 h-2 bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"></div>
            <div className="w-8 h-2 bg-secondary transition-all duration-300 group-hover:w-12"></div>
            <div className="flex-1 h-2 bg-primary/5 transition-all duration-300 group-hover:bg-primary/10"></div>
          </div>
        </div>

        {/* Side accent line */}
        <div className="absolute right-0 top-1/4 w-1 h-1/2 bg-secondary/30 transition-all duration-500 group-hover:bg-secondary group-hover:w-2"></div>

        {/* Subtle floating dots */}
        <div className="absolute top-16 right-8 w-1 h-1 bg-secondary/20 transition-all duration-700 group-hover:w-2 group-hover:h-2 group-hover:bg-secondary/60"></div>
        <div className="absolute bottom-16 left-8 w-1 h-1 bg-primary/20 transition-all duration-700 delay-100 group-hover:w-2 group-hover:h-2 group-hover:bg-primary/60"></div>
      </div>
    </div>
  )
}
