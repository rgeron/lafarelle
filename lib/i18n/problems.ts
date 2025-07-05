import type { Locale } from "./index";

export interface ProblemsContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  items: Array<{
    emoji: string;
    title: string;
    description: string;
  }>;
}

export const problemsContent: Record<Locale, ProblemsContent> = {
  fr: {
    sectionTag: "DIAGNOSTIC • ENJEUX SAAS",
    title: "AVEZ-VOUS CES",
    subtitle: "PROBLÈMES ?",
    items: [
      {
        emoji: "🔍",
        title: "Manque de visibilité sur vos applications SaaS",
        description:
          "Vous ne savez pas exactement qui utilise quoi, ni combien d'outils sont réellement en circulation dans vos équipes.",
      },
      {
        emoji: "🕳️",
        title: "Shadow IT incontrôlé",
        description:
          "Des outils souscrits hors du contrôle de l'IT créent des failles de sécurité et des doublons.",
      },
      {
        emoji: "🛡️",
        title: "Brèches de sécurité et de conformité",
        description:
          "Mauvaises configurations, accès non maîtrisés, données sensibles exposées… autant de vulnérabilités liées à l'usage anarchique du SaaS.",
      },
      {
        emoji: "💸",
        title: "Budget SaaS qui explose",
        description:
          "Licences inutilisées, achats en double, surdimensionnement : jusqu'à 30 % de gaspillage sur vos dépenses SaaS.",
      },
      {
        emoji: "🤝",
        title: "Manque de coordination entre IT et métiers",
        description:
          "Les décisions logicielles sont prises en silo, sans stratégie globale et sans alignement sur les priorités business.",
      },
      {
        emoji: "📊",
        title: "Pilotage difficile et fastidieux",
        description:
          "Les suivis sont manuels, incomplets, et les données peu fiables pour prendre des décisions éclairées.",
      },
    ],
  },
  en: {
    sectionTag: "DIAGNOSIS • SAAS CHALLENGES",
    title: "DO YOU HAVE THESE",
    subtitle: "PROBLEMS?",
    items: [
      {
        emoji: "🔍",
        title: "Lack of visibility on your SaaS applications",
        description:
          "You don't know exactly who uses what, or how many tools are actually circulating in your teams.",
      },
      {
        emoji: "🕳️",
        title: "Uncontrolled Shadow IT",
        description:
          "Tools subscribed outside of IT control create security breaches and duplicates.",
      },
      {
        emoji: "🛡️",
        title: "Security and compliance breaches",
        description:
          "Poor configurations, uncontrolled access, exposed sensitive data... so many vulnerabilities linked to anarchic SaaS usage.",
      },
      {
        emoji: "💸",
        title: "Exploding SaaS budget",
        description:
          "Unused licenses, duplicate purchases, oversizing: up to 30% waste on your SaaS expenses.",
      },
      {
        emoji: "🤝",
        title: "Lack of coordination between IT and business",
        description:
          "Software decisions are made in silos, without global strategy and without alignment on business priorities.",
      },
      {
        emoji: "📊",
        title: "Difficult and tedious management",
        description:
          "Tracking is manual, incomplete, and data unreliable for making informed decisions.",
      },
    ],
  },
};
