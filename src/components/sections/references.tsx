import Image from "next/image";
import { siteContent } from "@/content/site";
import {
  referenceLogoCellClass,
  referenceLogoClass,
  referenceLogoDimensions,
  referenceLogoUrl,
  referenceLogoZoomStyle,
} from "@/lib/reference-logo";
import { SectionHeading } from "@/components/ui/section-heading";

export function References() {
  const { references } = siteContent;
  const { entries } = references;

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
        <ul className="mt-12 grid grid-cols-2 border border-border bg-cream lg:grid-cols-4">
          {entries.map((entry) => {
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
      </div>
    </section>
  );
}
