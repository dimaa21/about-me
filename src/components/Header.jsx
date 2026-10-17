import { useEffect, useState } from 'react';
import { navItems } from '../data';
import { useLocalTime } from '../hooks';
import { handleHashClick, img } from '../utils';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const time = useLocalTime();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  const onNavClick = (event) => {
    // Unlock the page before scrolling; the effect would do it a frame later
    // and cut the smooth scroll short.
    document.body.style.overflow = '';
    setMenuOpen(false);
    handleHashClick(event);
  };

  return (
    <header className={`site-header${menuOpen ? ' menu-open' : ''}`}>
      <div className="container header-row">
        <a className="brand" href="#home" onClick={onNavClick} aria-label="Dmytro Haborak, back to top">
          <img src={img('logo.png')} alt="" />
        </a>

        <nav className="nav" aria-label="Main">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} onClick={handleHashClick}>
              <sup>0{index + 1}</sup>
              <span className="roll">
                <span>{item.label}</span>
              </span>
            </a>
          ))}
        </nav>

        <div className="header-meta">
          <span className="status">
            <i aria-hidden="true" />
            Open to work
          </span>
          <span className="clock">IF {time}</span>
        </div>

        <button
          className="burger"
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="mobile-menu" aria-hidden={!menuOpen}>
        <nav className="container">
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={onNavClick}
              tabIndex={menuOpen ? 0 : -1}
              style={{ '--i': index }}
            >
              <sup>0{index + 1}</sup>
              {item.label}
            </a>
          ))}
        </nav>
        <p className="container mobile-menu-foot">Ivano-Frankivsk · {time}</p>
      </div>
    </header>
  );
}
