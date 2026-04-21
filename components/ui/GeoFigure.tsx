import React from 'react';

const rawSVG = `<svg class="geo-figure" id="geo-svg" viewBox="0 0 400 580" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="head-glow" cx="50%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#E74C3C" stop-opacity="0.9"/>
      <stop offset="50%" stop-color="#8B1A1A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#4A0E0E" stop-opacity="0.8"/>
    </radialGradient>
    <radialGradient id="torso-grad" cx="40%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#8B1A1A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#4A0E0E" stop-opacity="0.9"/>
    </radialGradient>
    <filter id="fig-halo">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="fig-sharp-glow">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>

  <circle cx="200" cy="155" r="145" fill="none" stroke="var(--crimson)" stroke-width="0.6" opacity="0.18"/>
  <circle cx="200" cy="155" r="165" fill="none" stroke="var(--crimson)" stroke-width="0.4" opacity="0.1" stroke-dasharray="6 10"/>

  <circle cx="200" cy="140" r="80" fill="var(--crimson)" opacity="0.08" filter="url(#fig-halo)"/>

  <polygon class="fig-part" id="fig-head-shadow" points="200,38 278,175 122,175" fill="#4A0E0E" opacity="0.6"/>
  <polygon class="fig-part" id="fig-head-main" points="200,38 278,175 122,175" fill="url(#head-glow)" opacity="0.92"/>
  <polygon points="200,38 239,108 161,108" fill="#E74C3C" opacity="0.28"/>
  <polygon points="200,38 278,175 239,108" fill="#C0392B" opacity="0.4"/>
  <polygon points="200,38 161,108 122,175" fill="#4A0E0E" opacity="0.5"/>
  <polygon points="161,108 239,108 278,175 122,175" fill="#8B1A1A" opacity="0.45"/>
  <line x1="200" y1="38" x2="200" y2="175" stroke="oklch(8% 0.012 255)" stroke-width="1.2" opacity="0.35"/>
  <line x1="122" y1="175" x2="239" y2="108" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.25"/>
  <line x1="278" y1="175" x2="161" y2="108" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.25"/>
  <polygon points="200,38 278,175 122,175" fill="none" stroke="#E74C3C" stroke-width="0.8" opacity="0.5" filter="url(#fig-sharp-glow)"/>

  <rect class="fig-part" id="fig-neck" x="182" y="175" width="36" height="32" fill="#8B1A1A" opacity="0.85"/>
  <rect x="186" y="175" width="12" height="32" fill="#C0392B" opacity="0.2"/>

  <polygon class="fig-part" id="fig-shoulders" points="72,207 328,207 362,262 38,262" fill="var(--crimson)" opacity="0.7"/>
  <polygon points="72,207 200,207 200,262 38,262" fill="#C0392B" opacity="0.25"/>
  <polygon points="328,207 200,207 200,262 362,262" fill="#4A0E0E" opacity="0.3"/>
  <line x1="72" y1="207" x2="38" y2="262" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.3"/>
  <line x1="328" y1="207" x2="362" y2="262" stroke="oklch(8% 0.012 255)" stroke-width="0.8" opacity="0.3"/>
  <line x1="200" y1="207" x2="200" y2="262" stroke="oklch(8% 0.012 255)" stroke-width="0.6" opacity="0.2"/>

  <rect class="fig-part" id="fig-torso" x="148" y="262" width="104" height="158" fill="url(#torso-grad)" opacity="0.88"/>
  <rect x="148" y="262" width="40" height="158" fill="#C0392B" opacity="0.2"/>
  <line x1="200" y1="262" x2="200" y2="420" stroke="#E74C3C" stroke-width="0.8" opacity="0.35"/>
  <line x1="148" y1="310" x2="252" y2="310" stroke="oklch(93% 0.005 255)" stroke-width="0.5" opacity="0.15"/>
  <line x1="148" y1="360" x2="252" y2="360" stroke="oklch(93% 0.005 255)" stroke-width="0.5" opacity="0.12"/>

  <polygon class="fig-part" id="fig-arm-l" points="38,262 72,262 48,420 14,420" fill="#8B1A1A" opacity="0.8"/>
  <polygon points="38,262 55,262 31,420 14,420" fill="#8B1A1A" opacity="0.2"/>

  <polygon class="fig-part" id="fig-arm-r" points="328,262 362,262 386,420 352,420" fill="#8B1A1A" opacity="0.8"/>
  <polygon points="345,262 362,262 386,420 369,420" fill="#4A0E0E" opacity="0.3"/>

  <line x1="200" y1="175" x2="200" y2="420" stroke="#E74C3C" stroke-width="1" opacity="0.4" stroke-dasharray="3 7"/>

  <polygon id="fig-shard1" points="28,68 52,44 58,74" fill="none" stroke="var(--crimson)" stroke-width="1.2" opacity="0.8"/>
  <polygon id="fig-shard2" points="345,58 375,38 380,68" fill="none" stroke="var(--crimson)" stroke-width="1.2" opacity="0.8"/>
  <line id="fig-shard3" x1="8" y1="220" x2="34" y2="214" stroke="#E74C3C" stroke-width="2" opacity="0.8"/>
  <line id="fig-shard4" x1="366" y1="220" x2="392" y2="226" stroke="#E74C3C" stroke-width="2" opacity="0.8"/>
  <polygon id="fig-shard5" points="12,320 38,305 42,335" fill="var(--crimson)" opacity="0.8"/>
  <polygon id="fig-shard6" points="358,320 384,305 388,335" fill="var(--crimson)" opacity="0.8"/>
  <line id="fig-shard7" x1="60" y1="450" x2="90" y2="440" stroke="oklch(93% 0.005 255)" stroke-width="1" opacity="0.8"/>
  <line id="fig-shard8" x1="310" y1="450" x2="340" y2="440" stroke="oklch(93% 0.005 255)" stroke-width="1" opacity="0.8"/>

  <line x1="80" y1="420" x2="320" y2="420" stroke="var(--crimson)" stroke-width="0.8" opacity="0.3"/>
  <line x1="148" y1="420" x2="252" y2="420" stroke="oklch(93% 0.005 255)" stroke-width="0.4" opacity="0.2"/>
</svg>`;

export default function GeoFigure() {
  return (
    <div dangerouslySetInnerHTML={{ __html: rawSVG }} />
  );
}
