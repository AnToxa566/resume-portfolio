import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/cn";
import { isImageSrc } from "@/lib/image";
import type { Project } from "@/data";

import { Tag } from "@/components/ui/tag";
import { Placeholder } from "@/components/ui/placeholder";

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

function CardImage({
  project,
  variant,
}: {
  project: Project;
  variant: "featured" | "compact";
}) {
  const interactive = Boolean(project.links.caseStudy);

  const media = isImageSrc(project.image) ? (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-lg border border-line",
        // Compact cards keep the 16/10 slot. The full-width featured card would
        // run taller than the viewport at that ratio, so it gets a fixed,
        // clamped height instead and lets `object-cover` crop — still edge to edge.
        variant === "featured"
          ? "h-[clamp(220px,40vw,460px)]"
          : "aspect-[16/10]",
        interactive &&
          "brightness-90 transition-[filter,transform] duration-[250ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.02] group-hover:brightness-100",
      )}
    >
      <Image
        fill
        alt={project.name}
        src={project.image}
        className="object-cover"
        sizes="(min-width: 880px) 720px, 100vw"
      />
    </div>
  ) : (
    <Placeholder
      ratio="16/10"
      label={project.image ?? project.name}
      interactive={interactive}
    />
  );

  if (!project.links.caseStudy) return media;

  return (
    <Link
      href={project.links.caseStudy}
      className="group block overflow-hidden rounded-lg"
    >
      {media}
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
        <CardImage project={project} variant={variant} />
        <div className="mt-6 px-2 pb-2">
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-[28px] leading-[1.15] display">
              {title}
            </h3>
            <ProjectLinkRow links={project.links} className="gap-5 pt-1.5" />
          </div>
          <p className="mt-2.5 max-w-[52ch] text-[15px] text-muted">
            {project.summary}
          </p>
          <TechRow tech={project.tech} className="mt-5" />
        </div>
      </article>
    );
  }

  return (
    <article className={cardClass}>
      <CardImage project={project} variant={variant} />
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
