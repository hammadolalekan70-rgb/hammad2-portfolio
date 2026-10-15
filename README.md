# Olabamiji Hammad — Full-Stack Developer Portfolio

React + JavaScript + Vite + Tailwind CSS portfolio. No TypeScript, no backend, lightweight client app with React Router case-study pages.

## Stack — why

- **react / react-dom** — UI
- **react-router-dom** (HashRouter) — `/`, `/projects`, `/projects/:slug`, 404 without server rewrites
- **tailwindcss v4 + @tailwindcss/vite** — design tokens in `src/styles/index.css` via `@theme`
- **lucide-react** — icons (brand icons removed upstream; socials use generic icons)
- **motion** — subtle hero entrance only, respects `prefers-reduced-motion`
- **vitest + jsdom + @testing-library/react + @testing-library/jest-dom + @testing-library/user-event** — unit + component tests
- **eslint + eslint-plugin-react/hooks/refresh + oxlint** — code quality

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm test         # vitest run
npm run lint     # eslint + oxlint
npm run build    # vite build → dist/
npm run preview  # serve dist locally
```

## Edit personal info

All in **`src/config/site.js`**:

- `name`, `role`, `intro`, `email`, `location`, `availability`
- `socials.github / linkedin / twitter` — leave `''` to hide
- `resumeUrl` — keep `null` until you add the file
- `formspreeEndpoint` — paste Formspree endpoint to enable direct sending

## Add projects

Edit **`src/data/projects.js`** — copy an entry:

```js
{
  slug: 'my-app',
  title: 'My App',
  summary: 'One-line card copy',
  description: 'Case-study intro',
  stack: ['React', 'JavaScript'],
  contributions: ['What you owned'],
  liveUrl: 'https://…', // or ''
  repoUrl: 'https://…', // or ''
  featured: true,
  placeholder: false,   // set false once real
  year: '2026',
  problem: '…', approach: '…',
  decisions: ['…'], challenges: '…', outcome: '…',
}
```

Cards without URLs simply omit those buttons — no dead links.

## Images & résumé

- Project cards are CSS-only by design (no fake screenshots). Drop real images in `public/images/` and reference as `/images/name.jpg` if you add an `image` field.
- Résumé: save PDF to `public/files/resume.pdf`, then set `resumeUrl: '/files/resume.pdf'` in `site.js`.

## Contact form (Formspree)

1. Create a form at https://formspree.io/forms → copy endpoint `https://formspree.io/f/xxxxxx`
2. Paste into `site.js` → `formspreeEndpoint`
3. Includes validation, honeypot field (`company`), and `mailto:` fallback when no endpoint is set.

Without an endpoint the form opens the visitor's email app with subject/body prefilled — submissions are never silently dropped.

## Structure

```
src/
  app/App.jsx, app/router.jsx
  components/layout/Navbar.jsx, Footer.jsx, PageContainer.jsx
  components/sections/Hero.jsx, FeaturedProjects.jsx, About.jsx, Skills.jsx, Experience.jsx, Contact.jsx
  components/projects/ProjectCard.jsx, ProjectGrid.jsx, ProjectDetails.jsx
  components/ui/Button.jsx, Badge.jsx, SectionHeading.jsx
  config/site.js
  data/projects.js, skills.js, experience.js
  lib/cx.js, lib/validate.js
  pages/Home.jsx, ProjectsPage.jsx, CaseStudyPage.jsx, NotFound.jsx
  styles/index.css
  test/setup.js, test/portfolio.test.js, test/pages.test.jsx
```

## Verified

- `npx eslint .` — clean
- `npm test` — 2 files, 8 tests passed
- `npm run build` — success, `dist/` generated
