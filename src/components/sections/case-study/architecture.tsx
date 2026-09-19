import type { CaseStudyDiagram, CaseStudyDiagramNode } from "@/data";
import { cn } from "@/lib/cn";
import { SectionLabel } from "@/components/ui/section-label";

/**
 * A top-to-bottom request/data flow: rows of boxes joined by connectors, one of
 * which can be an accent "phase" divider carrying a label. Presentational and
 * data-driven — every case study describes its own diagram in JSON.
 */
export function Architecture({ diagram }: { diagram: CaseStudyDiagram }) {
  return (
    <div className="rounded-lg border border-line p-[clamp(1.25rem,3vw,2rem)]">
      <SectionLabel>{diagram.label}</SectionLabel>

      <div className="mt-7 flex flex-col items-center">
        {diagram.nodes.map((node, i) => (
          <DiagramNode key={i} node={node} first={i === 0} />
        ))}
      </div>
    </div>
  );
}

function DiagramNode({
  node,
  first,
}: {
  node: CaseStudyDiagramNode;
  first: boolean;
}) {
  const single = node.boxes.length === 1;

  return (
    <>
      {!first && <Connector kind={node.connector} label={node.connectorLabel} />}

      <div
        className={cn(
          "flex w-full flex-wrap justify-center",
          single ? "" : "gap-3",
        )}
      >
        {node.boxes.map((box, i) => (
          <div
            key={i}
            className={cn(
              "rounded-md border border-line px-4 py-3.5 text-center",
              single ? "w-full max-w-[520px]" : "min-w-[150px] flex-1 basis-[150px]",
              node.muted ? "text-muted" : "bg-surface",
            )}
          >
            <div
              className={cn(
                "font-mono text-[13px]",
                node.muted ? "text-muted" : "font-medium text-ink",
              )}
            >
              {box.title}
            </div>
            {box.subtitle && (
              <div className="mt-1 font-mono text-xs text-muted">
                {box.subtitle}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

function Connector({
  kind = "plain",
  label,
}: {
  kind?: "plain" | "signal";
  label?: string;
}) {
  if (kind === "signal") {
    return (
      <div className="flex flex-col items-center gap-1.5 py-3">
        <span className="block h-5 w-px bg-signal" />
        {label && (
          <span className="font-mono text-[11px] tracking-[0.08em] text-signal">
            {label}
          </span>
        )}
        <span className="block h-5 w-px bg-signal" />
      </div>
    );
  }

  return <span className="my-3 block h-7 w-px bg-line" />;
}
