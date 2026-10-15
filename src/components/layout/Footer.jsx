import { AtSign, Briefcase, Code2, Mail, MessageCircle, Phone } from 'lucide-react';
import { site } from '../../config/site.js';
import PageContainer from './PageContainer.jsx';

const YEAR = new Date().getFullYear();

export default function Footer() {
  const { github, linkedin, twitter } = site.socials;
  const hasSocials = github || linkedin || twitter;

  return (
    <footer className="border-t border-white/10 py-10">
      <PageContainer className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg text-white">{site.name}</p>
          <p className="mt-1 text-sm text-white/50">
            {site.role} · {site.location} · © {YEAR}
          </p>
          <p className="mt-1 text-sm">
            <a href={site.whatsapp} target="_blank" rel="noreferrer" className="text-[#f9c95c] hover:underline">
              WhatsApp: {site.phoneDisplay}
            </a>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label={`WhatsApp ${site.name}`}
            title={site.phoneDisplay}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full bg-[#f5a623] text-[#0b1a2e] transition-transform hover:scale-105"
          >
            <MessageCircle size={18} aria-hidden="true" />
          </a>
          <a
            href={`tel:+${site.phoneInternational}`}
            aria-label={`Call ${site.name}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
          >
            <Phone size={18} aria-hidden="true" />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email ${site.name}`}
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          {github ? (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            >
              <Code2 size={18} aria-hidden="true" />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            >
              <Briefcase size={18} aria-hidden="true" />
            </a>
          ) : null}
          {twitter ? (
            <a
              href={twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter profile"
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
            >
              <AtSign size={18} aria-hidden="true" />
            </a>
          ) : null}
          {!hasSocials ? (
            <span className="max-w-[240px] text-xs leading-relaxed text-white/40">
              Add GitHub / LinkedIn URLs in <code className="font-mono">src/config/site.js</code> to show them here.
            </span>
          ) : null}
        </div>
      </PageContainer>
    </footer>
  );
}
