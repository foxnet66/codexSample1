import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import type { Project } from "@/lib/mockData";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 transition hover:-translate-y-1 hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/20">
      <div className="relative h-56 w-full overflow-hidden bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
        <div className="absolute bottom-3 left-3 inline-flex items-center rounded-full bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-200">
          {project.tag}
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-2 text-sm text-slate-300">{project.description}</p>
        </div>
        <dl className="grid gap-3 text-xs text-slate-400 sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-slate-200">Platform</dt>
            <dd>{project.platform}</dd>
          </div>
          <div>
            <dt className="font-semibold text-slate-200">Services</dt>
            <dd>{project.services.join(", ")}</dd>
          </div>
        </dl>
        <a
          href={project.url}
          className="mt-auto inline-flex items-center justify-between rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-primary-500 hover:text-primary-200"
        >
          View case study
          <ArrowUpRightIcon className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
