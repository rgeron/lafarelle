import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import { type Locale, locales } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type React from "react";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    fr: "LAFARELLE - Conseil DSI & Software Asset Management",
    en: "LAFARELLE - CIO Advisory & Software Asset Management",
  };

  const descriptions = {
    fr: "Optimisez votre gouvernance IT avec LAFARELLE. Conseil DSI, veille technologique et Software Asset Management pour une gestion optimale de vos actifs logiciels.",
    en: "Optimize your IT governance with LAFARELLE. CIO consulting, technology watch and Software Asset Management for optimal management of your software assets.",
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <Navigation locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
