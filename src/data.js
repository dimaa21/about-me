import { img } from './utils';

export const navItems = [
  { href: '#about', label: 'About' },
  { href: '#stack', label: 'Stack' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export const socialLinks = {
  header: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', label: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', label: 'GitHub' },
    { href: 'https://t.me/haborak', label: 'Telegram' }
  ],
  footer: [
    { href: 'https://www.linkedin.com/in/dmytro-haborak-3174a2261/', label: 'LinkedIn' },
    { href: 'https://github.com/dimaa21', label: 'GitHub' },
    { href: 'https://t.me/dimaaa_g', label: 'Telegram' }
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
    title: 'Frontend development',
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
    type: 'Web app',
    href: 'https://dimaa21.github.io/campaign-analytics-dashboard/',
    src: img('campaign-dashboard.png'),
    title: 'Campaign Analytics',
    alt: 'Campaign analytics dashboard for affiliate traffic'
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
    type: 'Landing page',
    href: 'https://dimaa21.github.io/website-restaurant/',
    src: img('portfolio3.png'),
    title: 'Restaurant',
    alt: 'Restaurant website'
  },
  {
    type: 'Website',
    href: 'https://personaai-seven.vercel.app/',
    src: img('portfolio5.png'),
    title: 'Viora',
    alt: 'VIORA AI creator platform'
  }
];

export const experience = [
  {
    dates: 'Jul 2024 – Sep 2026',
    length: '2 yrs 3 mos',
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
    length: '1 yr 2 mos',
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
    dates: 'Jan 2021 – Feb 2023',
    length: '2 yrs 2 mos',
    logo: 'FR',
    title: 'Frontend Developer',
    company: 'Freelance | Self-Employed · Full-time',
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
