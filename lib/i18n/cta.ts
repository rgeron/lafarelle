import type { Locale } from "./index";

export interface CtaContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
}

export const ctaContent: Record<Locale, CtaContent> = {
  fr: {
    sectionTag: "SONAR CLARITY • AUDIT SAAS",
    title: "OPTIMISEZ VOS",
    subtitle: "COÛTS SAAS",
    description:
      "Notre expertise en SaaS management avec Sonar Clarity vous permet d'identifier rapidement l'utilisation de vos outils SaaS et d'optimiser vos coûts.",
    button: "AUDIT COMPLET DES SAAS",
  },
  en: {
    sectionTag: "SONAR CLARITY • SAAS AUDIT",
    title: "OPTIMIZE YOUR",
    subtitle: "SAAS COSTS",
    description:
      "Our SaaS management expertise with Sonar Clarity allows you to quickly identify your SaaS tools usage and optimize your costs.",
    button: "COMPLETE SAAS AUDIT",
  },
};
