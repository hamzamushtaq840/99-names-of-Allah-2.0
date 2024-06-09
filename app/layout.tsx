import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./_components/ui/Navbar";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "99 Names of Allah",
  description: `The 99 Names of Allah (SWT) - Al-Asma-ul-Husna. 
    As Muslims, we believe in Allah (SWT) in accordance with His
    beautiful names & attributes.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="google-site-verification"
          content="sgu7AYl82pjqRA5kxBQyfIoGY_M7uPpMetTozLiySP4"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
      <Analytics />
    </html>
  );
}
