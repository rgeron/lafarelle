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
    sectionTag: "BESOIN D'ACCOMPAGNEMENT ?",
    title: "PARLONS DE VOS",
    subtitle: "DÉFIS IT",
    description:
      "Notre expertise en conseil IT et gestion d'actifs logiciels vous aide à optimiser vos processus et réduire vos coûts technologiques.",
    button: "CONTACTEZ-NOUS",
  },
  en: {
    sectionTag: "NEED GUIDANCE?",
    title: "LET'S DISCUSS YOUR",
    subtitle: "IT CHALLENGES",
    description:
      "Our expertise in IT consulting and software asset management helps you optimize your processes and reduce your technology costs.",
    button: "CONTACT US",
  },
};
