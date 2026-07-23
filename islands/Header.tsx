import { computed, effect, useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { useScrollY } from "../hooks/Scrolly.tsx";
import { navItems } from "../data/nav.tsx";

interface FloatingNavProps {
  // порог в пикселях, до которого нав всегда виден и "лёгкий"
  topThreshold?: number;
  // минимальная разница в px между кадрами скролла, чтобы не дёргаться
  // от мелкого дрожания (например, инерционный скролл на мобильных)
  minDelta?: number;
}

export default function Header({
  topThreshold = 24,
  minDelta = 6,
}: FloatingNavProps) {
  const scrollY = useScrollY();
  const visible = useSignal(true);
  const scrolled = computed(() => scrollY.value > topThreshold);

  useEffect(() => {
    let lastY = scrollY.peek();

    // effect() из @preact/signals сам подписывается на scrollY.value и
    // перезапускается при каждом его изменении — не нужен второй
    // addEventListener, слушатель уже есть внутри useScrollY.
    return effect(() => {
      const currentY = scrollY.value;
      const diff = currentY - lastY;

      if (currentY <= topThreshold) {
        visible.value = true;
      } else if (Math.abs(diff) > minDelta) {
        visible.value = diff < 0; // diff < 0 значит скроллим вверх
      }

      lastY = currentY;
    });
  }, [topThreshold, minDelta]);

  return (
    <div
      class={`fixed inset-x-0 top-0 z-2 flex justify-center px-4 pt-3 transition-transform duration-300 sm:px-6 ${
        visible.value ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        class={`w-full max-w-md rounded-2xl border transition-all duration-300 ${
          scrolled.value
            ? "border-cream-400 bg-white/90 py-2.5 shadow-[0_8px_24px_rgba(72,57,25,0.12)] backdrop-blur-md"
            : "border-cream-400/60 bg-white/50 py-3 shadow-none backdrop-blur-sm"
        } px-4`}
      >
        <ul class="flex w-full justify-between text-sm font-medium tracking-[0.15em] text-gray-text/90 sm:tracking-[0.2em] sm:text-base">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                class="transition-colors duration-200 hover:text-gold-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
