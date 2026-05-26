type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

/** Logo grid'de gösterilen referans kaydı */
export type ReferenceEntry = {
  id: string;
  name: string;
  logo: string;
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
    subtitle: string;
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
    entries: ReferenceEntry[];
  };
  cta: {
    headline: string;
    description: string;
  };
  seo: {
    description: string;
  };
};
