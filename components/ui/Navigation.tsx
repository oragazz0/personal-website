import React from 'react';

export default function Navigation() {
  return (
    <nav>
      <span className="nav-logo">or.</span>
      <ul className="nav-links">
        <li>
          <a href="#home" data-target="home" className="js-nav">Home</a>
        </li>
        <li>
          <a href="#about" data-target="about" className="js-nav">About</a>
        </li>
        <li>
          <a href="#projects" data-target="projects" className="js-nav">Projects</a>
        </li>
      </ul>
    </nav>
  );
}
