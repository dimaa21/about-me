import { img } from './utils';

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#contact', label: 'Contact' }
];

export const socialLinks = {
  header: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', label: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', label: 'GitHub' },
    { href: 'https://t.me/dmytroh7', label: 'Telegram' }
  ],
  footer: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', label: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', label: 'GitHub' },
    { href: 'https://t.me/dmytroh7', label: 'Telegram' }
  ]
};

export const stackIcons = [
  'html5.svg',
  'css3.svg',
  'sass.svg',
  'bootstrap.svg',
  'javascript.svg',
  'react.svg',
  'jquery.svg',
  'php.svg',
  'laravel.svg',
  'python.svg',
  'gulp.svg',
  'figma.svg',
  'git.svg',
  'github.svg',
  'cloudflare.svg',
  'keitaro.svg',
  'binom.png',
  'dns.svg',
  'ssl.svg',
  'ssh.svg'
].map((file) => {
  const name = file.replace(/\.(svg|png)$/, '');
  const labels = {
    html5: 'HTML5',
    css3: 'CSS',
    sass: 'Sass',
    bootstrap: 'Bootstrap',
    javascript: 'JavaScript',
    react: 'React',
    jquery: 'jQuery',
    php: 'PHP',
    laravel: 'Laravel',
    python: 'Python',
    gulp: 'Gulp',
    figma: 'Figma',
    git: 'Git',
    github: 'GitHub',
    cloudflare: 'Cloudflare',
    keitaro: 'Keitaro',
    binom: 'Binom',
    dns: 'DNS',
    ssl: 'SSL',
    ssh: 'SSH'
  };

  return { src: img(file), alt: labels[name], title: labels[name] };
});

export const services = [
  {
    title: 'Landing pages',
    text: 'Fast, conversion-focused landing pages with a clean layout and clear call to action.'
  },
  {
    title: 'Responsive websites',
    text: 'Adaptive layout that looks sharp and stays usable on desktop, tablet, and mobile.'
  },
  {
    title: 'Full-stack development',
    text: 'Modern UI from Figma with HTML, CSS, JavaScript, and React.'
  },
  {
    title: 'Web apps',
    text: 'Full websites and admin panels with PHP, Laravel, and a reliable backend.'
  },
  {
    title: 'Technical integration',
    text: 'Cloudflare, DNS, SSL, and tracking platforms like Keitaro and Binom.'
  },
  {
    title: 'Performance',
    text: 'Code and load-time optimization so the product stays fast after launch.'
  }
];

export const portfolio = [
  {
    type: 'Landing page',
    href: 'https://dimaa21.github.io/fizz/',
    src: img('fizz.png'),
    title: 'Fizz',
    alt: 'Fizz zero-sugar lemonade landing page'
  },
  {
    type: 'Landing page',
    href: 'https://dimaa21.github.io/Lumen/',
    src: img('lumen.png'),
    title: 'Lumen',
    alt: 'Lumen AI meeting assistant landing page'
  },
  {
    type: 'Web app',
    href: 'https://github.com/dimaa21/Matchday',
    src: img('matchday.png'),
    title: 'Matchday',
    alt: 'Matchday football league platform'
  },
  {
    type: 'Online store',
    href: 'https://dimaa21.github.io/arka/',
    src: img('arka.png'),
    title: 'Arka',
    alt: 'Arka footwear store catalog'
  },
  {
    type: 'Website',
    href: 'https://uarch.if.ua/',
    src: img('portfolio4.png'),
    title: 'Uarch',
    alt: 'Uarch architecture bureau'
  },
  {
    type: 'Landing page',
    href: 'https://dimaa21.github.io/landing-page/',
    src: img('portfolio1.png'),
    title: 'Product landing',
    alt: 'Landing page project'
  },
  {
    type: 'Website',
    href: 'https://personaai-seven.vercel.app/',
    src: img('portfolio5.png'),
    title: 'Viora',
    alt: 'VIORA AI creator platform'
  }
];

