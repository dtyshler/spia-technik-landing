import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  icons: { icon: "/logo-dark.png" },
  title: "SPIA Technik — Advanced Aviation Engineering",
  description:
    "SPIA Technik delivers advanced engineering solutions for commercial aviation and VIP aircraft interiors. Decades of experience with Airbus and Boeing platforms.",
  keywords: [
    "aviation engineering",
    "aircraft interiors",
    "VIP aircraft",
    "stress engineering",
    "aircraft modification",
    "SPIA Technik",
  ],
  openGraph: {
    title: "SPIA Technik — Advanced Aviation Engineering",
    description:
      "Advanced engineering solutions for commercial aviation and VIP aircraft interiors.",
    type: "website",
    url: "https://spiatechnik.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
