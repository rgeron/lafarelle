import { AnimatedElement } from "@/components/animations/animated-elements";
import { cn } from "@/lib/utils";

interface HeroTagProps {
  children: React.ReactNode;
  variant?: "simple" | "animated";
  className?: string;
}

export function HeroTag({
  children,
  variant = "simple",
  className,
}: HeroTagProps) {
  if (variant === "animated") {
    return (
      <div className={cn("relative inline-block", className)}>
        <div className="bg-secondary text-primary px-8 py-4 relative">
          <span className="text-sm font-bold tracking-wider">{children}</span>
          <AnimatedElement
            variant="expandX"
            className="absolute top-0 left-0 w-full h-1 bg-primary"
          />
          <AnimatedElement
            variant="expandX"
            delay={0.3}
            className="absolute bottom-0 right-0 w-2/3 h-1 bg-primary"
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "inline-block bg-secondary text-primary px-6 py-3",
        className
      )}
    >
      <span className="text-sm font-bold tracking-wider">{children}</span>
    </div>
  );
}
