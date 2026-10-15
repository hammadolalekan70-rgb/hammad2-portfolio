import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import PageContainer from '../components/layout/PageContainer.jsx';
import SectionHeading from '../components/ui/SectionHeading.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import { ProjectGrid } from '../components/projects/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { site } from '../config/site.js';
import { cx } from '../lib/cx.js';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'backend', label: 'Backend' },
  { value: 'realtime', label: 'Realtime' },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('all');
  const items = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.type === filter)),
    [filter],
  );

  return (
    <main className="pt-28 pb-20">
      <PageContainer>
        <Link to="/" className="inline-flex min-h-[44px] items-center gap-1.5 text-sm text-white/60 hover:text-white">
          <ArrowLeft size={15} aria-hidden="true" /> Back home
        </Link>
        <div className="mt-4">
          <SectionHeading
            eyebrow="Archive"
            title="All projects"
            lede="Four products live in production — storefront, API, realtime chat, and a real-estate marketplace."
          />
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by type">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              type="button"
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
              className={cx(
                'inline-flex min-h-[40px] items-center rounded-full border px-4 py-1.5 text-sm transition-colors',
                filter === f.value
                  ? 'border-[#f5a623] bg-[#f5a623]/15 font-semibold text-[#f9c95c]'
                  : 'border-white/15 text-white/65 hover:border-white/35 hover:text-white',
              )}
            >
              {f.label}
            </button>
          ))}
          <p aria-live="polite" className="ml-1 text-xs text-white/40">
            Showing {items.length} of {projects.length}
          </p>
        </div>

        <div className="mt-8">
          <ProjectGrid items={items} />
        </div>

        <Reveal>
          <div className="card-line mt-10 flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-xl text-white">Have something to build?</h2>
              <p className="mt-1 text-sm text-white/60">
                Storefront, API, realtime chat, or marketplace — let’s talk about yours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="btn-shine inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#0b1a2e] hover:bg-[#f9c95c]"
              >
                <MessageCircle size={16} aria-hidden="true" /> WhatsApp me
              </a>
              <Link
                to="/contact"
                className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/85 hover:border-white/35 hover:text-white"
              >
                Contact <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>
      </PageContainer>
    </main>
  );
}
