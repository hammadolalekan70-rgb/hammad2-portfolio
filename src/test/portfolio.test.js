import { describe, expect, it } from 'vitest';
import { getFeaturedProjects, getProject, projects } from '../data/projects.js';
import { validateContact } from '../lib/validate.js';

describe('projects data', () => {
  it('has unique slugs', () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it('returns featured projects', () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((p) => p.featured)).toBe(true);
  });

  it('finds a project by slug', () => {
    const first = projects[0];
    expect(getProject(first.slug)).toEqual(first);
    expect(getProject('does-not-exist')).toBeUndefined();
  });
});

describe('validateContact', () => {
  it('rejects empty fields', () => {
    const errors = validateContact({ name: '', email: 'not-an-email', message: 'hi' });
    expect(errors.name).toBeTruthy();
    expect(errors.email).toBeTruthy();
    expect(errors.message).toBeTruthy();
  });

  it('accepts valid input', () => {
    const errors = validateContact({
      name: 'Ada',
      email: 'ada@example.com',
      message: 'Hello, I would like to discuss a project.',
    });
    expect(errors).toEqual({});
  });
});
