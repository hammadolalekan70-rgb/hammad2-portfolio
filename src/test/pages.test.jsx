import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import AboutPage from '../pages/AboutPage.jsx';
import ExperiencePage from '../pages/ExperiencePage.jsx';
import ContactPage from '../pages/ContactPage.jsx';
import ProjectsPage from '../pages/ProjectsPage.jsx';
import { ProjectCard } from '../components/projects/ProjectCard.jsx';
import { projects } from '../data/projects.js';

function renderWithRouter(ui) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe('Home page', () => {
  it('renders hero headline and senior sections', () => {
    renderWithRouter(<Home />);
    expect(screen.getByRole('heading', { name: /builds.*full-stack/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /senior habits/i })).toBeInTheDocument();
    expect(screen.getByText(/products live in production/i)).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /view my work/i }).length).toBeGreaterThan(0);
  });

  it('exposes contact email link', () => {
    renderWithRouter(<Home />);
    const mailLinks = screen.getAllByRole('link', { name: /hammadolalekan70@gmail.com/i });
    expect(mailLinks.length).toBeGreaterThan(0);
    expect(mailLinks[0]).toHaveAttribute('href', expect.stringContaining('mailto:'));
  });
});

describe('Separate pages', () => {
  it('renders about page with skills', () => {
    renderWithRouter(<AboutPage />);
    expect(screen.getByRole('heading', { name: /full-stack developer who sweats/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what i work with/i })).toBeInTheDocument();
  });

  it('renders experience page', () => {
    renderWithRouter(<ExperiencePage />);
    expect(screen.getByRole('heading', { name: /^background$/i })).toBeInTheDocument();
  });

  it('renders contact page with form', () => {
    renderWithRouter(<ContactPage />);
    expect(screen.getByRole('heading', { name: /let’s build something solid/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });
});

describe('ProjectsPage', () => {
  it('filters by type and announces the count', async () => {
    const user = userEvent.setup();
    renderWithRouter(<ProjectsPage />);
    expect(screen.getByText(/showing 4 of 4/i)).toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /^backend$/i }));
    expect(screen.getByText(/showing 1 of 4/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /backend api/i })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: /workplace group chat/i })).not.toBeInTheDocument();
  });

  it('renders Live badges and the closing CTA', () => {
    renderWithRouter(<ProjectsPage />);
    expect(screen.getAllByText(/^live$/i).length).toBeGreaterThan(0);
    expect(screen.getByRole('heading', { name: /have something to build/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /whatsapp me/i })).toHaveAttribute(
      'href',
      expect.stringContaining('wa.me'),
    );
  });
});

describe('ProjectCard', () => {
  it('links to the case-study route', () => {
    const project = projects[0];
    renderWithRouter(<ProjectCard project={project} />);
    const caseLink = screen.getByRole('link', { name: /case study/i });
    expect(caseLink).toHaveAttribute('href', `/projects/${project.slug}`);
  });

  it('shows a visible API button when apiUrl is set', () => {
    const project = projects.find((p) => p.apiUrl);
    expect(project).toBeDefined();
    renderWithRouter(<ProjectCard project={project} />);
    const apiLink = screen.getByRole('link', { name: /live api endpoint/i });
    expect(apiLink).toHaveAttribute('href', project.apiUrl);
  });

  it('resolves the workplace group chat with its repo link', () => {
    const project = projects.find((p) => p.slug === 'workplace-group-chat');
    expect(project).toBeDefined();
    expect(project.placeholder).toBe(false);
    expect(project.repoUrl).toBe('https://github.com/hammadolalekan70-rgb/group-chat-frontend');
    renderWithRouter(<ProjectCard project={project} />);
    expect(screen.getByRole('link', { name: /case study/i })).toHaveAttribute(
      'href',
      '/projects/workplace-group-chat',
    );
  });

  it('resolves the LATCircle partnership with its live link', () => {
    const project = projects.find((p) => p.slug === 'latcircle');
    expect(project).toBeDefined();
    expect(project.placeholder).toBe(false);
    expect(project.liveUrl).toBe('https://latcircle.com');
    renderWithRouter(<ProjectCard project={project} />);
    expect(screen.getByRole('link', { name: /case study/i })).toHaveAttribute(
      'href',
      '/projects/latcircle',
    );
  });
});
