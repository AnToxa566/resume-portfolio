import { profileData } from "@/data";
import { ButtonLink, type Size, type Variant } from "@/components/ui/button";

interface DownloadCvButtonProps {
  /** Defaults to `"outline"` — pass only to override. */
  variant?: Variant;
  /** Defaults to `"md"` — pass only to override (the header uses `"sm"`). */
  size?: Size;
  className?: string;
}

/**
 * The "Download CV" call to action, shared by the header, hero and about intro.
 * Points at `profileData.cvHref` (an external Drive link, so it opens in a new
 * tab) and keeps its own default variant/size.
 */
export function DownloadCvButton({
  variant = "outline",
  size = "md",
  className,
}: DownloadCvButtonProps) {
  return (
    <ButtonLink
      size={size}
      variant={variant}
      className={className}
      href={profileData.cvHref}
      target="_blank"
    >
      Download CV
    </ButtonLink>
  );
}
