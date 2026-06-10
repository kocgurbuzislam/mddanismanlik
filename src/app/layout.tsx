import { Playfair_Display, Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { buildJsonLd, createRootMetadata } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  display: "swap",
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = createRootMetadata();

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
        <JsonLd data={buildJsonLd()} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
