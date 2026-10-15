import { useState } from 'react';
import { ArrowUpRight, Copy, Check, Mail, MessageCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading.jsx';
import PageContainer from '../layout/PageContainer.jsx';
import { site } from '../../config/site.js';
import { validateContact } from '../../lib/validate.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', company: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ state: 'idle', note: '' });
  const [copied, setCopied] = useState(false);
  const endpoint = site.formspreeEndpoint;

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    // Spam honeypot: silently succeed
    if (form.company) {
      setStatus({ state: 'sent', note: 'Thanks — your message is on its way.' });
      return;
    }
    const errs = validateContact(form);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setStatus({ state: 'error', note: 'Please fix the highlighted fields.' });
      return;
    }
    if (!endpoint) {
      // No backend configured: fall back to mailto with prefilled body
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus({
        state: 'sent',
        note: 'No Formspree endpoint set — opened your email app instead. Add the endpoint in src/config/site.js to enable direct sending.',
      });
      return;
    }
    setStatus({ state: 'sending', note: 'Sending…' });
    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });
      if (!res.ok) throw new Error(`Formspree responded ${res.status}`);
      setStatus({ state: 'sent', note: 'Thanks — I’ll reply within 1–2 days.' });
      setForm({ name: '', email: '', message: '', company: '' });
    } catch {
      setStatus({
        state: 'error',
        note: 'Could not send just now. Please email me directly — the button below works.',
      });
    }
  }

  const inputCls = (bad) =>
    `w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-white/30 min-h-[48px] ${
      bad ? 'border-red-400/70' : 'border-white/12 hover:border-white/25 focus:border-[#f5a623]'
    }`;

  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-20 border-t border-white/10 py-16 md:py-24">
      <PageContainer className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <SectionHeading
            id="contact-heading"
            eyebrow="Contact"
            title="Let’s build something solid."
            lede="Email works best. The form below uses Formspree when configured, otherwise it opens your email app — no fake submissions."
          />
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn-shine inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#0b1a2e] hover:bg-[#f9c95c]"
            >
              <Mail size={16} aria-hidden="true" /> {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#f5a623]/50 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-[#f5a623] hover:bg-[#f5a623]/10"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp {site.phoneDisplay}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm text-white/80 hover:border-white/35 hover:text-white"
            >
              {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
              {copied ? 'Copied' : 'Copy email'}
            </button>
          </div>
          <p className="mt-4 text-xs leading-relaxed text-white/40">
            No Formspree key yet? See <code className="font-mono">README → Contact form</code> for the 2-minute setup.
            Direct link also works: <a className="underline" href={`mailto:${site.email}`}>email me <ArrowUpRight size={11} className="inline" aria-hidden="true" /></a>
          </p>
        </div>

        <form onSubmit={onSubmit} noValidate className="card-line rounded-2xl p-6" aria-label="Contact form">
          {/* Honeypot — hidden from humans */}
          <label className="hidden" aria-hidden="true">
            Company
            <input type="text" value={form.company} onChange={set('company')} tabIndex={-1} autoComplete="off" />
          </label>

          <label htmlFor="contact-name" className="block text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="contact-name"
            className={inputCls(errors.name) + ' mt-1.5'}
            value={form.name}
            onChange={set('name')}
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-err' : undefined}
          />
          {errors.name ? <p id="contact-name-err" role="alert" className="mt-1 text-xs text-red-300">{errors.name}</p> : null}

          <label htmlFor="contact-email" className="mt-4 block text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            className={inputCls(errors.email) + ' mt-1.5'}
            value={form.email}
            onChange={set('email')}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-err' : undefined}
          />
          {errors.email ? <p id="contact-email-err" role="alert" className="mt-1 text-xs text-red-300">{errors.email}</p> : null}

          <label htmlFor="contact-message" className="mt-4 block text-sm font-medium text-white/80">
            Message
          </label>
          <textarea
            id="contact-message"
            rows={5}
            className={inputCls(errors.message) + ' mt-1.5 resize-y'}
            value={form.message}
            onChange={set('message')}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-err' : undefined}
          />
          {errors.message ? <p id="contact-message-err" role="alert" className="mt-1 text-xs text-red-300">{errors.message}</p> : null}

          <button
            type="submit"
            disabled={status.state === 'sending'}
            className="mt-5 inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#0b1a2e] transition-opacity hover:bg-[#f9c95c] disabled:opacity-60"
          >
            {status.state === 'sending' ? 'Sending…' : 'Send message'} <ArrowUpRight size={16} aria-hidden="true" />
          </button>
          {status.note ? (
            <p role="status" className={`mt-3 text-sm ${status.state === 'error' ? 'text-red-300' : 'text-[#f9c95c]'}`}>
              {status.note}
            </p>
          ) : null}
        </form>
      </PageContainer>
    </section>
  );
}
