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
  metadataBase: new URL("https://immanuelzever.vercel.app/"),
  title: {
  default: "The Synergist",
  template: "%s | The Synergist",
},
  description: "Entrepreneur, Business Psychologist, Author, and Speaker empowering entrepreneurs to build sustainable, purpose-driven businesses through psychology, strategy, and biblical principles.",
  keywords: [
    "Business Psychologist",
    "The Synergist",
    "Synergy Tribe",
    "Immanuel Zever",
    "Author",
    "Business Coach",
    "mentor",
    "Reintroduction to money",
    "Financial Growth",
    "Christian Entrepreneur",
    "Public Speaker",
    "Personal Development",
  ],
  authors: [{ name: "Immanuel Zever" }],
  creator: "Immanuel Zever",
  publisher: "Immanuel Zever",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://immanuelzever.vercel.app/',
    title: "Immanuel Zever - Business Psychologist",
    description:
     "Helping entrepreneurs build profitable, purpose-driven businesses through psychology, strategy, and biblical principles.",
    siteName: "The Synergist",
    images: [
      {
        url: "/Images/og-image.jpg",
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
      <body className="min-h-full flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      </body>
    </html>
  );
}
