import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer.jsx';
import ProjectDetails from '../components/projects/ProjectDetails.jsx';
import { getProject, projects } from '../data/projects.js';
import NotFound from './NotFound.jsx';

export default function CaseStudyPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) return <NotFound />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <main className="pt-28 pb-20">
      <PageContainer>
        <div className="flex items-center justify-between gap-3">
          <Link to="/projects" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-white/60 hover:text-white">
            <ArrowLeft size={15} aria-hidden="true" /> All projects
          </Link>
          <Link to="/" className="text-sm text-white/60 hover:text-white">
            Home
          </Link>
        </div>
        <p className="eyebrow mt-6">Case study</p>
        <h1 className="font-display mt-2 max-w-3xl text-3xl text-white text-balance md:text-5xl">{project.title}</h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-white/60">{project.description}</p>
        <div className="mt-8">
          <ProjectDetails project={project} />
        </div>
        {next && next.slug !== project.slug ? (
          <aside className="mt-14 rounded-2xl border border-white/10 p-6">
            <p className="font-mono text-xs tracking-[0.16em] text-white/40 uppercase">Next case study</p>
            <Link
              to={`/projects/${next.slug}`}
              className="mt-2 inline-flex items-center gap-2 font-display text-xl text-white hover:text-[#f9c95c]"
            >
              {next.title} <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </aside>
        ) : null}
      </PageContainer>
    </main>
  );
}
