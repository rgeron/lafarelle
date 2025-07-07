interface SectionTagProps {
  children: string;
  variant?: "light" | "dark";
  className?: string;
}

export function SectionTag({
  children,
  variant = "light",
  className = "",
}: SectionTagProps) {
  const baseClasses =
    "px-8 py-4 relative hover-glow transition-all duration-300";

  const variantClasses = {
    light: "bg-secondary text-primary", // Pour sections fond blanc
    dark: "bg-white text-primary", // Pour sections fond foncé
  };

  return (
    <div className="relative inline-block">
      <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
        <span className="text-sm font-bold tracking-wider">{children}</span>
        {/* Geometric accents */}
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
        <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
      </div>
    </div>
  );
}
