import { TablesIcon } from "../components/Icon/tables.tsx";
import { FreshIcon } from "../components/Icon/fresh-badge.tsx";

export default function Footer() {
  return (
    <footer class="mt-8 xs:flex justify-between">
      <div class="self-center">
        <a
          href="https://fresh.deno.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FreshIcon />
        </a>
      </div>
      <div class="flex justify-end">
        <span class="hidden xl:block max-w-30 text-gray-500 text-sm">
          Красная или синяя таблетка?
        </span>
        <a
          href="https://youtu.be/BpwimtOwNh4?si=Mg2C7_39lGm-BNbI"
          target="_blank"
          class="flex items-center gap-4"
          rel="noopener noreferrer"
        >
          <TablesIcon />
        </a>
      </div>
    </footer>
  );
}
