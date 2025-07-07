import { type Locale, getContent } from "@/lib/i18n";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import GeometricBackground from "./background/geometric-background";

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
  const t = getContent(locale);

  const navigationItems = [
    { href: `/${locale}/software`, label: t.navigation.home },
    { href: `/${locale}/software/about`, label: t.navigation.about },
    { href: `/${locale}/software/services`, label: t.navigation.services },
    {
      href: `/${locale}/software/case-studies`,
      label: t.navigation.caseStudies,
    },
    { href: `/${locale}/software/contact`, label: t.navigation.contact },
  ];

  const services = {
    fr: [
      "Audit SaaS avec Sonar Clarity",
      "SaaS Management",
      "Optimisation des coûts",
      "Analyse d'utilisation",
    ],
    en: [
      "SaaS Audit with Sonar Clarity",
      "SaaS Management",
      "Cost Optimization",
      "Usage Analysis",
    ],
  };

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Ligne de séparation blanche en haut */}
      <div className="absolute top-0 left-0 w-full h-1 bg-secondary"></div>

      <GeometricBackground variant="section" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="relative inline-block mb-8">
              <div className="bg-secondary text-primary px-6 py-3 relative">
                <span className="text-lg font-bold tracking-wider">
                  LAFARELLE
                </span>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-primary"></div>
              </div>
            </div>

            <p className="font-mono text-sm text-white/80 mb-8 leading-relaxed max-w-md">
              {locale === "fr"
                ? "Votre partenaire de confiance pour l'optimisation de votre SaaS management. Audit complet avec Sonar Clarity et accompagnement personnalisé."
                : "Your trusted partner for optimizing your SaaS management. Complete audit with Sonar Clarity and personalized support."}
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center mr-3">
                  <Mail className="text-primary" size={16} />
                </div>
                <span className="font-mono text-sm text-white/80">
                  contact@lafarelle.fr
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center mr-3">
                  <Phone className="text-primary" size={16} />
                </div>
                <span className="font-mono text-sm text-white/80">
                  {locale === "fr" ? "A compléter" : "To be completed"}
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-secondary flex items-center justify-center mr-3">
                  <MapPin className="text-primary" size={16} />
                </div>
                <span className="font-mono text-sm text-white/80">
                  {locale === "fr" ? "A compléter" : "To be completed"}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="relative mb-6">
              <div className="bg-white text-primary px-4 py-2 inline-block">
                <h4 className="font-mono font-bold text-sm">
                  {locale === "fr" ? "NAVIGATION" : "NAVIGATION"}
                </h4>
              </div>
            </div>
            <ul className="space-y-3">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-mono text-sm text-white/80 hover:text-white transition-colors flex items-center group"
                  >
                    <ArrowRight
                      size={12}
                      className="mr-2 group-hover:translate-x-1 transition-transform"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="relative mb-6">
              <div className="bg-secondary text-primary px-4 py-2 inline-block">
                <h4 className="font-mono font-bold text-sm">
                  {locale === "fr" ? "NOS SERVICES" : "OUR SERVICES"}
                </h4>
              </div>
            </div>
            <ul className="space-y-3">
              {services[locale].map((service) => (
                <li key={service}>
                  <span className="font-mono text-sm text-white/80 flex items-center">
                    <div className="w-2 h-2 bg-secondary mr-3"></div>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-2 border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-mono text-sm text-white/60 mb-4 md:mb-0">
              © {new Date().getFullYear()} LAFARELLE.{" "}
              {locale === "fr"
                ? "Tous droits réservés."
                : "All rights reserved."}
            </p>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-secondary"></div>
              <span className="font-mono text-xs text-white/60 tracking-wider">
                MADE WITH PRECISION
              </span>
              <div className="w-8 h-1 bg-secondary/60"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Geometric accents */}
      <div className="absolute bottom-0 left-0 w-full h-4 bg-secondary"></div>
      <div className="absolute bottom-4 left-0 w-full h-px bg-white/20"></div>
    </footer>
  );
}
