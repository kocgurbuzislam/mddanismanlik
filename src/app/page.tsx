import { About } from "@/components/sections/about";
import { Cta } from "@/components/sections/cta";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { References } from "@/components/sections/references";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Process />
      <References />
      <Cta />
    </main>
  );
}
