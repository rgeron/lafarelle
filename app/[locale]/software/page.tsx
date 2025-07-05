import {
  CtaSection,
  HeroSection,
  ProblemsSection,
  SolutionsSection,
  StatsSection,
} from "@/components/landing";
import SectionSeparator from "@/components/separators/section-separator";
import { ctaContent } from "@/lib/i18n/cta";
import { heroContent } from "@/lib/i18n/hero";
import { type Locale, getContent } from "@/lib/i18n/index";
import { problemsContent } from "@/lib/i18n/problems";
import { solutionsContent } from "@/lib/i18n/solutions";
import { statsContent } from "@/lib/i18n/stats";

interface SoftwarePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function SoftwarePage({ params }: SoftwarePageProps) {
  const { locale } = await params;

  // Use the new modular approach
  const hero = getContent(locale, heroContent);
  const stats = getContent(locale, statsContent);
  const problems = getContent(locale, problemsContent);
  const solutions = getContent(locale, solutionsContent);
  const cta = getContent(locale, ctaContent);

  return (
    <div className="min-h-screen font-mono">
      <HeroSection locale={locale} hero={hero} />
      <StatsSection stats={stats} />
      <SectionSeparator variant="zigzag" />
      <ProblemsSection problems={problems} />
      <SolutionsSection solutions={solutions} />
      <CtaSection locale={locale} cta={cta} />
    </div>
  );
}
