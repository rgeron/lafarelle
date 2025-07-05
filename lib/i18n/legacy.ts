// Fichier de compatibilité pour maintenir l'ancien système
// Ce fichier peut être supprimé une fois que tous les composants utilisent la nouvelle structure

import { aboutContent, type AboutContent } from "./about";
import { ctaContent, type CtaContent } from "./cta";
import { heroContent, type HeroContent } from "./hero";
import type { Locale } from "./index";
import { navigationContent, type NavigationContent } from "./navigation";
import { problemsContent, type ProblemsContent } from "./problems";
import { solutionsContent, type SolutionsContent } from "./services";
import { statsContent, type StatsContent } from "./stats";

export interface LocaleContent {
  navigation: NavigationContent;
  hero: HeroContent;
  stats: StatsContent;
  problems: ProblemsContent;
  solutions: SolutionsContent;
  cta: CtaContent;
  about: AboutContent;
}

export const content: Record<Locale, LocaleContent> = {
  fr: {
    navigation: navigationContent.fr,
    hero: heroContent.fr,
    stats: statsContent.fr,
    problems: problemsContent.fr,
    solutions: solutionsContent.fr,
    cta: ctaContent.fr,
    about: aboutContent.fr,
  },
  en: {
    navigation: navigationContent.en,
    hero: heroContent.en,
    stats: statsContent.en,
    problems: problemsContent.en,
    solutions: solutionsContent.en,
    cta: ctaContent.en,
    about: aboutContent.en,
  },
};

export function getContent(locale: Locale): LocaleContent {
  return content[locale] || content.fr;
}
