import type { Locale } from "./index";

export interface ProblemsContent {
  sectionTag: string;
  title: string;
  subtitle: string;
  items: string[];
}

export const problemsContent: Record<Locale, ProblemsContent> = {
  fr: {
    sectionTag: "DIAGNOSTIC • ENJEUX SAAS",
    title: "IDENTIFIEZ VOS",
    subtitle: "DÉFIS SAAS",
    items: [
      "Visibilité limitée sur vos outils SaaS ?",
      "Coûts SaaS difficiles à maîtriser ?",
      "Licences inutilisées ou sous-utilisées ?",
      "Multiplicité croissante de vos applications SaaS ?",
      "Manque d'expertise en SaaS management ?",
      "Processus de gestion des abonnements peu efficaces ?",
    ],
  },
  en: {
    sectionTag: "DIAGNOSIS • SAAS CHALLENGES",
    title: "IDENTIFY YOUR",
    subtitle: "SAAS CHALLENGES",
    items: [
      "Limited visibility on your SaaS tools?",
      "SaaS costs difficult to control?",
      "Unused or underused licenses?",
      "Growing multiplicity of your SaaS applications?",
      "Lack of expertise in SaaS management?",
      "Inefficient subscription management processes?",
    ],
  },
};
