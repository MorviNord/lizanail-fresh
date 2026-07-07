// Ваш компонент
import social from "../constants/listsocial.tsx";

export default function Index() {
  return (
    <nav class="mt-8 flex gap-4">
      {social.map((item) => (
        <a
          class="bg-gray-200 rounded-3xl p-1"
          key={item.id}
          target="_blank"
          href={item.link}
          aria-label={item.label}
        >
          {item.icon}
        </a>
      ))}
    </nav>
  );
}
