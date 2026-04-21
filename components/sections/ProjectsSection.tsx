import React from 'react';
import OrbitalRings from '../ui/OrbitalRings';

interface Repository {
  name: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
  updatedAt: string;
  stargazersCount: number;
  topics: string[];
}

interface ProjectsSectionProps {
  repos: Repository[];
}

function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

export default function ProjectsSection({ repos }: ProjectsSectionProps) {
  return (
    <section className="section" id="projects" data-screen-label="03 Projects">
      <div className="projects-header">
        <div className="section-meta">
          <span className="section-number">02 / 02</span>
          <span className="section-tick"></span>
          <span className="section-label">Personal Projects</span>
        </div>
        <h1>Selected<br /><em>work</em>.</h1>
        <p className="projects-desc">A collection of my <em>personal projects</em> and experiments. Here you'll find everything from automation and containerization to microservices and backend tinkering.<br />Basically all the cool stuff I <em>build and break</em> while learning!</p>
      </div>

      <div className="projects-grid" id="projects-grid">
        {repos.map((repo) => (
          <a
            key={repo.name}
            className="project-card"
            href={repo.htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="project-link">↗</span>
            <div className="project-name">{repo.name}</div>
            <div className="project-desc">{repo.description || 'No description.'}</div>
            <div className="project-meta">
              {repo.language && <span className="project-lang">{repo.language}</span>}
              <span className="project-updated">{formatDate(repo.updatedAt)}</span>
              {repo.stargazersCount > 0 && (
                <span className="project-stars">★ {repo.stargazersCount}</span>
              )}
            </div>
          </a>
        ))}
      </div>

      <div className="section-quote projects-quote">
        Because we have no greater purpose, we are free to set our own. <br />
        To create self-defined goals for which to strive.<br />
        <span className="quote-author">— Gabriel, Ultrakill</span>
      </div>

      <OrbitalRings />
    </section>
  );
}
