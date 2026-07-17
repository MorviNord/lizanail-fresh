import { services } from "../data/listServices.tsx";

export default function Price() {
  return (
    <section id="prices" class="mx-auto mt-10 max-w-6xl px-4 sm:px-6 lg:px-8">
      <div class="rounded-4xl border border-cream-200/80 bg-linear-to-br from-cream-50 via-white to-cream-100 p-6 shadow-[0_10px_40px_rgba(165,138,76,0.12)] sm:p-8 lg:p-10">
        <div class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p class="text-sm uppercase tracking-[0.35em] text-gold-400">
              Услуги & цены
            </p>
            <h2 class="mt-2 text-3xl font-semibold text-stone-500 sm:text-4xl">
              Нежный уход для ваших рук и ног
            </h2>
          </div>
          <a
            href="#contact"
            class="inline-flex items-center justify-center rounded-full border border-gold-400/30 bg-white px-5 py-2.5 text-sm font-medium text-gold-400 transition hover:bg-cream-100"
          >
            Записаться
          </a>
        </div>

        <div class="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.name}
              class="rounded-2xl border border-cream-200 bg-white/80 p-5 backdrop-blur-sm"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h3 class="text-lg font-medium text-stone-500">
                    {service.name}
                  </h3>
                  <p class="mt-2 text-sm leading-6 text-gray-text">
                    {service.note}
                  </p>
                </div>
                <span class="shrink-0 rounded-full bg-cream-100 px-3 py-1 text-sm font-semibold text-gold-400">
                  {service.price}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
