import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Code2, Server } from 'lucide-react';
import Badge from '../ui/Badge.jsx';
import SectionHeading from '../ui/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';

export function ProjectCard({ project }) {
  return (
    <article className="card-line group flex flex-col overflow-hidden rounded-2xl transition-colors hover:border-[#f5a623]/50">
      <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-white/10 bg-[#143052]">
        <span aria-hidden="true" className="font-display text-6xl text-white/10 select-none">
          {project.title.slice(0, 2)}
        </span>
        <span aria-hidden="true" className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <span className="absolute top-3 left-3 flex gap-2">
          {project.placeholder ? <Badge>Example — replace me</Badge> : <Badge>{project.year}</Badge>}
        </span>
        {project.status === 'live' ? (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 rounded-full border border-[#f5a623]/50 bg-[#0b1a2e]/90 px-2.5 py-1 font-mono text-[11px] tracking-wide text-[#f9c95c]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" aria-hidden="true" />
            Live
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl text-white">
          <Link to={`/projects/${project.slug}`} className="transition-colors group-hover:text-[#f9c95c]">
            {project.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/60">{project.summary}</p>
        <ul aria-label="Technologies used" className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </ul>
        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4 text-sm">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex min-h-[40px] items-center gap-1 font-medium text-[#f9c95c] hover:underline"
          >
            Case study <ArrowRight size={15} aria-hidden="true" />
          </Link>
          <span className="ml-auto flex gap-1">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white"
              >
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ) : null}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} GitHub repository`}
                className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full text-white/60 hover:bg-white/5 hover:text-white"
              >
                <Code2 size={17} aria-hidden="true" />
              </a>
            ) : null}
            {project.apiUrl ? (
              <a
                href={project.apiUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live API endpoint`}
                title="Live API"
                className="inline-flex min-h-[40px] items-center gap-1 rounded-full border border-[#f5a623]/40 px-3 text-xs font-medium text-[#f9c95c] hover:bg-[#f5a623]/10"
              >
                <Server size={14} aria-hidden="true" /> API
              </a>
            ) : null}
          </span>
        </div>
      </div>
    </article>
  );
}

export function ProjectGrid({ items }) {
  if (!items.length) {
    return <p className="text-white/60">No projects yet. Add entries in src/data/projects.js.</p>;
  }
  return (
    <ul className="grid gap-5 md:grid-cols-2">
      {items.map((p) => (
        <li key={p.slug}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}

export default function FeaturedProjects({ items }) {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-20 py-16 md:py-24">
      <PageContainer>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="work-heading"
            eyebrow="Selected work"
            title="Featured projects"
            lede="Reusable case-study pages. Every entry below is an editable placeholder until replaced with real client or personal work."
          />
          <Link
            to="/projects"
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:border-white/35 hover:text-white"
          >
            All projects <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8">
          <ProjectGrid items={items} />
        </div>
      </PageContainer>
    </section>
  );
}
