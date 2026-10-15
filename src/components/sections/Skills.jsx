import { Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { skillGroups } from '../../data/skills.js';

export default function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="border-t border-white/10 py-16 md:py-24">
      <PageContainer>
        <SectionHeading
          id="skills-heading"
          eyebrow="Skills"
          title="What I work with"
          lede="Grouped by practice. Update src/data/skills.js to match tools you actually use — no fake percentages."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((g) => (
            <li key={g.title} className="card-line rounded-2xl p-5">
              <h3 className="font-mono text-xs tracking-[0.16em] text-[#f9c95c] uppercase">{g.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {g.skills.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-white/75">
                    <Check size={15} aria-hidden="true" className="mt-0.5 shrink-0 text-[#f5a623]" />
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
