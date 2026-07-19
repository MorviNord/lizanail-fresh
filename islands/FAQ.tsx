// islands/FAQ.tsx
//
// FAQ-аккордеон в стиле лендинга (тёплый бежевый фон, золотисто-оливковый
// акцент, скруглённые карточки с мягкой тенью). Это остров (island) —
// в нём используется состояние, поэтому в Fresh он должен лежать в папке
// /islands, а не /components.
//
// Стили — на Tailwind (twind/tailwind.config.ts), как обычно подключают в
// Fresh. Если Tailwind не используется, скажи — перепишу на обычный CSS.

import { useState } from "preact/hooks";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Сколько длится сеанс маникюра?",
    answer:
      "Классический маникюр занимает 1–1,5 часа, японский маникюр и сложный дизайн — до 2,5 часов. Точное время скажу при записи.",
  },
  {
    question: "Как подготовиться к визиту?",
    answer:
      "Приходите с чистыми ногтями без старого покрытия. Если снимать гель-лак нужно у меня — просто закладывайте на это дополнительные 30 минут.",
  },
  {
    question: "Какие материалы вы используете?",
    answer:
      "Работаю на профессиональных материалах IQ Beauty и 4Blanc CNI, все инструменты стерилизую перед каждым клиентом.",
  },
  {
    question: "Можно ли перенести или отменить запись?",
    answer:
      "Да, напишите мне в директ или по телефону минимум за 12 часов — подберём другое удобное время без потери предоплаты.",
  },
  {
    question: "Делаете ли вы дизайн со своими идеями?",
    answer:
      "Конечно! Можно принести референс из Pinterest или Instagram — подберём похожий вариант или адаптируем под форму и длину ваших ногтей.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      class={`h-5 w-5 shrink-0 text-[#a8925f] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
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
            const isOpen = openIndex === index;
            return (
              <div key={item.question} class="py-4">
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  class="flex w-full items-center justify-between gap-4 text-left"
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
