import type { Metadata } from "next";

import { SiteHeader } from "@/components/site-header";
import { Contact } from "@/components/sections/contact";
import { AboutIntro } from "@/components/sections/about/intro";
import { AboutNow } from "@/components/sections/about/now";
import { AboutPrinciples } from "@/components/sections/about/principles";
import { AboutTimeline } from "@/components/sections/about/timeline";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "About — Anton Bohachuk",
  description:
    "Full stack engineer building production web apps end-to-end — architecture through deployment and monitoring — and reading the dashboards after. Based in Varna, Bulgaria.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <Container>
          <AboutIntro />
          <AboutPrinciples />
          <AboutTimeline />
          <AboutNow />
          <Contact />
        </Container>
      </main>
    </>
  );
}
