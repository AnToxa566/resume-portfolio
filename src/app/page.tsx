import { SiteHeader } from "@/components/site-header";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Stack } from "@/components/sections/stack";
import { Work } from "@/components/sections/work";
import { Container } from "@/components/ui/container";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          <Hero />
          <Work />
          <Experience />
          <Stack />
          <About />
          <Contact />
        </Container>
      </main>
    </>
  );
}
