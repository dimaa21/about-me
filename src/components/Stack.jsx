import { stackIcons } from '../data';

export default function Stack() {
  return (
    <section className="my-stack" id="stack">
      <div className="container">
        <h2 className="main-title">My Stack</h2>
        <div className="main-stack">
          {stackIcons.map((icon) => (
            <img
              key={icon.alt}
              src={icon.src}
              alt={icon.alt}
              title={icon.title}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
