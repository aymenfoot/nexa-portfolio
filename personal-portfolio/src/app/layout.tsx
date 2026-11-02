import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aymen Jr. — AI Engineer",
  description:
    "Aymen Jr. — AI Engineer. Portfolio of intelligent AI systems for e-commerce: customer support, order intelligence, and sales assistance.",
  metadataBase: new URL("https://nexa.example"),
  openGraph: {
    title: "Aymen Jr. — AI Engineer",
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
