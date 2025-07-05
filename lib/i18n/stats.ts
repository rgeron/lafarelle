import type { Locale } from "./index";

export interface StatsContent {
  shadowIT: string;
  cyberattacks: string;
  saasWaste: string;
}

export const statsContent: Record<Locale, StatsContent> = {
  fr: {
    shadowIT: "Des applications échappent à l'IT (Shadow IT)",
    cyberattacks: "Des cyberattaques causées par le Shadow IT",
    saasWaste: "Des organisations subissent une hausse du gaspillage SaaS",
  },
  en: {
    shadowIT: "Of applications escape IT control (Shadow IT)",
    cyberattacks: "Of cyberattacks caused by Shadow IT",
    saasWaste: "Of organizations experience increased SaaS waste",
  },
};
