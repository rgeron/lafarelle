"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { sendEmail } from "@/lib/actions/send-email";
import { contactContent } from "@/lib/i18n/contact";
import { getContent } from "@/lib/i18n/index";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import CustomButton from "../buttons/custom-button";

interface ContactFormProps {
  locale?: "fr" | "en";
}

export function ContactForm({ locale = "fr" }: ContactFormProps) {
  const searchParams = useSearchParams();
  const [selectedSubject, setSelectedSubject] = useState("");
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [isChecked, setIsChecked] = useState(false);
  const contact = getContent(locale, contactContent);

  useEffect(() => {
    const subjectParam = searchParams.get("subject");
    if (subjectParam) {
      setSelectedSubject(subjectParam);
    }
  }, [searchParams]);

  const handleSubmit = async (formData: FormData) => {
    if (!isChecked) {
      setMessage({
        type: "error",
        text:
          locale === "fr"
            ? "Vous devez accepter d'être contacté par LAFARELLE"
            : "You must agree to be contacted by LAFARELLE",
      });
      return;
    }

    // Add locale to form data
    formData.append("locale", locale);
    formData.append("subject", selectedSubject);

    startTransition(async () => {
      try {
        const result = await sendEmail(formData);

        if (result.error) {
          setMessage({ type: "error", text: result.error });
        } else if (result.success) {
          setMessage({
            type: "success",
            text: result.message || "Email envoyé avec succès",
          });
          // Reset form
          const form = document.getElementById(
            "contact-form"
          ) as HTMLFormElement;
          if (form) {
            form.reset();
            setSelectedSubject("");
            setIsChecked(false);
          }
        }
      } catch (error) {
        console.error(error);
        setMessage({
          type: "error",
          text:
            locale === "fr"
              ? "Une erreur s'est produite. Veuillez réessayer."
              : "An error occurred. Please try again.",
        });
      }
    });
  };

  return (
    <div className="relative bg-white border-4 border-primary w-full max-w-4xl mx-auto">
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

        {/* Success/Error Message */}
        {message && (
          <div
            className={`mb-6 p-4 border-2 font-mono text-sm ${
              message.type === "success"
                ? "bg-green-50 border-green-500 text-green-700"
                : "bg-red-50 border-red-500 text-red-700"
            }`}
          >
            {message.text}
          </div>
        )}

        <form id="contact-form" action={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                01
              </div>
              <input
                type="text"
                name="firstName"
                placeholder={locale === "fr" ? "Prénom *" : "First Name *"}
                className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                required
                disabled={isPending}
              />
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                02
              </div>
              <input
                type="text"
                name="lastName"
                placeholder={locale === "fr" ? "Nom *" : "Last Name *"}
                className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                required
                disabled={isPending}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
              03
            </div>
            <input
              type="text"
              name="company"
              placeholder={locale === "fr" ? "Entreprise *" : "Company *"}
              className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
              required
              disabled={isPending}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                04
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email *"
                className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                required
                disabled={isPending}
              />
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
                05
              </div>
              <input
                type="tel"
                name="phone"
                placeholder={locale === "fr" ? "Téléphone" : "Phone"}
                className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm"
                disabled={isPending}
              />
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold z-20">
              06
            </div>
            <div className="pt-8 pb-3 px-4 border-2 border-gray-200 focus-within:border-secondary">
              <Select
                value={selectedSubject}
                onValueChange={setSelectedSubject}
                disabled={isPending}
              >
                <SelectTrigger className="w-full border-0 p-0 h-auto font-mono text-sm focus:ring-0 focus:ring-offset-0 bg-transparent">
                  <SelectValue placeholder={contact.subjects.placeholder} />
                </SelectTrigger>
                <SelectContent>
                  {contact.subjects.options.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="font-mono text-sm"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 bg-secondary text-primary px-2 py-1 text-xs font-bold">
              07
            </div>
            <textarea
              name="message"
              placeholder={
                locale === "fr"
                  ? "Décrivez-nous vos besoins, vos défis IT ou vos questions..."
                  : "Describe your needs, IT challenges or questions..."
              }
              rows={6}
              className="w-full pt-8 pb-3 px-4 border-2 border-gray-200 focus:border-secondary font-mono text-sm resize-none"
              required
              disabled={isPending}
            ></textarea>
          </div>

          <div className="flex items-start space-x-3">
            <button
              type="button"
              onClick={() => setIsChecked(!isChecked)}
              disabled={isPending}
              className={`w-4 h-4 border-2 border-secondary mt-1 flex-shrink-0 flex items-center justify-center ${
                isChecked ? "bg-secondary" : "bg-white"
              } transition-colors`}
            >
              {isChecked && (
                <svg
                  className="w-2 h-2 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
            <span className="font-mono text-xs text-gray-600 leading-relaxed">
              {locale === "fr"
                ? "J'accepte d'être contacté par LAFARELLE concernant ma demande et de recevoir des informations sur vos services. *"
                : "I agree to be contacted by LAFARELLE regarding my request and to receive information about your services. *"}
            </span>
          </div>

          <CustomButton
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={isPending || !selectedSubject || !isChecked}
          >
            {isPending
              ? locale === "fr"
                ? "ENVOI EN COURS..."
                : "SENDING..."
              : locale === "fr"
              ? "ENVOYER MA DEMANDE"
              : "SEND MY REQUEST"}
          </CustomButton>

          <p className="font-mono text-xs text-gray-500 text-center">
            {locale === "fr" ? "* Champs obligatoires" : "* Required fields"}
          </p>
        </form>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-secondary">
        <div className="absolute right-0 top-0 w-0 h-0 border-t-[8px] border-t-white border-r-[20px] border-r-transparent"></div>
      </div>
    </div>
  );
}
