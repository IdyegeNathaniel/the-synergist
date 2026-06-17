import type { Metadata } from "next";
import { Inter, Syne, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/header";
import Footer from "@/components/Layouts/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const montSerrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  //metadataBase: new URL("https://"),

  title: "The Synergist",
  description: "Home of The Synergist and Books Catalogues",
  keywords: [
    "Business Psychologist",
    "The Synergist",
    "Synergy Tribe",
    "Immanuel Zever",
    "Author",
    "Business Coach",
    "mentor",
    "Reintroduction to money",
  ],
  authors: [{ name: "Immanuel Zever" }],
  creator: "Nathaniel Idyege",
  publisher: "Nathaniel Idyege",

  openGraph: {
    type: "website",
    locale: "en_US",
    //url: 'https://',
    title: "Immanuel Zever - Business Psychologist",
    description:
      "An Entrepreneur, Business Psychologist, Author and Co-Founder of Synergy Academy.",
    siteName: "The Synergist Page",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Synergist - Business Psychologist",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} ${montSerrat.variable} h-full antialiased`}
    >
      <Header />
      <body className="min-h-full flex flex-col">{children}</body>
      <Footer />
    </html>
  );
}
