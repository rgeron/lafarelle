import CustomButton from "@/components/custom-button"
import GeometricBackground from "@/components/geometric-background"
import ScrollReveal from "@/components/scroll-reveal"
import SectionSeparator from "@/components/section-separator"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen font-mono">
      {/* Hero Section */}
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-12">
                <div className="bg-secondary text-primary px-8 py-4 relative">
                  <span className="text-sm font-bold tracking-wider">CONTACT LAFARELLE</span>
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary"></div>
                  <div className="absolute bottom-0 right-0 w-2/3 h-1 bg-primary"></div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight">
                CONTACTEZ <span className="text-secondary">NOUS</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="relative bg-white/10 p-8 border-l-8 border-secondary">
                <p className="text-xl text-white/90 leading-relaxed">
                  Discutons de vos projets IT - Consultation gratuite de 30 minutes
                </p>
                <div className="absolute top-0 right-0 w-8 h-8 bg-secondary"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 bg-secondary/60"></div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Séparateur exceptionnel - seulement ici */}
      <SectionSeparator variant="circles" />

      {/* Contact Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left" delay={200}>
              <div className="relative">
                <div className="bg-gray-50 border-4 border-primary relative overflow-hidden">
                  <GeometricBackground variant="card" />

                  {/* Form Header */}
                  <div className="bg-primary text-white p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-mono text-xs tracking-wider text-secondary">FORM CONSULTATION</div>
                      <Send size={24} className="text-secondary" />
                    </div>
                    <h3 className="font-mono text-xl font-bold tracking-wide">DEMANDE DE CONSULTATION</h3>

                    {/* Geometric bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-6 bg-gray-50">
                      <div className="absolute top-0 left-0 w-0 h-0 border-l-[100px] border-l-primary border-b-[24px] border-b-transparent"></div>
                      <div className="absolute top-0 right-0 w-0 h-0 border-r-[100px] border-r-primary border-b-[24px] border-b-transparent"></div>
                    </div>
                  </div>

                  {/* Form Content */}
                  <div className="p-8 pt-12 relative z-10">
                    <p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">
                      Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais
                    </p>

                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                            01
                          </div>
                          <input
                            type="text"
                            placeholder="Prénom *"
                            className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                            02
                          </div>
                          <input
                            type="text"
                            placeholder="Nom *"
                            className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                          03
                        </div>
                        <input
                          type="text"
                          placeholder="Entreprise *"
                          className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="relative">
                          <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                            04
                          </div>
                          <input
                            type="email"
                            placeholder="Email *"
                            className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                          />
                        </div>
                        <div className="relative">
                          <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                            05
                          </div>
                          <input
                            type="tel"
                            placeholder="Téléphone"
                            className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                          />
                        </div>
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                          06
                        </div>
                        <input
                          type="text"
                          placeholder="Sujet *"
                          className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                        />
                      </div>

                      <div className="relative">
                        <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                          07
                        </div>
                        <textarea
                          placeholder="Décrivez-nous vos besoins, vos défis IT ou vos questions..."
                          rows={5}
                          className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm resize-none"
                        ></textarea>
                      </div>

                      <div className="flex items-start space-x-3">
                        <div className="w-4 h-4 border-2 border-secondary mt-1 flex-shrink-0"></div>
                        <span className="font-mono text-xs text-gray-600 leading-relaxed">
                          J&apos;accepte d&apos;être contacté par LAFARELLE concernant ma demande et de recevoir des
                          informations sur vos services. *
                        </span>
                      </div>

                      <CustomButton variant="primary" size="lg" className="w-full">
                        ENVOYER MA DEMANDE
                      </CustomButton>

                      <p className="font-mono text-xs text-gray-500 text-center">* Champs obligatoires</p>
                    </div>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary">
                    <div className="absolute right-0 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[20px] border-r-transparent"></div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Contact Information */}
            <div className="space-y-8">
              <ScrollReveal direction="right" delay={400}>
                <div className="bg-white border-4 border-primary relative overflow-hidden">
                  <GeometricBackground variant="card" />

                  {/* Header */}
                  <div className="bg-secondary text-primary p-8 relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="font-mono text-xs tracking-wider">CONTACT_INFO</div>
                      <Phone size={24} />
                    </div>
                    <h3 className="font-mono text-xl font-bold tracking-wide">NOS COORDONNEES</h3>
                  </div>

                  {/* Content */}
                  <div className="p-8 space-y-6 relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Mail className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-primary text-sm mb-2">EMAIL</h4>
                        <p className="font-mono text-sm text-gray-700">contact@lafarelle.fr</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Phone className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-primary text-sm mb-2">TELEPHONE</h4>
                        <p className="font-mono text-sm text-gray-700">A compléter</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <MapPin className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-primary text-sm mb-2">ADRESSE</h4>
                        <p className="font-mono text-sm text-gray-700">A compléter</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary flex items-center justify-center">
                        <Clock className="text-white" size={20} />
                      </div>
                      <div>
                        <h4 className="font-mono font-bold text-primary text-sm mb-2">HORAIRES</h4>
                        <p className="font-mono text-sm text-gray-700">
                          Lundi - Vendredi : 9h00 - 18h00
                          <br />
                          Réponse sous 24h garantie
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={600}>
                <div className="bg-primary text-white border-4 border-primary relative overflow-hidden">
                  <GeometricBackground variant="card" />

                  <div className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-8 h-8 bg-secondary text-primary font-mono text-xs font-bold flex items-center justify-center mr-4">
                        !
                      </div>
                      <h3 className="font-mono text-lg font-bold">CONSULTATION GRATUITE</h3>
                    </div>

                    <p className="font-mono text-sm text-white/90 mb-6 leading-relaxed">
                      Profitez d&apos;un premier échange gratuit de 30 minutes pour analyser vos besoins et identifier
                      les opportunités d&apos;optimisation de votre gouvernance IT.
                    </p>

                    <div className="space-y-3">
                      {[
                        "Analyse de votre situation actuelle",
                        "Identification des quick wins",
                        "Recommandations personnalisées",
                        "Proposition d'accompagnement",
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-secondary mr-3"></div>
                          <span className="font-mono text-sm text-white/90">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-6 h-6 bg-secondary"></div>
                  <div className="absolute bottom-0 left-0 w-4 h-4 bg-secondary/60"></div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-100 relative overflow-hidden">
        <GeometricBackground variant="section" />

        <div className="container mx-auto px-4 text-center relative z-10">
          <ScrollReveal delay={200}>
            <div className="max-w-4xl mx-auto">
              <div className="inline-block bg-primary text-white px-6 py-3 mb-8">
                <span className="text-sm font-bold tracking-wider">PRET A COMMENCER</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-8 tracking-wide">
                PRET A OPTIMISER VOTRE
                <br />
                <span className="text-secondary">GOUVERNANCE IT ?</span>
              </h2>

              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ne laissez plus les défis IT freiner votre croissance. Contactez-nous dès aujourd&apos;hui pour une
                consultation gratuite.
              </p>

              <CustomButton variant="secondary" size="lg">
                PLANIFIER UN APPEL
              </CustomButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
