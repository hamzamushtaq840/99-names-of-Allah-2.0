// Core
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Fonts
import { poppins } from "../components/ui/fonts";

// Style
import "./global.css";

export const metadata: Metadata = {
  title: "99 Names of Allah - Asma Ul Husna Explained with Meanings",
  description: `99 Names of Allah (SWT) with English meanings, descriptions, along with the Arabic pronunciation for each name.`,
  metadataBase: new URL("https://99namesofallah.faith"),
  openGraph: {
    images: [
      {
        url: "/og-ss.png",
      },
    ],
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
