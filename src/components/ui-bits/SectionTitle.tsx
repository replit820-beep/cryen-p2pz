import type { ReactNode } from "react";

export function SectionTitle({ title, action }: { title: string; action?: ReactNode }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <span className="block w-1 h-5 rounded-full bg-grad-primary glow" />
        <h2 className="font-bold text-base">{title}</h2>
      </div>
      {action}
    </div>
  );
}
