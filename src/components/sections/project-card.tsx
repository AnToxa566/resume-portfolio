import Link from "next/link";
import type { Project } from "@/data";
import { Placeholder } from "@/components/ui/placeholder";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { ProjectLinkRow } from "./project-links";

const cardClass =
  "rounded-lg border border-line p-4 transition-colors hover:border-signal";

function TechRow({ tech, className }: { tech: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tech.map((item) => (
        <Tag key={item}>{item}</Tag>
      ))}
    </div>
  );
}

function CardImage({ project }: { project: Project }) {
  const image = (
    <Placeholder
      ratio="16/10"
      label={project.image}
      interactive={Boolean(project.links.caseStudy)}
    />
  );

  if (!project.links.caseStudy) return image;

  return (
    <Link
      href={project.links.caseStudy}
      className="group block overflow-hidden rounded-lg"
    >
      {image}
    </Link>
  );
}

export function ProjectCard({
  project,
  variant,
}: {
  project: Project;
  variant: "featured" | "compact";
}) {
  const title = project.links.caseStudy ? (
    <Link href={project.links.caseStudy}>{project.name}</Link>
  ) : (
    project.name
  );

  if (variant === "featured") {
    return (
      <article className={cardClass}>
        <CardImage project={project} />
        <div className="mt-6 flex flex-wrap items-start justify-between gap-6 px-2 pb-2">
          <div className="min-w-0 flex-1 basis-[380px]">
            <h3 className="text-[28px] leading-[1.15] display">{title}</h3>
            <p className="mt-2.5 max-w-[52ch] text-[15px] text-muted">
              {project.summary}
            </p>
            <TechRow tech={project.tech} className="mt-5" />
          </div>
          <ProjectLinkRow links={project.links} className="gap-5 pt-1.5" />
        </div>
      </article>
    );
  }

  return (
    <article className={cardClass}>
      <CardImage project={project} />
      <div className="px-2 pb-2 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-xl display">{title}</h3>
            {project.status && <Tag tone="signal">{project.status}</Tag>}
          </div>
          <ProjectLinkRow
            links={project.links}
            showCaseStudy={false}
            className="gap-4"
          />
        </div>
        <p className="mt-2 max-w-[46ch] text-sm text-muted">{project.summary}</p>
        <TechRow tech={project.tech} className="mt-4" />
      </div>
    </article>
  );
}
