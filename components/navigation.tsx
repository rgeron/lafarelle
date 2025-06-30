"use client";

import { type Locale, getContent } from "@/lib/i18n";
import { Globe, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import CustomButton from "./buttons/custom-button";

interface NavigationProps {
  locale: Locale;
}

export default function Navigation({ locale }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = getContent(locale);

  const navItems = [
    { href: `/${locale}/software`, label: t.navigation.home },
    { href: `/${locale}/software/about`, label: t.navigation.about },
    {
      href: `/${locale}/software/case-studies`,
      label: t.navigation.caseStudies,
    },
    { href: `/${locale}/software/services`, label: t.navigation.services },
    { href: `/${locale}/software/contact`, label: t.navigation.contact },
  ];

  const getAlternateLocale = () => (locale === "fr" ? "en" : "fr");
  const getLocalizedPath = (targetLocale: Locale) => {
    // Replace the current locale with the target locale in the path
    const currentPath = pathname.replace(`/${locale}`, "");
    return `/${targetLocale}${currentPath}`;
  };

  return (
    <nav className="bg-white border-b-4 border-primary sticky top-0 z-50 font-mono">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={`/${locale}/software`} className="flex items-center">
            <Image
              src="/images/logo-blue.png"
              alt="LAFARELLE"
              width={120}
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors relative group"
              >
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* Language Switcher */}
            <Link
              href={getLocalizedPath(getAlternateLocale())}
              className="flex items-center space-x-1 text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors relative group"
            >
              <Globe size={16} />
              <span>{getAlternateLocale().toUpperCase()}</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-secondary group-hover:w-full transition-all duration-300"></div>
            </Link>

            <CustomButton variant="primary" size="sm">
              {locale === "fr" ? "ÉCHANGEONS" : "LET'S TALK"}
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-primary text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t-2 border-primary bg-gray-50">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <Link
                href={getLocalizedPath(getAlternateLocale())}
                className="flex items-center space-x-1 text-primary hover:text-secondary font-bold text-sm tracking-wide transition-colors px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                <Globe size={16} />
                <span>{getAlternateLocale().toUpperCase()}</span>
              </Link>

              <div className="px-4">
                <CustomButton variant="primary" size="sm">
                  {locale === "fr" ? "ÉCHANGEONS" : "LET'S TALK"}
                </CustomButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
