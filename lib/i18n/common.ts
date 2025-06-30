import type { Locale } from "./index";

export interface CommonContent {
  buttons: {
    contact: string;
    learnMore: string;
    getStarted: string;
    backToHome: string;
    submit: string;
    cancel: string;
    close: string;
  };
  meta: {
    title: string;
    description: string;
  };
  loading: string;
  error: string;
  success: string;
}

export const commonContent: Record<Locale, CommonContent> = {
  fr: {
    buttons: {
      contact: "ÉCHANGEONS",
      learnMore: "EN SAVOIR PLUS",
      getStarted: "COMMENCER",
      backToHome: "RETOUR À L'ACCUEIL",
      submit: "ENVOYER",
      cancel: "ANNULER",
      close: "FERMER",
    },
    meta: {
      title: "LAFARELLE - Conseil DSI & Software Asset Management",
      description:
        "Optimisez votre gouvernance IT avec LAFARELLE. Conseil DSI, veille technologique et Software Asset Management pour une gestion optimale de vos actifs logiciels.",
    },
    loading: "Chargement...",
    error: "Une erreur est survenue",
    success: "Opération réussie",
  },
  en: {
    buttons: {
      contact: "LET'S TALK",
      learnMore: "LEARN MORE",
      getStarted: "GET STARTED",
      backToHome: "BACK TO HOME",
      submit: "SUBMIT",
      cancel: "CANCEL",
      close: "CLOSE",
    },
    meta: {
      title: "LAFARELLE - CIO Advisory & Software Asset Management",
      description:
        "Optimize your IT governance with LAFARELLE. CIO consulting, technology watch and Software Asset Management for optimal management of your software assets.",
    },
    loading: "Loading...",
    error: "An error occurred",
    success: "Operation successful",
  },
};
