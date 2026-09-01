import Link from "next/link";
import { profileData } from "@/data";
import { Section } from "@/components/section";

export function About() {
  const { about } = profileData;

  return (
    <Section label="About">
      <p className="max-w-[62ch] text-pretty text-[20px] leading-[1.6] text-ink">
        {about.text}
      </p>
      <Link
        href={about.href}
        className="mt-6 inline-flex items-center gap-2.5 text-[15px] text-ink transition-colors hover:text-signal"
      >
        {about.linkLabel}
        <span className="text-signal">→</span>
      </Link>
    </Section>
  );
}
