import { AnimatedElement } from "@/components/animations/animated-elements";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import { ProblemCard } from "@/components/cards/problem-card";

interface Problem {
  emoji: string;
  title: string;
  description: string;
}

interface ProblemsSectionProps {
  problems: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: Problem[];
  };
}

export function ProblemsSection({ problems }: ProblemsSectionProps) {
  return (
    <section className="py-16 bg-primary text-white relative overflow-hidden">
      <GeometricBackground variant="section" />

      {/* Additional geometric elements */}
      <div className="absolute inset-0">
        <AnimatedElement
          variant="float"
          className="absolute top-10 left-10 w-16 h-16 border-4 border-blue-500/20 rotate-45"
        />
        <AnimatedElement
          variant="pulse"
          className="absolute bottom-10 right-10 w-12 h-12 bg-secondary/10 -rotate-12"
        />
        <AnimatedElement
          variant="pulse"
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced section header */}
          <div className="text-center mb-20">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-8">
                <div className="bg-white text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                  <span className="text-sm font-bold tracking-wider">
                    {problems.sectionTag}
                  </span>
                  {/* Geometric accents */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wide leading-tight">
                {problems.title}
                <br />
                <span className="text-secondary relative">
                  {problems.subtitle}
                  {/* Accent lines */}
                  <AnimatedElement
                    variant="expandX"
                    className="absolute -bottom-4 left-0 w-full h-1 bg-secondary/30"
                  />
                  <AnimatedElement
                    variant="expandX"
                    delay={0.5}
                    className="absolute -bottom-6 left-1/4 w-1/2 h-0.5 bg-secondary/50"
                  />
                </span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Enhanced problems grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.items.map((problem, index) => (
              <ScrollReveal key={index} delay={200 + index * 100}>
                <ProblemCard problem={problem} index={index} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
