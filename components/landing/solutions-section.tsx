import { AnimatedElement } from "@/components/animations/animated-elements";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import SolutionCard from "@/components/cards/solution-card";
import { Shield, Target, TrendingUp } from "lucide-react";

interface Solution {
  title: string;
  items: string[];
}

interface SolutionsSectionProps {
  solutions: {
    sectionTag: string;
    title: string;
    subtitle: string;
    saasMapping: Solution;
    riskAnalysis: Solution;
    implementation: Solution;
  };
}

export function SolutionsSection({ solutions }: SolutionsSectionProps) {
  const solutionsList = [
    {
      title: solutions.saasMapping.title,
      icon: Target,
      items: solutions.saasMapping.items,
    },
    {
      title: solutions.riskAnalysis.title,
      icon: Shield,
      items: solutions.riskAnalysis.items,
    },
    {
      title: solutions.implementation.title,
      icon: TrendingUp,
      items: solutions.implementation.items,
    },
  ];

  return (
    <section
      id="nos-services"
      className="py-16 bg-white relative overflow-hidden"
    >
      <GeometricBackground variant="section" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-8">
                <div className="bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                  <span className="text-sm font-bold tracking-wider">
                    {solutions.sectionTag}
                  </span>
                  <AnimatedElement
                    variant="expandX"
                    className="absolute top-0 left-0 w-full h-1 bg-primary"
                  />
                  <AnimatedElement
                    variant="expandX"
                    delay={0.3}
                    className="absolute bottom-0 right-0 w-1/2 h-1 bg-primary"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8 tracking-wide leading-tight">
                {solutions.title}
                <br />
                <span className="text-secondary">{solutions.subtitle}</span>
              </h2>
            </ScrollReveal>
          </div>

          {/* Services grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {solutionsList.map((solution, index) => (
              <ScrollReveal
                key={index}
                delay={200 + index * 200}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <SolutionCard
                  title={solution.title}
                  items={solution.items}
                  icon={solution.icon}
                  index={index}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
