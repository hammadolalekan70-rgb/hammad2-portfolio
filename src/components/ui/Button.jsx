import { cx } from '../../lib/cx.js';

const variants = {
  primary:
    'bg-[#f5a623] text-[#0b1a2e] hover:bg-[#f9c95c] font-semibold',
  secondary:
    'border border-white/15 text-white hover:border-white/35 hover:bg-white/5',
  ghost: 'text-white/80 hover:text-white hover:bg-white/5',
};

export default function Button({ variant = 'primary', className, href, children, ...rest }) {
  const cls = cx(
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors min-h-[44px]',
    variants[variant],
    className,
  );
  if (href) {
    const external = href.startsWith('http');
    return (
      <a href={href} className={cls} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  );
}
