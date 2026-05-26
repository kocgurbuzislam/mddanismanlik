export type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

/** Logo grid'de gösterilen veya eklenecek referans kaydı */
export type ReferenceEntry = {
  id: string;
  name: string;
  location?: string;
  group?: string;
  note?: string;
  logo?: string;
  logoAlt?: string;
  logoScale?: number;
  logoWide?: boolean;
};

export type SiteContent = {
  brand: {
    name: string;
    tagline: string;
    foundedYear: number;
    slogan: string;
    logo: string;
    logoAlt: string;
  };
  contact: {
    name: string;
    phone: string;
    phoneHref: string;
    whatsappHref: string;
    email: string;
    emailHref: string;
    instagram: string;
    instagramHref: string;
    address: string;
    mapHref: string;
    mapEmbedSrc: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  process: {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  };
  references: {
    title: string;
    subtitle: string;
    career: { entries: ReferenceEntry[] };
    consultancy: { entries: ReferenceEntry[] };
  };
  cta: {
    headline: string;
    description: string;
    closing: string;
  };
  seo: {
    title: string;
    description: string;
  };
};
