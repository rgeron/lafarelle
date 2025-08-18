import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import type React from "react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LAFARELLE - Conseil DSI & Software Asset Management",
  description:
    "Optimisez votre gouvernance IT avec LAFARELLE. Conseil DSI, veille technologique et Software Asset Management pour une gestion optimale de vos actifs logiciels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <Script
          src="https://sdk.hellouniweb.com/base/main.js"
          data-account="fOHVazcE"
          strategy="afterInteractive"
        />
        {children}
      </body>
    </html>
  );
}
