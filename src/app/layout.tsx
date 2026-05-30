import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { siteContent } from "@/content/site";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const { brand, description } = siteContent;
const siteTitle = `${brand.name} | ${brand.tagline}`;

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: siteTitle,
  description,
  metadataBase: new URL("https://mehmetdoğan.com"),
  icons: {
    icon: "/icon.png?v=4",
    shortcut: "/icon.png?v=4",
    apple: "/icon.png?v=4",
  },
  openGraph: {
    title: siteTitle,
    description,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/logo.png",
        alt: brand.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description,
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${inter.variable} h-full scroll-smooth antialiased overflow-x-hidden`}
    >
      <body className="min-h-full bg-background text-foreground overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
