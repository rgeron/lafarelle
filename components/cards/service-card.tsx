import type { LucideIcon } from "lucide-react";
import GeometricBackground from "../background/geometric-background";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
  index: number;
}

export default function ServiceCard({
  title,
  description,
  features,
  icon: Icon,
  index,
}: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative group">
      {/* Main card container */}
      <div className="bg-white border-4 border-primary relative overflow-hidden min-h-[400px] hover-lift transition-all duration-500 group-hover:border-secondary">
        <GeometricBackground variant="card" />

        {/* Header section with angled cut */}
        <div className="relative">
          <div
            className={`${
              isEven ? "bg-primary" : "bg-secondary"
            } text-white p-8 relative transition-all duration-300 ${
              isEven ? "group-hover:bg-secondary" : "group-hover:bg-primary"
            }`}
          >
            {/* Service number */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-white text-primary font-mono text-xs font-bold flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              {String(index + 1).padStart(2, "0")}
            </div>

            {/* Icon */}
            <div className="flex justify-end mb-4">
              <div
                className={`${
                  isEven ? "bg-secondary" : "bg-primary"
                } p-3 transition-all duration-300 group-hover:scale-110 ${
                  isEven ? "group-hover:bg-primary" : "group-hover:bg-secondary"
                }`}
              >
                <Icon
                  size={32}
                  className="text-white transition-transform duration-300 group-hover:rotate-12"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-mono text-xl font-bold tracking-wide transition-all duration-300 group-hover:translate-x-1">
              {title}
            </h3>

            {/* Angled bottom cut */}
            <div className="absolute bottom-0 left-0 w-full h-6 bg-white">
              <div
                className={`absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-${
                  isEven ? "primary" : "secondary"
                } border-b-[24px] border-b-transparent transition-all duration-500 ${
                  isEven
                    ? "group-hover:border-l-secondary"
                    : "group-hover:border-l-primary"
                }`}
              ></div>
              <div
                className={`absolute top-0 right-0 w-0 h-0 border-r-[100px] border-r-${
                  isEven ? "primary" : "secondary"
                } border-b-[24px] border-b-transparent transition-all duration-500 ${
                  isEven
                    ? "group-hover:border-r-secondary"
                    : "group-hover:border-r-primary"
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="p-8 pt-12 transition-all duration-300 group-hover:bg-gray-50">
          <p className="font-mono text-sm text-gray-700 leading-relaxed mb-6 transition-all duration-300 group-hover:text-gray-900">
            {description}
          </p>

          {/* Features with custom bullets */}
          <div className="space-y-3">
            <div className="font-mono text-xs font-bold text-primary tracking-wider mb-4 transition-colors duration-300 group-hover:text-secondary">
              PRESTATIONS INCLUSES:
            </div>
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start group/item">
                <div
                  className="flex-shrink-0 mt-2 mr-4 transition-all duration-300 group-hover/item:scale-125"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-0 h-0 border-l-[6px] border-l-secondary border-t-[3px] border-t-transparent border-b-[3px] border-b-transparent transition-colors duration-300 group-hover/item:border-l-primary"></div>
                </div>
                <span className="font-mono text-sm text-gray-700 leading-relaxed transition-all duration-300 group-hover/item:text-gray-900 group-hover/item:translate-x-1">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          className={`absolute bottom-0 left-0 w-full h-2 ${
            isEven ? "bg-secondary" : "bg-primary"
          } transition-all duration-500 ${
            isEven ? "group-hover:bg-primary" : "group-hover:bg-secondary"
          }`}
        >
          <div className="absolute right-0 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[20px] border-r-transparent transition-all duration-300 group-hover:border-r-[30px]"></div>
        </div>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Floating elements */}
        <div className="absolute top-4 right-12 w-1 h-1 bg-secondary/30 transition-all duration-700 group-hover:w-2 group-hover:h-2 group-hover:bg-secondary"></div>
        <div className="absolute bottom-12 left-12 w-1 h-1 bg-primary/30 transition-all duration-700 delay-200 group-hover:w-2 group-hover:h-2 group-hover:bg-primary"></div>
      </div>
    </div>
  );
}
