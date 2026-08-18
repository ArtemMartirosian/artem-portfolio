import type { Metadata, Viewport } from "next";
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
  title: "Artem Martirosian — Full-Stack Developer",
  description:
    "Portfolio of Artem Martirosian, a full-stack developer building polished, scalable digital products.",
  keywords: [
    "Artem Martirosian",
    "Full-Stack Developer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Yerevan",
  ],
  authors: [{ name: "Artem Martirosian" }],
  creator: "Artem Martirosian",
  openGraph: {
    title: "Artem Martirosian — Frontend instinct. Full-stack reach.",
    description:
      "Selected work and experience across React, Next.js, Vue, Node.js and Laravel.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Artem Martirosian — Full-Stack Developer",
    description: "Frontend craft backed by full-stack engineering depth.",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0d0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
