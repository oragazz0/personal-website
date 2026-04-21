import React from 'react';
import ShatteredSphere from '../ui/ShatteredSphere';

export default function HomeSection() {
  return (
    <section className="section" id="home" data-screen-label="01 Home">
      <div className="home-content">
        <div className="home-eyebrow">Not a portfolio</div>
        <h1>Welcome<br />to my<br /><em>showroom</em>.</h1>
        <p>This is the place where I keep my <em>favourite creations</em>. Enjoy it.</p>
        <a className="arrow-btn" href="#about" id="home-arrow">
          <span className="arrow-btn-circle">
            <span className="arrow-btn-icon">→</span>
          </span>
          <span className="arrow-btn-label">About me</span>
        </a>
      </div>

      <div className="sphere-scene" id="sphere-scene">
        <ShatteredSphere />
      </div>

      <div className="section-quote projects-quote">
        Trust your instincts. Do the unexpected. Find the others…<br />
        <span className="quote-author">— Timothy Leary</span>
      </div>

    </section>
  );
}
