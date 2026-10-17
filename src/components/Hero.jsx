import { useRef } from 'react';
import { socialLinks } from '../data';
import { finePointer, reducedMotion, useMagnetic } from '../hooks';
import { handleHashClick, img } from '../utils';
import SocialLinks from './SocialLinks';

const split = (text, offset = 0) =>
  text.split(' ').map((word, index, words) => (
    <span key={index}>
      <span className="char" style={{ '--i': offset + index }}>
        {word}
      </span>
      {index < words.length - 1 && ' '}
    </span>
  ));

export default function Hero() {
  const heroRef = useRef(null);
  const hireRef = useMagnetic(0.3);

  const onPointerMove = (event) => {
    if (!finePointer() || reducedMotion()) {
      return;
    }
    const rect = heroRef.current.getBoundingClientRect();
    heroRef.current.style.setProperty('--mx', ((event.clientX - rect.left) / rect.width - 0.5).toFixed(3));
    heroRef.current.style.setProperty('--my', ((event.clientY - rect.top) / rect.height - 0.5).toFixed(3));
  };

  return (
    <section className="hero" id="home" ref={heroRef} onPointerMove={onPointerMove}>
      <div className="container">
        <div className="hero-top">
          <span>Dmytro Haborak</span>
          <span className="hero-top-loc">Ivano-Frankivsk, UA</span>
        </div>

        <h1 className="hero-name" aria-label="Front-end developer & technical integrator">
          <span className="line" aria-hidden="true">{split('Front-end developer')}</span>
          <span className="line line-2" aria-hidden="true">
            <span className="char amp" style={{ '--i': 2 }}>
              <em>&amp;</em>
            </span>{' '}
            {split('technical integrator', 3)}
            <em className="hero-star">*</em>
          </span>
        </h1>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-lead">
              I build websites that load fast and look sharp — and keep the
              <em> boring-but-critical </em>
              parts behind them running: domains, Cloudflare, SSL, tracking.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="#contact" onClick={handleHashClick} ref={hireRef}>
                Hire me <span aria-hidden="true">→</span>
              </a>
              <a className="btn btn-line" href="#portfolio" onClick={handleHashClick}>
                See the work
              </a>
            </div>
            <SocialLinks links={socialLinks.header} className="social hero-social" />
          </div>

          <figure className="hero-art">
            <img src={img('hacker.png')} alt="Illustration of a developer at a computer" />
            <figcaption>* 5+ years shipping remotely</figcaption>
          </figure>
        </div>

        <a className="scroll-hint" href="#about" onClick={handleHashClick}>
          <span>Scroll</span>
          <i aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
