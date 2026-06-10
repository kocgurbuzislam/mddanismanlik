import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { LazyProjects } from "@/components/sections/lazy-projects";
import { References } from "@/components/sections/references";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Process />
      <LazyProjects />
      <References />
      <Cta />
    </main>
  );
}
