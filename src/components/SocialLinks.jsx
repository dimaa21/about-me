export default function SocialLinks({ links, className = 'social' }) {
  return (
    <div className={className}>
      {links.map((link) => (
        <a key={link.href + link.alt} href={link.href}>
          <img src={link.src} alt={link.alt} />
        </a>
      ))}
    </div>
  );
}
