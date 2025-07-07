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
    sectionTag: "NOTRE DÉMARCHE",
    title: "ACCOMPAGNEMENT",
    subtitle: "EN 3 ÉTAPES",
    saasMapping: {
      title: "CARTOGRAPHIE & AUDIT",
      items: [
        "Cartographie complète des usages SaaS avec Sonar Clarity",
        "Identification des risques et du Shadow IT",
        "Évaluation des coûts et de la conformité",
      ],
    },
    riskAnalysis: {
      title: "CONSEIL & RECOMMANDATIONS",
      items: [
        "Stratégie d’optimisation et de sécurisation sur mesure",
        "Plan d’économies et de rationalisation des licences",
        "KPIs et feuille de route priorisée",
      ],
    },
    implementation: {
      title: "CONDUITE DU CHANGEMENT",
      items: [
        "Déploiement des actions et formation des équipes",
        "Mise en place des processus de gouvernance",
        "Suivi des résultats et ajustements continus",
      ],
    },
  },
  en: {
    sectionTag: "OUR APPROACH",
    title: "STRUCTURED CONSULTING METHODOLOGY",
    subtitle: "IN 3 STRATEGIC PHASES",
    saasMapping: {
      title: "MAPPING & AUDIT",
      items: [
        "Complete mapping of SaaS usage with Sonar Clarity",
        "Risk identification and Shadow IT",
        "Cost and compliance assessment",
      ],
    },
    riskAnalysis: {
      title: "CONSULTING & RECOMMENDATIONS",
      items: [
        "Tailored optimization and security strategy",
        "Cost savings and license rationalization plan",
        "KPIs and prioritized roadmap",
      ],
    },
    implementation: {
      title: "CHANGE MANAGEMENT",
      items: [
        "Action deployment and team training",
        "Governance process implementation",
        "Results monitoring and continuous adjustments",
      ],
    },
  },
};
