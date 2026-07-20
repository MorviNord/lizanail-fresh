import sociallinks from "../data/listsocial.tsx";

export default function Footer() {
  return (
    <footer class="mt-8 xs:flex justify-between">
      <div class="mx-auto w-full max-w-3xl px-5 py-10">
        <div class="rounded-[28px] border border-[#ece4d3] bg-linear-to-b from-[#fffdf9] to-[#faf6ec] p-8 shadow-[0_10px_30px_-12px_rgba(150,130,80,0.25)] sm:p-10">
          <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          </div>

          {/* CTA */}
          <div class="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#ece4d3] pt-6 sm:flex-row sm:items-center">
            <p class="text-sm text-[#7a725f]">
              Записаться можно онлайн или в директ — отвечаю в течение дня.
            </p>
            <a
              href="#booking"
              target="_blank"
              rel="noreferrer"
              class="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#d8c9a3] bg-[#fdfbf5] px-5 py-2.5 text-sm font-medium text-[#3a3226] transition-colors hover:bg-[#f3e9d2]"
            >
              Записаться
            </a>
          </div>

          {/* Соцсети + копирайт */}
          <div class="mt-6 flex flex-col-reverse items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p class="text-xs text-[#a39a84]">
              © {name}. Все права защищены.
            </p>
            <div class="flex items-center gap-3">
              {sociallinks.map(({ label, link, icon: Icon }) => (
                <a
                  key={link}
                  href={link}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  class="flex h-9 w-9 items-center justify-center rounded-full border border-[#ece4d3] text-[#a8925f] transition-colors hover:border-[#d8c9a3] hover:bg-[#f3e9d2]"
                >
                  {Icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
