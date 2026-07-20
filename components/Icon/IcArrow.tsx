export function ChevronIcon({ open }: { open?: boolean }) {
  return (
    <svg
      class={`h-5 w-5 shrink-0 text-[#a8925f] transition-transform duration-300 ${
        open ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
