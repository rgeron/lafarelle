import AnimatedCounter from "@/components/animations/animated-counter";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";

interface StatsSectionProps {
  stats: {
    shadowIT: string;
    cyberattacks: string;
    saasWaste: string;
  };
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <GeometricBackground variant="minimal" />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <ScrollReveal delay={200}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  <AnimatedCounter end={65} suffix="%" />
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {stats.shadowIT}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  1/3
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {stats.cyberattacks}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="group">
                <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                  <AnimatedCounter end={41} suffix="%" />
                </div>
                <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                  {stats.saasWaste}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
