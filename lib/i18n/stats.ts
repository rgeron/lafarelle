import type { Locale } from "./index";

export interface StatsContent {
  shadowIT: string;
  cyberattacks: string;
  saasWaste: string;
  sources: {
    shadowIT: string;
    cyberattacks: string;
    saasWaste: string;
  };
}

export const statsContent: Record<Locale, StatsContent> = {
  fr: {
    shadowIT: "Des applications échappent à l'IT (Shadow IT)",
    cyberattacks: "Des cyberattaques sont causées par le Shadow IT",
    saasWaste:
      "Des salariés admettent utiliser des SaaS sans accord de leur DSI",
    sources: {
      shadowIT: "Rapport Gartner",
      cyberattacks: "Rapport Gartner",
      saasWaste: "Frost & Sullivan",
    },
  },
  en: {
    shadowIT: "Of applications escape IT control (Shadow IT)",
    cyberattacks: "Of cyberattacks caused by Shadow IT",
    saasWaste:
      "Of employees admit using IT solutions without formal approval from their IT department",
    sources: {
      shadowIT: "Gartner Report",
      cyberattacks: "Gartner Report",
      saasWaste: "Study by consulting firm: Frost & Sullivan",
    },
  },
};
