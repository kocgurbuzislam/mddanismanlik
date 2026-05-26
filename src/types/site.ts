export type ProcessIconId =
  | "sparkles"
  | "pen-tool"
  | "building-2"
  | "graduation-cap"
  | "settings"
  | "trending-up";

type ProcessStep = {
  id: string;
  title: string;
  description: string;
  icon: ProcessIconId;
};

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
    email: string;
    instagram: string;
    instagramHref: string;
    address: string;
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
  description: string;
};
