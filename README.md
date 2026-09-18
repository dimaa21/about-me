# Dmytro Haborak

Personal site of a front-end developer and technical integrator from Ivano-Frankivsk.

**[Live demo](https://dimaa21.github.io/about-me/)** · [LinkedIn](https://www.linkedin.com/in/dmytro-haborak-3174a2261/) · [Telegram](https://t.me/haborak)

## What’s inside

- About, stack, services, portfolio, and experience
- Responsive layout, sticky header, mobile menu
- Contact form via [Formspree](https://formspree.io)

## Tech

HTML, SCSS, vanilla JavaScript. Gulp compiles Sass and minifies JS. The site is static and hosted on GitHub Pages.

## Run locally

```bash
npm install
npm start
```

Opens a local server with live reload.

```bash
npm run build
```

Compiles:

- `app/css/main.scss` → `public/css/main.min.css`
- `app/js/main.js` → `public/js/main-min.js`

## Structure

```text
app/css/       SCSS source
app/js/        JavaScript source
public/css/    compiled styles
public/js/     compiled scripts
public/img/    images and icons
index.html     page markup
gulpfile.js    build tasks
```
