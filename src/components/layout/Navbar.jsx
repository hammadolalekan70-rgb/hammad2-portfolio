import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { site, wordmark } from '../../config/site.js';
import { cx } from '../../lib/cx.js';

const linkCls = ({ isActive }) =>
  cx(
    'rounded-full px-4 py-2 text-sm transition-colors hover:bg-white/5 hover:text-white',
    isActive ? 'bg-white/10 text-white' : 'text-white/70',
  );

const mobileLinkCls = ({ isActive }) =>
  cx(
    'block rounded-lg px-3 py-3 text-base hover:bg-white/5',
    isActive ? 'bg-white/10 text-white' : 'text-white/85',
  );

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cx(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors',
        scrolled || open ? 'border-white/10 bg-[#0b1a2e]/90 backdrop-blur-md' : 'border-transparent bg-transparent',
      )}
    >
      <nav aria-label="Primary" className="container-editorial flex h-16 items-center justify-between">
        <Link
          to="/"
          onClick={close}
          className="font-display text-xl font-semibold text-white"
          aria-label={`${site.name} home`}
        >
          {wordmark}
          <span className="sr-only"> — {site.name}</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <NavLink to={item.href} end={item.href === '/'} className={linkCls}>
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-2">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn-shine inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#f5a623] px-4 py-2 text-sm font-semibold text-[#0b1a2e] transition-colors hover:bg-[#f9c95c]"
            >
              Hire me <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-[#0b1a2e] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  onClick={close}
                  className={mobileLinkCls}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#f5a623] px-4 py-3 text-sm font-semibold text-[#0b1a2e]"
              >
                Hire me <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
