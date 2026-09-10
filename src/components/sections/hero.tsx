import { profileData } from "@/data";
import { ButtonLink } from "@/components/ui/button";
import { DownloadCvButton } from "@/components/download-cv-button";
import { HeroGrid } from "@/components/ui/hero-grid";
import { Metric } from "@/components/ui/metric";
import { Placeholder } from "@/components/ui/placeholder";

export function Hero() {
  const { hero } = profileData;

  return (
    <>
      <section className="relative isolate grid grid-cols-1 items-center gap-[clamp(2.5rem,5vw,4rem)] pt-[clamp(3.5rem,9vw,6rem)] pb-[clamp(2.5rem,6vw,4rem)] min-[880px]:grid-cols-[minmax(0,1.35fr)_minmax(0,0.75fr)]">
        <HeroGrid />
        <div>
          <p className="flex animate-rise items-center gap-2.5 font-mono text-xs tracking-[0.12em] text-muted">
            <span className="size-1.5 flex-none rounded-full bg-signal" />
            {hero.status}
          </p>

          <h1 className="mt-6 max-w-[16ch] animate-rise text-[clamp(2.375rem,6.4vw,4rem)] leading-[1.05] [animation-delay:60ms] display">
            {hero.headline}
          </h1>

          <p className="mt-8 max-w-[62ch] animate-rise text-pretty text-muted [animation-delay:120ms]">
            {hero.intro}
          </p>

          <div className="mt-10 flex animate-rise flex-wrap gap-3 [animation-delay:180ms]">
            <ButtonLink href="#contact">Get in touch</ButtonLink>
            <DownloadCvButton />
          </div>
        </div>

        <div className="animate-rise [animation-delay:220ms]">
          <Placeholder ratio="4/5" align="start" label={hero.portraitLabel} />
        </div>
      </section>

      <section className="grid animate-rise grid-cols-[repeat(auto-fit,minmax(230px,1fr))] gap-px border-y border-line [animation-delay:280ms]">
        {hero.stats.map((stat) => (
          <Metric
            key={stat.caption}
            value={stat.value}
            from={stat.from}
            to={stat.to}
            caption={stat.caption}
            className="bg-bg px-6 py-7 first:pl-0 last:pr-0"
          />
        ))}
      </section>
    </>
  );
}
