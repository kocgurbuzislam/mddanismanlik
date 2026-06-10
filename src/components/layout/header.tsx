import { siteContent } from "@/content/site";
import { telHref } from "@/lib/contact-links";
import { HeaderClient } from "@/components/layout/header-client";

export function Header() {
  const { brand, contact } = siteContent;

  return (
    <HeaderClient
      brandName={brand.name}
      brandLogo={brand.logo}
      phone={contact.phone}
      phoneHref={telHref(contact.phone)}
    />
  );
}
