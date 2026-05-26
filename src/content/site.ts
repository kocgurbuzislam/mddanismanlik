import type { SiteContent } from "@/types/site";

const phone = "+90 535 259 46 56";
const email = "info@md-danismanlik.com";
const address = "İstanbul, Türkiye";
const foundedYear = 1997;

export const siteContent: SiteContent = {
  brand: {
    name: "MD Danışmanlık",
    tagline: "Gıda & İçecek Sektörü Danışmanlığı",
    foundedYear,
    slogan:
      "Her işletme bir yıldız olabilir, biz onun gökyüzünü tasarlarız.",
    logo: "/logo.png",
  },
  contact: {
    name: "Mehmet Doğan",
    phone,
    phoneHref: `tel:${phone.replace(/\s/g, "")}`,
    whatsappHref: `https://wa.me/${phone.replace(/\D/g, "")}`,
    email,
    emailHref: `mailto:${email}`,
    instagram: "@md_danismanlik",
    instagramHref: "https://www.instagram.com/md_danismanlik/",
    address,
    mapHref: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
    mapEmbedSrc: `https://www.google.com/maps?q=${encodeURIComponent(address)}&hl=tr&z=11&output=embed`,
  },
  about: {
    title: "Hakkımızda",
    subtitle:
      "Türkiye'nin gıda ve içecek sektöründe güvenilir danışmanlık ortağınız.",
    paragraphs: [
      `${foundedYear}'den bu yana Türkiye'nin gıda ve içecek sektöründe öncü danışmanlık firmalarından biri olarak hizmet veriyoruz. Yılların deneyimiyle yüzlerce projeyi hayata geçirdik.`,
      "Restoran, kafe, otel, pastane, catering firmaları, gıda üretim tesisleri ve çok şubeli işletmeler için uçtan uca danışmanlık sunuyoruz. Her projeyi yalnızca bir iş değil; yaşayan bir mekân, bir lezzet yolculuğu ve uzun vadeli bir başarı hikâyesi olarak görüyoruz.",
      "Amacımız hayallerinizi gerçeğe dönüştürmek ve sektörde kalıcı, sürdürülebilir ve kârlı işletmeler kurmanıza yardımcı olmaktır.",
    ],
  },
  process: {
    title: "Bizimle Çalıştığınızda Ne Elde Edersiniz?",
    subtitle: "Hayalden sürdürülebilir başarıya altı adımlı metodolojimiz",
    steps: [
      {
        id: "hayal",
        title: "Hayal Etmek",
        description:
          "Fikirlerinizi dinler, sektör trendleri ve tüketici beklentileriyle harmanlayarak güçlü bir konsept oluştururuz.",
        icon: "sparkles",
      },
      {
        id: "tasarim",
        title: "Tasarlamak",
        description:
          "Mekân tasarımı, menü mühendisliği, marka kimliği ve operasyonel akışların profesyonel planlamasını yaparız.",
        icon: "pen-tool",
      },
      {
        id: "kurulum",
        title: "Kurmak",
        description:
          "Sıfırdan işletme kurulumunda teknik, yasal ve operasyonel süreçlerin tamamını yönetiriz.",
        icon: "building-2",
      },
      {
        id: "egitim",
        title: "Eğitmek",
        description:
          "Personelden yönetime kadar herkese sürdürülebilir başarı için gerekli bilgi ve becerileri kazandırırız.",
        icon: "graduation-cap",
      },
      {
        id: "isletme",
        title: "İşletmek",
        description:
          "Günlük operasyonları verimli, kârlı ve sistematik hale getiririz.",
        icon: "settings",
      },
      {
        id: "yasatma",
        title: "Yaşatmak",
        description:
          "Uzun vadeli rekabet gücünü korumak ve sürekli gelişim için stratejik danışmanlık sunarız.",
        icon: "trending-up",
      },
    ],
  },
  references: {
    title: "Referanslarımız",
    subtitle: `${foundedYear}'den bu yana Türkiye ve yurtdışında önde gelen otel, restoran ve işletmelerde edinilen deneyim.`,
    entries: [
      {
        id: "hillside",
        name: "Hillside Su Hotel",
        logo: "/references/hotel-su.png",
        logoAlt: "Hotel SU",
        logoWide: true,
        logoScale: 1.4,
      },
      {
        id: "adam-eve",
        name: "Adam & Eve Hotel",
        logo: "/references/adam-eve.png",
        logoScale: 1.25,
      },
      {
        id: "ritz-carlton",
        name: "The Ritz-Carlton Hotel",
        logo: "/references/ritz-carlton.png",
        logoAlt: "The Ritz-Carlton",
      },
      {
        id: "w-hotel",
        name: "W Hotel",
        logo: "/references/w-hotel.png",
        logoAlt: "W Istanbul",
        logoScale: 1.3,
      },
      {
        id: "rixos",
        name: "Rixos Pera ve Elysium Otelleri",
        logo: "/references/rixos.png",
        logoAlt: "Rixos Hotels",
        logoWide: true,
        logoScale: 1.4,
      },
      {
        id: "duble-meze",
        name: "Duble Meze Bar Pera, Celal",
        logo: "/references/duble-meze.png",
        logoAlt: "Duble Meze Pera",
        logoWide: true,
        logoScale: 1.4,
      },
      {
        id: "cevahir",
        name: "Biz Cevahir Hotel",
        logo: "/references/cevahir.png",
        logoAlt: "Biz Hotel",
        logoWide: true,
        logoScale: 1.5,
      },
      {
        id: "nusret",
        name: "Nusr-Et Steakhouse",
        logo: "/references/nusret.png",
        logoScale: 1.35,
      },
      {
        id: "elexus",
        name: "Elexus Hotel",
        logo: "/references/elexus.png",
        logoAlt: "Elexus Hotel Resort Spa Girne",
        logoScale: 1.3,
      },
      {
        id: "km-hilton",
        name: "Kahramanmaraş Hilton Hotel",
        logo: "/references/kahramanmaras-hilton.png",
        logoAlt: "Hampton by Hilton Kahramanmaraş",
        logoScale: 1.25,
      },
      {
        id: "arts-hotel",
        name: "Arts Hotel",
        logo: "/references/arts-hotel.png",
        logoWide: true,
        logoScale: 1.45,
      },
      {
        id: "mavi-beyaz",
        name: "Mavi Beyaz Restaurant",
        logo: "/references/mavi-beyaz.png",
        logoWide: true,
        logoScale: 1.4,
      },
      {
        id: "cephanelik",
        name: "Cephanelik Hotel",
        logo: "/references/cephanelik.png",
        logoAlt: "Mahalle Cephanelik",
        logoScale: 1.35,
      },
      {
        id: "borovi",
        name: "Borovi Hotel",
        logo: "/references/borovi.png",
        logoAlt: "Borovi Forest Resort",
      },
      {
        id: "windsor",
        name: "Windsor Hotel",
        logo: "/references/windsor.png",
        logoAlt: "Windsor Hotel & Convention Center Istanbul",
        logoWide: true,
        logoScale: 1.6,
      },
      {
        id: "qoala",
        name: "Qoala Beach Rest",
        logo: "/references/qoala-beach.png",
        logoAlt: "Qoala Beach Club",
        logoWide: true,
        logoScale: 1.55,
      },
      {
        id: "zihni",
        name: "Zihni Bar Restaurant",
        logo: "/references/zihni.png",
        logoAlt: "Zihni Pub",
        logoWide: true,
        logoScale: 1.5,
      },
      {
        id: "anadolu-isi",
        name: "Anadolu İşi Restaurant",
        logo: "/references/antakya-isi.png",
        logoAlt: "Antakya İşi",
        logoScale: 1.35,
      },
      {
        id: "beykoz-molo",
        name: "Beykoz Molo Rest",
        logo: "/references/mola-restoran.png",
        logoAlt: "Mola Restoran",
        logoScale: 1.3,
      },
      {
        id: "balkabagi-misket",
        name: "Balkabağı Misket · Misket Hotel",
        logo: "/references/balkabagi-misket.png",
        logoAlt: "Balkabağı Misket, Misket Hotel Bodrum",
        logoScale: 1.35,
      },
    ],
  },
  cta: {
    headline: "Birlikte hayal edelim, birlikte yaşatalım.",
    description:
      "Gıda sektöründe fark yaratmak, yeni bir işletme kurmak veya mevcut işletmenizi profesyonelleştirmek istiyorsanız — birlikte çalışalım.",
  },
  seo: {
    description: `${foundedYear}'den beri restoran, kafe, otel ve gıda işletmeleri için konseptten işletmeye uçtan uca danışmanlık. MD Danışmanlık.`,
  },
};
