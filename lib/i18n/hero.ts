import type { Locale } from "./index";

export interface HeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  description: string;
  description2: string;
  auditButton: string;
  solutionsButton: string;
}

export const heroContent: Record<Locale, HeroContent> = {
  fr: {
    tagline: "LAFARELLE • SAAS MANAGEMENT",
    title: "MAÎTRISEZ VOS",
    subtitle: "OUTILS SAAS",
    description:
      "LAFARELLE accompagne les entreprises dans l'optimisation de leur SaaS management grâce à Sonar Clarity et une expertise technique reconnue.",
    description2:
      "Notre équipe d'experts analyse vos usages SaaS et vous fournit des rapports détaillés pour optimiser vos coûts et rationaliser vos abonnements.",
    auditButton: "AUDIT COMPLET DES SAAS",
    solutionsButton: "DISCUTONS DE VOS PROBLÉMATIQUES",
  },
  en: {
    tagline: "LAFARELLE • SAAS MANAGEMENT",
    title: "MASTER YOUR",
    subtitle: "SAAS TOOLS",
    description:
      "LAFARELLE helps companies optimize their SaaS management through Sonar Clarity and recognized technical expertise.",
    description2:
      "Our team of experts analyzes your SaaS usage and provides you with detailed reports to optimize your costs and streamline your subscriptions.",
    auditButton: "COMPLETE SAAS AUDIT",
    solutionsButton: "LET'S DISCUSS YOUR CHALLENGES",
  },
}; 