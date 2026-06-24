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
  title: "Pham Manh Tuong | Fullstack Developer",
  description:
    "Portfolio website of Pham Manh Tuong, a Fullstack Developer Fresher specializing in React, Next.js, Node.js, and databases.",
  keywords: [
    "Pham Manh Tuong",
    "Fullstack Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
  ],
  authors: [{ name: "Pham Manh Tuong" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased selection:bg-indigo-500/30 selection:text-indigo-200">
        {children}
      </body>
    </html>
  );
}
