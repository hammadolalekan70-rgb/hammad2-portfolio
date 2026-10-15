import { Link } from 'react-router-dom';
import PageContainer from '../components/layout/PageContainer.jsx';

export default function NotFound() {
  return (
    <main className="pt-32 pb-24">
      <PageContainer className="max-w-xl">
        <p className="eyebrow">404</p>
        <h1 className="font-display mt-3 text-4xl text-white">This page doesn&apos;t exist.</h1>
        <p className="mt-3 text-white/60">The link may be old, or the project slug changed. Head back to something real.</p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/"
            className="inline-flex min-h-[48px] items-center rounded-full bg-[#f5a623] px-5 py-3 text-sm font-semibold text-[#0b1a2e]"
          >
            Go home
          </Link>
          <Link
            to="/projects"
            className="inline-flex min-h-[48px] items-center rounded-full border border-white/15 px-5 py-3 text-sm text-white/85"
          >
            All projects
          </Link>
        </div>
      </PageContainer>
    </main>
  );
}
