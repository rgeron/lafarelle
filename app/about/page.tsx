import ValueCard from "@/components/value-card"
import CustomButton from "@/components/custom-button"
import GeometricBackground from "@/components/geometric-background"
import { Target, Eye, Lightbulb, Handshake } from "lucide-react"
import SectionSeparator from "@/components/section-separator"

export default function AboutPage() {
  const values = [
    {
      title: "EXCELLENCE",
      description:
        "Nous visons l&apos;excellence dans chaque mission que nous entreprenons, avec une approche rigoureuse et des standards élevés.",
      icon: Target,
    },
    {
      title: "TRANSPARENCE",
      description:
        "Une communication claire et honnête avec nos clients, basée sur la confiance et l&apos;intégrité professionnelle.",
      icon: Eye,
    },
    {
      title: "INNOVATION",
      description: "À la pointe des dernières technologies et méthodologies pour offrir des solutions avant-gardistes.",
      icon: Lightbulb,
    },
    {
      title: "PARTENARIAT",
      description:
        "Une relation de confiance sur le long terme, construite sur l&apos;écoute et l&apos;accompagnement personnalisé.",
      icon: Handshake,
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
                <span className="text-sm font-bold tracking-wider">ABOUT LAFARELLE SYSTEMS</span>
                <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-primary"></div>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight">
              LAFARELLE :
              <br />
              <span className="text-secondary">L EXCELLENCE AU SERVICE DE VOTRE IT</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block bg-primary text-white px-6 py-3 mb-8">
                <span className="text-sm font-bold tracking-wider">NOTRE HISTOIRE</span>
              </div>
            </div>

            <div className="relative bg-gray-50 p-12 border-4 border-primary">
              <GeometricBackground variant="card" />

              <div className="relative z-10">
                <p className="text-xl mb-8 leading-relaxed text-gray-700">
                  Fondée par des experts passionnés de technologie, LAFARELLE s&apos;est imposée comme un acteur de référence
                  dans le conseil DSI et le Software Asset Management.
                </p>
                <p className="text-lg leading-relaxed text-gray-700">
                  Notre approche unique combine expertise technique, vision stratégique et accompagnement humain pour
                  transformer les défis IT en opportunités de croissance. Nous croyons fermement que la maîtrise des
                  actifs logiciels et une gouvernance IT optimale sont les clés du succès dans l&apos;économie numérique
                  d&apos;aujourd&apos;hui.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block bg-secondary text-primary px-6 py-3 mb-12">
              <span className="text-sm font-bold tracking-wider">NOTRE MISSION</span>
            </div>

            <div className="relative bg-white p-12 border-l-8 border-secondary">
              <div className="absolute top-0 right-0 w-12 h-12 bg-secondary"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 bg-secondary/60"></div>

              <p className="text-2xl text-gray-700 leading-relaxed italic">
                &quot;Accompagner les entreprises dans leur maîtrise technologique en proposant des solutions innovantes
                et sur mesure qui optimisent leurs performances IT tout en réduisant leurs risques et leurs coûts.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="waves" />

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-block bg-primary text-white px-8 py-4 mb-8 relative">
                <span className="text-sm font-bold tracking-wider">NOS VALEURS FONDAMENTALES</span>
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary"></div>
                <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary"></div>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-wide">
                NOS <span className="text-secondary">VALEURS</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block bg-secondary text-primary px-6 py-3 mb-8">
              <span className="text-sm font-bold tracking-wider">DECOUVREZ NOTRE APPROCHE</span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-8 tracking-wide">
              DECOUVREZ COMMENT NOUS POUVONS
              <br />
              <span className="text-secondary">VOUS ACCOMPAGNER</span>
            </h2>

            <p className="text-xl mb-10 text-white/90 leading-relaxed">
              Parlons de vos défis IT et explorons les solutions ensemble
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <CustomButton variant="secondary" size="lg">
                NOS SERVICES
              </CustomButton>
              <CustomButton variant="outline" size="lg">
                NOUS CONTACTER
              </CustomButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
