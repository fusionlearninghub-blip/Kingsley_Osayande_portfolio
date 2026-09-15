import type { Metadata } from "next";
import { Roboto_Slab, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const slab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-slab",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kingsley Osayande — Frontend Developer",
  description:
    "Frontend developer specializing in React.js — building responsive, interactive web applications with clean UI and solid state management.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${slab.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
