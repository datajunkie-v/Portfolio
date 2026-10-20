import type { Metadata } from "next";
import { Geist, Geist_Mono, Share_Tech_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Vishal Panuganti | AI / ML Engineer",
  description:
    "Vishal Panuganti is an AI / ML Engineer working across machine learning, computer vision, data engineering, cloud deployment, and business intelligence.",
  openGraph: {
    title: "Vishal Panuganti | AI / ML Engineer",
    description:
      "AI / ML Engineer working across machine learning, computer vision, data engineering, cloud deployment, and business intelligence.",
    type: "website",
    locale: "en_US",
    siteName: "Vishal Panuganti",
  },
  twitter: {
    card: "summary",
    title: "Vishal Panuganti | AI / ML Engineer",
    description:
      "AI / ML Engineer working across machine learning, computer vision, data engineering, cloud deployment, and business intelligence.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${shareTechMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
