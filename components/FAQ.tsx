import { ChevronIcon } from "./Icon/IcArrow.tsx";
import FAQ_ITEMS from "../data/FaqData.tsx";

export default function FAQ() {
  return (
    <section class="mt-10 mx-auto w-full px-5 lg:px-8">
      <div class="rounded-[28px] border border-[#ece4d3] bg-linear-to-b from-[#fffdf9] to-[#faf6ec] p-9 shadow-[0_10px_30px_-12px_rgba(150,130,80,0.25)] lg:p-10">
        <p class="text-xs font-medium tracking-[0.25em] text-[#b3966a]">
          ВОПРОСЫ И ОТВЕТЫ
        </p>
        <h2 class="mt-2 font-serif text-3xl leading-tight text-[#3a3226] sm:text-4xl">
          Частые вопросы
        </h2>

        <div class="mt-8 divide-y divide-[#ece4d3]">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              open={index === 0}
              class="group py-4 [&::-webkit-details-marker]:hidden"
            >
              <summary class="flex w-full cursor-pointer items-center justify-between gap-4 text-left list-none select-none">
                <span class="text-base sm:text-lg text-[#57503f] transition-colors duration-200 group-open:font-medium group-open:text-[#3a3226]">
                  {item.question}
                </span>

                {/* Если иконка поддерживает поворот через классы */}
                <div class="transition-transform duration-300 group-open:rotate-180">
                  <ChevronIcon />
                </div>
              </summary>

              <div class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out grid-rows-[0fr] group-open:grid-rows-[1fr]">
                <div class="min-h-0">
                  <p class="pt-3 pr-8 text-sm leading-relaxed text-[#7a725f] sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
