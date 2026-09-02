import { SiteHeader } from "@/components/site-header";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export default function CaseStudyNotFound() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          <section className="flex min-h-[60vh] flex-col justify-center py-[clamp(4rem,10vw,8rem)]">
            <SectionLabel>404</SectionLabel>
            <h1 className="mt-6 max-w-[20ch] text-[clamp(2rem,5vw,3rem)] leading-[1.1] display">
              No case study lives here
            </h1>
            <p className="mt-5 max-w-[52ch] text-pretty text-muted">
              The project you followed a link to doesn&rsquo;t have a write-up —
              or the URL is off by a character.
            </p>
            <div className="mt-9">
              <ButtonLink href="/#work" variant="outline">
                ← All work
              </ButtonLink>
            </div>
          </section>
        </Container>
      </main>
    </>
  );
}
