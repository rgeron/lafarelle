import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import { HeroTag } from "@/components/hero-tag";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { type Locale } from "@/lib/i18n/index";
import { navigationContent } from "@/lib/i18n/navigation";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  locale: Locale;
  tagline: string;
  tagVariant?: "simple" | "animated";
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHero({
  locale,
  tagline,
  tagVariant = "simple",
  title,
  subtitle,
  breadcrumbs = [],
}: PageHeroProps) {
  const nav = navigationContent[locale];

  // Breadcrumb par défaut avec Home
  const defaultBreadcrumbs: BreadcrumbItem[] = [
    { label: nav.home, href: `/${locale}` },
    ...breadcrumbs,
  ];

  return (
    <section className="bg-primary text-white py-16 relative overflow-hidden">
      <GeometricBackground variant="hero" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb subtile */}
          {defaultBreadcrumbs.length > 1 && (
            <ScrollReveal delay={100}>
              <div className="mb-8">
                <Breadcrumb>
                  <BreadcrumbList className="text-white/60">
                    {defaultBreadcrumbs.map((item, index) => (
                      <BreadcrumbItem key={index}>
                        {index === defaultBreadcrumbs.length - 1 ? (
                          <BreadcrumbPage className="text-white/90 font-medium">
                            {item.label}
                          </BreadcrumbPage>
                        ) : (
                          <>
                            <BreadcrumbLink
                              asChild
                              className="text-white/60 hover:text-white/90 transition-colors"
                            >
                              <Link href={item.href || "#"}>{item.label}</Link>
                            </BreadcrumbLink>
                            <BreadcrumbSeparator className="text-white/40" />
                          </>
                        )}
                      </BreadcrumbItem>
                    ))}
                  </BreadcrumbList>
                </Breadcrumb>
              </div>
            </ScrollReveal>
          )}

          <div className="text-center">
            {/* Hero Tag */}
            <ScrollReveal delay={200}>
              <div className="mb-8">
                <HeroTag variant={tagVariant}>{tagline}</HeroTag>
              </div>
            </ScrollReveal>

            {/* Titre principal */}
            <ScrollReveal delay={400}>
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 tracking-wide leading-tight">
                {title}
                {subtitle && (
                  <>
                    <br />
                    <span className="text-secondary">{subtitle}</span>
                  </>
                )}
              </h1>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
