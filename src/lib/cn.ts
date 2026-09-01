export type ClassValue = string | false | null | undefined;

/** Minimal className joiner — no dependency, no tailwind-merge semantics. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
