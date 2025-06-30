export type Locale = "fr" | "en";

export const locales: Locale[] = ["fr", "en"];
export const defaultLocale: Locale = "fr";

// Fonction utilitaire pour récupérer le contenu par section
export function getContent<T>(locale: Locale, content: Record<Locale, T>): T {
  return content[locale] || content[defaultLocale];
}
