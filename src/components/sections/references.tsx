import Image from "next/image";
import type { ReferenceEntry } from "@/types/site";
import { siteContent } from "@/content/site";
import { referenceLogoUrl } from "@/lib/reference-logo.server";
import {
  referenceLogoCellClass,
  referenceLogoClass,
  referenceLogoDimensions,
  referenceLogoZoomStyle,
} from "@/lib/reference-logo-display";
import { SectionHeading } from "@/components/ui/section-heading";

function LogoGrid({ entries }: { entries: ReferenceEntry[] }) {
  const withLogo = entries.filter((entry): entry is ReferenceEntry & { logo: string } =>
    Boolean(entry.logo),
  );

  if (withLogo.length === 0) {
    return (
      <p className="border border-dashed border-border bg-cream px-6 py-10 text-center text-sm text-muted">
        Logolar eklendikçe burada görünecek.
      </p>
    );
  }

  return (
    <ul className="grid grid-cols-2 border border-border bg-cream lg:grid-cols-4">
      {withLogo.map((entry) => {
        const scale = entry.logoScale ?? 1;
        const { width, height } = referenceLogoDimensions(scale);

        return (
          <li
            key={entry.id}
            className={referenceLogoCellClass}
            title={entry.name}
          >
            <div
              className="flex h-full w-full items-center justify-center"
              style={referenceLogoZoomStyle(scale, entry.logoWide)}
            >
              <Image
                src={referenceLogoUrl(entry.logo)}
                alt={entry.logoAlt ?? entry.name}
                width={width}
                height={height}
                unoptimized
                className={referenceLogoClass(scale, entry.logoWide)}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export function References() {
  const { references } = siteContent;
  const entries = [
    ...references.career.entries,
    ...references.consultancy.entries,
  ];

  return (
    <section id="referanslar" className="scroll-mt-24 bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Referanslar"
          title={references.title}
          subtitle={references.subtitle}
          align="center"
          className="mx-auto"
        />
        <div className="mt-12">
          <LogoGrid entries={entries} />
        </div>
      </div>
    </section>
  );
}
