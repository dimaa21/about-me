import { useEffect, useState } from 'react';

const DURATION = 1300;

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame;
    let timer;

    const hide = () => {
      document.documentElement.classList.remove('is-loading');
      setDone(true);
      timer = window.setTimeout(() => setVisible(false), 1000);
    };

    if (reduceMotion) {
      hide();
      return () => window.clearTimeout(timer);
    }

    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / DURATION);
      setCount(Math.round((1 - Math.pow(1 - t, 3)) * 100));
      if (t < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        timer = window.setTimeout(hide, 180);
      }
    };
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`page-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <span className="page-loader-label">Dmytro Haborak — portfolio</span>
      <span className="page-loader-count">{String(count).padStart(3, '0')}</span>
      <span className="page-loader-bar" style={{ transform: `scaleX(${count / 100})` }} />
    </div>
  );
}
