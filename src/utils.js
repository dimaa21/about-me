export const img = (file) => `${import.meta.env.BASE_URL}img/${file}`;

export const HEADER_OFFSET = 80;

export function slowScroll(selector) {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function handleHashClick(event) {
  const href = event.currentTarget.getAttribute('href');
  if (!href || !href.startsWith('#') || href.length < 2) {
    return;
  }

  event.preventDefault();
  slowScroll(href);
}
