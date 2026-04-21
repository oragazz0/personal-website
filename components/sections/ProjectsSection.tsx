import React from 'react';

export default function ProjectsSection() {
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
        <a className="project-card" href="https://github.com/oragazz0/viy" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">viy</div>
          <div className="project-desc">CLI-first Kubernetes chaos engineering toolkit in Go — modular, safe, observable. "Omniscient chaos, unveiled."</div>
          <div className="project-meta">
            <span className="project-lang">Go</span>
            <span className="project-updated">Apr 2026</span>
          </div>
        </a>

        <a className="project-card" href="https://github.com/oragazz0/nexus-event-stream" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">nexus-event-stream</div>
          <div className="project-desc">Event-Driven Architecture, Polyglot Microservices (Python + Go) and high-performance Message Streaming and Caching.</div>
          <div className="project-meta">
            <span className="project-lang">Go</span>
            <span className="project-updated">Mar 2026</span>
          </div>
        </a>

        <a className="project-card" href="https://github.com/oragazz0/personal-website" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">personal-website</div>
          <div className="project-desc">Personal website frontend. The very site you are looking at right now.</div>
          <div className="project-meta">
            <span className="project-lang">TypeScript</span>
            <span className="project-updated">Feb 2026</span>
          </div>
        </a>

        <a className="project-card" href="https://github.com/oragazz0/todo-grpc-tls" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">todo-grpc-tls</div>
          <div className="project-desc">Secure gRPC service using Mutual TLS authentication. Production-grade security patterns.</div>
          <div className="project-meta">
            <span className="project-lang">Go</span>
            <span className="project-updated">Aug 2025</span>
          </div>
        </a>

        <a className="project-card" href="https://github.com/oragazz0/kubernetes-spring-mysql" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">kubernetes-spring-mysql</div>
          <div className="project-desc">Kubernetes deployments using Spring Boot and MySQL with PVC. Infrastructure-as-code demo.</div>
          <div className="project-meta">
            <span className="project-lang">Java</span>
            <span className="project-updated">Apr 2025</span>
          </div>
        </a>

        <a className="project-card" href="https://github.com/oragazz0/django-tasks-api" target="_blank" rel="noopener noreferrer">
          <span className="project-link">↗</span>
          <div className="project-name">django-tasks-api</div>
          <div className="project-desc">Django REST API with Docker, showcasing best practices for containerization and deployment configuration.</div>
          <div className="project-meta">
            <span className="project-lang">Python</span>
            <span className="project-updated">Apr 2025</span>
          </div>
        </a>
      </div>

      <div className="section-quote projects-quote">
        Because we have no greater purpose, we are free to set our own. <br />
        To create self-defined goals for which to strive.<br />
        <span className="quote-author">— Gabriel, Ultrakill</span>
      </div>

      <div className="glitch-field" id="glitch-field">
        <div className="glitch-block gb1"></div>
        <div className="glitch-block gb2"></div>
        <div className="glitch-block gb3"></div>
        <div className="glitch-block gb4"></div>
        <div className="glitch-block gb5"></div>
        <div className="glitch-block gb6"></div>
        <div className="glitch-block gb7"></div>
        <div className="glitch-block gb8"></div>
        <div className="glitch-block gb9"></div>
        <div className="glitch-block gb10"></div>
      </div>
      <div className="projects-deco">
        <div className="deco-polygon"></div>
        <div className="deco-triangle"></div>
      </div>
    </section>
  );
}
