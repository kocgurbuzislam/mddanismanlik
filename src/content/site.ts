import type { SiteContent } from "@/types/site";

export const siteContent: SiteContent = {
  brand: {
    name: "MD Danışmanlık",
    tagline: "Gıda & İçecek Sektörü Danışmanlığı",
    foundedYear: 1997,
    slogan:
      "Her işletme bir yıldız olabilir, biz onun gökyüzünü tasarlarız.",
    logo: "/logo.png",
    logoAlt: "MD Danışmanlık",
  },
  contact: {
    name: "Mehmet Doğan",
    phone: "+90 535 259 46 56",
    phoneHref: "tel:+905352594656",
    whatsappHref: "https://wa.me/905352594656",
    email: "info@md-danismanlik.com",
    emailHref: "mailto:info@md-danismanlik.com",
    instagram: "@md_danismanlik",
    instagramHref: "https://www.instagram.com/md_danismanlik/",
    address: "İstanbul, Türkiye",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=İstanbul+Türkiye",
    mapEmbedSrc:
      "https://www.google.com/maps?q=İstanbul,+Türkiye&hl=tr&z=11&output=embed",
  },
  about: {
    title: "Hakkımızda",
    paragraphs: [
      "1997'den bu yana Türkiye'nin gıda ve içecek sektöründe öncü danışmanlık firmalarından biri olarak hizmet veriyoruz. 28 yılı aşkın deneyimimizle yüzlerce projeyi hayata geçirdik.",
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
    subtitle:
      "1995'ten bu yana Türkiye ve yurtdışında önde gelen otel, restoran ve işletmelerde edinilen deneyim.",
    career: {
      entries: [
        {
          id: "hillside",
          name: "Hillside Su Hotel",
          location: "Antalya",
          group: "Alarko Holding",
          logo: "/references/hotel-su.png",
          logoAlt: "Hotel SU",
          logoWide: true,
          logoScale: 1.4,
        },
        {
          id: "adam-eve",
          name: "Adam & Eve Hotel",
          location: "Belek",
          group: "Kayı Group",
          logo: "/references/adam-eve.png",
          logoScale: 1.25,
        },
        {
          id: "ritz-carlton",
          name: "The Ritz-Carlton Hotel",
          location: "İstanbul",
          group: "Süzer Holding",
          logo: "/references/ritz-carlton.png",
          logoAlt: "The Ritz-Carlton",
        },
        {
          id: "w-hotel",
          name: "W Hotel",
          location: "İstanbul",
          group: "Bilgili Holding",
          logo: "/references/w-hotel.png",
          logoAlt: "W Istanbul",
          logoScale: 1.3,
        },
        {
          id: "rixos",
          name: "Rixos Pera ve Elysium Otelleri",
          location: "İstanbul",
          logo: "/references/rixos.png",
          logoAlt: "Rixos Hotels",
          logoWide: true,
          logoScale: 1.4,
        },
        {
          id: "duble-meze",
          name: "Duble Meze Bar Pera, Celal",
          location: "İstanbul",
          group: "Çapa İşletmeleri (Çapa Marka)",
          logo: "/references/duble-meze.png",
          logoAlt: "Duble Meze Pera",
          logoWide: true,
          logoScale: 1.4,
        },
        {
          id: "cevahir",
          name: "Biz Cevahir Hotel",
          location: "Mecidiyeköy ve Sultanahmet, İstanbul",
          group: "Cevahir Holding",
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
          note:
            "Maçka Palas başta olmak üzere Galataport, Erenköy ve Galata Kulesi şubelerinin açılışında, birebir Nusret Bey'e bağlı olarak çalıştım.",
        },
      ],
    },
    consultancy: {
      entries: [
        {
          id: "elexus",
          name: "Elexus Hotel",
          location: "Kıbrıs",
          note: "Turizm Bakanı Mehmet Ersoy'un oteli.",
          logo: "/references/elexus.png",
          logoAlt: "Elexus Hotel Resort Spa Girne",
          logoScale: 1.3,
        },
        {
          id: "km-hilton",
          name: "Kahramanmaraş Hilton Hotel",
          group: "Bellizade Grup",
          logo: "/references/kahramanmaras-hilton.png",
          logoAlt: "Hampton by Hilton Kahramanmaraş",
          logoScale: 1.25,
        },
        {
          id: "arts-hotel",
          name: "Arts Hotel",
          location: "Kahramanmaraş",
          group: "Bellizade Grup",
          logo: "/references/arts-hotel.png",
          logoAlt: "Arts Hotel",
          logoWide: true,
          logoScale: 1.45,
        },
        {
          id: "mavi-beyaz",
          name: "Mavi Beyaz Restaurant",
          location: "Kapadokya",
          logo: "/references/mavi-beyaz.png",
          logoWide: true,
          logoScale: 1.4,
        },
        {
          id: "cephanelik",
          name: "Cephanelik Hotel",
          location: "Trabzon",
          logo: "/references/cephanelik.png",
          logoAlt: "Mahalle Cephanelik",
          logoScale: 1.35,
        },
        {
          id: "borovi",
          name: "Borovi Hotel",
          location: "Sırbistan",
          logo: "/references/borovi.png",
          logoAlt: "Borovi Forest Resort",
        },
        {
          id: "windsor",
          name: "Windsor Hotel",
          location: "Bayrampaşa",
          logo: "/references/windsor.png",
          logoAlt: "Windsor Hotel & Convention Center Istanbul",
          logoWide: true,
          logoScale: 1.6,
        },
        {
          id: "qoala",
          name: "Qoala Beach Rest",
          location: "Türkbükü",
          logo: "/references/qoala-beach.png",
          logoAlt: "Qoala Beach Club",
          logoWide: true,
          logoScale: 1.55,
        },
        {
          id: "zihni",
          name: "Zihni Bar Restaurant",
          location: "Nişantaşı",
          logo: "/references/zihni.png",
          logoAlt: "Zihni Pub",
          logoWide: true,
          logoScale: 1.5,
        },
        {
          id: "anadolu-isi",
          name: "Anadolu İşi Restaurant",
          location: "Taksim",
          logo: "/references/antakya-isi.png",
          logoAlt: "Antakya İşi",
          logoScale: 1.35,
        },
        {
          id: "beykoz-molo",
          name: "Beykoz Molo Rest",
          location: "Beykoz",
          logo: "/references/mola-restoran.png",
          logoAlt: "Mola Restoran",
          logoScale: 1.3,
        },
        {
          id: "balkabagi-misket",
          name: "Balkabağı Misket · Misket Hotel",
          location: "Bodrum",
          logo: "/references/balkabagi-misket.png",
          logoAlt: "Balkabağı Misket, Misket Hotel Bodrum",
          logoScale: 1.35,
        },
      ],
    },
  },
  cta: {
    headline: "Birlikte hayal edelim, birlikte yaşatalım.",
    description:
      "Gıda sektöründe fark yaratmak, yeni bir işletme kurmak veya mevcut işletmenizi profesyonelleştirmek istiyorsanız — birlikte çalışalım.",
    closing: "MD Danışmanlık ile tanışın.",
  },
  seo: {
    title: "MD Danışmanlık | Gıda & İçecek Sektörü Danışmanlığı",
    description:
      "1997'den beri restoran, kafe, otel ve gıda işletmeleri için konseptten işletmeye uçtan uca danışmanlık. MD Danışmanlık.",
  },
};
