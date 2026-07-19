import { useCallback, useEffect, useState } from "preact/hooks";
import advantages from "../data/listAdvantages.tsx";

type TooltipState = {
  text: string;
  x: number;
  y: number;
  id: number | string;
};

export function Advantages() {
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  const handleButtonClick = useCallback(
    (id: number, description: string, event: any) => {
      event.preventDefault();
      event.stopPropagation();

      const target = event.currentTarget as HTMLButtonElement;
      const rect = target.getBoundingClientRect();

      setTooltip({
        text: description,
        x: rect.left + rect.width / 2,
        y: rect.top + globalThis.scrollY + rect.height + 8, // Корректное позиционирование с учетом скролла
        id: id,
      });
    },
    [],
  );

  useEffect(() => {
    if (!tooltip) return;
    const handleGlobalClose = () => {
      setTooltip(null);
    };

    globalThis.addEventListener("scroll", handleGlobalClose, { passive: true });
    globalThis.addEventListener("click", handleGlobalClose);

    return () => {
      globalThis.removeEventListener("scroll", handleGlobalClose);
      globalThis.removeEventListener("click", handleGlobalClose);
    };
  }, [tooltip]);

  return (
    <section class="mt-8 flex flex-col items-center gap-4">
      <div class="text-gold-400">
        <ul class="flex flex-wrap justify-center gap-6 md:gap-8">
          {advantages.map((item) => (
            <li class="flex flex-col items-center gap-2" key={item.id}>
              <img
                width="30"
                height="30"
                src={item.img}
                alt={item.alt}
                class="w-20 h-20 block object-contain"
              />
              <span class="block max-w-45 text-center leading-tight wrap-break-word whitespace-normal font-medium">
                {item.label}
              </span>

              {/* Кнопка "Подробнее" под каждым элементом */}
              <button
                type="button"
                class="mt-1 text-xs text-gold-400/80 underline decoration-dotted underline-offset-4 transition hover:text-gold-400 cursor-pointer"
                onClick={(event) =>
                  handleButtonClick(item.id, item.description, event)}
                aria-describedby={tooltip?.id === item.id
                  ? "tooltip"
                  : undefined}
                aria-label={`Подробнее о ${item.label}`}
              >
                Подробнее
              </button>
            </li>
          ))}
        </ul>
      </div>

      {tooltip && (
        <div
          id="tooltip"
          role="tooltip"
          class="pointer-events-none absolute z-35 max-w-56 rounded-xl border border-cream-200 bg-white px-3 py-2 text-sm leading-5 text-stone-600 shadow-lg -translate-x-1/2"
          style={{
            left: `${tooltip.x}px`,
            top: `${tooltip.y}px`,
          }}
          onClick={(event) => event.stopPropagation()}
        >
          {tooltip.text}
        </div>
      )}
    </section>
  );
}
