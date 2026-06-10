"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { useEffect } from "react";
import type { ProjectEntry } from "@/types/site";

type ProjectModalProps = {
  project: ProjectEntry;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-0 sm:items-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-foreground/50"
        aria-label="Kapat"
        onClick={onClose}
      />

      <div className="relative z-10 flex max-h-[92dvh] w-full max-w-3xl flex-col overflow-hidden rounded-t-3xl border border-border bg-cream shadow-2xl sm:rounded-3xl">
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-8 sm:py-6">
          <h3
            id="project-modal-title"
            className="font-[family-name:var(--font-playfair)] text-2xl text-foreground sm:text-3xl"
          >
            {project.title}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-accent/40 hover:text-accent"
            aria-label="Kapat"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {project.description}
          </p>

          {project.images.length > 0 && (
            <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {project.images.map((image) => {
                const isDocument = image.galleryLayout === "document";

                return (
                  <li
                    key={`${project.id}-${image.src}`}
                    className={`overflow-hidden rounded-2xl border border-border bg-background ${
                      isDocument ? "w-fit sm:col-span-2 sm:justify-self-start" : ""
                    }`}
                  >
                    {isDocument ? (
                      <div className="relative bg-background-alt">
                        <Image
                          src={image.src}
                          alt={image.alt ?? project.title}
                          width={414}
                          height={441}
                          sizes="220px"
                          className="block h-auto w-[200px] sm:w-[220px]"
                        />
                      </div>
                    ) : (
                      <div className="relative aspect-[4/3] w-full bg-background-alt">
                        <Image
                          src={image.src}
                          alt={image.alt ?? project.title}
                          fill
                          unoptimized
                          sizes="(max-width: 640px) 100vw, 280px"
                          className={
                            image.src === project.cover &&
                            project.coverFit === "contain"
                              ? "object-contain object-center"
                              : "object-cover object-center"
                          }
                        />
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
