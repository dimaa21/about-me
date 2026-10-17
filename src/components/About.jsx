import { useEffect, useRef } from 'react';
import { reducedMotion } from '../hooks';
import SectionHead from './SectionHead';

const text =
  "Hi, I'm Dmytro — a 26-year-old developer from Ivano-Frankivsk with 5+ years of remote experience. I started in frontend, grew into full website development with React, PHP and Laravel, and later moved into technical integration: Cloudflare, tracking platforms, DNS and SSL.";

const highlight = new Set(['frontend,', 'React,', 'Laravel,', 'Cloudflare,']);

const facts = [
  ['Based in', 'Ivano-Frankivsk, Ukraine'],
  ['Experience', '5+ years, remote'],
  ['Focus', 'Frontend, integrations'],
  ['Now', 'Open to new projects']
];

export default function About() {
  const textRef = useRef(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = textRef.current;
    if (reducedMotion()) {
      el.style.setProperty('--p', '1');
      return undefined;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = (vh * 0.85 - rect.top) / (rect.height + vh * 0.3);
      el.style.setProperty('--p', Math.min(1, Math.max(0, progress)).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) {
        frame = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="section about" id="about">
      <div className="container">
        <SectionHead index="01" title="About" />
        <div className="about-grid">
          <p className="about-text" ref={textRef} style={{ '--n': words.length }}>
            {words.map((word, index) => (
              <span
                key={index}
                className={highlight.has(word) ? 'word is-accent' : 'word'}
                style={{ '--i': index }}
              >
                {word}{' '}
              </span>
            ))}
          </p>
          <dl className="facts">
            {facts.map(([term, value], index) => (
              <div key={term} data-reveal style={{ '--d': index }}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
