import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [visible, setVisible] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const hide = () => {
      document.documentElement.classList.remove('is-loading');
      setDone(true);
      window.setTimeout(() => setVisible(false), 900);
    };

    if (reduceMotion) {
      hide();
      return undefined;
    }

    const timer = window.setTimeout(hide, 1600);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className={`page-loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="page-loader-inner">
        <p className="page-loader-hello">Hello, I am</p>
        <p className="page-loader-name" aria-label="Dmytro">
          {'Dmytro'.split('').map((letter, index) => (
            <span key={`${letter}-${index}`}>{letter}</span>
          ))}
        </p>
        <span className="page-loader-line" />
      </div>
    </div>
  );
}
