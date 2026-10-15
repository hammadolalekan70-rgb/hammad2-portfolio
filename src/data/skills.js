/**
 * Edit to match skills you actually use.
 * No percentages — grouped by practice area.
 */
export const skillGroups = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript (ES2022+)', 'Vite', 'Tailwind CSS', 'React Router', 'Responsive UI'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST API design', 'Socket.io', 'MongoDB modeling'],
  },
  {
    title: 'Data & integrations',
    skills: ['Fetch / Axios', 'Env-based config', 'Form handling', 'Formspree', 'WhatsApp deep links'],
  },
  {
    title: 'Quality & tooling',
    skills: ['ESLint', 'Vitest', 'React Testing Library', 'Git & GitHub', 'Render deploys'],
  },
];

export const principles = [
  {
    title: 'Small components, clear data flow',
    body: 'Colocated, focused components. Data flows down, events flow up. No premature global state.',
  },
  {
    title: 'Validate at the boundary',
    body: 'Assume APIs and forms are hostile. Parse, validate, then render.',
  },
  {
    title: 'Accessible by default',
    body: 'Semantic HTML, visible focus, keyboard paths, and reduced-motion respect — not add-ons.',
  },
  {
    title: 'Measure before claiming',
    body: 'Lighthouse, tests, and real links. No invented metrics or testimonials.',
  },
];
