import { socialLinks } from '../data';
import { handleHashClick, img } from '../utils';
import SocialLinks from './SocialLinks';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container header-main" id="home">
        <div className="first-block">
          <div className="white-line-high" />
          <SocialLinks links={socialLinks.header} className="header-social social" />
          <div className="white-line-low" />
        </div>

        <div className="second-block">
          <p className="hello">Hello, I am</p>
          <h1 className="name">Dmytro</h1>
          <div className="positions">
            <span className="position">Front-End Developer</span>
            <span className="position">Technical Integrator</span>
          </div>
          <div className="button">
            <a className="hire" href="#contact" onClick={handleHashClick}>
              Hire me
            </a>
            <a className="more" href="#services" onClick={handleHashClick}>
              Know more
            </a>
          </div>
        </div>

        <div className="third-block">
          <img src={img('hacker.png')} alt="Dmytro" />
        </div>
      </div>
    </section>
  );
}
