/**
 * Projects are placeholders until you replace them.
 * To add a project: copy one entry, change slug/title/summary,
 * list only technologies you actually used, and set links you own.
 * Set `placeholder: false` once the entry describes real work.
 * Links are optional and render only when set:
 * `liveUrl` = deployed site, `apiUrl` = live API endpoint, `repoUrl` = code.
 * `type` drives the Work-page filter: 'frontend' | 'backend' | 'realtime'.
 * `status: 'live'` shows the Live badge — set only for verified-live URLs.
 */
export const projects = [
  {
    slug: 'aduas-auto',
    title: "Adua's Auto — Car Dealer Website",
    summary:
      'Live car dealer website where buyers can browse vehicles and contact the dealership.',
    description:
      'A live full-stack dealership site: React frontend on Render backed by a REST API serving real vehicle inventory (8 cars with specs, pricing, and availability).',
    stack: ['React', 'Vite', 'JavaScript', 'REST API', 'MongoDB'],
    contributions: ['Frontend development', 'REST API integration', 'Production builds & deployment on Render'],
    liveUrl: 'https://aduas-auto-frontend24.onrender.com',
    apiUrl: 'https://aduas-auto-backend-4.onrender.com/api/cars',
    repoUrl: 'https://github.com/hammadolalekan70-rgb/aduas-auto-frontend2',
    type: 'frontend',
    status: 'live',
    featured: true,
    placeholder: false,
    year: '2026',
    problem:
      'A car dealership needs an online showroom: buyers should see available vehicles and have a clear way to enquire, without visiting in person first.',
    approach:
      'Built a client-rendered React app with Vite that fetches live stock from a REST endpoint (GET /api/cars) returning vehicle documents with specs, pricing, condition, and availability. Frontend and API each deployed as separate services on Render.',
    decisions: [
      'Vite + React SPA so inventory pages navigate instantly',
      'Inventory driven by a live API instead of hardcoded data, with loading, error, and empty states',
      'Validated API responses at the boundary before rendering prices and specs',
      'Frontend and backend deployed independently on Render for simple, reliable hosting',
    ],
    challenges:
      'The API serves image paths relative to the backend, so the frontend must resolve them against the API origin — a typical full-stack detail handled with a shared asset-base config.',
    outcome:
      'Live end to end: the API returns 8 vehicles (verified) and the storefront renders them with a working live demo linked above.',
  },
  {
    slug: 'aduas-auto-api',
    title: "Adua's Auto — Backend API",
    summary:
      'Live REST API powering the dealership inventory: vehicles with specs, pricing, condition, and availability.',
    description:
      'The backend behind the Adua’s Auto storefront. A REST endpoint serving the live vehicle inventory as structured documents, consumed by the React frontend.',
    stack: ['Node.js', 'Express', 'MongoDB', 'REST API', 'JavaScript'],
    contributions: ['REST endpoint design', 'MongoDB data modeling', 'Deployment on Render'],
    liveUrl: '',
    apiUrl: 'https://aduas-auto-backend-4.onrender.com/api/cars',
    repoUrl: '',
    type: 'backend',
    status: 'live',
    featured: true,
    placeholder: false,
    year: '2026',
    problem:
      'The storefront needs a single source of truth for stock: every vehicle’s specs, price, condition, and availability in one queryable place.',
    approach:
      'Exposed a REST resource (GET /api/cars) returning vehicle documents with specs, features, pricing, and status. The React frontend fetches it directly; both services deploy independently on Render.',
    decisions: [
      'Resource-oriented route (/api/cars) so the frontend needs one call for the full listing',
      'Vehicle documents carry specs, features, and status together to avoid chatty follow-up requests',
      'Separate frontend and API deploys so either can ship without the other',
    ],
    challenges:
      'Image paths are stored relative to the API, so clients must resolve them against the API origin — handled with a shared asset-base config on the frontend.',
    outcome:
      'Verified live: the endpoint returns 8 vehicle documents with specs and pricing. Add the backend repo link when ready to show the implementation.',
  },
  {
    slug: 'workplace-group-chat',
    title: 'Workplace Group Chat',
    summary:
      'Personal workplace group chat with realtime messaging plus voice and video calls, WhatsApp-style.',
    description:
      'A live team chat app: group conversations over Socket.io with voice and video calling, built for our workplace.',
    stack: ['React', 'Vite', 'JavaScript', 'Socket.io'],
    contributions: ['Realtime chat with Socket.io', 'Voice/video calling', 'Production deployment on Render'],
    liveUrl: 'https://group-chat-frontend-j75s.onrender.com',
    apiUrl: '',
    repoUrl: 'https://github.com/hammadolalekan70-rgb/group-chat-frontend',
    type: 'realtime',
    status: 'live',
    featured: false,
    placeholder: false,
    year: '2026',
    problem:
      'The team needs one home for conversation: group chat plus voice and video calls, without juggling tools.',
    approach:
      'Built a React SPA on Vite with Socket.io rooms for group messaging, presence, and typing indicators, plus peer call signaling for voice and video.',
    decisions: [
      'Socket.io rooms per group for messages, presence, and typing',
      'Optimistic message rendering with server acknowledgement',
      'Call signaling over the same socket connection',
    ],
    challenges:
      'Keeping chat consistent across reconnects — queued sends and rejoining rooms on reconnect.',
    outcome:
      'Live at the demo URL with code linked. Usage and call-quality figures are per the team’s experience, not independently measured.',
  },
  {
    slug: 'latcircle',
    title: 'LATCircle — Real Estate Platform',
    summary:
      'Nigerian real estate marketplace: verified properties for rent and buy, agent connections, and rental management.',
    description:
      'Built in partnership with the Code Circle team — working together, sharing experience, and shipping side by side to bring it live. LATCircle helps Nigerians find verified homes across Lagos, Abuja, and all 36 states, connecting buyers and renters with trusted agents in one place.',
    stack: ['React', 'Vite', 'JavaScript'],
    contributions: ['App + web development as partner', 'Property discovery flows', 'Team launch to production'],
    liveUrl: 'https://latcircle.com',
    apiUrl: '',
    repoUrl: '',
    type: 'frontend',
    status: 'live',
    featured: false,
    placeholder: false,
    year: '2026',
    problem:
      'Finding a trustworthy home in Nigeria is hard: scattered listings, unverified agents, and no single place to compare, connect, and manage rentals.',
    approach:
      'Built as one team: a client-rendered React app with Vite focused on discovery — verified listings, search across states, agent connections, and rental management — and brought it live together to production.',
    decisions: [
      'Listing-first design so verified properties are the hero of every page',
      'Vite + React SPA for fast browsing across many listings',
      'SEO-ready metadata (Open Graph, structured data) so properties share well',
    ],
    challenges:
      'Presenting hundreds of listings without overwhelming buyers — clear filters and honest “verified” signals. Confirm implementation specifics with the partner team before claiming more.',
    outcome:
      'Live at latcircle.com — brought online by the team together. Add a measured result here (e.g. listings count, traffic, or partner quote) once verified.',
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}
