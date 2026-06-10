import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { References } from "@/components/sections/references";
import { createPageMetadata } from "@/lib/seo";

const Projects = dynamic(
  () =>
    import("@/components/sections/projects").then((mod) => ({
      default: mod.Projects,
    })),
);

export const metadata: Metadata = createPageMetadata({ path: "/" });

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Process />
      <Projects />
      <References />
      <Cta />
    </main>
  );
}
