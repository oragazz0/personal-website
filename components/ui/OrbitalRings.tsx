import React from 'react';

const CX = 300;
const CY = 300;

const rings = [
  { rx: 250, ry: 195, tilt: -15, duration: 45, reverse: false,
    nodeAngles: [0, Math.PI * 0.35, Math.PI * 0.7, Math.PI, Math.PI * 1.3, Math.PI * 1.65] },
  { rx: 200, ry: 120, tilt: 42, duration: 30, reverse: true,
    nodeAngles: [Math.PI * 0.15, Math.PI * 0.55, Math.PI * 1.0, Math.PI * 1.4, Math.PI * 1.8] },
  { rx: 155, ry: 70, tilt: -58, duration: 20, reverse: false,
    nodeAngles: [Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75] },
];

export default function OrbitalRings() {
  return (
    <svg className="orbital-svg" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nucleus-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--crimson)" stopOpacity="0.2" />
          <stop offset="40%" stopColor="var(--crimson)" stopOpacity="0.08" />
          <stop offset="100%" stopColor="var(--crimson)" stopOpacity="0" />
        </radialGradient>
        <filter id="sun-blur">
          <feGaussianBlur stdDeviation="6" />
        </filter>
        <filter id="sun-bloom">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* Outer glow halo */}
      <circle cx={CX} cy={CY} r="120" fill="url(#nucleus-glow)" />
      {/* Mid blur layer */}
      <circle cx={CX} cy={CY} r="30" className="orbital-sun-halo" filter="url(#sun-blur)" />
      {/* Inner bloom */}
      <circle cx={CX} cy={CY} r="14" className="orbital-sun-core" filter="url(#sun-bloom)" />
      {/* Bright center dot */}
      <circle cx={CX} cy={CY} r="5" className="orbital-sun-dot" />

      {/* Orbital rings */}
      {rings.map((ring, i) => (
        <g
          key={i}
          style={{ transform: `rotate(${ring.tilt}deg)`, transformOrigin: `${CX}px ${CY}px` }}
        >
          <g
            className="ring-spin"
            style={{
              transformOrigin: `${CX}px ${CY}px`,
              animationDuration: `${ring.duration}s`,
              animationDirection: ring.reverse ? 'reverse' : 'normal',
            }}
          >
            <ellipse
              cx={CX} cy={CY}
              rx={ring.rx} ry={ring.ry}
              className="orbital-ring"
            />
            {ring.nodeAngles.map((angle, j) => (
              <circle
                key={j}
                className="orbital-node"
                cx={CX + ring.rx * Math.cos(angle)}
                cy={CY + ring.ry * Math.sin(angle)}
                r={j === 0 ? 3 : 2}
              />
            ))}
          </g>
        </g>
      ))}
    </svg>
  );
}
