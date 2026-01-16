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
  metadataBase: new URL("https://coffee-personality-quiz-test-gfg5fxs76-pipenas-projects.vercel.app"),
  title: "Find Your Perfect Brew | Coffee Personality Quiz",
  description: "Answer 5 quick questions to discover your coffee personality and find your perfect brew!",
  openGraph: {
    title: "Find Your Perfect Brew",
    description: "What's your coffee personality? Take this fun quiz to find out!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Coffee Personality Quiz",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Find Your Perfect Brew",
    description: "What's your coffee personality? Take this fun quiz to find out!",
    images: ["/og-image.jpg"],
  },
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
