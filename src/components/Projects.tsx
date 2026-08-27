import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { projects, type Project } from "../data/resumeData";
import { DoodleUnderline, DoodleCloud } from "./Doodles";

function isPlaceholder(url: string) {
  return url.startsWith("PLACEHOLDER");
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="mt-4 flex flex-wrap gap-3">
      {project.links.map((link) => {
        const disabled = isPlaceholder(link.url);
        const Icon = link.label.toLowerCase().includes("github") ? Github : ExternalLink;
        return (
          <a
            key={link.label}
            href={disabled ? undefined : link.url}
            target={disabled ? undefined : "_blank"}
            rel={disabled ? undefined : "noopener noreferrer"}
            aria-disabled={disabled}
            title={disabled ? "Link not yet added" : link.label}
            className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              disabled
                ? "cursor-not-allowed border-white/5 text-ink-500"
                : "border-white/15 text-ink-100 hover:border-brand-cyan/60 hover:text-brand-cyan"
            }`}
          >
            <Icon size={13} />
            {link.label}
          </a>
        );
      })}
    </div>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-navy-900/60 p-8 shadow-glow-sm transition-colors hover:border-brand-violet/50 sm:p-10"
    >
      <DoodleCloud className="pointer-events-none absolute right-6 top-6 h-10 w-16 text-brand-cyan/20" />

      <span className="inline-flex items-center rounded-full bg-brand-gradient px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
        Featured Project
      </span>

      <h3 className="mt-4 font-display text-2xl font-bold text-ink-100 sm:text-3xl">{project.name}</h3>
      <p className="mt-1 text-sm text-brand-cyan">{project.category}</p>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-300 sm:text-base">
        {project.description}
      </p>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.highlights.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-ink-300">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-violet" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-ink-100"
          >
            {tech}
          </span>
        ))}
      </div>

      <ProjectLinks project={project} />
    </motion.article>
  );
}

function StandardProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/50 p-6 transition-colors hover:border-brand-cyan/40"
    >
      <h3 className="font-display text-xl font-semibold text-ink-100">{project.name}</h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-brand-violet">
        {project.category}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-ink-300">{project.description}</p>

      <ul className="mt-4 space-y-1.5">
        {project.highlights.slice(0, 4).map((point) => (
          <li key={point} className="flex gap-2 text-xs text-ink-300">
            <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brand-cyan" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-ink-300"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-auto pt-4">
        <ProjectLinks project={project} />
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="relative py-28">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative mb-14 inline-block"
        >
          <h2 className="font-display text-3xl font-bold text-ink-100 sm:text-4xl">Things I&apos;ve Built</h2>
          <DoodleUnderline className="mt-1 h-3 w-full text-brand-blue/60" />
        </motion.div>

        <div className="space-y-6">
          {featured && <FeaturedProjectCard project={featured} />}
          <div className="grid gap-6 sm:grid-cols-2">
            {rest.map((project, index) => (
              <StandardProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
