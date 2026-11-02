import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aymen Jr. — AI Engineer & NEXA",
  description:
    "Aymen Jr. — AI Engineer. NEXA builds intelligent AI systems for e-commerce, including the Agentic Commerce System (ACS).",
  metadataBase: new URL("https://nexa.example"),
  openGraph: {
    title: "Aymen Jr. — AI Engineer & NEXA",
    description:
      "Premium AI engineering for e-commerce: support, order intelligence, sales assistance, and ACS.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-[var(--bg)] text-[var(--text)] antialiased">
        {children}
      </body>
    </html>
  );
}
