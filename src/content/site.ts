import type { SiteContent } from "@/types/site";
import { projectEntries } from "@/content/projects";
import { referenceEntries } from "@/content/references";

const phone = "+90 535 259 46 56";
const secondaryPhone = "+90 532 500 56 49";
const email = "mehmetdoganoffical@gmail.com";
const address = "istanbul beşiktaş şair nedim cadde no 68";
const foundedYear = 1997;
const brandName = "MD Danışmanlık";

export const siteContent = {
  brand: {
    name: brandName,
    tagline: "Otel, Gıda & İçecek Sektörü Danışmanlığı",
    foundedYear,
    completedProjectsMin: 100,
    slogan:
      "Her işletme bir yıldız olabilir, biz onun gökyüzünü tasarlarız.",
    logo: "/logo.png",
  },
  contact: {
    name: "Mehmet Doğan",
    phone,
    secondaryPhone,
    email,
    instagram: "@mehmetdoganoffical",
    instagramHref: "https://www.instagram.com/mehmetdoganoffical/",
    address,
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
    entries: referenceEntries,
  },
  projects: {
    title: "Tamamladığımız Projeler",
    subtitle:
      "Konseptten işletmeye, her projede mekânın ruhunu ve sürdürülebilir başarıyı bir arada tasarlıyoruz.",
    entries: projectEntries,
  },
  cta: {
    headline: "Birlikte hayal edelim, birlikte yaşatalım.",
    description:
      "Gıda sektöründe fark yaratmak, yeni bir işletme kurmak veya mevcut işletmenizi profesyonelleştirmek istiyorsanız, birlikte çalışalım.",
  },
  description: `${foundedYear}'den beri restoran, kafe, otel ve gıda işletmeleri için konseptten işletmeye uçtan uca danışmanlık. ${brandName}.`,
} satisfies SiteContent;
