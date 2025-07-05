import { AnimatedElement } from "@/components/animations/animated-elements";
import FloatingElements from "@/components/animations/floating-elements";
import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import CustomButton from "@/components/buttons/custom-button";
import { type Locale } from "@/lib/i18n/index";

interface HeroSectionProps {
  locale: Locale;
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    auditButton: string;
    solutionsButton: string;
  };
}

export function HeroSection({ locale, hero }: HeroSectionProps) {
  return (
    <section className="bg-primary text-white relative overflow-hidden min-h-screen flex items-center">
      <GeometricBackground variant="hero" />
      <FloatingElements count={8} />

      {/* Additional complex geometric elements */}
      <div className="absolute inset-0">
        {/* Large geometric grid - pas d'animation */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="grid grid-cols-8 grid-rows-6 h-full">
            {Array.from({ length: 48 }).map((_, i) => (
              <div key={i} className="border border-secondary"></div>
            ))}
          </div>
        </div>

        {/* Diagonal accent lines - pas d'animation */}
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent transform rotate-12 origin-top"></div>
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-secondary/30 via-secondary/15 to-transparent transform -rotate-6 origin-top"></div>

        {/* Complex corner elements - garder seulement les petites animations */}
        <div className="absolute top-0 right-0">
          <div className="w-40 h-40 border-4 border-secondary/20 transform rotate-45 translate-x-20 -translate-y-20"></div>
          <div className="absolute top-8 right-8 w-24 h-24 bg-secondary/10 transform rotate-45"></div>
          <AnimatedElement
            variant="pulse"
            className="absolute top-16 right-16 w-16 h-16 border-2 border-secondary/30 rotate-45"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced header design */}
          <ScrollReveal delay={200}>
            <div className="relative mb-12">
              <div className="inline-block bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                <span className="text-sm font-bold tracking-wider">
                  {hero.tagline}
                </span>
                {/* Corner cuts */}
                <div className="absolute top-0 left-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-primary transition-all duration-300 hover:border-r-[16px] hover:border-t-[16px]"></div>
                <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-primary transition-all duration-300 hover:border-l-[16px] hover:border-b-[16px]"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <h1 className="text-5xl lg:text-8xl font-bold mb-12 leading-tight tracking-wide">
              {hero.title}
              <br />
              <span className="text-secondary relative">
                {hero.subtitle}
                {/* Underline accent */}
                <AnimatedElement
                  variant="expandX"
                  className="absolute bottom-0 left-0 w-full h-2 bg-secondary/30"
                />
                <AnimatedElement
                  variant="expandX"
                  delay={0.5}
                  className="absolute bottom-2 left-0 w-3/4 h-1 bg-secondary/50"
                />
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <div className="max-w-4xl mb-12">
              <div className="relative bg-white/10 p-8 border-l-8 border-secondary hover-glow transition-all duration-500 hover:bg-white/15">
                <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
                  {hero.description}
                </p>
                <p className="text-base text-white/80 leading-relaxed">
                  {hero.description2}
                </p>

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-6 h-6 bg-secondary transition-all duration-300 hover:w-8 hover:h-8"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary/60 transition-all duration-300 hover:w-6 hover:h-6"></div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-6">
              <CustomButton
                variant="secondary"
                size="lg"
                href={`/${locale}/software/contact?subject=saas-audit#contact-form`}
              >
                {hero.auditButton}
              </CustomButton>
              <CustomButton
                variant="primary"
                size="lg"
                href={`/${locale}/software/contact?subject=consultation#contact-form`}
              >
                {hero.solutionsButton}
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
