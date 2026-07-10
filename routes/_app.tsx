import type { PageProps } from "fresh";
import { schema } from "../utils/schema.tsx";

export default function App({ Component, url }: PageProps) {
  return (
    <html lang="ru" class="bg-midnight">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta name="performance-hints" content="preload-images" />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <meta
          name="author"
          content="Лиза Овчарова | Мастер маникюра и педикюра"
        />
        <meta
          name="description"
          content="Лиза Овчарова — мастер маникюра и педикюра из Ставрополя. Аккуратные покрытия, уход за руками и ногами, комфортные процедуры и красивые ногти."
        />
        <meta
          name="keywords"
          content="маникюр Ставрополь, педикюр Ставрополь, мастер маникюра, мастер педикюра, Лиза Овчарова, ногти Ставрополь"
        />
        <meta name="geo.region" content="RU-STA" />
        <meta name="geo.placename" content="Ставрополь" />
        <meta name="theme-color" content="#0f172a" />
        <meta
          property="og:title"
          content="Лиза Овчарова | Мастер маникюра и педикюра в Ставрополе"
        />
        <meta
          property="og:description"
          content="Красивый маникюр и педикюр в Ставрополе от Лизы Овчаровой: аккуратный уход, современные техники и комфортные процедуры."
        />
        <meta property="og:url" content="https://alexkalashyan.ru/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://alexkalashyan.ru/ava/ava2.webp"
        />
        <meta
          property="og:image:alt"
          content="Лиза Овчарова — мастер маникюра и педикюра"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Лиза Овчарова" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Лиза Овчарова | Мастер маникюра и педикюра в Ставрополе"
        />
        <meta
          name="twitter:description"
          content="Маникюр и педикюр в Ставрополе от Лизы Овчаровой — аккуратный уход, качественные материалы и красивые ногти."
        />
        <meta
          name="twitter:image"
          content="https://alexkalashyan.ru/ava/ava2.webp"
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="canonical"
          href={`https://alexkalashyan.ru${url.pathname}`}
        />
        <title>Лиза Овчарова | Мастер маникюра и педикюра в Ставрополе</title>
      </head>
      <body class="grid min-h-screen grid-rows-[auto_1fr_auto] max-w-170 mx-auto px-4">
        <Component />
      </body>
    </html>
  );
}
