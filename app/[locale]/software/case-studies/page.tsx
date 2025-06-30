import GeometricBackground from "@/components/geometric-background";
import ScrollReveal from "@/components/scroll-reveal";
import { type Locale, getContent } from "@/lib/i18n";

interface CaseStudiesPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function CaseStudiesPage({
  params,
}: CaseStudiesPageProps) {
  const { locale } = await params;
  const t = getContent(locale);

  return (
    <div className="min-h-screen font-mono">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-12">
                <div className="bg-secondary text-primary px-8 py-4 relative">
                  <span className="text-sm font-bold tracking-wider">
                    {locale === "fr" ? "RÉALISATIONS" : "ACHIEVEMENTS"}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight">
                {locale === "fr" ? "ÉTUDES DE" : "CASE"}
                <br />
                <span className="text-secondary">
                  {locale === "fr" ? "CAS" : "STUDIES"}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {locale === "fr"
                  ? "Découvrez nos réalisations et les succès de nos clients en matière de Software Asset Management."
                  : "Discover our achievements and our clients' success stories in Software Asset Management."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-100 p-12 border-4 border-primary">
              <h2 className="text-2xl font-bold text-primary mb-4">
                {locale === "fr"
                  ? "Page en construction"
                  : "Page under construction"}
              </h2>
              <p className="text-gray-600">
                {locale === "fr"
                  ? "Cette page sera bientôt disponible avec nos études de cas détaillées."
                  : "This page will be available soon with our detailed case studies."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
