import Image from "next/image";

import { aboutData } from "@/data";
import { Section } from "@/components/section";

export function AboutNow() {
  const { now } = aboutData;

  return (
    <Section label={now.label}>
      <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] leading-[1.1] display">
        {now.heading}
      </h2>
      <p className="mt-5 mb-10 max-w-[62ch] text-pretty text-muted">{now.body}</p>
      <div className="relative aspect-[21/9] overflow-hidden rounded-lg border border-line">
        <Image
          src={now.image}
          alt={now.heading}
          fill
          sizes="(min-width: 1024px) 960px, 100vw"
          className="object-cover"
        />
      </div>
    </Section>
  );
}
