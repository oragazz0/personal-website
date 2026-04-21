import type { NextPage, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { useRef } from "react";
import Head from "next/head";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

import Navigation from "@/components/ui/Navigation";
import HomeSection from "@/components/sections/HomeSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Repository {
  name: string;
  description: string | null;
  language: string | null;
  htmlUrl: string;
  updatedAt: string;
  stargazersCount: number;
  topics: string[];
}

interface HomeProps {
  repos: Repository[];
}

const Home: NextPage<HomeProps> = ({ repos }) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dur = reducedMotion ? 0.01 : 1;

    // Gate visibility — elements go opacity:0 only when GSAP is active
    container.current?.classList.add('gsap-ready');

    const scroller = document.getElementById('scroller');
    if (!scroller) return;

    ScrollTrigger.defaults({ scroller });

    // ── (a) BREATHING LOOPS ──────────────────────────────────
    if (!reducedMotion) {
      // ── CRYSTAL SPHERE — perpetual animations ──────────────
      gsap.to('#crystal-svg', {
        rotation: 3, duration: 12, ease: 'sine.inOut', yoyo: true, repeat: -1, transformOrigin: '50% 50%'
      });
      const facets = gsap.utils.toArray('#crystal-svg g[clip-path="url(#circle-clip)"] polygon');
      facets.forEach((el: any, i) => {
        const base = 0.8; // default
        gsap.to(el, { opacity: Math.max(0.2, base - 0.25), duration: 3.5 + i * 0.7, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.4 });
      });
      const shardIds = ['#sh1','#sh2','#sh3','#sh4','#sh5','#sh6','#sh7','#sh8'];
      const shardMoves = [{x:28,y:-22},{x:-25,y:-18},{x:38,y:8},{x:-40,y:12},{x:5,y:-30},{x:8,y:28},{x:32,y:22},{x:-28,y:24}];
      shardIds.forEach((id, i) => {
        gsap.to(id, { x: shardMoves[i].x, y: shardMoves[i].y, duration: 6 + i * 1.2, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.3 });
        gsap.to(id, { opacity: 0.15, duration: 4 + i * 0.6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.4 });
      });

      // ── GEO FIGURE — perpetual breathing ───────────────────
      gsap.to('#fig-head-main, #fig-head-shadow', { y: -8, duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.5, transformOrigin: '200px 107px' });
      gsap.to('#fig-neck',      { y: -4,        duration: 5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.5 });
      gsap.to('#fig-shoulders', { scaleX: 1.012, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.8, transformOrigin: '200px 234px' });
      gsap.to('#fig-torso',     { scaleY: 1.015, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 0.6, transformOrigin: '200px 341px' });
      gsap.to('#fig-arm-l',     { x: -5, rotation: -1.5, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.0, transformOrigin: '55px 341px' });
      gsap.to('#fig-arm-r',     { x:  5, rotation:  1.5, duration: 8, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: 1.0, transformOrigin: '345px 341px' });
      const arcs = gsap.utils.toArray('#geo-svg > circle');
      if (arcs[0]) gsap.to(arcs[0] as Element, { rotation: 360,  duration: 90,  ease: 'none', repeat: -1, transformOrigin: '200px 155px' });
      if (arcs[1]) gsap.to(arcs[1] as Element, { rotation: -360, duration: 120, ease: 'none', repeat: -1, transformOrigin: '200px 155px' });
      [{id:'#fig-shard1',x:-8,y:-10,d:7},{id:'#fig-shard2',x:10,y:-8,d:9},{id:'#fig-shard3',x:-10,y:0,d:8},
       {id:'#fig-shard4',x:10,y:0,d:6},{id:'#fig-shard5',x:-8,y:10,d:11},{id:'#fig-shard6',x:8,y:10,d:10},
       {id:'#fig-shard7',x:-6,y:8,d:13},{id:'#fig-shard8',x:6,y:8,d:12}].forEach(({id,x,y,d},i) => {
        gsap.to(id, { x, y, duration: d, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.25 });
        gsap.to(id, { opacity: 0.12, duration: 3.5 + i * 0.5, ease: 'sine.inOut', yoyo: true, repeat: -1, delay: i * 0.35 });
      });

      // ── SCROLL PARALLAX ────────────────────────────────────
      gsap.to('.sphere-scene', { y: -60, ease: 'none', scrollTrigger: { trigger: '#home',     start: 'top top', end: 'bottom top', scrub: 1.5 } });
      gsap.to('.about-figure', { y: -40, ease: 'none', scrollTrigger: { trigger: '#about',    start: 'top top', end: 'bottom top', scrub: 1.5 } });
      gsap.to('.glitch-field', { y: -30, ease: 'none', scrollTrigger: { trigger: '#projects', start: 'top top', end: 'bottom top', scrub: 1.5 } });
    }

    // ── (b) SCROLL ENTRIES ───────────────────────────────────
    gsap.set('#home .home-eyebrow', { opacity: 0, y: 16 });
    gsap.set('#home h1', { opacity: 0, y: 24 });
    gsap.set('#home p', { opacity: 0 });
    gsap.set('#home .section-quote', { opacity: 0 });
    gsap.set('#home .arrow-btn', { opacity: 0 });
    gsap.set('.sphere-wrap, .sphere-scene', { opacity: 0, scale: 0.92 });

    const homeTL = gsap.timeline({ delay: 0.2 });
    homeTL
      .to('#home .home-eyebrow', { opacity: 0.5, y: 0, duration: 0.8 * dur, ease: 'expo.out' })
      .to('#home h1', { opacity: 1, y: 0, duration: 1.2 * dur, ease: 'expo.out' }, '-=0.55')
      .to('.sphere-wrap, .sphere-scene', { opacity: 1, scale: 1, duration: 1.4 * dur, ease: 'expo.out' }, '-=0.9')
      .to('#home p', { opacity: 1, duration: 0.6 * dur, ease: 'power2.out' }, '-=0.8')
      .to('#home .arrow-btn', { opacity: 1, duration: 0.5 * dur, ease: 'power2.out' }, '-=0.4')
      .to('#home .section-quote', { opacity: 1, duration: 1.0 * dur, ease: 'power2.out' }, '-=0.5');

    function buildSectionEntry(sectionId: string) {
      const el = document.querySelector(sectionId);
      if (!el) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 70%',
          once: true
        }
      });

      tl
        .to(el.querySelector('.section-number'), { opacity: 1, y: 0, duration: 0.8 * dur, ease: 'expo.out' }, 0)
        .to(el.querySelector('.section-tick'), { scaleX: 1, duration: 0.6 * dur, ease: 'power2.out' }, 0.15 * dur)
        .to(el.querySelector('.section-label'), { opacity: 1, y: 0, duration: 0.8 * dur, ease: 'expo.out' }, 0.25 * dur)
        .to(el.querySelector('h1'), { opacity: 1, y: 0, duration: 1.2 * dur, ease: 'expo.out' }, 0.4 * dur);

      const paragraphs = el.querySelectorAll('p');
      if (paragraphs.length) {
         tl.to(paragraphs, { opacity: 1, duration: 1.0 * dur, ease: 'power2.out', stagger: 0.08 }, 0.6 * dur);
      }

      if (el.querySelector('.section-quote')) {
        tl.to(el.querySelector('.section-quote'), { opacity: 1, duration: 1.0 * dur, ease: 'power2.out' }, 0.9 * dur);
      }

      return tl;
    }

    gsap.set('#about .section-number, #projects .section-number', { y: 16 });
    gsap.set('#about .section-label, #projects .section-label', { y: 16 });
    gsap.set('#about h1, #projects h1', { y: 24 });

    ScrollTrigger.create({
      trigger: '#about',
      start: 'top bottom',
      once: true,
      onEnter: () => {
        gsap.from('.event-horizon-art', {
          opacity: 0,
          scale: 0.9,
          duration: 1.6,
          ease: 'expo.out',
          delay: 0.3,
        });

        // Shattered mesh – directional light trails
        if (!reducedMotion) {
          const pulseMesh = () => {
            const allEdges = gsap.utils.toArray('.mesh-edge') as HTMLElement[];
            if (!allEdges.length) return;

            const angle = Math.random() * Math.PI * 2;
            const cosA = Math.cos(angle);
            const sinA = Math.sin(angle);

            const sorted = allEdges.map(el => {
              const x1 = parseFloat(el.getAttribute('x1') || '0');
              const y1 = parseFloat(el.getAttribute('y1') || '0');
              const x2 = parseFloat(el.getAttribute('x2') || '0');
              const y2 = parseFloat(el.getAttribute('y2') || '0');
              return { el, score: ((x1 + x2) / 2) * cosA + ((y1 + y2) / 2) * sinA };
            }).sort((a, b) => a.score - b.score);

            const trailSize = 8 + Math.floor(Math.random() * 6);
            const start = Math.floor(Math.random() * Math.max(1, sorted.length - trailSize));
            const trail = sorted.slice(start, start + trailSize).map(e => e.el);

            gsap.to(trail, {
              keyframes: [
                { opacity: 0.7, duration: 1.0 },
                { opacity: 0, duration: 3.5 },
              ],
              stagger: 0.35,
              ease: 'power1.inOut',
            });

            setTimeout(pulseMesh, 4000 + Math.random() * 3000);
          }

          setTimeout(pulseMesh, 600);

          // Breathing fragment triangles
          const frags = gsap.utils.toArray('.mesh-frag') as HTMLElement[];
          frags.forEach((frag, i) => {
            gsap.to(frag, {
              keyframes: [
                { opacity: 0.15, duration: 0.2, delay: 1.0 + i * 0.3 },
                { opacity: 0, duration: 1.5 },
                { opacity: 0.1, duration: 0.15 },
                { opacity: 0, duration: 2.0 },
              ],
              repeat: -1,
              repeatDelay: 3 + i * 0.5,
              ease: 'none',
            });
          });
        }
      }
    });

    buildSectionEntry('#about');
    buildSectionEntry('#projects');
    gsap.set('#projects-grid', { y: 0 });

    ScrollTrigger.create({
      trigger: '#projects',
      start: 'top bottom',
      once: true,
      onEnter: () => {
        gsap.to('#projects-grid', { opacity: 1, duration: 1.0 * dur, ease: 'power2.out', delay: 0.6 * dur });

        // Orbital node pulse
        if (!reducedMotion) {
          const nodes = gsap.utils.toArray('.orbital-node') as HTMLElement[];
          nodes.forEach((node, i) => {
            gsap.to(node, {
              keyframes: [
                { opacity: 0.9, duration: 1.8, delay: 0.5 + i * 0.6 },
                { opacity: 0, duration: 2.5 },
              ],
              repeat: -1,
              repeatDelay: 2 + i * 0.4,
              ease: 'power1.inOut',
            });
          });
        }
      }
    });

    // ── (c) NAV ACTIVE STATE ─────────────────────────────────
    const navLinks = document.querySelectorAll('.nav-links a') as NodeListOf<HTMLAnchorElement>;

    function setActiveNav(id: string) {
      navLinks.forEach(a => {
        if (a.dataset.target === id) {
          a.classList.add('active');
        } else {
          a.classList.remove('active');
        }
      });
    }

    const sections = ['home','about','projects'].map(id => document.getElementById(id)).filter(Boolean) as HTMLElement[];

    function updateNavFromScroll() {
      const scrollMid = scroller!.scrollTop + scroller!.clientHeight / 2;
      let active = sections[0];
      for (const sec of sections) {
        if (sec.offsetTop <= scrollMid) active = sec;
      }
      if (active) {
        setActiveNav(active.id);
        syncUnderlines();
      }
    }

    scroller.addEventListener('scroll', updateNavFromScroll, { passive: true });
    updateNavFromScroll();

    // ── (d) NAV UNDERLINES ───────────────────────────────────
    navLinks.forEach((link: any) => {
      const underline = document.createElement('span');
      underline.style.cssText = `
        position:absolute;bottom:0;left:0;
        width:100%;height:1px;
        background:var(--crimson);
        transform:scaleX(0);
        transform-origin:left;
        pointer-events:none;
      `;
      link.style.position = 'relative';
      link.classList.add('js-nav');
      link.appendChild(underline);
      link._underline = underline;

      link.addEventListener('mouseenter', () => {
        if (link.classList.contains('active')) return;
        gsap.to(underline, { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
      });

      link.addEventListener('mouseleave', () => {
        if (link.classList.contains('active')) return;
        gsap.to(underline, { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.in' });
      });
    });

    function syncUnderlines() {
      navLinks.forEach((link: any) => {
        if (!link._underline) return;
        if (link.classList.contains('active')) {
          gsap.to(link._underline, { scaleX: 1, transformOrigin: 'left', duration: 0.4, ease: 'power2.out' });
        } else {
          gsap.to(link._underline, { scaleX: 0, transformOrigin: 'right', duration: 0.4, ease: 'power2.in' });
        }
      });
    }
    syncUnderlines();

    // ── (e) ARROW BUTTON HOVER ───────────────────────────────
    const arrowBtn = document.getElementById('home-arrow');
    if (arrowBtn) {
      const icon = arrowBtn.querySelector('.arrow-btn-icon');
      arrowBtn.addEventListener('mouseenter', () => {
        gsap.to(icon, { x: 4, duration: 0.2, ease: 'power2.out' });
      });
      arrowBtn.addEventListener('mouseleave', () => {
        gsap.to(icon, { x: 0, duration: 0.2, ease: 'power2.out' });
      });
      arrowBtn.addEventListener('mousedown', () => {
        gsap.to(icon, { x: 8, duration: 0.1, ease: 'power2.out' });
      });
      arrowBtn.addEventListener('mouseup', () => {
        gsap.to(icon, { x: 4, duration: 0.2, ease: 'power2.out' });
      });
    }

    // ── (f) SMOOTH NAV SCROLLING ─────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href')!);
        if (target) {
          e.preventDefault();
          (target as any).scrollIntoView = undefined;
          scroller.scrollTo({ top: (target as HTMLElement).offsetTop, behavior: 'smooth' });
        }
      });
    });

  }, { scope: container, dependencies: [] });

  return (
    <div ref={container} className="h-dvh relative font-sans text-font !bg-background">
      <SpeedInsights />
      <Analytics />
      <Head>
        <title>oragazz0 — Not a portfolio</title>
        <meta
          name="description"
          content="Otavio Ragazzo's personal portfolio."
        />
        <link rel="icon" href="/dragon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <Navigation />

      <div id="scroller">
        <HomeSection />
        <AboutSection />
        <ProjectsSection repos={repos} />
      </div>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let repos: Repository[] = [];

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn('GITHUB_TOKEN not set – projects section will be empty.');
    return { props: { repos }, revalidate: 3600 };
  }

  try {
    const query = `{
      user(login: "oragazz0") {
        pinnedItems(first: 6, types: REPOSITORY) {
          nodes {
            ... on Repository {
              name
              description
              url
              stargazerCount
              updatedAt
              primaryLanguage { name }
              repositoryTopics(first: 10) {
                nodes { topic { name } }
              }
            }
          }
        }
      }
    }`;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const json = await response.json();
    const pinnedNodes = json?.data?.user?.pinnedItems?.nodes || [];

    repos = pinnedNodes.map((repo: any) => ({
      name: repo.name,
      description: repo.description,
      language: repo.primaryLanguage?.name || null,
      htmlUrl: repo.url,
      updatedAt: repo.updatedAt,
      stargazersCount: repo.stargazerCount,
      topics: repo.repositoryTopics?.nodes?.map((n: any) => n.topic.name) || [],
    }));
  } catch (error) {
    console.error('Failed to fetch pinned repos:', error);
  }

  return {
    props: { repos },
    revalidate: 3600,
  };
};
