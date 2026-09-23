import type { Metadata } from "next";
import localFont from "next/font/local";
import { Experience } from "@/components/Experience";
import "./globals.css";

const geist = localFont({ src: "../../public/geist-latin.woff2", variable: "--font-geist", weight: "100 900", display: "swap" });

export const metadata: Metadata = {
  title: "Pinnacle Health Institute | A Higher Standard of Wellbeing",
  description: "A more personal perspective on your health. Explore Pinnacle Health Institute’s 12-week Baseline program, functional health systems, and concierge care with Dr. Charles Bareilles.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className={geist.variable}><body><a href="#main" className="skip-link">Skip to content</a><Experience>{children}</Experience></body></html>;
}
