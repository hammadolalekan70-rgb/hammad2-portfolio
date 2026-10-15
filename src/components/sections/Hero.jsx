import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowRight, ArrowUpRight, FileText, MessageCircle } from 'lucide-react';
import { site } from '../../config/site.js';
import PageContainer from '../layout/PageContainer.jsx';
import portrait from '../../assets/portrait.jpeg';

export default function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay, ease: 'easeOut' },
  });

  return (
    <section aria-labelledby="hero-heading" className="grid-noise relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* soft gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-0 h-[420px] w-[420px] rounded-full opacity-25 blur-3xl"
        style={{ background: 'radial-gradient(circle, #f5a623 0%, transparent 65%)' }}
      />
      <PageContainer className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-3xl">
          <motion.p {...anim(0)} className="eyebrow mb-5 flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute h-full w-full rounded-full bg-[#f5a623] opacity-75" style={{ animation: 'ping-dot 1.8s cubic-bezier(0,0,.2,1) infinite' }} />
              <span className="h-1.5 w-1.5 rounded-full bg-[#f5a623]" />
            </span>
            {site.availability}
          </motion.p>
          <motion.h1
            {...anim(0.05)}
            id="hero-heading"
            className="font-display text-4xl leading-[1.05] text-white text-balance md:text-6xl"
          >
            {site.firstName} builds <span className="italic text-[#f9c95c]">full-stack</span> web apps that are fast and
            honest.
          </motion.h1>
          <motion.p {...anim(0.12)} className="mt-6 max-w-xl text-base leading-relaxed text-white/65 md:text-lg">
            {site.intro}
          </motion.p>
          <motion.div {...anim(0.18)} className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="btn-shine inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f5a623] px-6 py-3 text-sm font-semibold text-[#0b1a2e] transition-colors hover:bg-[#f9c95c]"
            >
              View my work <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#f5a623]/50 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-[#f5a623] hover:bg-[#f5a623]/10"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp me
            </a>
            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                download
                className="inline-flex min-h-[48px] items-center gap-2 px-2 py-3 text-sm text-white/60 underline decoration-white/20 underline-offset-4 hover:text-white"
              >
                <FileText size={16} aria-hidden="true" /> Résumé
              </a>
            ) : null}
          </motion.div>
          <motion.dl
            {...anim(0.24)}
            className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-white/10 pt-6 sm:grid-cols-3"
          >
            {[
              ['Focus', 'React · JS · APIs', null],
              ['Phone / WhatsApp', site.phoneDisplay, site.whatsapp],
              ['Email', site.email, `mailto:${site.email}`],
            ].map(([k, v, href]) => (
              <div key={k}>
                <dt className="font-mono text-[11px] tracking-[0.16em] text-white/40 uppercase">{k}</dt>
                <dd className="mt-1 truncate text-sm text-white/85" title={v}>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="hover:text-white hover:underline"
                    >
                      {v}
                    </a>
                  ) : (
                    v
                  )}
                </dd>
              </div>
            ))}
          </motion.dl>
          <p className="mt-6 flex items-center gap-1 text-xs text-white/35">
            <ArrowUpRight size={12} aria-hidden="true" /> Start with selected work, or jump to About, Experience, Contact.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-full max-w-[340px]"
        >
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] border border-[#f5a623]/30" />
          <div aria-hidden="true" className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-[#f5a623]/15 blur-sm" />
          <div className={reduce ? '' : 'anim-float'}>
            <img
              src={portrait}
              alt={site.portraitAlt}
              width={680}
              height={680}
              loading="eager"
              className="aspect-square w-full rounded-[1.75rem] border-2 border-[#f5a623] object-cover shadow-2xl"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-[#f5a623]/40 bg-[#0b1a2e]/95 px-4 py-2 shadow-lg backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#f5a623]" aria-hidden="true" />
            <span className="text-xs font-medium whitespace-nowrap text-white">Open to work</span>
          </div>
        </motion.div>
      </PageContainer>
    </section>
  );
}
