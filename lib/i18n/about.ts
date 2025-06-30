import type { Locale } from "./index";

export interface AboutContent {
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
  };
  story: {
    sectionTitle: string;
    paragraph1: string;
    paragraph2: string;
  };
  mission: {
    sectionTitle: string;
    quote: string;
  };
  values: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    excellence: {
      title: string;
      description: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    innovation: {
      title: string;
      description: string;
    };
    partnership: {
      title: string;
      description: string;
    };
  };
  finalCta: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    button1: string;
    button2: string;
  };
}

export const aboutContent: Record<Locale, AboutContent> = {
  fr: {
    hero: {
      tagline: "ABOUT LAFARELLE SYSTEMS",
      title: "LAFARELLE :",
      subtitle: "L'EXCELLENCE AU SERVICE DE VOTRE IT",
    },
    story: {
      sectionTitle: "NOTRE HISTOIRE",
      paragraph1:
        "Fondée par des experts passionnés de technologie, LAFARELLE s'est imposée comme un acteur de référence dans le conseil DSI et le Software Asset Management.",
      paragraph2:
        "Notre approche unique combine expertise technique, vision stratégique et accompagnement humain pour transformer les défis IT en opportunités de croissance. Nous croyons fermement que la maîtrise des actifs logiciels et une gouvernance IT optimale sont les clés du succès dans l'économie numérique d'aujourd'hui.",
    },
    mission: {
      sectionTitle: "NOTRE MISSION",
      quote:
        "Accompagner les entreprises dans leur maîtrise technologique en proposant des solutions innovantes et sur mesure qui optimisent leurs performances IT tout en réduisant leurs risques et leurs coûts.",
    },
    values: {
      sectionTitle: "NOS VALEURS FONDAMENTALES",
      title: "NOS",
      subtitle: "VALEURS",
      excellence: {
        title: "EXCELLENCE",
        description:
          "Nous visons l'excellence dans chaque mission que nous entreprenons, avec une approche rigoureuse et des standards élevés.",
      },
      transparency: {
        title: "TRANSPARENCE",
        description:
          "Une communication claire et honnête avec nos clients, basée sur la confiance et l'intégrité professionnelle.",
      },
      innovation: {
        title: "INNOVATION",
        description:
          "À la pointe des dernières technologies et méthodologies pour offrir des solutions avant-gardistes.",
      },
      partnership: {
        title: "PARTENARIAT",
        description:
          "Une relation de confiance sur le long terme, construite sur l'écoute et l'accompagnement personnalisé.",
      },
    },
    finalCta: {
      tagline: "DÉCOUVREZ NOTRE APPROCHE",
      title: "DÉCOUVREZ COMMENT NOUS POUVONS",
      subtitle: "VOUS ACCOMPAGNER",
      description:
        "Parlons de vos défis SaaS et explorons les solutions ensemble",
      button1: "AUDIT COMPLET DES SAAS",
      button2: "DISCUTONS DE VOS PROBLÉMATIQUES",
    },
  },
  en: {
    hero: {
      tagline: "ABOUT LAFARELLE SYSTEMS",
      title: "LAFARELLE:",
      subtitle: "EXCELLENCE AT THE SERVICE OF YOUR IT",
    },
    story: {
      sectionTitle: "OUR STORY",
      paragraph1:
        "Founded by technology experts passionate about their field, LAFARELLE has established itself as a reference player in CIO consulting and Software Asset Management.",
      paragraph2:
        "Our unique approach combines technical expertise, strategic vision and human support to transform IT challenges into growth opportunities. We firmly believe that mastering software assets and optimal IT governance are the keys to success in today's digital economy.",
    },
    mission: {
      sectionTitle: "OUR MISSION",
      quote:
        "Support companies in their technological mastery by offering innovative and tailor-made solutions that optimize their IT performance while reducing their risks and costs.",
    },
    values: {
      sectionTitle: "OUR CORE VALUES",
      title: "OUR",
      subtitle: "VALUES",
      excellence: {
        title: "EXCELLENCE",
        description:
          "We aim for excellence in every mission we undertake, with a rigorous approach and high standards.",
      },
      transparency: {
        title: "TRANSPARENCY",
        description:
          "Clear and honest communication with our clients, based on trust and professional integrity.",
      },
      innovation: {
        title: "INNOVATION",
        description:
          "At the forefront of the latest technologies and methodologies to offer cutting-edge solutions.",
      },
      partnership: {
        title: "PARTNERSHIP",
        description:
          "A long-term relationship of trust, built on listening and personalized support.",
      },
    },
    finalCta: {
      tagline: "DISCOVER OUR APPROACH",
      title: "DISCOVER HOW WE CAN",
      subtitle: "SUPPORT YOU",
      description:
        "Let's talk about your SaaS challenges and explore solutions together",
      button1: "COMPLETE SAAS AUDIT",
      button2: "LET'S DISCUSS YOUR CHALLENGES",
    },
  },
};
