# Structure modulaire des traductions

## Vue d'ensemble

Cette nouvelle structure sépare les traductions par domaine logique pour une meilleure maintenabilité :

```
lib/i18n/
├── index.ts          # Configuration principale et utilitaires
├── navigation.ts     # Traductions pour la navigation
├── hero.ts          # Traductions pour la section hero
├── stats.ts         # Traductions pour les statistiques
├── problems.ts      # Traductions pour les problèmes
├── solutions.ts     # Traductions pour les solutions
├── cta.ts           # Traductions pour les CTA
├── about.ts         # Traductions pour la page À propos
├── common.ts        # Éléments communs réutilisables
├── legacy.ts        # Compatibilité avec l'ancien système
└── README.md        # Ce guide
```

## Avantages

✅ **Fichiers plus petits** : Plus facile à naviguer et maintenir  
✅ **Imports synchrones** : Pas de `async/await`, performance optimale  
✅ **Type safety** : TypeScript complet avec intellisense  
✅ **Modularité** : Imports sélectifs selon les besoins  
✅ **Compatibilité** : L'ancien système continue de fonctionner

## Utilisation

### 🔥 Nouvelle approche (recommandée)

```tsx
// Import sélectif pour un composant
import { getContent } from "@/lib/i18n";
import { navigationContent } from "@/lib/i18n/navigation";

function Navigation({ locale }: { locale: Locale }) {
  const t = getContent(locale, navigationContent);

  return (
    <nav>
      <Link href="/home">{t.home}</Link>
      <Link href="/about">{t.about}</Link>
    </nav>
  );
}
```

### 📂 Pour les pages avec plusieurs sections

```tsx
// Import multiple pour une page complète
import { getContent } from "@/lib/i18n";
import { heroContent } from "@/lib/i18n/hero";
import { statsContent } from "@/lib/i18n/stats";
import { problemsContent } from "@/lib/i18n/problems";

function HomePage({ locale }: { locale: Locale }) {
  const hero = getContent(locale, heroContent);
  const stats = getContent(locale, statsContent);
  const problems = getContent(locale, problemsContent);

  return (
    <div>
      <HeroSection content={hero} />
      <StatsSection content={stats} />
      <ProblemsSection content={problems} />
    </div>
  );
}
```

### 🔧 Ancien système (toujours fonctionnel)

```tsx
// L'ancien système continue de fonctionner
import { getContent } from "@/lib/i18n";

function MyComponent({ locale }: { locale: Locale }) {
  const t = getContent(locale);

  return <h1>{t.hero.title}</h1>;
}
```

## Migration progressive

1. **Phase 1** : Continuez à utiliser l'ancien système
2. **Phase 2** : Migrez composant par composant vers la nouvelle structure
3. **Phase 3** : Supprimez `lib/i18n/legacy.ts` quand tous les composants sont migrés

## Ajout de nouvelles traductions

### Pour un nouveau contenu dans une section existante

```tsx
// Ajoutez dans le fichier approprié, ex: navigation.ts
export interface NavigationContent {
  home: string;
  about: string;
  services: string;
  caseStudies: string;
  contact: string;
  newItem: string; // ← Nouveau
}

export const navigationContent: Record<Locale, NavigationContent> = {
  fr: {
    // ... existant
    newItem: "Nouveau élément",
  },
  en: {
    // ... existant
    newItem: "New item",
  },
};
```

### Pour une nouvelle section

1. Créez un nouveau fichier `lib/i18n/nouvelle-section.ts`
2. Suivez le pattern des autres fichiers
3. Optionnellement, ajoutez-le à `legacy.ts` pour la compatibilité

## Types TypeScript

Chaque fichier exporte son propre type d'interface :

```tsx
import type { NavigationContent } from "@/lib/i18n/navigation";
import type { HeroContent } from "@/lib/i18n/hero";
// etc.
```

## Performance

- ✅ **Imports synchrones** : Pas de `async/await`
- ✅ **Tree shaking** : Seules les traductions utilisées sont incluses
- ✅ **Bundle splitting** : Les traductions non utilisées n'affectent pas la taille du bundle
