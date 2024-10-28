// Core
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { poppins } from "../components/ui/fonts";

// Style
import "./global.css";

export const metadata = {
  title: "99 Names of Allah - Asma Ul Husna Explained with Meanings",
  description: `99 Names of Allah (SWT) with English meanings, descriptions, along with the Arabic pronunciation for each name.`,
  openGraph: {
    openGraphImage: "https://www.99namesofallah.faith/unnamed.jpg",
    title: "99 Names of Allah - Asma Ul Husna Explained with Meanings",
    description: "Acme is a...",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
