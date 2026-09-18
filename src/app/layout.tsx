import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "OceanBlu — Sovereign Enterprise AI Infrastructure | oceanblu.digital",
  description: "Autonomous on-premise AI appliances and 21-sector vertical operating suites. Plug, train, and automate 70–80% of enterprise workflows with zero cloud data egress.",
  keywords: [
    "Enterprise AI",
    "Blu Box",
    "Sovereign AI",
    "On-Premise AI Appliance",
    "Workflow Automation",
    "NAAAS",
    "Real Estate OS",
    "OceanBlu Digital",
    "Air-Gapped AI",
  ],
  authors: [{ name: "OceanBlu Ltd." }],
  metadataBase: new URL("https://oceanblu.digital"),
  openGraph: {
    title: "OceanBlu — Autonomous Enterprise AI Infrastructure",
    description: "Transform traditional operations with an on-premise AI appliance. Plug into your local network, train on private data, automate 80% of workflows.",
    url: "https://oceanblu.digital",
    siteName: "OceanBlu Ltd.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OceanBlu — Sovereign Enterprise AI Infrastructure",
    description: "Autonomous on-premise AI appliances for large enterprise operations.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[#05070E] text-[#F8FAFC] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}