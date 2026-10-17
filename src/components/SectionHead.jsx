export default function SectionHead({ index, title, note }) {
  return (
    <div className="section-head" data-reveal>
      <span className="section-index">({index})</span>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}
