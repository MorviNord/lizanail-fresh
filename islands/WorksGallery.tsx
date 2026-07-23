import { useSignal } from "@preact/signals";
import { CloseIcon } from "../components/Icon/IcClose.tsx";
import works from "../data/WorksData.tsx";

export default function WorksGallery() {
  const selectedImage = useSignal<string | undefined>(undefined);
  const selectedTitle = useSignal<string>("");

  const openImage = (image: string, title: string) => {
    selectedImage.value = image;
    selectedTitle.value = title;
  };

  const closeImage = () => {
    selectedImage.value = undefined;
    selectedTitle.value = "";
  };

  return (
    <>
      <section
        id="works"
        class="mx-auto mt-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8"
      >
        <div class="rounded-4xl border border-cream-200/80 bg-linear-to-br from-cream-50 via-white to-cream-100 p-6 shadow-[0_10px_40px_rgba(165,138,76,0.12)] sm:p-8 lg:p-10">
          <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p class="text-sm uppercase tracking-[0.35em] text-gold-400">
                Лучшие работы
              </p>
              <h2 class="mt-2 text-3xl font-semibold text-stone-500 sm:text-4xl">
                Идеи для ваших ноготков
              </h2>
            </div>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              class="inline-flex items-center justify-center rounded-full border border-gold-400/30 bg-white px-5 py-2.5 text-sm font-medium text-gold-400 transition hover:bg-cream-100"
            >
              Больше работ в Instagram
            </a>
          </div>

          <div class="mt-8 grid gap-4 md:grid-cols-3">
            {works.map((item) => (
              <article
                key={item.title}
                class="overflow-hidden rounded-3xl border border-cream-200 bg-white/80 shadow-sm cursor-pointer"
                role="button"
                tabIndex={0}
                onClick={() => openImage(item.image, item.title)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openImage(item.image, item.title);
                  }
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  class="cursor-zoom-in h-56 w-full object-cover"
                />
                <div class="p-4">
                  <h3 class="text-lg font-medium text-stone-500">
                    {item.title}
                  </h3>
                  <p class="mt-2 text-sm leading-6 text-gray-text">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedImage.value && (
        <div
          class="fixed inset-0 z-3 flex items-center justify-center bg-black/80 p-4"
          onClick={closeImage}
        >
          <div
            class="relative max-h-[90vh] max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={closeImage}
              aria-label="Закрыть фото"
              class="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-xl font-semibold text-stone-500 shadow-lg cursor-pointer z-10"
            >
              <CloseIcon />
            </button>
            <img
              src={selectedImage.value}
              alt={selectedTitle.value}
              class="max-h-[85vh] max-w-full rounded-3xl object-contain shadow-2xl"
            />
          </div>
        </div>
      )}
    </>
  );
}
