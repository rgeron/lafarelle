import { AnimatedElement } from "@/components/animated-elements";
import CustomButton from "@/components/custom-button";
import EnhancedCaseStudyCard from "@/components/enhanced-case-study-card";
import GeometricBackground from "@/components/geometric-background";
import SectionSeparator from "@/components/section-separator";
import { Building2, Factory, Landmark } from "lucide-react";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: "OPTIMISATION_SAM_SECTEUR_BANCAIRE",
      sector: "Banque & Finance",
      icon: Building2,
      problem:
        "Une grande banque européenne faisait face à des coûts logiciels en constante augmentation et des risques de non-conformité avec les éditeurs majeurs. L&apos;absence de visibilité sur les licences utilisées générait des surcoûts importants.",
      solution:
        "Audit complet des licences existantes, mise en place d'un processus de gouvernance SAM structuré, implémentation d'outils de monitoring automatisés et négociation stratégique avec les éditeurs pour optimiser les contrats.",
      results: [
        "35% de réduction des coûts logiciels",
        "100% de conformité atteinte",
        "ROI de 300% en 18 mois",
        "Processus automatisés mis en place",
      ],
      testimonial:
        "LAFARELLE a transformé notre approche du Software Asset Management. Leur expertise nous a permis de réaliser des économies substantielles tout en sécurisant notre conformité. Un partenariat exemplaire.",
    },
    {
      title: "TRANSFORMATION_IT_INDUSTRIE_MANUFACTURIERE",
      sector: "Industrie",
      icon: Factory,
      problem:
        "Un groupe industriel devait moderniser son SI vieillissant tout en maintenant la continuité opérationnelle de ses sites de production. Les systèmes legacy posaient des risques de sécurité et de performance.",
      solution:
        "Définition d'une roadmap de transformation progressive, pilotage des projets de migration par phases, accompagnement au changement des équipes et mise en place d'une architecture moderne et sécurisée.",
      results: [
        "Migration réussie sans interruption",
        "40% d'amélioration des performances",
        "Réduction de 50% des incidents IT",
        "Formation de 200+ collaborateurs",
      ],
      testimonial:
        "L'accompagnement de LAFARELLE a été déterminant dans la réussite de notre transformation digitale. Leur approche méthodique et leur expertise technique nous ont permis d'atteindre nos objectifs dans les délais.",
    },
    {
      title: "AUDIT_DECONFORMITE_SECTEUR_PUBLIC",
      sector: "Secteur Public",
      icon: Landmark,
      problem:
        "Une collectivité territoriale devait se mettre en conformité avec les réglementations sur les licences logicielles suite à un contrôle éditeur. Les risques financiers et juridiques étaient importants.",
      solution:
        "Audit exhaustif des installations sur tous les postes, régularisation des licences manquantes, mise en place d'outils de suivi automatisés et formation des équipes internes aux bonnes pratiques SAM.",
      results: [
        "Conformité totale établie",
        "Processus de suivi automatisé",
        "Formation des équipes internes",
        "Réduction des risques juridiques",
      ],
      testimonial:
        "LAFARELLE nous a aidés à transformer une situation critique en opportunité d'amélioration. Leur réactivité et leur professionnalisme ont été exemplaires. Nous recommandons vivement leurs services.",
    },
  ];

  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block mb-12">
              <div className="bg-secondary text-primary px-8 py-4 relative">
                <span className="text-sm font-bold tracking-wider">
                  SUCCESS STORIES DATABASE
                </span>
                <AnimatedElement
                  variant="expandX"
                  className="absolute top-0 left-0 w-full h-1 bg-primary"
                />
                <AnimatedElement
                  variant="expandX"
                  delay={0.3}
                  className="absolute bottom-0 right-0 w-3/4 h-1 bg-primary"
                />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight">
              ETUDES DE <span className="text-secondary">CAS</span>
            </h1>

            <div className="relative bg-white/10 p-8 border-l-8 border-secondary">
              <p className="text-xl text-white/90 leading-relaxed">
                Découvrez comment nous avons aidé nos clients à relever leurs
                défis IT et transformer leurs organisations
              </p>
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <EnhancedCaseStudyCard
                key={index}
                title={study.title}
                sector={study.sector}
                icon={study.icon}
                problem={study.problem}
                solution={study.solution}
                results={study.results}
                testimonial={study.testimonial}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="arrows" />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="relative inline-block mb-12">
              <div className="bg-secondary text-primary px-8 py-4 relative">
                <span className="text-sm font-bold tracking-wider">
                  NEXT SUCCESS STORY LOADING
                </span>
                <div className="absolute -top-3 -left-3 w-6 h-6 border-4 border-white"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white"></div>
              </div>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wide leading-tight">
              VOTRE ENTREPRISE POURRAIT ETRE
              <br />
              <span className="text-secondary">
                NOTRE PROCHAINE SUCCESS STORY
              </span>
            </h2>

            <div className="relative bg-white/10 p-8 mb-12 border-4 border-secondary/30">
              <p className="text-xl text-white/90 leading-relaxed">
                Discutons de vos défis et explorons comment nous pouvons vous
                accompagner vers le succès
              </p>
              <div className="absolute top-0 right-0 w-8 h-8 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton variant="secondary" size="lg">
                OBTENIR UNE CONSULTATION
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                VOIR NOS SERVICES
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
