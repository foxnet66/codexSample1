import type { ReactNode } from "react";
import clsx from "clsx";

interface SectionProps {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  contentClassName?: string;
  children?: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  description,
  actions,
  contentClassName,
  children
}: SectionProps) {
  return (
    <section id={id} className="space-y-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl space-y-3">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">{eyebrow}</p> : null}
          <h2 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">{title}</h2>
          {description ? <p className="text-base text-slate-300">{description}</p> : null}
        </div>
        {actions ? <div className="max-w-xl">{actions}</div> : null}
      </div>
      <div className={clsx("space-y-6", contentClassName)}>{children}</div>
    </section>
  );
}
