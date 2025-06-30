import type { Locale } from "./index";

export interface SolutionsContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  integrationConsulting: {
    title: string;
    items: string[];
  };
  sam: {
    title: string;
    items: string[];
  };
  solutionEditing: {
    title: string;
    items: string[];
  };
  technicalExpertise: {
    title: string;
    items: string[];
  };
}

export const solutionsContent: Record<Locale, SolutionsContent> = {
  fr: {
    sectionTag: "NOS EXPERTISES",
    title: "DÉVELOPPONS ENSEMBLE",
    subtitle: "VOS SOLUTIONS",
    integrationConsulting: {
      title: "CONSEIL EN SAAS MANAGEMENT",
      items: [
        "Analyse de votre environnement SaaS",
        "Définition de votre stratégie d'optimisation",
        "Accompagnement dans vos projets de rationalisation",
      ],
    },
    sam: {
      title: "AUDIT AVEC SONAR CLARITY",
      items: [
        "Audit complet de vos outils SaaS",
        "Identification des usages réels",
        "Optimisation de vos coûts SaaS",
        "Rapport d'analyse détaillé",
      ],
    },
    solutionEditing: {
      title: "ACCOMPAGNEMENT PERSONNALISÉ",
      items: [
        "Analyse des rapports d'audit",
        "Recommandations sur mesure",
        "Suivi des optimisations",
      ],
    },
    technicalExpertise: {
      title: "EXPERTISE TECHNIQUE",
      items: [
        "Équipe spécialisée en SaaS management",
        "Méthodologie éprouvée",
        "Accompagnement personnalisé",
      ],
    },
  },
  en: {
    sectionTag: "OUR EXPERTISE",
    title: "LET'S DEVELOP TOGETHER",
    subtitle: "YOUR SOLUTIONS",
    integrationConsulting: {
      title: "SAAS MANAGEMENT CONSULTING",
      items: [
        "Analysis of your SaaS environment",
        "Definition of your optimization strategy",
        "Support in your rationalization projects",
      ],
    },
    sam: {
      title: "AUDIT WITH SONAR CLARITY",
      items: [
        "Complete audit of your SaaS tools",
        "Identification of actual usage",
        "Optimization of your SaaS costs",
        "Detailed analysis report",
      ],
    },
    solutionEditing: {
      title: "PERSONALIZED SUPPORT",
      items: [
        "Analysis of audit reports",
        "Tailor-made recommendations",
        "Optimization follow-up",
      ],
    },
    technicalExpertise: {
      title: "TECHNICAL EXPERTISE",
      items: [
        "Team specialized in SaaS management",
        "Proven methodology",
        "Personalized support",
      ],
    },
  },
};
