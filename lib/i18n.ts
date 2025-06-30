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
      tagline: "LAFARELLE • SAAS MANAGEMENT",
      title: "MAÎTRISEZ VOS",
      subtitle: "OUTILS SAAS",
      description:
        "LAFARELLE accompagne les entreprises dans l'optimisation de leur SaaS management grâce à Sonar Clarity et une expertise technique reconnue.",
      description2:
        "Notre équipe d'experts analyse vos usages SaaS et vous fournit des rapports détaillés pour optimiser vos coûts et rationaliser vos abonnements.",
      auditButton: "AUDIT COMPLET DES SAAS",
      solutionsButton: "DISCUTONS DE VOS PROBLÉMATIQUES",
    },
    stats: {
      yearsExperience: "Années d'expertise",
      solutionsDeveloped: "Solutions développées",
      costOptimization: "Optimisation des coûts",
    },
    problems: {
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
    solutions: {
      sectionTag: "NOS EXPERTISES",
      title: "DÉVELOPPONS ENSEMBLE",
      subtitle: "VOS SOLUTIONS",
      integrationConsulting: {
        title: "CONSEIL EN SAAS MANAGEMENT",
        items: [
          "Analyse de votre environnement SaaS",
          "Définition de votre stratégie d'optimisation",
          "Accompagnement dans vos projets de rationalisation",
        ],
      },
      sam: {
        title: "AUDIT AVEC SONAR CLARITY",
        items: [
          "Audit complet de vos outils SaaS",
          "Identification des usages réels",
          "Optimisation de vos coûts SaaS",
          "Rapport d'analyse détaillé",
        ],
      },
      solutionEditing: {
        title: "ACCOMPAGNEMENT PERSONNALISÉ",
        items: [
          "Analyse des rapports d'audit",
          "Recommandations sur mesure",
          "Suivi des optimisations",
        ],
      },
      technicalExpertise: {
        title: "EXPERTISE TECHNIQUE",
        items: [
          "Équipe spécialisée en SaaS management",
          "Méthodologie éprouvée",
          "Accompagnement personnalisé",
        ],
      },
    },
    cta: {
      sectionTag: "SONAR CLARITY • AUDIT SAAS",
      title: "OPTIMISEZ VOS",
      subtitle: "COÛTS SAAS",
      description:
        "Notre expertise en SaaS management avec Sonar Clarity vous permet d'identifier rapidement l'utilisation de vos outils SaaS et d'optimiser vos coûts.",
      button: "AUDIT COMPLET DES SAAS",
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
          "Parlons de vos défis SaaS et explorons les solutions ensemble",
        button1: "AUDIT COMPLET DES SAAS",
        button2: "DISCUTONS DE VOS PROBLÉMATIQUES",
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
      tagline: "LAFARELLE • SAAS MANAGEMENT",
      title: "MASTER YOUR",
      subtitle: "SAAS TOOLS",
      description:
        "LAFARELLE helps companies optimize their SaaS management through Sonar Clarity and recognized technical expertise.",
      description2:
        "Our team of experts analyzes your SaaS usage and provides you with detailed reports to optimize your costs and streamline your subscriptions.",
      auditButton: "COMPLETE SAAS AUDIT",
      solutionsButton: "LET'S DISCUSS YOUR CHALLENGES",
    },
    stats: {
      yearsExperience: "Years of expertise",
      solutionsDeveloped: "Solutions developed",
      costOptimization: "Cost optimization",
    },
    problems: {
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
    solutions: {
      sectionTag: "OUR EXPERTISE",
      title: "LET'S DEVELOP TOGETHER",
      subtitle: "YOUR SOLUTIONS",
      integrationConsulting: {
        title: "SAAS MANAGEMENT CONSULTING",
        items: [
          "Analysis of your SaaS environment",
          "Definition of your optimization strategy",
          "Support in your rationalization projects",
        ],
      },
      sam: {
        title: "AUDIT WITH SONAR CLARITY",
        items: [
          "Complete audit of your SaaS tools",
          "Identification of actual usage",
          "Optimization of your SaaS costs",
          "Detailed analysis report",
        ],
      },
      solutionEditing: {
        title: "PERSONALIZED SUPPORT",
        items: [
          "Analysis of audit reports",
          "Tailor-made recommendations",
          "Optimization follow-up",
        ],
      },
      technicalExpertise: {
        title: "TECHNICAL EXPERTISE",
        items: [
          "Team specialized in SaaS management",
          "Proven methodology",
          "Personalized support",
        ],
      },
    },
    cta: {
      sectionTag: "SONAR CLARITY • SAAS AUDIT",
      title: "OPTIMIZE YOUR",
      subtitle: "SAAS COSTS",
      description:
        "Our SaaS management expertise with Sonar Clarity allows you to quickly identify your SaaS tools usage and optimize your costs.",
      button: "COMPLETE SAAS AUDIT",
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
          "Let's talk about your SaaS challenges and explore solutions together",
        button1: "COMPLETE SAAS AUDIT",
        button2: "LET'S DISCUSS YOUR CHALLENGES",
      },
    },
  },
};

export function getContent(locale: Locale): LocaleContent {
  return content[locale] || content[defaultLocale];
}
