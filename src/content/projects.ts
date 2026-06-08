import type { ProjectEntry } from "@/types/site";

const zihniPubCover = "/projects/zihni-pub/pub-cover.webp";
const antakyaIsiCover = "/projects/antakya-isi/cover.webp";
const dubleMezeCover = "/projects/duble-meze-bar/cover.webp";
const nusrEtCover = "/projects/nusr-et/cover-card.webp";
const boroviHotelCover = "/projects/borovi-hotel/cover.webp";
const theCrownCover = "/projects/the-crown/cover.webp";
const qoalaBeachCover = "/projects/qoala-beach/cover.webp";

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
  {
    id: "duble-meze-bar",
    title: "Duble Meze Bar",
    description:
      "Duble Meze Bar için meze kültürünü ön plana alan konsept, menü yapısı ve işletme danışmanlığı sürecinde mekânın samimi atmosferi güçlendirildi. Geleneksel sofra deneyimi ile çağdaş bar kültürü bir arada kurgulandı; servis akışı ve ürün sunumu misafir memnuniyetini artıracak şekilde planlandı. Ekip koordinasyonu ve operasyonel standartlarla sürdürülebilir bir işletme modeli hedeflendi.",
    cover: dubleMezeCover,
    coverAlt: "Duble Meze Bar teras ve sofra",
    images: [
      {
        src: dubleMezeCover,
        alt: "Duble Meze Bar teras ve sofra",
      },
      {
        src: "/projects/duble-meze-bar/dining.webp",
        alt: "Duble Meze Bar meze sofrası",
      },
      {
        src: "/projects/duble-meze-bar/team.webp",
        alt: "Duble Meze Bar ekip",
      },
    ],
  },
  {
    id: "nusr-et",
    title: "Nusr-Et",
    description:
      "Nusr-Et Steakhouse için premium steakhouse konsepti, servis standartları ve operasyon danışmanlığı sürecinde markanın ikonik misafir deneyimi desteklendi. Mekân kimliği, ekip yapısı ve sunum kalitesi uluslararası ölçekte tutarlılık hedefiyle kurgulandı. İşletme modeli ve süreç yönetimiyle sürdürülebilir başarıya odaklanıldı.",
    cover: nusrEtCover,
    coverAlt: "Nusr-Et Steakhouse",
    images: [
      {
        src: nusrEtCover,
        alt: "Nusr-Et Steakhouse",
      },
      {
        src: "/projects/nusr-et/team.webp",
        alt: "Nusr-Et ekip",
      },
      {
        src: "/projects/nusr-et/staff.webp",
        alt: "Nusr-Et karşılama ekibi",
      },
    ],
  },
  {
    id: "borovi-hotel",
    title: "Borovi Hotel",
    description:
      "Borovi Forest Resort & Spa için açılış süreci, konaklama konsepti ve işletme danışmanlığı kapsamında markanın doğa ile iç içe konumlandırması güçlendirildi. Grand opening organizasyonu, operasyonel yapı ve misafir deneyimi; butik resort kimliğini yansıtacak şekilde planlandı. Sürdürülebilir işletme modeli ve ekip standartlarıyla uzun vadeli başarı hedeflendi.",
    cover: boroviHotelCover,
    coverAlt: "Borovi Forest Resort & Spa",
    images: [
      {
        src: boroviHotelCover,
        alt: "Borovi Hotel ve göl manzarası",
      },
      {
        src: "/projects/borovi-hotel/opening.webp",
        alt: "Borovi Grand Opening",
      },
      {
        src: "/projects/borovi-hotel/lobby.webp",
        alt: "Borovi Hotel lobi",
      },
      {
        src: "/projects/borovi-hotel/resort.webp",
        alt: "Borovi Forest Resort",
      },
    ],
  },
  {
    id: "the-crown",
    title: "The Crown",
    description:
      "The Crown Istanbul fine dining için konsept, menü yapısı ve işletme danışmanlığı sürecinde mekânın seçkin atmosferi güçlendirildi. İstanbul manzaralı bar ve salon alanları, kristal detaylar ve fine dining kimliği bir arada kurgulandı. Servis standartları ve operasyonel yapıyla sürdürülebilir bir restoran deneyimi hedeflendi.",
    cover: theCrownCover,
    coverAlt: "The Crown Istanbul fine dining",
    images: [
      {
        src: theCrownCover,
        alt: "The Crown bar ve İstanbul manzarası",
      },
      {
        src: "/projects/the-crown/lounge.webp",
        alt: "The Crown kristal salon",
      },
      {
        src: "/projects/the-crown/menu.webp",
        alt: "The Crown menü",
      },
      {
        src: "/projects/the-crown/dining.webp",
        alt: "The Crown restoran salonu",
      },
    ],
  },
  {
    id: "qoala-beach",
    title: "Qoala Beach",
    description:
      "Qoala Beach için beach club konsepti, F&B operasyonu ve misafir deneyimi danışmanlığı sürecinde mekânın yaz sezonu kimliği güçlendirildi. Havuz, şezlong ve bar alanları; premium plaj kulübü atmosferini yansıtacak şekilde kurgulandı. Menü yapısı, servis akışı ve ekip standartlarıyla sürdürülebilir bir işletme modeli hedeflendi.",
    cover: qoalaBeachCover,
    coverAlt: "Qoala Beach Club",
    images: [
      {
        src: qoalaBeachCover,
        alt: "Qoala Beach şarap ve plaj atmosferi",
      },
      {
        src: "/projects/qoala-beach/wine.webp",
        alt: "Qoala Beach bar ve şarap sunumu",
      },
    ],
  },
];
