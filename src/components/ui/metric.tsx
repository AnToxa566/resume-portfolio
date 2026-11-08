import { cn } from "@/lib/cn";

interface MetricProps {
  /** Large mono figure, e.g. "3", "~85%". */
  value?: string;
  /** Before value of a "from → to" delta line. */
  from?: string;
  /** After value of a "from → to" delta line. */
  to?: string;
  /** Plain headline line under the figure, in the same slot as the delta line. */
  label?: string;
  caption?: string;
  className?: string;
}

export function Metric({
  value,
  from,
  to,
  label,
  caption,
  className,
}: MetricProps) {
  const hasDelta = Boolean(from && to);
  const hasHeadline = hasDelta || Boolean(label);

  return (
    <div className={className}>
      {value && (
        <div className="font-mono text-[clamp(1.75rem,3.4vw,2.5rem)] font-medium leading-none text-ink">
          {value}
        </div>
      )}

      {hasDelta && (
        <div
          className={cn(
            "flex items-baseline gap-2 font-mono text-sm",
            value && "mt-3",
          )}
        >
          <span className="text-muted">{from}</span>
          <span className="text-signal">→</span>
          <span className="text-ink">{to}</span>
        </div>
      )}

      {label && !hasDelta && (
        <div className={cn("font-mono text-sm text-ink", value && "mt-3")}>
          {label}
        </div>
      )}

      {caption && (
        <div
          className={cn(
            "font-mono text-xs leading-normal text-muted",
            hasHeadline ? "mt-1.5" : value ? "mt-3" : undefined,
          )}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
