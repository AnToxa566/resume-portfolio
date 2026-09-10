import Link from "next/link";
import type { ComponentProps } from "react";

import { cn } from "@/lib/cn";

export type Variant = "primary" | "outline";
export type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium transition-[color,background-color,border-color,filter]";

const variantClass: Record<Variant, string> = {
  primary: "bg-signal text-bg hover:brightness-[1.08]",
  outline: "border border-line text-ink hover:border-signal",
};

const sizeClass: Record<Size, string> = {
  sm: "px-3.5 py-[7px] text-[13px]",
  md: "px-[22px] py-[11px] text-[15px]",
};

function buttonClass(variant: Variant, size: Size, className?: string) {
  return cn(base, variantClass[variant], sizeClass[size], className);
}

interface ButtonLinkProps extends ComponentProps<typeof Link> {
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}

interface ButtonProps extends ComponentProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonClass(variant, size, className)}
      {...props}
    />
  );
}
