import ScrollReveal from "@/components/animations/scroll-reveal";
import GeometricBackground from "@/components/background/geometric-background";
import { ContactForm } from "@/components/forms/contact-form";
import { PageHero } from "@/components/page-hero";
import { contactContent } from "@/lib/i18n/contact";
import { type Locale, getContent } from "@/lib/i18n/index";
import { navigationContent } from "@/lib/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { Suspense } from "react";

interface ContactPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale } = await params;
  const contact = getContent(locale, contactContent);
  const nav = navigationContent[locale];

  return (
    <div className="min-h-screen font-mono">
      <PageHero
        locale={locale}
        tagline={contact.hero.tagline}
        tagVariant="animated"
        title={contact.hero.title}
        subtitle={contact.hero.subtitle}
        breadcrumbs={[{ label: nav.contact }]}
      />

      <section
        id="contact-form"
        className="py-24 bg-white relative overflow-hidden"
      >
        <GeometricBackground variant="section" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Contact Form - Main Focus */}
            <div className="mb-16">
              <ScrollReveal delay={200}>
                <Suspense
                  fallback={
                    <div className="animate-pulse bg-gray-200 h-96 rounded-lg"></div>
                  }
                >
                  <ContactForm locale={locale} />
                </Suspense>
              </ScrollReveal>
            </div>

            {/* Contact Info - Secondary */}
            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={400}>
                <div className="text-center mb-12">
                  <h2 className="text-2xl font-bold text-primary mb-8">
                    {contact.info.title}
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-primary mb-2">
                      {contact.info.email}
                    </h3>
                    <p className="text-gray-600 font-mono text-sm">
                      contact@lafarelle.fr
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-primary mb-2">
                      {contact.info.phone}
                    </h3>
                    <p className="text-gray-600 font-mono text-sm">
                      {contact.info.phoneValue}
                    </p>
                  </div>

                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <h3 className="font-bold text-primary mb-2">
                      {contact.info.address}
                    </h3>
                    <p className="text-gray-600 font-mono text-sm">
                      {contact.info.addressValue}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
