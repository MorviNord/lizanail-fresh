import { useSignal } from "@preact/signals";
import { ChevronIcon } from "../components/Icon/IcArrow.tsx";
import FAQ_ITEMS from "../data/FaqData.tsx";

export default function FAQ() {
  const openIndex = useSignal<number | null>(0);

  const toggle = (index: number) => {
    openIndex.value = openIndex.value === index ? null : index;
  };

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
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex.value === index;
            return (
              <div key={item.question} class="py-4">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  class="flex w-full items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span
                    class={`text-base sm:text-lg ${
                      isOpen ? "font-medium text-[#3a3226]" : "text-[#57503f]"
                    }`}
                  >
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>

                <div
                  class="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                  }}
                >
                  <div class="min-h-0">
                    <p class="pt-3 pr-8 text-sm leading-relaxed text-[#7a725f] sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
