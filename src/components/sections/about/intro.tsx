import { aboutData } from "@/data";
import { ButtonLink } from "@/components/ui/button";
import { DownloadCvButton } from "@/components/download-cv-button";
import { Placeholder } from "@/components/ui/placeholder";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutIntro() {
  const { label, headline, intro, portraitLabel, cta, facts } = aboutData;

  return (
    <>
      <section className="flex flex-wrap items-start gap-[clamp(2rem,5vw,4rem)] pt-[clamp(3.5rem,9vw,6rem)] pb-[clamp(2.5rem,6vw,4rem)]">
        <div className="min-w-0 flex-1 basis-[460px]">
          <p className="flex animate-rise items-center gap-2.5 font-mono text-xs tracking-[0.12em] text-muted">
            <span className="size-1.5 flex-none rounded-full bg-signal" />
            {label}
          </p>

          <h1 className="mt-6 max-w-[18ch] animate-rise text-[clamp(2.125rem,5vw,3.25rem)] leading-[1.08] [animation-delay:60ms] display">
            {headline}
          </h1>

          {intro.map((paragraph, i) => (
            <p
              key={i}
              className={`${i === 0 ? "mt-7" : "mt-5"} max-w-[62ch] animate-rise text-pretty text-muted [animation-delay:120ms]`}
            >
              {paragraph}
            </p>
          ))}

          <div className="mt-9 flex animate-rise flex-wrap gap-3 [animation-delay:180ms]">
            <ButtonLink href={cta.href}>{cta.label}</ButtonLink>
            <DownloadCvButton />
          </div>
        </div>

        <div className="animate-rise basis-[400px] min-w-[260px] grow-0 [animation-delay:220ms]">
          <Placeholder ratio="4/5" label={portraitLabel} />
        </div>
      </section>

      <section className="grid animate-rise grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-px overflow-hidden rounded-lg border border-line bg-line [animation-delay:280ms]">
        {facts.map((fact) => (
          <div key={fact.label} className="bg-bg p-6">
            <SectionLabel>{fact.label}</SectionLabel>
            <div className="mt-2.5 text-[15px] text-ink">{fact.value}</div>
          </div>
        ))}
      </section>
    </>
  );
}
