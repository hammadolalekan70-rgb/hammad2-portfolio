import SectionHeading from '../ui/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import Badge from '../ui/Badge.jsx';
import { experience, education } from '../../data/experience.js';

export default function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-20 border-t border-white/10 py-16 md:py-24"
    >
      <PageContainer className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <SectionHeading
            id="experience-heading"
            eyebrow="Experience"
            title="Background"
            lede="Three years shipping to production — from React foundations to full-stack systems and team launches."
          />
          <ol className="mt-8 space-y-4">
            {experience.map((job) => (
              <li key={job.role} className="card-line rounded-2xl p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-mono text-xs tracking-wider text-white/40 uppercase">{job.period}</p>
                  {job.placeholder ? <Badge>Placeholder — edit me</Badge> : null}
                </div>
                <h3 className="mt-2 font-display text-lg text-white">{job.role}</h3>
                <p className="text-sm text-white/50">{job.org}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-white/65">{job.summary}</p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/60">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
        <aside className="lg:pt-[104px]">
          <div className="card-line rounded-2xl p-6">
            <h3 className="font-mono text-xs tracking-[0.16em] text-[#f9c95c] uppercase">Education & learning</h3>
            <ul className="mt-4 space-y-4">
              {education.map((e) => (
                <li key={e.title}>
                  <p className="text-sm font-semibold text-white">{e.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">{e.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </PageContainer>
    </section>
  );
}
