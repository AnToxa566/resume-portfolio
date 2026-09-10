"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Role } from "@/data";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";
import { formatDurationShort } from "@/lib/duration";

export function ExperienceAccordion({ roles }: { roles: Role[] }) {
  const [openId, setOpenId] = useState<string | null>(roles[0]?.id ?? null);

  return (
    <div>
      {roles.map((role) => {
        const isOpen = role.id === openId;
        const panelId = `role-panel-${role.id}`;
        const buttonId = `role-button-${role.id}`;

        return (
          <div
            key={role.id}
            className={cn(
              "border-b border-l-2 border-line transition-colors",
              isOpen
                ? "border-l-signal bg-surface"
                : "border-l-transparent hover:border-l-line",
            )}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : role.id)}
              className={cn(
                "group flex w-full cursor-pointer flex-wrap items-baseline gap-x-5 gap-y-2 px-5 py-[22px] text-left transition-colors",
                !isOpen && "hover:bg-surface",
              )}
            >
              <span className="shrink-0 grow-0 basis-[170px] font-mono text-xs text-muted">
                {role.period}
              </span>
              <span className="grow basis-[240px] font-medium text-ink">
                {role.title}
              </span>
              <span className="flex flex-none items-center gap-2 whitespace-nowrap text-sm text-muted">
                <a
                  href={role.companyHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={(event) => event.stopPropagation()}
                  className="inline-flex items-center gap-2.5 rounded text-muted transition-colors hover:text-ink"
                >
                  <Image
                    src={role.logo}
                    alt={`${role.company} logo`}
                    width={20}
                    height={20}
                    className="size-5 flex-none rounded border border-line object-cover"
                  />
                  {role.company}
                </a>
                <span>·</span>
                <span>{role.location}</span>
              </span>
              <span
                className={cn(
                  "ml-auto font-mono text-sm text-muted transition-colors",
                  !isOpen && "group-hover:text-ink",
                )}
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="flex flex-wrap justify-between items-start gap-x-12 gap-y-8 px-5 pb-7"
              >
                <ul className="flex min-w-0 max-w-[62ch] flex-[1_1_380px] list-disc flex-col gap-2.5 pl-[18px] text-[15px] text-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <aside className="flex max-w-[400px] flex-[1_1_280px] flex-col gap-6 border-l border-line pl-6 [&>*:not(:first-child)]:border-t [&>*:not(:first-child)]:border-line [&>*:not(:first-child)]:pt-5">
                  {role.metrics && role.metrics.length > 0 && (
                    <div>
                      <p className="mb-3.5 font-mono text-xs font-medium tracking-[0.12em] text-signal">
                        IMPACT
                      </p>
                      <div className="flex flex-col gap-3.5">
                        {role.metrics.map((metric) => (
                          <div
                            key={metric.label}
                            className="flex items-baseline justify-between gap-3"
                          >
                            <span className="font-mono text-xs text-muted">
                              {metric.label}
                            </span>
                            <span className="font-mono text-sm text-ink">
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {role.details && role.details.length > 0 && (
                    <div>
                      <p className="mb-3 font-mono text-xs font-medium tracking-[0.12em] text-muted">
                        DETAILS
                      </p>
                      <div className="flex flex-col gap-2.5">
                        {role.details.map((detail) => (
                          <div
                            key={detail.label}
                            className="flex justify-between gap-3 font-mono text-xs text-muted"
                          >
                            <span>{detail.label}</span>
                            <span className="text-ink">
                              {formatDurationShort(detail.value)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <p className="mb-3 font-mono text-xs font-medium tracking-[0.12em] text-muted">
                      STACK
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {role.tech.map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                    {role.caseStudySlug && (
                      <Link
                        href={`/work/${role.caseStudySlug}`}
                        className="mt-4 inline-block font-mono text-xs tracking-[0.08em] text-signal"
                      >
                        READ THE CASE STUDY ↗
                      </Link>
                    )}
                  </div>
                </aside>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
