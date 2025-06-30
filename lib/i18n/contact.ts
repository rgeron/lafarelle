import type { Locale } from "./index";

export interface ContactContent {
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
  };
  info: {
    title: string;
    email: string;
    phone: string;
    phoneValue: string;
    address: string;
    addressValue: string;
  };
}

export const contactContent: Record<Locale, ContactContent> = {
  fr: {
    hero: {
      tagline: "ÉCHANGEONS ENSEMBLE",
      title: "NOUS",
      subtitle: "CONTACTER",
      description:
        "Parlons de vos défis IT et explorons les solutions ensemble.",
    },
    info: {
      title: "Informations de contact",
      email: "Email",
      phone: "Téléphone",
      phoneValue: "À compléter",
      address: "Adresse",
      addressValue: "À compléter",
    },
  },
  en: {
    hero: {
      tagline: "LET'S TALK TOGETHER",
      title: "CONTACT",
      subtitle: "US",
      description:
        "Let's talk about your IT challenges and explore solutions together.",
    },
    info: {
      title: "Contact Information",
      email: "Email",
      phone: "Phone",
      phoneValue: "To be completed",
      address: "Address",
      addressValue: "To be completed",
    },
  },
};
