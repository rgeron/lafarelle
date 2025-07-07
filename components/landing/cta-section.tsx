import ScrollReveal from "@/components/animations/scroll-reveal";
import CustomButton from "@/components/buttons/custom-button";
import { SectionTag } from "@/components/tags/section-tag";
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
    <section className="py-12 bg-primary text-white relative">
      {/* Simple geometric accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-l-2 border-t-2 border-secondary/30"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Layout horizontal pour desktop, vertical pour mobile */}
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-12">
            {/* Partie gauche : Tag + Titre */}
            <div className="lg:flex-1 text-center lg:text-left mb-8 lg:mb-0">
              <ScrollReveal delay={200}>
                <div className="mb-6">
                  <SectionTag variant="dark">{cta.sectionTag}</SectionTag>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-wide leading-tight">
                  {cta.title}
                  <br />
                  <span className="text-secondary">{cta.subtitle}</span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Partie droite : Description + Bouton */}
            <div className="lg:flex-1 text-center lg:text-left">
              <ScrollReveal delay={600}>
                <p className="text-lg text-white/90 leading-relaxed mb-6">
                  {cta.description}
                </p>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <CustomButton
                  variant="secondary"
                  size="lg"
                  href={`/${locale}/software/contact#contact-form`}
                  className="inline-block"
                >
                  {cta.button}
                </CustomButton>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
