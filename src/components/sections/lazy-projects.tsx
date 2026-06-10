"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  { ssr: false },
);

export function LazyProjects() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} id="projeler" className="scroll-mt-24">
      {visible ? (
        <Projects />
      ) : (
        <section
          className="bg-background pt-10 pb-14 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-16"
          aria-hidden
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto h-28 max-w-2xl animate-pulse rounded-2xl bg-background-alt" />
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-border bg-cream"
                >
                  <div className="aspect-[4/3] animate-pulse bg-background-alt" />
                  <div className="space-y-3 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="h-5 w-2/3 animate-pulse rounded bg-background-alt" />
                    <div className="h-4 w-1/3 animate-pulse rounded bg-background-alt" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
