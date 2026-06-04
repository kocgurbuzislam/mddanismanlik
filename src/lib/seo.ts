import type { Metadata } from "next";
import { absoluteUrl, getSiteUrl } from "@/config/site-url";
import { siteContent } from "@/content/site";

const { brand, contact, description, seo } = siteContent;

export const defaultTitle = `${brand.name} | ${brand.tagline}`;

export function createRootMetadata(): Metadata {
  const siteUrl = getSiteUrl();

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${brand.name}`,
    },
    description,
    keywords: seo.keywords,
    authors: [{ name: contact.name, url: siteUrl }],
    creator: brand.name,
    publisher: brand.name,
    category: "business",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: {
        "tr-TR": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: "tr_TR",
      url: siteUrl,
      siteName: brand.name,
      title: defaultTitle,
      description,
      images: [
        {
          url: brand.logo,
          width: 1200,
          height: 630,
          alt: seo.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description,
      images: [brand.logo],
    },
    icons: {
      icon: "/icon.png?v=4",
      shortcut: "/icon.png?v=4",
      apple: "/icon.png?v=4",
    },
    other: {
      "geo.region": "TR-34",
      "geo.placename": "İstanbul",
    },
  };
}

export function createPageMetadata(options?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const path = options?.path ?? "/";
  const title = options?.title ?? defaultTitle;
  const pageDescription = options?.description ?? description;

  return {
    title,
    description: pageDescription,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description: pageDescription,
      url: absoluteUrl(path),
    },
    twitter: {
      title,
      description: pageDescription,
    },
  };
}

export function buildJsonLd() {
  const siteUrl = getSiteUrl();
  const tel = contact.phone.replace(/\s/g, "");

  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: brand.name,
    alternateName: "MD Danışmanlık Mehmet Doğan",
    description,
    url: siteUrl,
    logo: absoluteUrl(brand.logo),
    image: absoluteUrl(brand.logo),
    telephone: tel,
    email: contact.email,
    foundingDate: String(brand.foundedYear),
    founder: {
      "@type": "Person",
      name: contact.name,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: seo.streetAddress,
      addressLocality: seo.addressLocality,
      addressRegion: seo.addressRegion,
      addressCountry: "TR",
    },
    areaServed: [
      { "@type": "Country", name: "Türkiye" },
      { "@type": "City", name: "İstanbul" },
    ],
    knowsAbout: seo.serviceTopics,
    sameAs: [contact.instagramHref],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Danışmanlık hizmetleri",
      itemListElement: seo.services.map((name, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name,
          provider: { "@id": `${siteUrl}/#organization` },
        },
      })),
    },
  };

  const webSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: brand.name,
    description,
    url: siteUrl,
    inLanguage: "tr-TR",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: defaultTitle,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    inLanguage: "tr-TR",
  };

  return [organization, webSite, webPage];
}
