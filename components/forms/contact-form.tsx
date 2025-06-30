import CustomButton from "../buttons/custom-button";

interface ContactFormProps {
  locale?: "fr" | "en";
}

export function ContactForm({ locale = "fr" }: ContactFormProps) {
  return (
    <div className="relative bg-white border-4 border-primary">
      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-2 bg-secondary">
        <div className="absolute left-0 top-0 w-0 h-0 border-b-[8px] border-b-white border-l-[20px] border-l-transparent"></div>
      </div>

      {/* Form Content */}
      <div className="p-8 pt-12 relative z-10">
        <p className="font-mono text-sm text-gray-600 mb-8 leading-relaxed">
          {locale === "fr"
            ? "Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais"
            : "Fill out this form and we will contact you as soon as possible"}
        </p>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                01
              </div>
              <input
                type="text"
                placeholder={locale === "fr" ? "Prénom *" : "First Name *"}
                className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
              />
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                02
              </div>
              <input
                type="text"
                placeholder={locale === "fr" ? "Nom *" : "Last Name *"}
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
              placeholder={locale === "fr" ? "Entreprise *" : "Company *"}
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
                placeholder={locale === "fr" ? "Téléphone" : "Phone"}
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
              placeholder={locale === "fr" ? "Sujet *" : "Subject *"}
              className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
            />
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
              07
            </div>
            <textarea
              placeholder={
                locale === "fr"
                  ? "Décrivez-nous vos besoins, vos défis IT ou vos questions..."
                  : "Describe your needs, IT challenges or questions..."
              }
              rows={5}
              className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm resize-none"
            ></textarea>
          </div>

          <div className="flex items-start space-x-3">
            <div className="w-4 h-4 border-2 border-secondary mt-1 flex-shrink-0"></div>
            <span className="font-mono text-xs text-gray-600 leading-relaxed">
              {locale === "fr"
                ? "J'accepte d'être contacté par LAFARELLE concernant ma demande et de recevoir des informations sur vos services. *"
                : "I agree to be contacted by LAFARELLE regarding my request and to receive information about your services. *"}
            </span>
          </div>

          <CustomButton variant="primary" size="lg" className="w-full">
            {locale === "fr" ? "ENVOYER MA DEMANDE" : "SEND MY REQUEST"}
          </CustomButton>

          <p className="font-mono text-xs text-gray-500 text-center">
            {locale === "fr" ? "* Champs obligatoires" : "* Required fields"}
          </p>
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary">
        <div className="absolute right-0 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[20px] border-r-transparent"></div>
      </div>
    </div>
  );
}
