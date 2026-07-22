import sociallinks from "../data/listsocial.tsx";

export default function Footer() {
  return (
    <footer class="mt-8 xs:flex justify-between">
      <div class="mx-auto w-full max-w-3xl px-5 py-5">
        <div>
          <div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          </div>

          {/* CTA */}
          <div class="mt-8 flex flex-col items-start justify-between gap-4 border-t border-[#ece4d3] pt-6 sm:flex-row sm:items-center">
            <p class="text-sm text-[#7a725f]">
              Записаться можно онлайн или в директ — отвечаю в течение дня.
            </p>
          </div>

          {/* Соцсети + копирайт */}
          <div class="mt-6 flex flex-col-reverse items-start justify-center gap-4 sm:flex-row sm:items-center">
            <p class="text-xs text-[#a39a84]">
              Сделано с ❤️ от{" "}
              <a
                href="https://alexkalashyan.ru/"
                target="_blank"
                rel="noreferrer"
                class="hover:underline"
              >
                #morvicool
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
