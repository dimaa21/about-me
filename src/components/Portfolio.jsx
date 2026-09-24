import { portfolio } from '../data';

export default function Portfolio() {
  return (
    <section className="project" id="portfolio">
      <div className="container">
        <h2 className="main-title">My Portfolio</h2>
        <div className="portfolio">
          {portfolio.map((item) => (
            <div className="landing-page" key={item.href}>
              <p>{item.type}</p>
              <a href={item.href}>
                <img src={item.src} alt={item.alt} loading="lazy" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
