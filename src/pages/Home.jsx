import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Hero from '../components/sections/Hero.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import PageContainer from '../components/layout/PageContainer.jsx';
import { site } from '../config/site.js';

const stats = [
  { value: '3+', label: 'Years building for the web' },
  { value: '4', label: 'Products live in production' },
  { value: '2', label: 'Live API + realtime systems' },
];

const ways = [
  {
    title: 'Own it end to end',
    body: 'From first component to production deploy — frontend, API integration, and hosting. If it breaks at midnight, I know where to look.',
  },
  {
    title: 'Simple beats clever',
    body: 'Small components, predictable state, boring solutions that work. Complexity has to earn its place.',
  },
  {
    title: 'Ship, then sharpen',
    body: 'Get the real thing in front of real users fast — Adua’s Auto, the group chat, LATCircle all went live, then improved.',
  },
  {
    title: 'Build with people',
    body: 'Three years in, the biggest multiplier is teamwork — partnering at Code Circle taught me more than any docs page.',
  },
];

/**
 * Home is a senior landing page only.
 * Work, About, Experience, and Contact each have their own routes.
 */
export default function Home() {
  return (
    <main>
      <Hero />

      <section aria-label="By the numbers" className="border-t border-white/10 py-12">
        <PageContainer>
          <Reveal>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.label} className="card-line rounded-2xl px-6 py-5 text-center sm:text-left">
                  <p className="font-display text-4xl text-[#f9c95c]">{s.value}</p>
                  <p className="mt-1 text-sm text-white/55">{s.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </PageContainer>
      </section>

      <section aria-labelledby="how-heading" className="border-t border-white/10 py-16 md:py-20">
        <PageContainer>
          <Reveal>
            <p className="eyebrow mb-3">How I work</p>
            <h2 id="how-heading" className="font-display max-w-2xl text-3xl text-white text-balance md:text-4xl">
              Senior habits, junior ego.
            </h2>
          </Reveal>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {ways.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={Math.min(i * 0.07, 0.21)} className="h-full">
                  <div className="card-line h-full rounded-2xl p-6 transition-colors hover:border-[#f5a623]/50">
                    <p className="font-mono text-xs text-[#f5a623]" aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </p>
                    <h3 className="mt-2 text-base font-semibold text-white">{w.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">{w.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.1}>
            <div className="card-line mt-6 flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl text-white">Have something to build?</h3>
                <p className="mt-1 text-sm text-white/60">
                  See the proof in Work, or skip straight to a conversation.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/projects"
                  className="btn-shine inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-semibold text-[#0b1a2e] hover:bg-[#f9c95c]"
                >
                  View my work <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#f5a623]/50 px-6 py-3 text-sm font-medium text-white hover:border-[#f5a623] hover:bg-[#f5a623]/10"
                >
                  <MessageCircle size={16} aria-hidden="true" /> WhatsApp me
                </a>
              </div>
            </div>
          </Reveal>
        </PageContainer>
      </section>
    </main>
  );
}
