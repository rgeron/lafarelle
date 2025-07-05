import { AnimatedElement } from "@/components/animations/animated-elements";
import FloatingElements from "@/components/animations/floating-elements";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import CustomButton from "@/components/buttons/custom-button";
import { type Locale } from "@/lib/i18n/index";

interface CtaSectionProps {
  locale: Locale;
  cta: {
    sectionTag: string;
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
}

export function CtaSection({ locale, cta }: CtaSectionProps) {
  return (
    <section className="py-24 bg-primary text-white relative overflow-hidden">
      <GeometricBackground variant="hero" />
      <FloatingElements count={6} />

      {/* Complex geometric overlay - retirer les animations des grandes formes */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-8 border-secondary/20 rotate-45"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rotate-12"></div>

        {/* Corner elements - pas d'animation */}
        <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-secondary/20"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 border-l-4 border-t-4 border-secondary/20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal delay={200}>
            <div className="relative inline-block mb-12">
              <div className="bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                <span className="text-sm font-bold tracking-wider">
                  {cta.sectionTag}
                </span>
                {/* Complex corner design */}
                <div className="absolute -top-3 -left-3 w-6 h-6 border-4 border-white transition-all duration-300 hover:w-8 hover:h-8"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white transition-all duration-300 hover:w-8 hover:h-8"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wide leading-tight">
              {cta.title}
              <br />
              <span className="text-secondary relative">
                {cta.subtitle}
                {/* Multiple accent lines */}
                <AnimatedElement
                  variant="expandX"
                  className="absolute -bottom-6 left-0 w-full h-2 bg-secondary/30"
                />
                <AnimatedElement
                  variant="expandX"
                  delay={0.3}
                  className="absolute -bottom-8 left-1/4 w-1/2 h-1 bg-secondary/50"
                />
                <AnimatedElement
                  variant="expandX"
                  delay={0.6}
                  className="absolute -bottom-10 left-1/3 w-1/3 h-0.5 bg-secondary/70"
                />
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="relative bg-white/10 p-8 mb-12 border-4 border-secondary/30 hover-glow transition-all duration-500 hover:bg-white/15">
              <p className="text-xl mb-6 text-white/90 leading-relaxed">
                {cta.description}
              </p>
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary transition-all duration-300 hover:w-10 hover:h-10"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60 transition-all duration-300 hover:w-8 hover:h-8"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <CustomButton
              variant="secondary"
              size="lg"
              href={`/${locale}/software/contact?subject=saas-audit#contact-form`}
            >
              {cta.button}
            </CustomButton>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
} 