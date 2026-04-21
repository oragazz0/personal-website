import React, { useMemo } from 'react';

/* ── Seeded PRNG (Mulberry32) ─────────────────────────── */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/* ── Types ────────────────────────────────────────────── */
interface Point { x: number; y: number }
interface Tri   { i: number; j: number; k: number }

/* ── Bowyer-Watson Delaunay ───────────────────────────── */
function inCircumcircle(a: Point, b: Point, c: Point, p: Point): boolean {
  const ax = a.x - p.x, ay = a.y - p.y;
  const bx = b.x - p.x, by = b.y - p.y;
  const cx = c.x - p.x, cy = c.y - p.y;
  return (
    (ax * ax + ay * ay) * (bx * cy - cx * by) -
    (bx * bx + by * by) * (ax * cy - cx * ay) +
    (cx * cx + cy * cy) * (ax * by - bx * ay)
  ) > 0;
}

function delaunay(points: Point[]): Tri[] {
  const n = points.length;
  const pts = [
    ...points,
    { x: -3000, y: -3000 },
    { x: 6000, y: -3000 },
    { x: 1500, y: 6000 },
  ];
  let tris: Tri[] = [{ i: n, j: n + 1, k: n + 2 }];

  for (let p = 0; p < n; p++) {
    const pt = pts[p];
    const bad = new Set<number>();

    for (let t = 0; t < tris.length; t++) {
      const { i, j, k } = tris[t];
      if (inCircumcircle(pts[i], pts[j], pts[k], pt)) bad.add(t);
    }

    const boundary: [number, number][] = [];
    const badArr = Array.from(bad);
    for (const t of badArr) {
      const { i, j, k } = tris[t];
      for (const [a, b] of [[i, j], [j, k], [k, i]] as [number, number][]) {
        let shared = false;
        for (const o of badArr) {
          if (o === t) continue;
          const ot = tris[o];
          if ([ot.i, ot.j, ot.k].includes(a) && [ot.i, ot.j, ot.k].includes(b)) {
            shared = true;
            break;
          }
        }
        if (!shared) boundary.push([a, b]);
      }
    }

    tris = tris.filter((_, idx) => !bad.has(idx));
    for (const [a, b] of boundary) tris.push({ i: a, j: b, k: p });
  }

  return tris.filter((t) => t.i < n && t.j < n && t.k < n);
}

/* ── Component ────────────────────────────────────────── */
const SIZE = 500;
const CX = SIZE / 2;
const CY = SIZE / 2;

export default function ShatteredMesh() {
  const { coreFaces, fragFaces, edges } = useMemo(() => {
    const rand = mulberry32(1337);

    const pts: Point[] = [];

    // Dense core (~40 points)
    for (let i = 0; i < 40; i++) {
      const a = rand() * Math.PI * 2;
      const r = rand() * SIZE * 0.30;
      pts.push({ x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r });
    }
    // Mid ring (~18 points)
    for (let i = 0; i < 18; i++) {
      const a = rand() * Math.PI * 2;
      const r = SIZE * 0.26 + rand() * SIZE * 0.14;
      pts.push({ x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r });
    }
    // Outer edge (~10 points for shattering)
    for (let i = 0; i < 10; i++) {
      const a = rand() * Math.PI * 2;
      const r = SIZE * 0.38 + rand() * SIZE * 0.08;
      pts.push({ x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r });
    }

    const tris = delaunay(pts);

    // Classify triangles: fragments are far from center
    const FRAG_THRESHOLD = SIZE * 0.30;
    const isFragment = tris.map((t) => {
      const cx = (pts[t.i].x + pts[t.j].x + pts[t.k].x) / 3;
      const cy = (pts[t.i].y + pts[t.j].y + pts[t.k].y) / 3;
      return Math.hypot(cx - CX, cy - CY) > FRAG_THRESHOLD;
    });

    // Duplicate & displace fragment vertices outward
    const allPts = pts.map((p) => ({ ...p }));
    const fragVertMap = new Map<number, number>();

    tris.forEach((t, idx) => {
      if (!isFragment[idx]) return;
      for (const vi of [t.i, t.j, t.k]) {
        if (fragVertMap.has(vi)) continue;
        const p = pts[vi];
        const dx = p.x - CX;
        const dy = p.y - CY;
        const d = Math.hypot(dx, dy);
        const push = 6 + rand() * 18;
        fragVertMap.set(vi, allPts.length);
        allPts.push({
          x: d > 0 ? p.x + (dx / d) * push : p.x,
          y: d > 0 ? p.y + (dy / d) * push : p.y,
        });
      }
    });

    // Build faces
    type Face = { pts: string; frag: boolean };
    const faces: Face[] = tris.map((t, idx) => {
      let { i, j, k } = t;
      if (isFragment[idx]) {
        i = fragVertMap.get(i)!;
        j = fragVertMap.get(j)!;
        k = fragVertMap.get(k)!;
      }
      const p1 = allPts[i], p2 = allPts[j], p3 = allPts[k];
      return {
        pts: `${p1.x.toFixed(1)},${p1.y.toFixed(1)} ${p2.x.toFixed(1)},${p2.y.toFixed(1)} ${p3.x.toFixed(1)},${p3.y.toFixed(1)}`,
        frag: isFragment[idx],
      };
    });

    // Extract unique edges
    const edgeMap = new Map<string, { x1: number; y1: number; x2: number; y2: number }>();
    tris.forEach((t, idx) => {
      let { i, j, k } = t;
      if (isFragment[idx]) {
        i = fragVertMap.get(i)!;
        j = fragVertMap.get(j)!;
        k = fragVertMap.get(k)!;
      }
      for (const [a, b] of [[i, j], [j, k], [k, i]] as [number, number][]) {
        const key = a < b ? `${a}-${b}` : `${b}-${a}`;
        if (!edgeMap.has(key)) {
          edgeMap.set(key, {
            x1: allPts[a].x, y1: allPts[a].y,
            x2: allPts[b].x, y2: allPts[b].y,
          });
        }
      }
    });

    return {
      coreFaces: faces.filter((f) => !f.frag),
      fragFaces: faces.filter((f) => f.frag),
      edges: Array.from(edgeMap.values()),
    };
  }, []);

  return (
    <svg
      className="mesh-svg"
      viewBox={`0 0 ${SIZE} ${SIZE}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Core triangle faces */}
      {coreFaces.map((f, i) => (
        <polygon key={`c${i}`} className="mesh-face" points={f.pts} />
      ))}

      {/* Fragment faces — shattering off */}
      {fragFaces.map((f, i) => (
        <polygon key={`f${i}`} className="mesh-face mesh-frag" points={f.pts} />
      ))}

      {/* Wireframe edges — invisible, lit by GSAP */}
      {edges.map((e, i) => (
        <line
          key={`e${i}`}
          className="mesh-edge"
          x1={e.x1.toFixed(1)} y1={e.y1.toFixed(1)}
          x2={e.x2.toFixed(1)} y2={e.y2.toFixed(1)}
        />
      ))}
    </svg>
  );
}
