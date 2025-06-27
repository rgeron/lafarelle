import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
