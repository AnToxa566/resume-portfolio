import { cn } from "@/lib/cn";

interface PlaceholderProps {
  label: string;
  ratio: "4/5" | "16/10";
  /** Label placement inside the box. */
  align?: "center" | "start";
  /** Adds the hover brightness/scale used when the box sits inside a link. */
  interactive?: boolean;
  className?: string;
}

/**
 * Stand-in for a not-yet-supplied image: a diagonal hatch with a mono label.
 * Swap for `next/image` once real assets land in `public/`.
 */
export function Placeholder({
  label,
  ratio,
  align = "center",
  interactive = false,
  className,
}: PlaceholderProps) {
  return (
    <div
      style={{ backgroundImage: "var(--stripes)" }}
      className={cn(
        "flex rounded-lg border border-line",
        ratio === "4/5" ? "aspect-[4/5]" : "aspect-[16/10]",
        align === "center" ? "items-center justify-center p-4" : "items-end justify-start p-5",
        interactive &&
          "brightness-90 transition-[filter,transform] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:brightness-100",
        className,
      )}
    >
      <span className="font-mono text-xs tracking-[0.12em] text-muted">
        {label}
      </span>
    </div>
  );
}
