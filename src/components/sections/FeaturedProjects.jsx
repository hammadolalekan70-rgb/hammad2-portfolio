import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { ProjectGrid } from '../projects/ProjectCard.jsx';

export default function FeaturedProjects({ items }) {
  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-20 py-16 md:py-24">
      <PageContainer>
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              id="work-heading"
              eyebrow="Selected work"
              title="Featured projects"
              lede="Each card links to a full case study — problem, architecture, decisions, and honest outcomes."
            />
            <Link
              to="/projects"
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#f5a623]/40 px-4 py-2 text-sm text-white/80 transition-colors hover:border-[#f5a623] hover:text-white"
            >
              All projects <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8">
            <ProjectGrid items={items} />
          </div>
        </Reveal>
      </PageContainer>
    </section>
  );
}
