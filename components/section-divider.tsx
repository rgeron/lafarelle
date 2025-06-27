import GeometricBackground from "./geometric-background"

interface SectionDividerProps {
  variant?: "diagonal" | "wave" | "geometric" | "minimal"
  color?: "primary" | "secondary" | "white" | "gray"
}

// Ajouter un commentaire pour clarifier l'usage unique
// USAGE: Un seul SectionDivider dans tout le site - en bas d'une section blanche vers une section primary
export default function SectionDivider({ variant = "diagonal", color = "primary" }: SectionDividerProps) {
  const colorClasses = {
    primary: "fill-primary",
    secondary: "fill-secondary",
    white: "fill-white",
    gray: "fill-gray-100",
  }

  const dividers = {
    diagonal: (
      <div className="relative h-24 overflow-hidden">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,0 L1200,60 L1200,120 L0,120 Z" className={colorClasses[color]} />
          </svg>
        </div>
        <GeometricBackground variant="minimal" className="opacity-20" />
      </div>
    ),

    wave: (
      <div className="relative h-20 overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          <path d="M0,60 Q300,0 600,60 T1200,60 L1200,120 L0,120 Z" className={colorClasses[color]} />
        </svg>
      </div>
    ),

    geometric: (
      <div className="relative h-16 overflow-hidden">
        <div className="absolute inset-0 flex">
          <div
            className={`flex-1 h-full bg-${color === "primary" ? "primary" : color === "secondary" ? "secondary" : color}`}
          ></div>
          <div className="w-0 h-0 border-l-[60px] border-l-transparent border-b-[64px] border-b-primary"></div>
          <div
            className={`flex-1 h-full bg-${color === "primary" ? "primary" : color === "secondary" ? "secondary" : color}`}
          ></div>
        </div>
      </div>
    ),

    minimal: (
      <div className="relative h-8">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-secondary"></div>
      </div>
    ),
  }

  return dividers[variant]
}
