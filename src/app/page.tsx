import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { References } from "@/components/sections/references";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <Projects />
      <References />
      <Cta />
    </main>
  );
}
