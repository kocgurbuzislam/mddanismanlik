import type { ReactNode } from "react";
import {
  ChevronRight,
  Mail,
  MapPin,
  Navigation,
  Phone,
  Star,
} from "lucide-react";

import { InstagramIcon } from "@/components/icons/instagram";
import { WhatsAppIcon } from "@/components/icons/whatsapp";

import { siteContent } from "@/content/site";
import {
  mailtoHref,
  mapsEmbedSrc,
  mapsSearchHref,
  telHref,
  whatsappHref,
} from "@/lib/contact-links";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";

const contactRowClass =
  "flex w-full min-w-0 items-center gap-4 rounded-2xl border border-border/70 bg-white/50 px-4 py-4 text-left transition-all duration-300 hover:border-accent/30 hover:bg-white";

type ContactRowProps = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  action?: ReactNode;
};

function ContactRow({
  icon,
  label,
  value,
  href,
  external,
  action,
}: ContactRowProps) {
  const iconEl = (
    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
      {icon}
    </span>
  );

  const labelEl = (
    <span className="block text-xs font-medium text-muted">{label}</span>
  );

  if (action) {
    return (
      <div className={contactRowClass}>
        {iconEl}
        <span className="min-w-0 flex-1">
          {labelEl}
          <a
            href={href}
            className="block truncate text-sm font-semibold text-foreground transition-colors hover:text-accent"
          >
            {value}
          </a>
        </span>
        {action}
      </div>
    );
  }

  return (
    <a
      href={href}
      className={contactRowClass}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
    >
      {iconEl}
      <span className="min-w-0 flex-1">
        {labelEl}
        <span className="block truncate text-sm font-semibold text-foreground">
          {value}
        </span>
      </span>
      <ChevronRight
        className="h-5 w-5 shrink-0 text-muted/60"
        strokeWidth={1.75}
        aria-hidden
      />
    </a>
  );
}

const whatsAppButtonClass =
  "hidden shrink-0 items-center gap-2 rounded-xl border border-accent/25 px-4 py-2 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-white sm:inline-flex";

export function Cta() {
  const { cta, contact, brand } = siteContent;

  return (
    <section id="iletisim" className="scroll-mt-24 bg-cream pt-10 pb-20 sm:pt-12 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="İletişim"
          labelDashes
          title={cta.headline}
          subtitle={cta.description}
          align="center"
          className="mx-auto max-w-3xl"
        />

        <div className="mt-14 w-full min-w-0 overflow-hidden rounded-[2rem] border border-border/80 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.06)]">
          <div className="grid w-full min-w-0 grid-cols-1 overflow-hidden lg:grid-cols-[0.92fr_1.08fr]">
            <div className="w-full min-w-0 border-b border-border/70 p-6 sm:p-10 lg:border-b-0 lg:border-r">
              <div className="inline-flex items-center gap-2 text-accent">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-xs font-bold uppercase tracking-[0.22em]">
                  {brand.name}
                </span>
              </div>

              <p className="mt-2 pl-6 text-sm font-medium text-foreground">
                {contact.name}
              </p>

              <div className="mt-8 space-y-3">
                <ContactRow
                  icon={<Phone className="h-4 w-4" />}
                  label="Telefon"
                  value={contact.phone}
                  href={telHref(contact.phone)}
                  action={
                    <a
                      href={whatsappHref(contact.phone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={whatsAppButtonClass}
                    >
                      <WhatsAppIcon />
                      WhatsApp&apos;tan Yaz
                    </a>
                  }
                />

                {contact.secondaryPhone && (
                  <ContactRow
                    icon={<Phone className="h-4 w-4" />}
                    label="Alternatif Telefon"
                    value={contact.secondaryPhone}
                    href={telHref(contact.secondaryPhone)}
                    action={
                      <a
                        href={whatsappHref(contact.secondaryPhone)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={whatsAppButtonClass}
                      >
                        <WhatsAppIcon />
                        WhatsApp&apos;tan Yaz
                      </a>
                    }
                  />
                )}

                <ContactRow
                  icon={<Mail className="h-4 w-4" />}
                  label="E-posta"
                  value={contact.email}
                  href={mailtoHref(contact.email)}
                />

                <ContactRow
                  icon={<InstagramIcon />}
                  label="Instagram"
                  value={contact.instagram}
                  href={contact.instagramHref}
                  external
                />

                <ContactRow
                  icon={<MapPin className="h-4 w-4" />}
                  label="Adres"
                  value={contact.address}
                  href={mapsSearchHref(contact.address)}
                  external
                />
              </div>

              <div className="mt-8 grid w-full min-w-0 gap-3 sm:grid-cols-2">
                <Button href={telHref(contact.phone)} variant="primary">
                  <Phone className="h-4 w-4" />
                  Hemen Arayın
                </Button>

                <Button
                  href={mailtoHref(contact.email)}
                  variant="outline"
                  className="border-accent/30 bg-transparent text-accent hover:bg-accent/5 hover:text-accent"
                >
                  <Mail className="h-4 w-4" />
                  E-posta Gönder
                </Button>
              </div>
            </div>

            <div className="w-full min-w-0 p-6 sm:p-8 lg:p-10">
              <div className="w-full min-w-0 overflow-hidden rounded-[1.75rem] border border-border/80 bg-white shadow-sm">
                <div className="h-[420px] w-full min-w-0 overflow-hidden lg:h-[520px]">
                  <iframe
                    title={`${brand.name} konum haritası`}
                    src={mapsEmbedSrc(contact.address)}
                    className="h-full w-full max-w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="flex w-full min-w-0 flex-col gap-4 border-t border-border/70 bg-white/90 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {contact.address}
                    </p>
                    <p className="text-xs text-muted">
                      Haritada konumu görüntüleyin.
                    </p>
                  </div>

                  <a
                    href={mapsSearchHref(contact.address)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-accent/25 px-4 py-2.5 text-sm font-semibold text-accent transition-all hover:bg-accent hover:text-white"
                  >
                    <Navigation className="h-4 w-4" />
                    Haritada Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
