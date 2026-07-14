import { welcomeBullets } from "../data/AboutData.tsx";

export default function Welcome() {
  return (
    <section class="mt-5 w-full max-w-4xl px-4 text-black">
      <h2 class="mb-5 text-center whitespace-nowrap text-[clamp(2rem,14vw,3.5rem)] font-['Bebas_Neue'] uppercase leading-none tracking-tighter text-yellow select-none">
        Обо мне
      </h2>
      <div class="relative overflow-hidden rounded-[28px] border border-yellow/40 bg-white/80 px-6 py-8 shadow-[0_18px_60px_rgba(0,0,0,0.08)] backdrop-blur-sm md:px-10 md:py-10">
        <div class="absolute inset-0 bg-[linear-gradient(120deg,rgba(219,198,143,0.18),transparent_65%)]" />
        <div class="relative flex flex-col gap-6">
          <div class="flex flex-col items-center gap-2 text-center">
            <p class="max-w-2xl text-lg leading-relaxed text-gray-text">
              Меня зовут Лиза, и я профессиональный мастер маникюра.
            </p>
          </div>

          <ul class="grid gap-3">
            {welcomeBullets.map((item: string) => (
              <li
                key={item}
                class="relative pl-6 text-[1.02rem] leading-relaxed text-gray-text before:absolute before:left-0 before:top-1 before:text-2xl before:font-bold before:text-yellow before:content-['•']"
              >
                {item}
              </li>
            ))}
          </ul>

          <div class="rounded-2xl bg-midnight/80 px-4 py-4 text-right md:px-5">
            <p class="text-sm font-semibold uppercase tracking-[0.25em] text-blue">
              пословица
            </p>
            <p class="mt-2 text-lg italic leading-relaxed text-gray-text">
              «Руки рассказывают о сердце человека чище, чем его слова»
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
