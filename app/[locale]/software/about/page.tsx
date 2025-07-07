import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import CustomButton from "@/components/buttons/custom-button";
import ValueCard from "@/components/cards/value-card";
import { PageHero } from "@/components/page-hero";
import SectionSeparator from "@/components/separators/section-separator";
import { aboutContent } from "@/lib/i18n/about";
import { type Locale, getContent } from "@/lib/i18n/index";
import { navigationContent } from "@/lib/i18n/navigation";
import { Eye, Handshake, Lightbulb, Target } from "lucide-react";

interface AboutPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const about = getContent(locale, aboutContent);
  const nav = navigationContent[locale];

  const values = [
    {
      title: about.values.excellence.title,
      description: about.values.excellence.description,
      icon: Target,
    },
    {
      title: about.values.transparency.title,
      description: about.values.transparency.description,
      icon: Eye,
    },
    {
      title: about.values.innovation.title,
      description: about.values.innovation.description,
      icon: Lightbulb,
    },
    {
      title: about.values.partnership.title,
      description: about.values.partnership.description,
      icon: Handshake,
    },
  ];

  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <PageHero
        locale={locale}
        tagline={about.hero.tagline}
        tagVariant="animated"
        title={about.hero.title}
        subtitle={about.hero.subtitle}
        breadcrumbs={[{ label: nav.about }]}
      />

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <ScrollReveal delay={200}>
                <div className="inline-block bg-primary text-white px-6 py-3 mb-8">
                  <span className="text-sm font-bold tracking-wider">
                    {about.story.sectionTitle}
                  </span>
                </div>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={400}>
              <div className="relative bg-gray-50 p-12 border-4 border-primary">
                <GeometricBackground variant="card" />

                <div className="relative z-10">
                  <p className="text-xl mb-8 leading-relaxed text-gray-700">
                    {about.story.paragraph1}
                  </p>
                  <p className="text-lg leading-relaxed text-gray-700">
                    {about.story.paragraph2}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal delay={200}>
              <div className="inline-block bg-secondary text-primary px-6 py-3 mb-12">
                <span className="text-sm font-bold tracking-wider">
                  {about.mission.sectionTitle}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="relative bg-white p-12 border-l-8 border-secondary">
                <div className="absolute top-0 right-0 w-12 h-12 bg-secondary"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-secondary/60"></div>

                <p className="text-2xl text-gray-700 leading-relaxed italic">
                  &quot;{about.mission.quote}&quot;
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="waves" />

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <ScrollReveal delay={200}>
                <div className="inline-block bg-primary text-white px-8 py-4 mb-8 relative">
                  <span className="text-sm font-bold tracking-wider">
                    {about.values.sectionTitle}
                  </span>
                  <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary"></div>
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary"></div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-wide">
                  {about.values.title}{" "}
                  <span className="text-secondary">
                    {about.values.subtitle}
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={200 + index * 100}>
                  <ValueCard
                    title={value.title}
                    description={value.description}
                    icon={value.icon}
                    index={index}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="inline-block bg-secondary text-primary px-6 py-3 mb-8">
                <span className="text-sm font-bold tracking-wider">
                  {about.finalCta.tagline}
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-wide">
                {about.finalCta.title}
                <br />
                <span className="text-secondary">
                  {about.finalCta.subtitle}
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl mb-10 text-white/90 leading-relaxed">
                {about.finalCta.description}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <CustomButton variant="secondary" size="lg">
                  {about.finalCta.button1}
                </CustomButton>
                <CustomButton variant="outline" size="lg">
                  {about.finalCta.button2}
                </CustomButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
