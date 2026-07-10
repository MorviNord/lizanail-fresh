// deno-fmt-ignore-file
export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://alexkalashyan.ru/#person",
      "name": "Лиза Овчарова",
      "alternateName": "Lisa Ovcharova",
      "jobTitle": "Мастер маникюра и педикюра",
      "description": "Мастер маникюра и педикюра из Ставрополя, оказывающий услуги по уходу за руками и ногами.",
      "url": "https://alexkalashyan.ru/",
      "image": "https://alexkalashyan.ru/ava/ava2.webp",
      "knowsAbout": [
        "маникюр",
        "педикюр",
        "уход за ногтями",
        "ногтевой сервис",
        "Ставрополь"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ставрополь",
        "addressRegion": "Ставропольский край",
        "addressCountry": "RU"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://alexkalashyan.ru/#business",
      "name": "Лиза Овчарова — мастер маникюра и педикюра",
      "url": "https://alexkalashyan.ru/",
      "image": "https://alexkalashyan.ru/ava/ava2.webp",
      "description": "Профессиональный маникюр и педикюр в Ставрополе с акцентом на качество, комфорт и аккуратный результат.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ставрополь",
        "addressRegion": "Ставропольский край",
        "addressCountry": "RU"
      },
      "areaServed": "Ставрополь",
      "priceRange": "$$",
      "sameAs": []
    }
  ]
};
