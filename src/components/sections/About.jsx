import { MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { principles } from '../../data/skills.js';
import { site } from '../../config/site.js';
import portrait from '../../assets/portrait.jpeg';

export default function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-20 border-t border-white/10 py-16 md:py-24">
      <PageContainer>
        <div className="grid items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative mx-auto w-full max-w-[300px]">
              <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[#f5a623]/30" />
              <div className="anim-float">
                <img
                  src={portrait}
                  alt={site.portraitAlt}
                  width={600}
                  height={600}
                  loading="lazy"
                  className="aspect-square w-full rounded-[1.75rem] border-2 border-[#f5a623] object-cover shadow-2xl"
                />
              </div>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="absolute -bottom-4 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#f5a623] px-4 py-2 text-xs font-semibold whitespace-nowrap text-[#0b1a2e] shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle size={14} aria-hidden="true" /> {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <SectionHeading
              id="about-heading"
              eyebrow="About"
              title="Full-stack developer who sweats the details."
              lede={site.intro}
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/65">
              <p>
                I&apos;m {site.name}, a {site.role.toLowerCase()} working with React, modern JavaScript, and REST APIs.
                I like small, well-named modules, predictable state, and interfaces that respect the user&apos;s time
                and attention.
              </p>
              <p>
                Prefer to talk first? Message me on{' '}
                <a href={site.whatsapp} target="_blank" rel="noreferrer" className="text-[#f9c95c] hover:underline">
                  WhatsApp ({site.phoneDisplay})
                </a>{' '}
                or email me directly.
              </p>
            </div>
          </Reveal>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={Math.min(i * 0.07, 0.3)} className="h-full">
                <div className="card-line h-full rounded-2xl p-5 transition-colors hover:border-[#f5a623]/50">
                  <h3 className="text-sm font-semibold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{p.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </PageContainer>
    </section>
  );
}
