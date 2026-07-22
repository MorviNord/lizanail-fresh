export default function Avatar() {
  return (
    <section class="flex mt-12 flex-col items-center sm:px-6">
      <div class="relative mt-8 mb-2 flex items-center justify-center">
        <div class="absolute inset-0 -z-10 rounded-full bg-linear-to-br from-gold-200/70 via-gold-100/50 to-gold-300/40 blur-3xl" />
        <div class="rounded-4xl border border-cream-300 bg-linear-to-br from-cream-50 via-cream-100 to-cream-200 p-2 shadow-[0_20px_45px_rgba(109,99,62,0.16)]">
          <picture class="block overflow-hidden rounded-[1.4rem]">
            <source srcset="/ava/ava.jpg" type="image/jpeg" />
            <img
              width="256"
              height="356"
              src="/ava/ava.jpg"
              alt="avatar"
              class="h-80 w-80 rounded-[1.4rem] object-cover "
            />
          </picture>
        </div>
      </div>

      <h1 class="mt-3 text-center text-[clamp(1.5rem,4vw,1.8rem)] min-h-6 bg-linear-to-r from-gray-text to-gold-400 bg-clip-text font-semibold tracking-[0.06em] text-transparent">
        Елизавета Овчаровa
      </h1>
      <p class="mt-1 text-center text-xs uppercase tracking-[0.32em] text-stone-500">
        Мастер маникюра
      </p>
    </section>
  );
}
