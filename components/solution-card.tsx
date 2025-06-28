import type { LucideIcon } from "lucide-react";

interface SolutionCardProps {
  title: string;
  items: string[];
  icon: LucideIcon;
  index: number;
}

export default function SolutionCard({
  title,
  items,
  icon: Icon,
  index,
}: SolutionCardProps) {
  return (
    <div className="relative group">
      {/* Main card */}
      <div className="bg-white border-4 border-primary relative overflow-hidden hover-lift transition-all duration-500 group-hover:border-secondary min-h-[300px] flex flex-col">
        {/* Header section */}
        <div className="bg-primary text-white p-6 relative transition-all duration-300 group-hover:bg-secondary group-hover:text-primary">
          <div className="flex items-center justify-between">
            <div className="font-mono text-xs tracking-wider opacity-80 transition-opacity duration-300 group-hover:opacity-100">
              SERVICE_{String(index + 1).padStart(2, "0")}
            </div>
            <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Icon
                size={24}
                className="text-secondary group-hover:text-primary transition-colors duration-300"
              />
            </div>
          </div>
          <h3 className="font-mono text-lg font-bold mt-4 tracking-wide transition-all duration-300 group-hover:translate-x-1">
            {title}
          </h3>

          {/* Geometric accent */}
          <div className="absolute bottom-0 right-0 transition-all duration-500 group-hover:scale-125">
            <div className="w-0 h-0 border-l-[40px] border-l-transparent border-b-[40px] border-b-secondary group-hover:border-b-primary transition-colors duration-300"></div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-6 bg-gray-50 transition-colors duration-300 group-hover:bg-gray-100 flex-1">
          <div className="space-y-3">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start group/item">
                <div
                  className="w-2 h-2 bg-secondary mt-2 mr-4 flex-shrink-0 transition-all duration-300 group-hover/item:bg-primary group-hover/item:scale-125"
                  style={{ animationDelay: `${idx * 100}ms` }}
                ></div>
                <span className="font-mono text-sm text-gray-700 leading-relaxed transition-all duration-300 group-hover/item:text-gray-900 group-hover/item:translate-x-1">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Side accent */}
        <div className="absolute left-0 top-0 w-1 h-full bg-secondary transition-all duration-500 group-hover:w-2"></div>

        {/* Animated corner elements */}
        <div className="absolute top-2 right-2 w-1 h-1 bg-secondary/40 transition-all duration-700 group-hover:w-3 group-hover:h-3 group-hover:bg-secondary"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-primary/40 transition-all duration-700 delay-100 group-hover:w-2 group-hover:h-2 group-hover:bg-primary"></div>
      </div>
    </div>
  );
}
