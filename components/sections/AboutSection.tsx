import React from 'react';
import ShatteredMesh from '../ui/HoneycombScene';

export default function AboutSection() {
  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="about-content">
        <div className="section-meta">
          <span className="section-number">01 / 02</span>
          <span className="section-tick"></span>
          <span className="section-label">Who am I?</span>
        </div>
        <h2>I'm Otavio <br /><em>manaless</em> Ragazzo.</h2>
        <p>A <em>software engineer</em> who loves solving challenges and building cool things. I work with automation, containerization, microservices, and backend development using <em>Go</em> and <em>Django</em>.</p>
        <p style={{ marginTop: '16px' }}>Outside of tech — full-time <em>creative nerd</em>. Fantasy stories, motorcycles, music, epic landscapes. I live for workouts, bad jokes, good beer, and an endless supply of <em>coffee</em>.</p>
      </div>

      <div className="about-figure" id="about-figure">
        <img src="/event-horizon.svg" alt="Event Horizon" className="event-horizon-art" />
        <ShatteredMesh />
      </div>

      <div className="section-quote projects-quote">
        If I am to flower into something other than myself.<br />I would rather rot into nothingness as I am.<br />
        <span className="quote-author">— Millicent, Elden Ring</span>
      </div>

    </section>
  );
}
