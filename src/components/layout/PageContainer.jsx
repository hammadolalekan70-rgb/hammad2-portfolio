import { cx } from '../../lib/cx.js';

export default function PageContainer({ children, className }) {
  return <div className={cx('container-editorial', className)}>{children}</div>;
}
