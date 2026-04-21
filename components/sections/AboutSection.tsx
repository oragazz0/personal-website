import React from 'react';
import GeoFigure from '../ui/GeoFigure';

export default function AboutSection() {
  return (
    <section className="section" id="about" data-screen-label="02 About">
      <div className="about-content">
        <div className="section-meta">
          <span className="section-number">01 / 02</span>
          <span className="section-tick"></span>
          <span className="section-label">Who am I?</span>
        </div>
        <h1>I'm Otavio <br /><em>manaless</em> Ragazzo.</h1>
        <p>A <em>software engineer</em> who loves solving challenges and building cool things. I work with automation, containerization, microservices, and backend development using <em>Go</em> and <em>Django</em>.</p>
        <p style={{ marginTop: '16px' }}>Outside of tech — full-time <em>creative nerd</em>. Fantasy stories, motorcycles, music, epic landscapes. I live for workouts, bad jokes, good beer, and an endless supply of <em>coffee</em>.</p>
      </div>

      <div className="about-figure" id="about-figure">
        <GeoFigure />
      </div>

      <div className="section-quote projects-quote">
        If I am to flower into something other than myself.<br />I would rather rot into nothingness as I am.<br />
        <span className="quote-author">— Millicent, Elden Ring</span>
      </div>

    </section>
  );
}
