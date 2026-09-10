/**
 * Duration values that either ship as a fixed string or are derived from a
 * `year-month` date range so "current" roles never go stale.
 *
 * - `string` → shown verbatim (write it in whatever wording the slot wants).
 * - `{ start, end? }` → `start`/`end` are `"YYYY-MM"`; a missing `end` means
 *   "up to now" and resolves to the current year and month at render time.
 */
export type DurationValue = string | DurationRange;

export interface DurationRange {
  /** Inclusive start, `"YYYY-MM"` (e.g. `"2023-12"`). */
  start: string;
  /** Exclusive-ish end, `"YYYY-MM"`. Omit for an ongoing role. */
  end?: string;
}

function isRange(value: DurationValue): value is DurationRange {
  return typeof value === "object" && value !== null;
}

/** Whole months between two `"YYYY-MM"` markers, clamped at zero. */
function monthsBetween(start: string, end: string): number {
  const [sy, sm] = start.split("-").map(Number);
  const [ey, em] = end.split("-").map(Number);
  return Math.max(0, (ey - sy) * 12 + (em - sm));
}

function nowYearMonth(): string {
  const now = new Date();
  return `${now.getFullYear()}-${now.getMonth() + 1}`;
}

function splitYearsMonths(value: DurationRange): { years: number; months: number } {
  const total = monthsBetween(value.start, value.end ?? nowYearMonth());
  return { years: Math.floor(total / 12), months: total % 12 };
}

function unit(count: number, word: string): string {
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

/** Long wording for the case-study meta grid, e.g. `"2 years 9 months"`. */
export function formatDurationLong(value: DurationValue): string {
  if (!isRange(value)) return value;
  const { years, months } = splitYearsMonths(value);
  const parts: string[] = [];
  if (years) parts.push(unit(years, "year"));
  if (months || !years) parts.push(unit(months, "month"));
  return parts.join(" ");
}

/** Compact wording for the experience rail, e.g. `"2 yr 9 mo"`. */
export function formatDurationShort(value: DurationValue): string {
  if (!isRange(value)) return value;
  const { years, months } = splitYearsMonths(value);
  const parts: string[] = [];
  if (years) parts.push(`${years} yr`);
  if (months || !years) parts.push(`${months} mo`);
  return parts.join(" ");
}
