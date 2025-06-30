import { defaultLocale, Locale, locales } from "@/lib/i18n";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;

  // Skip middleware for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Check if the pathname starts with a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    // Get the best matching locale from Accept-Language header
    const locale = getLocale(request) || defaultLocale;

    // Special case for root path - redirect to /[locale]/software
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/${locale}/software`, request.url));
    }

    // For other paths, add the locale prefix
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }
}

function getLocale(request: NextRequest): string | undefined {
  // Try to get locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language");

  if (acceptLanguage) {
    // Parse the Accept-Language header and find the best match
    const languages = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase());

    for (const language of languages) {
      // Check for exact match
      if (locales.includes(language as Locale)) {
        return language;
      }

      // Check for language family match (e.g., 'en-US' -> 'en')
      const languageFamily = language.split("-")[0];
      if (locales.includes(languageFamily as Locale)) {
        return languageFamily;
      }
    }
  }

  return defaultLocale;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
