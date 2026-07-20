// components/Contacts.tsx
//
// Статический блок «Контакты» с кнопкой записи. Состояния нет — компонент
// живёт в /components (серверный рендер), а не в /islands.
//
// Если кнопка «Записаться» должна открывать модалку/форму — вынесите её
// в отдельный остров и замените <a href={bookingHref}> на свой компонент.

import sociallinks from "../data/listsocial.tsx";

import { IcClock } from "./Icon/IcClock.tsx";
import { IcGeo } from "./Icon/IcGeo.tsx";

export default function Contacts({
  city = "Ставрополь, Россия",
  address = "ул. Ленина, 24, студия «Уют»",
  workingHours = "Пн–Сб: 10:00–20:00",
  bookingHref = "#booking",
}) {
  return (
    <section id="contacts" class="mx-auto w-full max-w-3xl px-5 py-10">
      <p class="text-xs font-medium tracking-[0.25em] text-[#b3966a]">
        КОНТАКТЫ
      </p>
      <h2 class="mt-2 font-serif text-3xl leading-tight text-[#3a3226] sm:text-4xl">
        Буду рада видеть вас
      </h2>

      <div class="mt-8 rounded-[28px] border border-[#ece4d3] bg-linear-to-b from-[#fffdf9] to-[#faf6ec] p-6 shadow-[0_10px_30px_-12px_rgba(150,130,80,0.25)] sm:p-10">
        <div class="grid gap-8 sm:grid-cols-2">
          {/* Левая колонка: адрес и график */}
          <div>
            <div class="flex items-start gap-3">
              <IcGeo />
              <div>
                <p class="text-sm text-[#3a3226]">{address}</p>
                <p class="mt-0.5 text-sm text-[#a39a84]">{city}</p>
              </div>
            </div>
            <div class="mt-4 flex items-start gap-3">
              <IcClock />
              <p class="text-sm text-[#3a3226]">{workingHours}</p>
            </div>
            <a
              href="https://mst.link/ovcharova_elizaveta"
              target="_blank"
              rel="noreferrer"
              class="mt-6 inline-flex items-center justify-center rounded-full bg-[#a8925f] px-6 py-3 text-sm font-medium text-[#fffdf9] transition-colors hover:bg-[#96814f]"
            >
              Записаться
            </a>
          </div>

          {/* Правая колонка: способы связи */}
          <div class="space-y-4 border-t border-[#ece4d3] pt-6 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0">
            {sociallinks.map((item) => (
              <a
                key={item.link}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noreferrer" : undefined}
                class="flex items-center gap-3 rounded-2xl px-3 py-2.5 -mx-3 transition-colors hover:bg-[#f3e9d2]/60"
              >
                <div class="text-[#a8925f]">
                  {item.icon}
                </div>
                <span>
                  <span class="block text-xs text-[#a39a84]">{item.label}</span>
                  <span class="block text-sm text-[#3a3226]">
                    {item.description}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
