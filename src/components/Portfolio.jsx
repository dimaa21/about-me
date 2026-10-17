import { useEffect, useRef, useState } from 'react';
import { portfolio } from '../data';
import { finePointer, reducedMotion } from '../hooks';
import SectionHead from './SectionHead';

const domain = (href) => new URL(href).host.replace(/^www\./, '');

export default function Portfolio() {
  const [active, setActive] = useState(-1);
  const previewRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!finePointer()) {
      return undefined;
    }

    const pos = { ...target.current };
    const ease = reducedMotion() ? 1 : 0.14;
    let frame;

    const tick = () => {
      pos.x += (target.current.x - pos.x) * ease;
      pos.y += (target.current.y - pos.y) * ease;
      const tilt = Math.max(-8, Math.min(8, (target.current.x - pos.x) * 0.06));
      if (previewRef.current) {
        previewRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) rotate(${tilt}deg)`;
      }
      frame = requestAnimationFrame(tick);
    };

    // Scrolling moves rows under a still cursor, so pointerleave never fires.
    const onScroll = () => setActive(-1);

    frame = requestAnimationFrame(tick);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onMove = (event) => {
    target.current = { x: event.clientX, y: event.clientY };
  };

  return (
    <section className="section work" id="portfolio">
      <div className="container">
        <SectionHead index="04" title="Selected work" note="Landing pages and sites, live." />
        <ul className="work-list" onPointerMove={onMove} onPointerLeave={() => setActive(-1)}>
          {portfolio.map((item, index) => (
            <li key={item.href} data-reveal>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onPointerEnter={() => setActive(index)}
                className={active === index ? 'is-active' : undefined}
              >
                <span className="work-num">0{index + 1}</span>
                <span className="work-title">{item.title}</span>
                <span className="work-type">{item.type}</span>
                <span className="work-domain">
                  {domain(item.href)} <span aria-hidden="true">↗</span>
                </span>
                <img className="work-thumb" src={item.src} alt={item.alt} loading="lazy" />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className={`work-preview${active >= 0 ? ' is-visible' : ''}`} ref={previewRef} aria-hidden="true">
        <div className="work-preview-inner">
          {portfolio.map((item, index) => (
            <img
              key={item.href}
              src={item.src}
              alt=""
              loading="lazy"
              className={active === index ? 'is-active' : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
