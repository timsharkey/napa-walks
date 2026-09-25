# Napa Walks — website

Astro static site for napawalks.com. Deploys to Netlify from this repo.

## Run it locally

```
npm install
npm run dev
```

Site runs at http://localhost:4321

## Build for production

```
npm run build
```

Output goes to `dist/`. Netlify runs this automatically on every push (see `netlify.toml`).

## Where to edit things

- **Tour package pages** (copy, pricing, what's included): `src/pages/tours/heritage-walk.astro`, `sip-and-nibble.astro`, `hops-and-bites.astro`, `boutique-row.astro`
- **Homepage:** `src/pages/index.astro`
- **About page:** `src/pages/about.astro`
- **Booking page (Trafft widget + Brevo form go here):** `src/pages/book.astro`
- **Nav / footer:** `src/components/Nav.astro`, `src/components/Footer.astro`
- **Colors, fonts, global styles:** `src/styles/global.css` — the current palette is a placeholder, swap the CSS variables at the top once the real brand guide is finalized.

## Stack notes

- **Hosting:** Netlify, auto-deploys from the `main` branch.
- **Booking/payments:** Trafft. Drop the embed code into `src/pages/book.astro` where marked.
- **Email/forms:** Brevo. Drop the form embed into `src/pages/book.astro` where marked.
- Domain (napawalks.com) is registered at GoDaddy and needs DNS pointed at Netlify once this is deployed.
