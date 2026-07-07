import interests from "../constants/listInterests.tsx";

export function Interests() {
  return (
    <section class="mt-8 flex flex-col items-center">
      <div class="text-gray-300">
        <ul class="flex gap-3">
          {interests.map((item) => (
            <li class="flex flex-col items-center" key={item.id}>
              <img
                width="30"
                height="30"
                src={item.img}
                alt={item.alt}
                class="w-7.5 h-7.5 block"
              />
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <span class="flex mt-4 items-center gap-2 text-gray-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Ставрополь, Россия
      </span>
    </section>
  );
}
