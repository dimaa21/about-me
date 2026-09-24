import { socialLinks } from '../data';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="info-social">
          <p className="name">Created by Dmytro Haborak</p>
          <SocialLinks links={socialLinks.footer} />
        </div>
      </div>
    </footer>
  );
}
