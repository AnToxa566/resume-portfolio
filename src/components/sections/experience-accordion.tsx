"use client";

import { useState } from "react";
import type { Role } from "@/data";
import { Metric } from "@/components/ui/metric";
import { Tag } from "@/components/ui/tag";
import { cn } from "@/lib/cn";

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
              isOpen ? "border-l-signal bg-surface" : "border-l-transparent",
            )}
          >
            <button
              type="button"
              id={buttonId}
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenId(isOpen ? null : role.id)}
              className="flex w-full flex-wrap items-baseline gap-x-5 gap-y-2 px-5 py-[22px] text-left"
            >
              <span className="shrink-0 grow-0 basis-[170px] font-mono text-xs text-muted">
                {role.period}
              </span>
              <span className="grow basis-[240px] font-medium text-ink">
                {role.title}
              </span>
              <span className="flex items-center gap-2.5 text-sm text-muted">
                <span className="flex size-5 items-center justify-center rounded border border-line font-mono text-[10px] text-muted">
                  {role.badge}
                </span>
                {role.company} · {role.location}
              </span>
              <span className="ml-auto font-mono text-sm text-muted">
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-5 pb-7"
              >
                <ul className="flex max-w-[70ch] list-disc flex-col gap-2.5 pl-[18px] text-[15px] text-muted">
                  {role.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                {role.metrics && role.metrics.length > 0 && (
                  <div className="mt-7 flex flex-wrap gap-8 rounded-md border border-line p-5">
                    {role.metrics.map((metric) => (
                      <Metric
                        key={metric.label}
                        from={metric.from}
                        to={metric.to}
                        caption={metric.label}
                      />
                    ))}
                  </div>
                )}

                <div className="mt-6 flex flex-wrap gap-2">
                  {role.tech.map((item) => (
                    <Tag key={item}>{item}</Tag>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
