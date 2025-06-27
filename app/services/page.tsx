import ServiceCard from "@/components/service-card"
import CustomButton from "@/components/custom-button"
import GeometricBackground from "@/components/geometric-background"
import { Target, Shield, TrendingUp } from "lucide-react"
import SectionSeparator from "@/components/section-separator"

export default function ServicesPage() {
  const services = [
    {
      title: "CONSEIL_DSI_STRATEGIQUE",
      description:
        "Bénéficiez de notre expertise pour définir et mettre en œuvre votre stratégie IT. Nos consultants seniors vous accompagnent dans l'optimisation de votre système d'information et la conduite de vos projets de transformation digitale.",
      features: [
        "Audit et diagnostic IT complet",
        "Définition de roadmap technologique",
        "Pilotage de projets stratégiques",
        "Optimisation des processus IT",
        "Accompagnement au changement",
      ],
      icon: Target,
    },
    {
      title: "SOFTWARE_ASSET_MANAGEMENT",
      description:
        "Maîtrisez parfaitement vos actifs logiciels grâce à notre expertise en SAM. Nous vous aidons à optimiser vos coûts, réduire vos risques de non-conformité et améliorer votre gouvernance IT.",
      features: [
        "Inventaire et audit des licences",
        "Optimisation des coûts logiciels",
        "Mise en conformité éditeurs",
        "Processus de gouvernance SAM",
        "Négociation avec les éditeurs",
      ],
      icon: Shield,
    },
    {
      title: "VEILLE_TECHNOLOGIQUE_AVANCEE",
      description:
        "Restez à la pointe de l'innovation avec notre service de veille technologique personnalisé. Nous analysons les tendances du marché pour vous conseiller sur les meilleures opportunités technologiques.",
      features: [
        "Surveillance des innovations sectorielles",
        "Analyses sectorielles approfondies",
        "Recommandations stratégiques personnalisées",
        "Bulletins de veille personnalisés",
        "Workshops technologiques",
      ],
      icon: TrendingUp,
    },
  ]

  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block mb-12">
              <div className="bg-secondary text-primary px-8 py-4 relative">
                <span className="text-sm font-bold tracking-wider">SERVICES PROFESSIONNELS</span>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-white"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-2 border-white"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight font-mono">
              NOS <span className="text-secondary">SERVICES</span>
            </h1>

            <div className="relative bg-white/10 p-8 border-l-8 border-secondary">
              <p className="text-xl text-white/90 leading-relaxed">
                Des solutions expertes pour optimiser votre gouvernance IT et transformer vos défis en opportunités
              </p>
              <div className="absolute top-0 right-0 w-6 h-6 bg-secondary"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto space-y-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="hexagons" />

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative inline-block mb-8">
              <div className="bg-secondary text-primary px-6 py-3">
                <span className="text-sm font-bold tracking-wider">CONSULTATION PERSONNALISEE</span>
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-wide">
              QUEL SERVICE REPOND A
              <br />
              <span className="text-secondary">VOS BESOINS ?</span>
            </h2>

            <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto leading-relaxed">
              Discutons de vos défis spécifiques et identifions la solution la plus adaptée
            </p>

            <CustomButton variant="secondary" size="lg">
              OBTENIR UNE CONSULTATION
            </CustomButton>
          </div>
        </div>
      </section>
    </div>
  )
}
