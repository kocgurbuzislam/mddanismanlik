import type { MetadataRoute } from "next";
import { siteContent } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  const { brand, description } = siteContent;

  return {
    name: brand.name,
    short_name: "MD Danışmanlık",
    description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#b8860b",
    lang: "tr",
    dir: "ltr",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
