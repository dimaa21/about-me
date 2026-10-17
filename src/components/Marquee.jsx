import { stackIcons } from '../data';

export default function Marquee() {
  const row = stackIcons.map((icon) => (
    <span className="marquee-item" key={icon.alt}>
      {icon.alt}
      <i aria-hidden="true">✳</i>
    </span>
  ));

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">{row}</div>
        <div className="marquee-group">{row}</div>
      </div>
    </div>
  );
}
