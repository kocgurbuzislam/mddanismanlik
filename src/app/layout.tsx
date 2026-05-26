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

export const metadata: Metadata = {
  title: siteContent.seo.title,
  description: siteContent.seo.description,
  metadataBase: new URL("https://md-danismanlik.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: siteContent.seo.title,
    description: siteContent.seo.description,
    locale: "tr_TR",
    type: "website",
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
