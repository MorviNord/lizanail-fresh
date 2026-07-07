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
        <meta
          name="author"
          content="Alexander Kalashyan | Web Development & Project Management"
        />
        <meta
          name="description"
          content="Alexander Kalashyan - IT Project Manager specializing in web development project management and support"
        />
        <meta
          property="og:title"
          content="Alexander Kalashyan | IT Project Manager"
        />
        <meta
          property="og:description"
          content="Web Development & Project Management Professional"
        />
        <meta
          name="keywords"
          content="project manager, web development, IT management, Alexander Kalashyan, project support"
        />
        <meta property="og:url" content="https://alexkalashyan.ru/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://alexkalashyan.ru/ava/ava2.webp"
        />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Alexander Kalashyan" />
        <script type="application/json">
          {JSON.stringify(schema)}
        </script>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link
          rel="canonical"
          href={`https://alexkalashyan.ru${url.pathname}`}
        />
        <title>Alexander Kalashyan | IT Project Manager</title>
      </head>
      <body class="grid min-h-screen grid-rows-[auto_1fr_auto] max-w-170 mx-auto px-4">
        <Component />
      </body>
    </html>
  );
}
