import { workData } from "@/data";
import { Section } from "@/components/section";
import { AlsoShipped } from "./also-shipped";
import { ProjectCard } from "./project-card";

export function Work() {
  return (
    <Section id="work" label="Work">
      <ProjectCard project={workData.featured} variant="featured" />

      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        {workData.projects.map((project) => (
          <ProjectCard key={project.name} project={project} variant="compact" />
        ))}
      </div>

      <AlsoShipped items={workData.alsoShipped} />
    </Section>
  );
}
