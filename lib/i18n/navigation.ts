import type { Locale } from "./index";

export interface NavigationContent {
  home: string;
  about: string;
  services: string;
  caseStudies: string;
  contact: string;
}

export const navigationContent: Record<Locale, NavigationContent> = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services",
    caseStudies: "Études de cas",
    contact: "Contact",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    caseStudies: "Case Studies",
    contact: "Contact",
  },
};
