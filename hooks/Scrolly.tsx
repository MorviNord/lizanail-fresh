import { signal } from "@preact/signals";

// Создаём один глобальный сигнал для всего приложения
export const scrollY = signal(
  typeof window !== "undefined" ? globalThis.scrollY : 0,
);

if (typeof window !== "undefined") {
  let ticking = false;

  const onScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        scrollY.value = globalThis.scrollY;
        ticking = false;
      });
      ticking = true;
    }
  };

  // Один подписочный listener на всю жизнь страницы
  globalThis.addEventListener("scroll", onScroll, { passive: true });
}

// 2. Хук просто возвращает этот сигнал (или компоненты могут импортировать scrollY напрямую)
export function useScrollY() {
  return scrollY;
}
