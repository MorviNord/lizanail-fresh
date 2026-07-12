import { navItems } from "../data/nav.tsx";

export default function Header() {
  return (
    <header class="flex flex-col items-center pt-2">
      <nav class="w-full max-w-md">
        <ul class="flex justify-between text-gray-text">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <picture class="transition-opacity duration-300">
        <source
          srcset="/ava/ava.jpg"
          type="image/jpeg"
        />
        <img
          width="256"
          height="356"
          src="/ava/ava.jpg"
          alt="avatar"
          className="rounded-2xl aspect-square object-cover"
        />
      </picture>
      <h1 class="max-w-2xs text-3xl text-white min-h-6">
        <span class="text-gray-text min-h-5">Елизавета Овчаровa</span>
      </h1>
    </header>
  );
}
