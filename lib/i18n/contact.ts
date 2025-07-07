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
  subjects: {
    label: string;
    placeholder: string;
    options: {
      value: string;
      label: string;
    }[];
  };
}

export const contactContent: Record<Locale, ContactContent> = {
  fr: {
    hero: {
      tagline: "ÉCHANGEONS ENSEMBLE",
      title: "NOUS CONTACTER",
      subtitle: "",
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
    subjects: {
      label: "Sujet",
      placeholder: "Sélectionnez un sujet",
      options: [
        { value: "consultation", label: "Demande de consultation" },
        { value: "saas-audit", label: "Audit SaaS complet" },
        {
          value: "sam-consulting",
          label: "Conseil en Software Asset Management",
        },
        { value: "integration", label: "Conseil en intégration logicielle" },
        { value: "solution-editing", label: "Édition de solutions" },
        { value: "technical-expertise", label: "Expertise technique" },
        { value: "other", label: "Autre demande" },
      ],
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
    subjects: {
      label: "Subject",
      placeholder: "Select a subject",
      options: [
        { value: "consultation", label: "Consultation request" },
        { value: "saas-audit", label: "Complete SaaS audit" },
        {
          value: "sam-consulting",
          label: "Software Asset Management consulting",
        },
        { value: "integration", label: "Software integration consulting" },
        { value: "solution-editing", label: "Solution editing" },
        { value: "technical-expertise", label: "Technical expertise" },
        { value: "other", label: "Other request" },
      ],
    },
  },
};
