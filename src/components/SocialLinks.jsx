export default function SocialLinks({ links, className = 'social' }) {
  return (
    <ul className={className}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {link.label}
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
        </li>
      ))}
    </ul>
  );
}
