import Image from "next/image";
import { siteContent } from "@/content/site";
import {
  referenceLogoCellClass,
  referenceLogoClass,
  referenceLogoDimensions,
  referenceLogoZoomStyle,
} from "@/lib/reference-logo-styles";
import { SectionHeading } from "@/components/ui/section-heading";

export function References() {
  const { references } = siteContent;

  return (
    <section id="referanslar" className="scroll-mt-24 bg-cream pt-10 pb-14 sm:pt-12 lg:pt-16 lg:pb-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          label="Referanslar"
          title={references.title}
          subtitle={references.subtitle}
          align="center"
          className="mx-auto"
        />
        <ul className="mt-12 grid grid-cols-2 border border-border bg-cream lg:grid-cols-4">
          {references.entries.map((entry) => {
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
                    src={entry.logo}
                    alt={entry.logoAlt ?? entry.name}
                    width={width}
                    height={height}
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className={`${referenceLogoClass(scale, entry.logoWide)} ${entry.id === "duble-meze" ? "rounded-full" : ""}`}
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
