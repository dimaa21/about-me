import { socialLinks } from '../data';
import { useLocalTime } from '../hooks';
import { handleHashClick } from '../utils';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const time = useLocalTime();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-row">
          <SocialLinks links={socialLinks.footer} className="social" />
          <span className="footer-meta">Local time {time} · Kyiv (GMT+2/3)</span>
          <a className="to-top" href="#home" onClick={handleHashClick}>
            Back to top ↑
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} Dmytro Haborak. Designed &amp; built by hand.</p>
      </div>
    </footer>
  );
}
