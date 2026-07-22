import { signal } from "@preact/signals";

const isBrowser = typeof window !== "undefined";

export const scrollY = signal(
  isBrowser ? globalThis.scrollY : 0,
);

if (isBrowser) {
  let frameId = 0;

  const onScroll = () => {
    if (frameId) return;
    {
      frameId = requestAnimationFrame(() => {
        scrollY.value = globalThis.scrollY;
        frameId = 0;
      });
    }
  };

  // Один подписочный listener на всю жизнь страницы
  globalThis.addEventListener("scroll", onScroll, { passive: true });
}

//  Хук просто возвращает этот сигнал (или компоненты могут импортировать scrollY напрямую)
export const useScrollY = () => scrollY;
