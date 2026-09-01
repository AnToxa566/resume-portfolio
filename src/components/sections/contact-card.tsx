import type { ContactLink } from "@/data";

export function ContactCard({ link }: { link: ContactLink }) {
  const external = link.href.startsWith("http");

  return (
    <a
      href={link.href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="flex items-baseline justify-between gap-4 bg-bg p-[22px] transition-colors hover:bg-surface"
    >
      <span className="text-[15px] text-ink">{link.label}</span>
      <span className="font-mono text-xs text-muted">{link.value}</span>
    </a>
  );
}
