import type { Locale } from "./index";

export interface SolutionsContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  mapping: {
    title: string;
    items: string[];
  };
  consulting: {
    title: string;
    items: string[];
  };
  changeManagement: {
    title: string;
    items: string[];
  };
}

export const solutionsContent: Record<Locale, SolutionsContent> = {
  fr: {
    sectionTag: "NOTRE DÉMARCHE",
    title: "ACCOMPAGNEMENT STRATÉGIQUE",
    subtitle: "EN GESTION D'ACTIFS LOGICIELS",
    mapping: {
      title: "CARTOGRAPHIE & AUDIT",
      items: [
        "Inventaire exhaustif de votre patrimoine applicatif",
        "Analyse de conformité et des licences existantes",
        "Évaluation des risques opérationnels et financiers",
      ],
    },
    consulting: {
      title: "CONSEIL & RECOMMANDATIONS",
      items: [
        "Élaboration de stratégies d'optimisation sur mesure",
        "Préconisations d'architecture et de gouvernance",
        "Modélisation des scénarios d'évolution et ROI",
      ],
    },
    changeManagement: {
      title: "CONDUITE DU CHANGEMENT",
      items: [
        "Accompagnement dans la mise en œuvre des transformations",
        "Formation et montée en compétences des équipes",
        "Pilotage des projets de rationalisation applicative",
      ],
    },
  },
  en: {
    sectionTag: "OUR APPROACH",
    title: "STRATEGIC CONSULTING",
    subtitle: "IN SOFTWARE ASSET MANAGEMENT",
    mapping: {
      title: "MAPPING & AUDIT",
      items: [
        "Comprehensive inventory of your application portfolio",
        "Compliance analysis and existing license assessment",
        "Operational and financial risk evaluation",
      ],
    },
    consulting: {
      title: "CONSULTING & RECOMMENDATIONS",
      items: [
        "Development of tailored optimization strategies",
        "Architecture and governance recommendations",
        "Evolution scenario modeling and ROI analysis",
      ],
    },
    changeManagement: {
      title: "CHANGE MANAGEMENT",
      items: [
        "Support in transformation implementation",
        "Training and team skill development",
        "Application rationalization project management",
      ],
    },
  },
};
