/**
 * @file Root layout — wraps every page with the Inter font and base styles.
 * Dark mode is toggled by adding/removing the "dark" class on <html>.
 */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

/** Load Inter font with the weights used across the portfolio */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

/** Site-wide metadata for SEO and browser tab title */
export const metadata: Metadata = {
  title: "Héctor Güiza — Full Stack Developer",
  description:
    "Portfolio of Héctor Andrés Güiza Ortegón — Full Stack Developer, Data Engineer, and Systems Engineering student.",
};

/**
 * Root layout component.
 * Applies the Inter CSS variable, full-height flex container, and antialiasing.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
