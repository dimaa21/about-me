import { useState } from 'react';
import { navItems } from '../data';
import { handleHashClick, img } from '../utils';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const onNavClick = (event) => {
    handleHashClick(event);
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="container">
        <div className="header-top">
          <span className="logo">
            <img src={img('logo.png')} alt="Logo" />
          </span>
          <button
            className="menu"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={menuOpen ? 'fas fa-times' : 'fas fa-bars'} />
          </button>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={handleHashClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className={`mobile-menu${menuOpen ? ' is-open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={onNavClick}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
