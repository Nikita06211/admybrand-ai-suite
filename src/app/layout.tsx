import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite – AI-Powered Marketing Platform",
  description:
    "Unlock growth with ADmyBRAND: an AI-powered SaaS platform for smarter marketing campaigns, analytics, and automation. Try for free today.",
  keywords: [
    "AI Marketing", "SaaS", "Content Automation", "CRM", "Analytics", "Campaigns", 
    "ADmyBRAND", "AI Suite", "Marketing Automation", "Growth Tools", "Business"
  ],
  authors: [{ name: "ADmyBRAND" }],
  applicationName: "ADmyBRAND AI Suite",
  creator: "ADmyBRAND",
  themeColor: "#161b2e"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />             {/* Add navbar here */}
        {children}
      </body>
    </html>
  );
}
