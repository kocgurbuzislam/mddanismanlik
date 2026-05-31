import type { ProjectEntry } from "@/types/site";

const zihniPubCover = "/projects/zihni-pub/pub-cover.webp";
const antakyaIsiCover = "/projects/antakya-isi/cover.webp";

export const projectEntries: ProjectEntry[] = [
  {
    id: "zihni-pub",
    title: "Zihni Pub",
    description:
      "Zihni Pub için konsept geliştirme, menü kurgusu ve operasyonel altyapı danışmanlığı sürecinde mekânın kimliğini güçlendiren bütüncül bir yaklaşım uyguladık. Bar kültürü ile gastronomi deneyimini aynı çatı altında buluşturan tasarım ve işletme modeli, misafir memnuniyetini artıracak şekilde planlandı. Ekip eğitimleri ve servis standartlarıyla sürdürülebilir bir işletme yapısı hedeflendi.",
    cover: zihniPubCover,
    coverAlt: "Zihni Pub ekip ve şef Olcay İnel",
    images: [
      {
        src: zihniPubCover,
        alt: "Zihni Pub ekip ve şef Olcay İnel",
      },
      {
        src: "/projects/zihni-pub/team.webp",
        alt: "Zihni Pub ekip fotoğrafı",
      },
      {
        src: "/projects/zihni-pub/interior.webp",
        alt: "Zihni Pub bar ve kokteyl sunumu",
      },
      {
        src: "/projects/zihni-pub/seafood.webp",
        alt: "Zihni Pub deniz ürünleri sunumu",
      },
    ],
  },
  {
    id: "antakya-isi",
    title: "Antakya İşi",
    description:
      "Antakya İşi Sokak Lezzetleri için Hatay mutfağının özgün lezzetlerini İstanbul’a taşıyan konsept ve operasyon danışmanlığı yürütüldü. Beyoğlu’nun tarihi dokusunda, Antakya’nın sokak lezzetleri ve sıcak atmosferi bir araya getirildi. Menü kurgusu, mekân kimliği ve misafir deneyimi; geleneksel tatları çağdaş bir sunumla buluşturacak şekilde planlandı.",
    cover: antakyaIsiCover,
    coverAlt: "Antakya İşi sokak lezzetleri",
    images: [
      {
        src: antakyaIsiCover,
        alt: "Antakya İşi sofra ve lezzetler",
      },
      {
        src: "/projects/antakya-isi/entrance.webp",
        alt: "Antakya İşi mekân girişi",
      },
      {
        src: "/projects/antakya-isi/press-gazete.webp",
        alt: "Antakya İşi basın yazısı",
        galleryLayout: "document",
      },
    ],
  },
];
