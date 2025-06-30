import type { Locale } from "./index";

export interface StatsContent {
  yearsExperience: string;
  solutionsDeveloped: string;
  costOptimization: string;
}

export const statsContent: Record<Locale, StatsContent> = {
  fr: {
    yearsExperience: "Années d'expertise",
    solutionsDeveloped: "Solutions développées",
    costOptimization: "Optimisation des coûts",
  },
  en: {
    yearsExperience: "Years of expertise",
    solutionsDeveloped: "Solutions developed",
    costOptimization: "Cost optimization",
  },
};
