import type { Locale } from "./index";

export interface SolutionsContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  saasMapping: {
    title: string;
    items: string[];
  };
  riskAnalysis: {
    title: string;
    items: string[];
  };
  implementation: {
    title: string;
    items: string[];
  };
}

export const solutionsContent: Record<Locale, SolutionsContent> = {
  fr: {
    sectionTag: "NOS SERVICES",
    title: "OPTIMISEZ VOS SOLUTIONS SAAS",
    subtitle: "AVEC NOTRE EXPERTISE",
    saasMapping: {
      title: "CARTOGRAPHIE SAAS EN TEMPS RÉEL",
      items: [
        "Cartographie complète de vos usages SaaS",
        "Surveillance en temps réel via Sonar Clarity",
        "Visibilité totale sur votre parc applicatif",
      ],
    },
    riskAnalysis: {
      title: "ANALYSE RISQUES & COÛTS",
      items: [
        "Analyse des risques de sécurité",
        "Évaluation des coûts cachés",
        "Conseil en SaaS management",
      ],
    },
    implementation: {
      title: "MISE EN ŒUVRE & OPTIMISATION",
      items: [
        "Recommandations concrètes d'optimisation",
        "Sécurisation de votre parc applicatif",
        "Gouvernance et contrôle des coûts",
      ],
    },
  },
  en: {
    sectionTag: "OUR SERVICES",
    title: "OPTIMIZE YOUR SAAS SOLUTIONS",
    subtitle: "WITH OUR EXPERTISE",
    saasMapping: {
      title: "REAL-TIME SAAS MAPPING",
      items: [
        "Complete mapping of your SaaS usage",
        "Real-time monitoring via Sonar Clarity",
        "Total visibility on your application portfolio",
      ],
    },
    riskAnalysis: {
      title: "RISK & COST ANALYSIS",
      items: [
        "Security risk analysis",
        "Hidden cost assessment",
        "SaaS management consulting",
      ],
    },
    implementation: {
      title: "IMPLEMENTATION & OPTIMIZATION",
      items: [
        "Concrete optimization recommendations",
        "Application portfolio security",
        "Governance and cost control",
      ],
    },
  },
};
