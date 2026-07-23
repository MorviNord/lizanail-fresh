import { computed } from "@preact/signals";
import { useScrollY } from "../hooks/Scrolly.tsx";

interface ScrollToTopProps {
  // после какого количества пикселей прокрутки показывать кнопку
  threshold?: number;
}

export default function ScrollToTop({ threshold = 400 }: ScrollToTopProps) {
  const scrollY = useScrollY();
  const visible = computed(() => scrollY.value > threshold);

  const scrollToTop = () => {
    globalThis.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Наверх страницы"
      class={`fixed bottom-12 right-5 z-2 flex h-11 w-11 items-center justify-center rounded-full border border-[#ece4d3] bg-[#fffdf9]/90 text-[#a8925f] shadow-[0_10px_30px_-12px_rgba(150,130,80,0.35)] backdrop-blur transition-all duration-300 hover:bg-[#f3e9d2] sm:bottom-8 sm:right-8 ${
        visible.value
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <svg
        class="h-5 w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
