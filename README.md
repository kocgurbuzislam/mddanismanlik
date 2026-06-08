# MD Danışmanlık

Mehmet Doğan — otel, gıda ve içecek sektörü danışmanlık web sitesi.

## Geliştirme

```bash
npm install
npm run dev
```

Site [http://localhost:3000](http://localhost:3000) adresinde açılır.

## Ortam değişkenleri

`.env.example` dosyasını `.env.local` olarak kopyalayın ve canlı site URL'sini ayarlayın:

```
NEXT_PUBLIC_SITE_URL=https://mehmetdoğan.com
```

## Scriptler

| Komut | Açıklama |
|-------|----------|
| `npm run dev` | Geliştirme sunucusu |
| `npm run build` | Production build |
| `npm run lint` | ESLint |
| `npm run optimize:icons` | Favicon ve uygulama ikonlarını üret |
| `npm run optimize:references` | Referans logolarını optimize et |
| `npm run optimize:nusr-et-cover` | Nusr-Et proje görsellerini optimize et |
| `npm run optimize:the-crown-cover` | The Crown kapak görselini optimize et |
