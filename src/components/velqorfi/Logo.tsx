export function Logo({
  className = "",
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const text = tone === "light" ? "text-white" : "text-ink";
  const mark = tone === "light" ? "text-white" : "text-brand";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className={`h-7 w-7 ${mark}`}
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16 1.5c3.6 3.4 5.6 8 5.6 12.8 0 2.2-.4 4.2-1.1 6L16 24l-4.5-3.7a16 16 0 0 1-1.1-6c0-4.8 2-9.4 5.6-12.8Z" />
        <path
          d="M9.4 20.4 5.6 26c-.4.6.2 1.3.9 1.1l4.9-1.6a15 15 0 0 1-2-5.1Z"
          opacity="0.75"
        />
        <path
          d="M22.6 20.4 26.4 26c.4.6-.2 1.3-.9 1.1l-4.9-1.6a15 15 0 0 0 2-5.1Z"
          opacity="0.75"
        />
        <circle cx="16" cy="12.5" r="2.4" className="fill-brand-cyan" />
      </svg>
      <span className={`text-[19px] tracking-tight ${text}`}>
        <span className="font-normal">Velqor</span>
        <span className="font-bold">fi</span>
      </span>
    </span>
  );
}
