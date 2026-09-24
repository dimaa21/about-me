import { img } from './utils';

export const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'My Stack' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export const socialLinks = {
  header: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', src: img('linkedin.png'), alt: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', src: img('github.png'), alt: 'GitHub' },
    { href: 'https://t.me/haborak', src: img('telegram.png'), alt: 'Telegram' }
  ],
  footer: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', src: img('linkedin.png'), alt: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', src: img('github.png'), alt: 'GitHub' },
    { href: 'https://t.me/dimaaa_g', src: img('telegram.png'), alt: 'Telegram' }
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
    icon: 'fa-solid fa-window-maximize',
    title: 'Landing pages',
    text: 'Fast, conversion-focused landing pages with a clean layout and clear call to action.'
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Responsive websites',
    text: 'Adaptive layout that looks sharp and stays usable on desktop, tablet, and mobile.'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Frontend development',
    text: 'Modern UI from Figma with HTML, CSS, JavaScript, and React.'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Web apps',
    text: 'Full websites and admin panels with PHP, Laravel, and a reliable backend.'
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Technical integration',
    text: 'Cloudflare, DNS, SSL, and tracking platforms like Keitaro and Binom.'
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Performance',
    text: 'Code and load-time optimization so the product stays fast after launch.'
  }
];

export const portfolio = [
  {
    type: 'Website',
    href: 'https://dimaa21.github.io/website-halloween/',
    src: img('portfolio2.png'),
    alt: 'Halloween website'
  },
  {
    type: 'Website',
    href: 'https://uarch.if.ua/',
    src: img('portfolio4.png'),
    alt: 'Uarch architecture bureau'
  },
  {
    type: 'Landing page',
    href: 'https://dimaa21.github.io/landing-page/',
    src: img('portfolio1.png'),
    alt: 'Landing page project'
  },
  {
    type: 'Website',
    href: 'https://dimaa21.github.io/website-restaurant/',
    src: img('portfolio3.png'),
    alt: 'Restaurant website'
  }
];

export const experience = [
  {
    dates: 'Jul 2024 – Aug 2026',
    length: '2 yrs 2 mos',
    logo: 'NDA',
    title: 'Technical Integrator & Front-End Developer',
    company: 'NDA · Full-time',
    meta: 'Remote',
    skills: [
      'HTML5',
      'CSS',
      'JavaScript',
      'React',
      'PHP',
      'Laravel',
      'Python',
      'Git',
      'Keitaro',
      'Binom',
      'Cloudflare',
      'DNS',
      'SSL Certificates',
      'SSH Client'
    ]
  },
  {
    dates: 'Apr 2023 – May 2024',
    length: '1 yrs 1 mos',
    logo: 'CO',
    title: 'Web Developer',
    company: 'CoolOrca.com, Inc. · Full-time',
    meta: 'Remote',
    skills: [
      'HTML5',
      'CSS',
      'Sass',
      'Bootstrap',
      'JavaScript',
      'React',
      'PHP',
      'Laravel',
      'Git',
      'Figma'
    ]
  },
  {
    dates: 'Jan 2021 – Mar 2023',
    length: '2 yrs 3 mos',
    logo: 'FR',
    title: 'Frontend Developer',
    company: 'Freelancer.com · Full-time',
    meta: 'Remote',
    skills: [
      'HTML5',
      'CSS',
      'Sass',
      'Bootstrap',
      'JavaScript',
      'jQuery',
      'Gulp',
      'Figma',
      'Front-End Development',
      'Adaptive Layout'
    ]
  }
];
