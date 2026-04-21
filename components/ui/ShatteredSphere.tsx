import React from 'react';

const rawSVG = `<svg class="crystal-sphere" id="crystal-svg" viewBox="-80 -80 600 600" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="cg1" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="oklch(62% 0.22 18)" stop-opacity="0.95"/>
      <stop offset="35%" stop-color="oklch(42% 0.185 18)" stop-opacity="0.9"/>
      <stop offset="70%" stop-color="oklch(22% 0.12 18)" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="oklch(8% 0.04 18)" stop-opacity="0.9"/>
    </radialGradient>
    <radialGradient id="cg2" cx="60%" cy="65%" r="50%">
      <stop offset="0%" stop-color="oklch(28% 0.08 18)" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="softglow">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <clipPath id="circle-clip">
      <circle cx="220" cy="220" r="185"/>
    </clipPath>
  </defs>

  <circle cx="220" cy="220" r="195" fill="oklch(42% 0.185 18)" opacity="0.12" filter="url(#softglow)"/>
  <circle cx="220" cy="220" r="185" fill="oklch(42% 0.185 18)" opacity="0.06" filter="url(#softglow)"/>

  <g clip-path="url(#circle-clip)">
    <polygon points="220,35 370,130 340,260 220,220" fill="url(#cg1)" opacity="0.95"/>
    <polygon points="220,35 70,130 100,260 220,220" fill="oklch(52% 0.2 18)" opacity="0.75"/>
    <polygon points="370,130 340,260 220,380 220,220" fill="oklch(32% 0.15 18)" opacity="0.85"/>
    <polygon points="70,130 100,260 220,380 220,220" fill="oklch(38% 0.17 18)" opacity="0.7"/>
    <polygon points="220,35 370,130 220,220 70,130" fill="oklch(58% 0.22 18)" opacity="0.6"/>
    <polygon points="100,260 340,260 220,380 220,220" fill="oklch(18% 0.08 18)" opacity="0.9"/>
    <polygon points="220,35 130,80 170,160 220,220" fill="oklch(78% 0.18 18)" opacity="0.35"/>
    <polygon points="300,300 380,220 340,260 220,380" fill="oklch(6% 0.02 18)" opacity="0.7"/>
    <line x1="220" y1="35" x2="220" y2="380" stroke="oklch(8% 0.012 255)" stroke-width="1.5" opacity="0.4"/>
    <line x1="70" y1="130" x2="370" y2="130" stroke="oklch(8% 0.012 255)" stroke-width="1" opacity="0.3"/>
    <line x1="100" y1="260" x2="340" y2="260" stroke="oklch(8% 0.012 255)" stroke-width="1" opacity="0.3"/>
    <line x1="70" y1="130" x2="340" y2="260" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.25"/>
    <line x1="370" y1="130" x2="100" y2="260" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.25"/>
  </g>

  <circle cx="220" cy="220" r="185" fill="none" stroke="oklch(62% 0.22 18)" stroke-width="0.8" opacity="0.4"/>

  <g id="shards-group" filter="url(#glow)">
    <polygon id="sh1" points="370,128 395,90 410,140" fill="oklch(62% 0.22 18)" opacity="0.7"/>
    <polygon id="sh2" points="68,128 30,100 45,155" fill="oklch(52% 0.2 18)" opacity="0.7"/>
    <line id="sh3" x1="380" y1="240" x2="430" y2="215" stroke="oklch(72% 0.2 18)" stroke-width="2" opacity="0.7"/>
    <line id="sh4" x1="65" y1="240" x2="15" y2="260" stroke="oklch(62% 0.22 18)" stroke-width="1.5" opacity="0.7"/>
    <polygon id="sh5" points="215,32 235,5 250,38" fill="oklch(68% 0.2 18)" opacity="0.7"/>
    <polygon id="sh6" points="218,385 230,415 205,412" fill="oklch(42% 0.18 18)" opacity="0.7"/>
    <line id="sh7" x1="340" y1="268" x2="390" y2="310" stroke="oklch(52% 0.2 18)" stroke-width="1.5" opacity="0.7"/>
    <polygon id="sh8" points="95,262 55,295 70,320" fill="oklch(32% 0.14 18)" opacity="0.7"/>
  </g>
</svg>`;

export default function ShatteredSphere() {
  return (
    <div dangerouslySetInnerHTML={{ __html: rawSVG }} />
  );
}
