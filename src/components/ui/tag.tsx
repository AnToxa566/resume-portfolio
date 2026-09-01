import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

export function Tag({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: "default" | "signal";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded font-mono",
        tone === "default" &&
          "border border-line px-2.5 py-1 text-xs text-muted",
        tone === "signal" &&
          "border border-signal px-2 py-0.5 text-[11px] tracking-[0.08em] text-signal",
      )}
    >
      {children}
    </span>
  );
}
