import { ArrowUpRight, Code2, Server } from 'lucide-react';
import Badge from '../ui/Badge.jsx';

/**
 * Reusable case-study body: problem → approach → decisions → challenges → outcome.
 */
export default function ProjectDetails({ project }) {
  const sections = [
    ['Problem', project.problem],
    ['Approach & architecture', project.approach],
    ['Challenges', project.challenges],
    ['Outcome', project.outcome],
  ];
  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-xs tracking-[0.16em] text-white/40 uppercase">{project.year}</span>
        {project.placeholder ? <Badge>Example entry — replace with real work</Badge> : null}
        <span className="ml-auto flex gap-2">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-white/35"
            >
              Live demo <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 text-sm text-white/85 hover:border-white/35"
            >
              <Code2 size={15} aria-hidden="true" /> Code
            </a>
          ) : null}
          {project.apiUrl ? (
            <a
              href={project.apiUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#f5a623]/50 px-4 py-2 text-sm font-medium text-[#f9c95c] hover:bg-[#f5a623]/10"
            >
              <Server size={15} aria-hidden="true" /> Live API
            </a>
          ) : null}
        </span>
      </div>

      <ul aria-label="Technologies" className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </ul>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6">
        <h2 className="font-mono text-xs tracking-[0.16em] text-[#f9c95c] uppercase">My contributions</h2>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] text-white/75">
          {project.contributions.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <div className="mt-8 space-y-8">
        {sections.map(([title, body]) => (
          <section key={title}>
            <h2 className="font-display text-xl text-white">{title}</h2>
            <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-white/65">{body}</p>
          </section>
        ))}
        {project.decisions?.length ? (
          <section>
            <h2 className="font-display text-xl text-white">Key implementation decisions</h2>
            <ul className="mt-2 max-w-3xl list-disc space-y-1.5 pl-5 text-[15px] text-white/65">
              {project.decisions.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}
