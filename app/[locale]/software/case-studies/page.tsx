import GeometricBackground from "@/components/background/geometric-background";
import CustomButton from "@/components/buttons/custom-button";
import EnhancedCaseStudyCard from "@/components/cards/case-study-card";
import { PageHero } from "@/components/page-hero";
import SectionSeparator from "@/components/separators/section-separator";
import { caseStudiesContent } from "@/lib/i18n/case-studies";
import { type Locale, getContent } from "@/lib/i18n/index";
import { navigationContent } from "@/lib/i18n/navigation";

interface CaseStudiesPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CaseStudiesPage({
  params,
}: CaseStudiesPageProps) {
  const { locale } = await params;
  const content = getContent(locale, caseStudiesContent);
  const nav = navigationContent[locale];

  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <PageHero
        locale={locale}
        tagline={content.hero.tagline}
        tagVariant="animated"
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        breadcrumbs={[{ label: nav.caseStudies }]}
      />

      {/* Case Studies */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {content.caseStudies.map((study, index) => (
              <EnhancedCaseStudyCard
                key={index}
                title={study.title}
                sector={study.sector}
                icon={study.icon}
                problem={study.problem}
                solution={study.solution}
                results={study.results}
                testimonial={study.testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="arrows" />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative inline-block mb-12">
              <div className="bg-secondary text-primary px-8 py-4 relative">
                <span className="text-sm font-bold tracking-wider">
                  {content.cta.tagline}
                </span>
                <div className="absolute -top-3 -left-3 w-6 h-6 border-4 border-white"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white"></div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wide leading-tight">
              {content.cta.title}
              <br />
              <span className="text-secondary">{content.cta.subtitle}</span>
            </h2>

            <div className="relative bg-white/10 p-8 mb-12 border-4 border-secondary/30">
              <p className="text-xl text-white/90 leading-relaxed">
                {content.cta.description}
              </p>
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton variant="secondary" size="lg">
                {content.cta.primaryButton}
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                {content.cta.secondaryButton}
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
