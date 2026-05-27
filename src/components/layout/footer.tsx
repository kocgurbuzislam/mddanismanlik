import { Mail, MapPin, Phone } from "lucide-react";
import { InstagramIcon } from "@/components/icons/instagram";
import { BrandLogo } from "@/components/brand-logo";
import { SectionLink } from "@/components/ui/section-link";
import { siteContent } from "@/content/site";
import { navLinks } from "@/config/navigation";
import { mailtoHref, mapsSearchHref, telHref } from "@/lib/contact-links";

export function Footer() {
  const { brand, contact } = siteContent;
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-cream pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <BrandLogo size="footer" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {brand.name} ile tanışın.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <ul className="flex flex-col gap-3 text-sm">
              <li>
                <a
                  href={telHref(contact.phone)}
                  className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-accent"
                >
                  <Phone className="h-4 w-4 text-accent" />
                  {contact.phone}
                </a>
              </li>
              {contact.secondaryPhone && (
                <li>
                  <a
                    href={telHref(contact.secondaryPhone)}
                    className="inline-flex items-center gap-2 font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4 text-accent" />
                    {contact.secondaryPhone}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={mailtoHref(contact.email)}
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
                >
                  <InstagramIcon className="text-accent" />
                  {contact.instagram}
                </a>
              </li>
              <li>
                <a
                  href={mapsSearchHref(contact.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
                >
                  <MapPin className="h-4 w-4 text-accent" />
                  {contact.address}
                </a>
              </li>
            </ul>
            <nav
              aria-label="Sayfa bölümleri"
              className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2"
            >
              {navLinks.map((link) => (
                <SectionLink
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-11 items-center rounded-lg px-2 text-sm font-medium text-muted transition-colors hover:bg-accent-soft/40 hover:text-foreground active:bg-accent-soft/60"
                >
                  {link.label}
                </SectionLink>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:justify-between">
          <p>
            © {year} {brand.name}. Tüm hakları saklıdır.
          </p>
          <p>{brand.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
