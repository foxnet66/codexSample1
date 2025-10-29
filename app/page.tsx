import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { projects } from "@/lib/mockData";

export default function HomePage() {
  return (
    <div className="space-y-20 pb-24">
      <Section
        id="hero"
        contentClassName="grid items-center gap-12 lg:grid-cols-[1.2fr,0.8fr]"
        eyebrow="Digital product studio"
        title="We craft experiences that move brands forward"
        description="Our multidisciplinary team partners with ambitious founders and product teams to ship polished apps, websites, and immersive interactive experiences."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-400"
              href="#projects"
            >
              View showcase
              <ArrowRightIcon className="h-4 w-4" />
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-500 hover:text-primary-200"
              href="#contact"
            >
              Start a project
            </a>
          </div>
        }
      >
        <div className="grid grid-cols-2 gap-3 text-sm text-slate-300 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center">
            120+ products launched
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center">
            Trusted by YC & Fortune 500
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 text-center md:col-span-1 col-span-2">
            Global remote team in 6 timezones
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Selected work"
        title="Product stories"
        description="A sampling of web, mobile, and interactive experiences launched for our partners."
      >
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Section>

      <Section
        id="about"
        eyebrow="Our team"
        title="Designers, engineers, and strategists working as one"
        description="We’re a distributed collective of senior product experts with backgrounds spanning top tech companies, award-winning studios, and high-growth startups."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Integrated squads</h3>
            <p className="mt-2 text-sm text-slate-300">
              Cross-disciplinary pods plug into your roadmap with product, design, and engineering leaders embedded alongside your team.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Global perspective</h3>
            <p className="mt-2 text-sm text-slate-300">
              Strategists and makers across the US, Europe, and APAC bring around-the-clock momentum without sacrificing craft.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <h3 className="text-lg font-semibold text-white">Outcome driven</h3>
            <p className="mt-2 text-sm text-slate-300">
              Every engagement is benchmarked on measurable business and customer outcomes, not just deliverables.
            </p>
          </div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="Capabilities"
        title="From discovery to launch"
        description="We combine strategy, design, and engineering to ship products that delight."
      >
        <dl className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Product strategy</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Research, discovery workshops, and product roadmapping to align teams and uncover insights that accelerate growth.
            </dd>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Design systems</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Scalable component libraries, accessible UI patterns, and motion guidelines to ensure consistent brand expression.
            </dd>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Full-stack engineering</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Web, mobile, and immersive builds leveraging modern frameworks with performance, security, and maintainability baked in.
            </dd>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Growth & experimentation</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Analytics infrastructure, iterative testing, and lifecycle marketing support to evolve products post-launch.
            </dd>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Emerging tech</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Rapid prototyping across AI, Web3, and spatial computing to help teams explore future-facing opportunities.
            </dd>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">
            <dt className="text-lg font-semibold text-white">Team augmentation</dt>
            <dd className="mt-3 text-sm text-slate-300">
              Embedded squads of designers and engineers to accelerate roadmaps and mentor internal teams.
            </dd>
          </div>
        </dl>
      </Section>

      <Section
        id="contact"
        eyebrow="Let’s build together"
        title="Ready to collaborate?"
        description="Tell us about your next product initiative and we’ll schedule a workshop to align on vision and outcomes."
        actions={
          <form className="grid gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 md:grid-cols-[1fr,1fr]">
            <label className="flex flex-col text-sm text-slate-300">
              Name
              <input
                type="text"
                placeholder="Ada Lovelace"
                className="mt-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-primary-500"
              />
            </label>
            <label className="flex flex-col text-sm text-slate-300">
              Email
              <input
                type="email"
                placeholder="you@company.com"
                className="mt-2 rounded-full border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-primary-500"
              />
            </label>
            <label className="md:col-span-2 flex flex-col text-sm text-slate-300">
              Project details
              <textarea
                placeholder="We’re looking to launch a cross-platform product..."
                rows={4}
                className="mt-2 rounded-3xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-primary-500"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-500 md:col-span-2"
            >
              Book intro call
            </button>
          </form>
        }
      />
    </div>
  );
}
