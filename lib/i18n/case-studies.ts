import { Building2, Factory } from "lucide-react";
import type { Locale } from "./index";

export interface CaseStudy {
  title: string;
  sector: string;
  icon: typeof Building2;
  problem: string;
  solution: string;
  results: string[];
  testimonial: string;
}

export interface CaseStudiesContent {
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
  };
  caseStudies: CaseStudy[];
  cta: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    primaryButton: string;
    secondaryButton: string;
  };
}

export const caseStudiesContent: Record<Locale, CaseStudiesContent> = {
  fr: {
    hero: {
      tagline: "SUCCESS STORIES DATABASE",
      title: "ÉTUDES DE",
      subtitle: "CAS",
      description:
        "Découvrez comment nous avons aidé nos clients à relever leurs défis IT et transformer leurs organisations",
    },
    caseStudies: [
      {
        title: "OPTIMISATION_SAM_SECTEUR_BANCAIRE",
        sector: "Banque & Finance",
        icon: Building2,
        problem:
          "Une grande banque européenne faisait face à des coûts logiciels en constante augmentation et des risques de non-conformité avec les éditeurs majeurs. L'absence de visibilité sur les licences utilisées générait des surcoûts importants.",
        solution:
          "Audit complet des licences existantes, mise en place d'un processus de gouvernance SAM structuré, implémentation d'outils de monitoring automatisés et négociation stratégique avec les éditeurs pour optimiser les contrats.",
        results: [
          "35% de réduction des coûts logiciels",
          "100% de conformité atteinte",
          "ROI de 300% en 18 mois",
          "Processus automatisés mis en place",
        ],
        testimonial:
          "LAFARELLE a transformé notre approche du Software Asset Management. Leur expertise nous a permis de réaliser des économies substantielles tout en sécurisant notre conformité. Un partenariat exemplaire.",
      },
      {
        title: "TRANSFORMATION_IT_INDUSTRIE_MANUFACTURIERE",
        sector: "Industrie",
        icon: Factory,
        problem:
          "Un groupe industriel devait moderniser son SI vieillissant tout en maintenant la continuité opérationnelle de ses sites de production. Les systèmes legacy posaient des risques de sécurité et de performance.",
        solution:
          "Définition d'une roadmap de transformation progressive, pilotage des projets de migration par phases, accompagnement au changement des équipes et mise en place d'une architecture moderne et sécurisée.",
        results: [
          "Migration réussie sans interruption",
          "40% d'amélioration des performances",
          "Réduction de 50% des incidents IT",
          "Formation de 200+ collaborateurs",
        ],
        testimonial:
          "L'accompagnement de LAFARELLE a été déterminant dans la réussite de notre transformation digitale. Leur approche méthodique et leur expertise technique nous ont permis d'atteindre nos objectifs dans les délais.",
      },
    ],
    cta: {
      tagline: "NEXT SUCCESS STORY LOADING",
      title: "VOUS ÊTES PEUT-ÊTRE",
      subtitle: "NOTRE PROCHAIN CASE STUDY",
      description:
        "Discutons de vos défis et explorons comment nous pouvons vous accompagner vers le succès",
      primaryButton: "OBTENIR UNE CONSULTATION",
      secondaryButton: "VOIR NOS SERVICES",
    },
  },
  en: {
    hero: {
      tagline: "SUCCESS STORIES DATABASE",
      title: "CASE",
      subtitle: "STUDIES",
      description:
        "Discover how we helped our clients overcome their IT challenges and transform their organizations",
    },
    caseStudies: [
      {
        title: "SAM_OPTIMIZATION_BANKING_SECTOR",
        sector: "Banking & Finance",
        icon: Building2,
        problem:
          "A major European bank was facing constantly rising software costs and risks of non-compliance with major publishers. The lack of visibility on used licenses generated significant additional costs.",
        solution:
          "Complete audit of existing licenses, implementation of a structured SAM governance process, implementation of automated monitoring tools and strategic negotiation with publishers to optimize contracts.",
        results: [
          "35% reduction in software costs",
          "100% compliance achieved",
          "300% ROI in 18 months",
          "Automated processes implemented",
        ],
        testimonial:
          "LAFARELLE transformed our approach to Software Asset Management. Their expertise allowed us to achieve substantial savings while securing our compliance. An exemplary partnership.",
      },
      {
        title: "IT_TRANSFORMATION_MANUFACTURING_INDUSTRY",
        sector: "Manufacturing",
        icon: Factory,
        problem:
          "An industrial group needed to modernize its aging IT system while maintaining operational continuity of its production sites. Legacy systems posed security and performance risks.",
        solution:
          "Definition of a progressive transformation roadmap, phased migration project management, change management support for teams and implementation of a modern and secure architecture.",
        results: [
          "Successful migration without interruption",
          "40% performance improvement",
          "50% reduction in IT incidents",
          "Training of 200+ employees",
        ],
        testimonial:
          "LAFARELLE's support was decisive in the success of our digital transformation. Their methodical approach and technical expertise allowed us to achieve our objectives on time.",
      },
    ],
    cta: {
      tagline: "NEXT SUCCESS STORY LOADING",
      title: "YOU MIGHT BE",
      subtitle: "OUR NEXT CASE STUDY",
      description:
        "Let's discuss your challenges and explore how we can support you towards success",
      primaryButton: "GET A CONSULTATION",
      secondaryButton: "SEE OUR SERVICES",
    },
  },
};
