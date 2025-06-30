export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

export interface LocaleContent {
  navigation: {
    home: string;
    about: string;
    services: string;
    caseStudies: string;
    contact: string;
  };
  hero: {
    tagline: string;
    title: string;
    subtitle: string;
    description: string;
    description2: string;
    auditButton: string;
    solutionsButton: string;
  };
  stats: {
    yearsExperience: string;
    solutionsDeveloped: string;
    costOptimization: string;
  };
  problems: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: string[];
  };
  solutions: {
    sectionTag: string;
    title: string;
    subtitle: string;
    integrationConsulting: {
      title: string;
      items: string[];
    };
    sam: {
      title: string;
      items: string[];
    };
    solutionEditing: {
      title: string;
      items: string[];
    };
    technicalExpertise: {
      title: string;
      items: string[];
    };
  };
  cta: {
    sectionTag: string;
    title: string;
    subtitle: string;
    description: string;
    button: string;
  };
  about: {
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
  };
}

export const content: Record<Locale, LocaleContent> = {
  fr: {
    navigation: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      caseStudies: "Études de cas",
      contact: "Contact",
    },
    hero: {
      tagline: "LAFARELLE • EXPERTISE SAM",
      title: "MAÎTRISEZ VOS",
      subtitle: "ACTIFS LOGICIELS",
      description:
        "LAFARELLE accompagne les entreprises dans leur maîtrise du Software Asset Management grâce à une expertise technique reconnue et une approche méthodologique innovante.",
      description2:
        "Notre équipe d'experts développe des solutions sur mesure et optimise vos coûts logiciels tout en garantissant votre conformité.",
      auditButton: "AUDIT GRATUIT",
      solutionsButton: "NOS SOLUTIONS",
    },
    stats: {
      yearsExperience: "Années d'expertise",
      solutionsDeveloped: "Solutions développées",
      costOptimization: "Optimisation des coûts",
    },
    problems: {
      sectionTag: "DIAGNOSTIC • ENJEUX IT",
      title: "IDENTIFIEZ VOS",
      subtitle: "DÉFIS LOGICIELS",
      items: [
        "Visibilité limitée sur vos licences logicielles ?",
        "Coûts informatiques difficiles à maîtriser ?",
        "Risques de non-conformité avec les éditeurs ?",
        "Complexité croissante de votre environnement IT ?",
        "Manque d'expertise en gouvernance logicielle ?",
        "Processus de gestion des actifs peu efficaces ?",
      ],
    },
    solutions: {
      sectionTag: "NOS EXPERTISES",
      title: "DÉVELOPPONS ENSEMBLE",
      subtitle: "VOS SOLUTIONS",
      integrationConsulting: {
        title: "CONSEIL EN INTEGRATION LOGICIELLE",
        items: [
          "Analyse de votre environnement logiciel",
          "Définition de votre stratégie d'intégration",
          "Accompagnement dans vos projets de transformation",
        ],
      },
      sam: {
        title: "SOFTWARE ASSET MANAGEMENT",
        items: [
          "Audit complet de vos licences",
          "Optimisation de vos coûts logiciels",
          "Mise en conformité avec les éditeurs",
          "Gestion proactive de vos actifs",
        ],
      },
      solutionEditing: {
        title: "EDITION DE SOLUTIONS",
        items: [
          "Développement d'outils sur mesure",
          "Intégration de solutions métier",
          "Maintenance et évolution applicative",
        ],
      },
      technicalExpertise: {
        title: "EXPERTISE TECHNIQUE",
        items: [
          "Équipe spécialisée et réactive",
          "Méthodologie éprouvée",
          "Accompagnement personnalisé",
        ],
      },
    },
    cta: {
      sectionTag: "AUDIT GRATUIT • SANS ENGAGEMENT",
      title: "OPTIMISEZ VOS",
      subtitle: "COÛTS LOGICIELS",
      description:
        "Notre expertise en Software Asset Management vous permet d'identifier rapidement les enjeux de conformité et d'optimiser vos coûts logiciels.",
      button: "DEMANDER UN AUDIT GRATUIT",
    },
    about: {
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
          "Parlons de vos défis IT et explorons les solutions ensemble",
        button1: "NOS SERVICES",
        button2: "NOUS CONTACTER",
      },
    },
  },
  en: {
    navigation: {
      home: "Home",
      about: "About",
      services: "Services",
      caseStudies: "Case Studies",
      contact: "Contact",
    },
    hero: {
      tagline: "LAFARELLE • SAM EXPERTISE",
      title: "MASTER YOUR",
      subtitle: "SOFTWARE ASSETS",
      description:
        "LAFARELLE helps companies master Software Asset Management through recognized technical expertise and innovative methodological approach.",
      description2:
        "Our team of experts develops tailor-made solutions and optimizes your software costs while ensuring your compliance.",
      auditButton: "FREE AUDIT",
      solutionsButton: "OUR SOLUTIONS",
    },
    stats: {
      yearsExperience: "Years of expertise",
      solutionsDeveloped: "Solutions developed",
      costOptimization: "Cost optimization",
    },
    problems: {
      sectionTag: "DIAGNOSIS • IT CHALLENGES",
      title: "IDENTIFY YOUR",
      subtitle: "SOFTWARE CHALLENGES",
      items: [
        "Limited visibility on your software licenses?",
        "IT costs difficult to control?",
        "Risk of non-compliance with publishers?",
        "Growing complexity of your IT environment?",
        "Lack of expertise in software governance?",
        "Inefficient asset management processes?",
      ],
    },
    solutions: {
      sectionTag: "OUR EXPERTISE",
      title: "LET'S DEVELOP TOGETHER",
      subtitle: "YOUR SOLUTIONS",
      integrationConsulting: {
        title: "SOFTWARE INTEGRATION CONSULTING",
        items: [
          "Analysis of your software environment",
          "Definition of your integration strategy",
          "Support in your transformation projects",
        ],
      },
      sam: {
        title: "SOFTWARE ASSET MANAGEMENT",
        items: [
          "Complete audit of your licenses",
          "Optimization of your software costs",
          "Compliance with publishers",
          "Proactive management of your assets",
        ],
      },
      solutionEditing: {
        title: "SOLUTION DEVELOPMENT",
        items: [
          "Development of tailor-made tools",
          "Business solution integration",
          "Application maintenance and evolution",
        ],
      },
      technicalExpertise: {
        title: "TECHNICAL EXPERTISE",
        items: [
          "Specialized and responsive team",
          "Proven methodology",
          "Personalized support",
        ],
      },
    },
    cta: {
      sectionTag: "FREE AUDIT • NO COMMITMENT",
      title: "OPTIMIZE YOUR",
      subtitle: "SOFTWARE COSTS",
      description:
        "Our Software Asset Management expertise allows you to quickly identify compliance issues and optimize your software costs.",
      button: "REQUEST A FREE AUDIT",
    },
    about: {
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
          "Let's talk about your IT challenges and explore solutions together",
        button1: "OUR SERVICES",
        button2: "CONTACT US",
      },
    },
  },
};

export function getContent(locale: Locale): LocaleContent {
  return content[locale] || content[defaultLocale];
}
