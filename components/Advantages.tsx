import advantages from "../data/listAdvantages.tsx";

export default function Advantages() {
  return (
    <section class="mt-8 flex flex-col items-center gap-4">
      <ul class="flex flex-wrap justify-center gap-6 md:gap-8 text-gold-400">
        {advantages.map((item) => (
          <li
            class="relative flex flex-col items-center gap-2"
            key={item.id}
          >
            <img
              width="30"
              height="30"
              src={item.img}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              class="w-20 h-20 block object-contain"
            />
            <span class="block max-w-45 text-center leading-tight wrap-break-word whitespace-normal font-medium">
              {item.label}
            </span>

            {/* Кнопка "Подробнее" — открывает связанный popover */}
            <button
              type="button"
              popovertarget={`tooltip-${item.id}`}
              popovertargetaction="toggle"
              class="mt-1 text-xs text-gold-400/80 underline decoration-dotted underline-offset-4 transition hover:text-gold-400 cursor-pointer"
              aria-label={`Подробнее о ${item.label}`}
            >
              Подробнее
            </button>

            {/* Сам тултип, работает как нативный popover */}
            <div
              id={`tooltip-${item.id}`}
              popover="auto"
              role="tooltip"
              class="tooltip-pop max-w-56 rounded-xl border border-cream-200 bg-white px-3 py-2 text-sm leading-5 text-stone-600 shadow-lg"
            >
              {item.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
