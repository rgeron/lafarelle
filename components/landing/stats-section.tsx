import AnimatedCounter from "@/components/animations/animated-counter";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import SectionSeparator from "@/components/separators/section-separator";

interface StatsSectionProps {
  stats: {
    shadowIT: string;
    cyberattacks: string;
    saasWaste: string;
    sources: {
      shadowIT: string;
      cyberattacks: string;
      saasWaste: string;
    };
  };
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-white relative overflow-hidden ">
      <GeometricBackground variant="section" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <ScrollReveal delay={200}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  <AnimatedCounter end={40} suffix="%" />
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800 mb-1">
                  {stats.shadowIT}
                </p>
                <p className="text-xs text-gray-400 font-mono opacity-60">
                  {stats.sources.shadowIT}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  1/3
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800 mb-1">
                  {stats.cyberattacks}
                </p>
                <p className="text-xs text-gray-400 font-mono opacity-60">
                  {stats.sources.cyberattacks}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  +80%
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800 mb-1">
                  {stats.saasWaste}
                </p>
                <p className="text-xs text-gray-400 font-mono opacity-60">
                  {stats.sources.saasWaste}
                </p>
              </div>
            </ScrollReveal>
          </div>
          <SectionSeparator variant="zigzag" className="" />
        </div>
      </div>
    </section>
  );
}
