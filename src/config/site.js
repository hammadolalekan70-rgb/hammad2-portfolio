/**
 * Single source of truth for personal details.
 * Edit this file to update the whole portfolio.
 * Empty strings are hidden automatically — no fake links are rendered.
 */
export const site = {
  name: 'Olabamiji Hammad',
  firstName: 'Olabamiji',
  role: 'Full-Stack Developer',
  tagline: 'I build fast, accessible web applications with React and modern JavaScript.',
  intro:
    'Full-stack developer focused on React, JavaScript, and clean API design. I care about architecture, performance, and interfaces that feel considered.',
  email: 'hammadolalekan70@gmail.com',
  phoneDisplay: '0817 959 8253',
  phoneInternational: '2348179598253',
  whatsapp: 'https://wa.me/2348179598253?text=Hello%20Hammad%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk.',
  portraitAlt: 'Portrait of Olabamiji Hammad',
  location: 'Available for remote work',
  availability: 'Open to freelance and full-time roles',
  // Add your real URLs here. Leave empty to hide.
  socials: {
    github: 'https://github.com/hammadolalekan70-rgb/',
    linkedin: '',
    twitter: '',
  },
  // Drop your PDF at public/files/resume.pdf, then set this to '/files/resume.pdf'.
  // Keep as null to hide the résumé button until it exists.
  resumeUrl: null,
  // Formspree: create a form at https://formspree.io, then paste the endpoint ID below.
  // e.g. 'https://formspree.io/f/xabcd123'
  formspreeEndpoint: '',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/about' },
    { label: 'Experience', href: '/experience' },
    { label: 'Contact', href: '/contact' },
  ],
};

export const wordmark = 'OH.';
