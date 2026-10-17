import { stackIcons } from '../data';
import SectionHead from './SectionHead';

export default function Stack() {
  return (
    <section className="section stack" id="stack">
      <div className="container">
        <SectionHead index="02" title="Stack" note="Tools I reach for every week." />
        <ul className="stack-grid">
          {stackIcons.map((icon, index) => (
            <li key={icon.alt} data-reveal style={{ '--d': index % 5 }}>
              <img src={icon.src} alt="" loading="lazy" />
              <span>{icon.alt}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
