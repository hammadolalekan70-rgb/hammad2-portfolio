import { cx } from '../../lib/cx.js';

export default function Badge({ children, className }) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[11px] tracking-wide text-white/70',
        className,
      )}
    >
      {children}
    </span>
  );
}
