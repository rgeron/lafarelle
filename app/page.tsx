import AnimatedCounter from "@/components/animated-counter";
import { AnimatedElement } from "@/components/animated-elements";
import CustomButton from "@/components/custom-button";
import FloatingElements from "@/components/floating-elements";
import GeometricBackground from "@/components/geometric-background";
import ProblemCard from "@/components/problem-card";
import ScrollReveal from "@/components/scroll-reveal";
import SectionSeparator from "@/components/section-separator";
import SolutionCard from "@/components/solution-card";
import { Shield, Target, TrendingUp, Users } from "lucide-react";

export default function HomePage() {
  const problems = [
    "Visibilité limitée sur vos licences logicielles ?",
    "Coûts informatiques difficiles à maîtriser ?",
    "Risques de non-conformité avec les éditeurs ?",
    "Complexité croissante de votre environnement IT ?",
    "Manque d'expertise en gouvernance logicielle ?",
    "Processus de gestion des actifs peu efficaces ?",
  ];

  const solutions = [
    {
      title: "CONSEIL EN INTEGRATION LOGICIELLE",
      icon: Target,
      items: [
        "Analyse de votre environnement logiciel",
        "Définition de votre stratégie d'intégration",
        "Accompagnement dans vos projets de transformation",
      ],
    },
    {
      title: "SOFTWARE ASSET MANAGEMENT",
      icon: Shield,
      items: [
        "Audit complet de vos licences",
        "Optimisation de vos coûts logiciels",
        "Mise en conformité avec les éditeurs",
        "Gestion proactive de vos actifs",
      ],
    },
    {
      title: "EDITION DE SOLUTIONS",
      icon: TrendingUp,
      items: [
        "Développement d'outils sur mesure",
        "Intégration de solutions métier",
        "Maintenance et évolution applicative",
      ],
    },
    {
      title: "EXPERTISE TECHNIQUE",
      icon: Users,
      items: [
        "Équipe spécialisée et réactive",
        "Méthodologie éprouvée",
        "Accompagnement personnalisé",
      ],
    },
  ];

  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section with enhanced geometric background */}
      <section className="bg-primary text-white relative overflow-hidden min-h-screen flex items-center">
        <GeometricBackground variant="hero" />
        <FloatingElements count={8} />

        {/* Additional complex geometric elements */}
        <div className="absolute inset-0">
          {/* Large geometric grid - pas d'animation */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-secondary"></div>
              ))}
            </div>
          </div>

          {/* Diagonal accent lines - pas d'animation */}
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-secondary/40 via-secondary/20 to-transparent transform rotate-12 origin-top"></div>
          <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-secondary/30 via-secondary/15 to-transparent transform -rotate-6 origin-top"></div>

          {/* Complex corner elements - garder seulement les petites animations */}
          <div className="absolute top-0 right-0">
            <div className="w-40 h-40 border-4 border-secondary/20 transform rotate-45 translate-x-20 -translate-y-20"></div>
            <div className="absolute top-8 right-8 w-24 h-24 bg-secondary/10 transform rotate-45"></div>
            <AnimatedElement
              variant="pulse"
              className="absolute top-16 right-16 w-16 h-16 border-2 border-secondary/30 rotate-45"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced header design */}
            <ScrollReveal delay={200}>
              <div className="relative mb-12">
                <div className="inline-block bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                  <span className="text-sm font-bold tracking-wider">
                    LAFARELLE • EXPERTISE SAM
                  </span>
                  {/* Corner cuts */}
                  <div className="absolute top-0 left-0 w-0 h-0 border-r-[12px] border-r-transparent border-t-[12px] border-t-primary transition-all duration-300 hover:border-r-[16px] hover:border-t-[16px]"></div>
                  <div className="absolute bottom-0 right-0 w-0 h-0 border-l-[12px] border-l-transparent border-b-[12px] border-b-primary transition-all duration-300 hover:border-l-[16px] hover:border-b-[16px]"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl lg:text-8xl font-bold mb-12 leading-tight tracking-wide">
                MAÎTRISEZ VOS
                <br />
                <span className="text-secondary relative">
                  ACTIFS LOGICIELS
                  {/* Underline accent */}
                  <AnimatedElement
                    variant="expandX"
                    className="absolute bottom-0 left-0 w-full h-2 bg-secondary/30"
                  />
                  <AnimatedElement
                    variant="expandX"
                    delay={0.5}
                    className="absolute bottom-2 left-0 w-3/4 h-1 bg-secondary/50"
                  />
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="max-w-4xl mb-12">
                <div className="relative bg-white/10 p-8 border-l-8 border-secondary hover-glow transition-all duration-500 hover:bg-white/15">
                  <p className="text-xl lg:text-2xl text-white/90 leading-relaxed mb-4">
                    LAFARELLE accompagne les entreprises dans leur maîtrise du
                    Software Asset Management grâce à une expertise technique
                    reconnue et une approche méthodologique innovante.
                  </p>
                  <p className="text-base text-white/80 leading-relaxed">
                    Notre équipe d&apos;experts développe des solutions sur
                    mesure et optimise vos coûts logiciels tout en garantissant
                    votre conformité.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-secondary transition-all duration-300 hover:w-8 hover:h-8"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary/60 transition-all duration-300 hover:w-6 hover:h-6"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <div className="flex flex-col sm:flex-row gap-6">
                <CustomButton variant="secondary" size="lg">
                  AUDIT GRATUIT
                </CustomButton>
                <CustomButton variant="primary" size="lg">
                  NOS SOLUTIONS
                </CustomButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <GeometricBackground variant="minimal" />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <ScrollReveal delay={200}>
                <div className="group">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                    <AnimatedCounter end={10} suffix="+" />
                  </div>
                  <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Années d&apos;expertise
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="group">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                    <AnimatedCounter end={50} suffix="+" />
                  </div>
                  <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Solutions développées
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="group">
                  <div className="text-4xl font-bold text-primary mb-2 transition-all duration-300 group-hover:text-secondary">
                    <AnimatedCounter end={95} suffix="%" />
                  </div>
                  <p className="font-mono text-sm text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
                    Optimisation des coûts
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <SectionSeparator variant="zigzag" />

      {/* Problems Section with enhanced background */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        {/* Additional geometric elements */}
        <div className="absolute inset-0">
          <AnimatedElement
            variant="float"
            className="absolute top-10 left-10 w-16 h-16 border-4 border-primary/10 rotate-45"
          />
          <AnimatedElement
            variant="pulse"
            className="absolute bottom-10 right-10 w-12 h-12 bg-secondary/10 -rotate-12"
          />
          <AnimatedElement
            variant="pulse"
            className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced section header */}
            <div className="text-center mb-20">
              <ScrollReveal delay={200}>
                <div className="relative inline-block mb-8">
                  <div className="bg-white text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                    <span className="text-sm font-bold tracking-wider">
                      DIAGNOSTIC • ENJEUX IT
                    </span>
                    {/* Geometric accents */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
                    <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-secondary transition-all duration-300 hover:w-6 hover:h-6"></div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 tracking-wide leading-tight">
                  IDENTIFIEZ VOS
                  <br />
                  <span className="text-secondary relative">
                    DÉFIS LOGICIELS
                    {/* Accent lines */}
                    <AnimatedElement
                      variant="expandX"
                      className="absolute -bottom-4 left-0 w-full h-1 bg-secondary/30"
                    />
                    <AnimatedElement
                      variant="expandX"
                      delay={0.5}
                      className="absolute -bottom-6 left-1/4 w-1/2 h-0.5 bg-secondary/50"
                    />
                  </span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Enhanced problems grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <ScrollReveal key={index} delay={200 + index * 100}>
                  <ProblemCard problem={problem} index={index} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <ScrollReveal delay={200}>
                <div className="relative inline-block mb-8">
                  <div className="bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                    <span className="text-sm font-bold tracking-wider">
                      NOS EXPERTISES
                    </span>
                    <AnimatedElement
                      variant="expandX"
                      className="absolute top-0 left-0 w-full h-1 bg-primary"
                    />
                    <AnimatedElement
                      variant="expandX"
                      delay={0.3}
                      className="absolute bottom-0 right-0 w-1/2 h-1 bg-primary"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <h2 className="text-4xl lg:text-6xl font-bold text-primary mb-8 tracking-wide leading-tight">
                  DÉVELOPPONS ENSEMBLE
                  <br />
                  <span className="text-secondary">VOS SOLUTIONS</span>
                </h2>
              </ScrollReveal>
            </div>

            {/* Solutions grid */}
            <div className="grid lg:grid-cols-2 gap-10">
              {solutions.map((solution, index) => (
                <ScrollReveal
                  key={index}
                  delay={200 + index * 200}
                  direction={index % 2 === 0 ? "left" : "right"}
                >
                  <SolutionCard
                    title={solution.title}
                    items={solution.items}
                    icon={solution.icon}
                    index={index}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <GeometricBackground variant="hero" />
        <FloatingElements count={6} />

        {/* Complex geometric overlay - retirer les animations des grandes formes */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-8 border-secondary/20 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/5 rotate-12"></div>

          {/* Corner elements - pas d'animation */}
          <div className="absolute top-0 left-0 w-32 h-32 border-r-4 border-b-4 border-secondary/20"></div>
          <div className="absolute bottom-0 right-0 w-24 h-24 border-l-4 border-t-4 border-secondary/20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-12">
                <div className="bg-secondary text-primary px-8 py-4 relative hover-glow transition-all duration-300">
                  <span className="text-sm font-bold tracking-wider">
                    AUDIT GRATUIT • SANS ENGAGEMENT
                  </span>
                  {/* Complex corner design */}
                  <div className="absolute -top-3 -left-3 w-6 h-6 border-4 border-white transition-all duration-300 hover:w-8 hover:h-8"></div>
                  <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-white transition-all duration-300 hover:w-8 hover:h-8"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h2 className="text-4xl lg:text-6xl font-bold mb-12 tracking-wide leading-tight">
                OPTIMISEZ VOS
                <br />
                <span className="text-secondary relative">
                  COÛTS LOGICIELS
                  {/* Multiple accent lines */}
                  <AnimatedElement
                    variant="expandX"
                    className="absolute -bottom-6 left-0 w-full h-2 bg-secondary/30"
                  />
                  <AnimatedElement
                    variant="expandX"
                    delay={0.3}
                    className="absolute -bottom-8 left-1/4 w-1/2 h-1 bg-secondary/50"
                  />
                  <AnimatedElement
                    variant="expandX"
                    delay={0.6}
                    className="absolute -bottom-10 left-1/3 w-1/3 h-0.5 bg-secondary/70"
                  />
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="relative bg-white/10 p-8 mb-12 border-4 border-secondary/30 hover-glow transition-all duration-500 hover:bg-white/15">
                <p className="text-xl mb-6 text-white/90 leading-relaxed">
                  Notre expertise en Software Asset Management vous permet
                  d&apos;identifier rapidement les enjeux de conformité et
                  d&apos;optimiser vos coûts logiciels.
                </p>
                <div className="absolute top-0 right-0 w-8 h-8 bg-secondary transition-all duration-300 hover:w-10 hover:h-10"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60 transition-all duration-300 hover:w-8 hover:h-8"></div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={800}>
              <CustomButton variant="secondary" size="lg">
                DEMANDER UN AUDIT GRATUIT
              </CustomButton>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
