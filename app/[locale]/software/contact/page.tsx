import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import { ContactForm } from "@/components/forms/contact-form";
import { contactContent } from "@/lib/i18n/contact";
import { type Locale, getContent } from "@/lib/i18n/index";
import { Mail, MapPin, Phone } from "lucide-react";

interface ContactPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const contact = getContent(locale, contactContent);

  return (
    <div className="min-h-screen font-mono">
      <section className="bg-primary text-white py-24 relative overflow-hidden">
        <GeometricBackground variant="hero" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <ScrollReveal delay={200}>
              <div className="relative inline-block mb-12">
                <div className="bg-secondary text-primary px-8 py-4 relative">
                  <span className="text-sm font-bold tracking-wider">
                    {contact.hero.tagline}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 tracking-wide leading-tight">
                {contact.hero.title}
                <br />
                <span className="text-secondary">{contact.hero.subtitle}</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                {contact.hero.description}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <GeometricBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8">
                  {contact.info.title}
                </h2>

                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mr-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">
                        {contact.info.email}
                      </h3>
                      <p className="text-gray-600">contact@lafarelle.fr</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mr-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">
                        {contact.info.phone}
                      </h3>
                      <p className="text-gray-600">{contact.info.phoneValue}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mr-4">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">
                        {contact.info.address}
                      </h3>
                      <p className="text-gray-600">
                        {contact.info.addressValue}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <ScrollReveal delay={400}>
                  <ContactForm locale={locale} />
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
