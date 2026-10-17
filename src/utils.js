export const img = (file) => `${import.meta.env.BASE_URL}img/${file}`;

export const HEADER_OFFSET = 80;

export function slowScroll(selector) {
  const target = document.querySelector(selector);
  if (!target) {
    return;
  }

  // Land on the section heading rather than on the empty padding above it.
  const padding = parseFloat(getComputedStyle(target).paddingTop) || 0;
  const top = target.getBoundingClientRect().top + window.scrollY + padding - HEADER_OFFSET - 24;
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
