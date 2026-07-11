# Product Catalog

A small, responsive product listing page built for the Junior Software Developer (Web & Automation) assignment at The House of Sunita Shekhawat.

Products are fetched from the public [Fake Store API](https://fakestoreapi.com/products). If the API is unavailable, the app falls back to a local JSON snapshot of the same data.

## Tech stack

- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS** (mobile-first, no card component library)
- Deployed on **Vercel**

## Live demo

> _Add your Vercel URL here after deploying, e.g._  
> **https://your-project.vercel.app**

## Run locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # ESLint
```

## Features

- Responsive card grid: **1 column** (mobile) → **2** (tablet) → **3–4** (desktop)
- Each card shows image, title, price, and a short description
- Loading skeleton and error state with retry
- Client-side search by product title
- Friendly empty state when search matches nothing
- Local JSON fallback if the Fake Store API fails

## Project structure

```
app/                  # App Router layout + page
components/           # UI: catalog, card, search, loading/error/empty
lib/                  # Product types + fetch helper
data/products.json    # Offline / API fallback snapshot
```

## What I would improve with more time

- Debounce the search input and add category filters / sort by price
- Product detail route and shared layout polish
- Server-side fetch with React Suspense for better first paint, while keeping client search
- Automated tests (see below) and a11y pass (focus order, reduced motion)
- Image optimization tuning and skeleton that better matches real card heights

## How I would test this page

**Manual checks**

- Resize through mobile / tablet / desktop breakpoints and confirm grid columns
- Search for a known title fragment and a nonsense string (empty state)
- Throttle or block the Fake Store domain in DevTools to verify fallback or error + retry
- Keyboard-only use of the search field and retry / clear buttons

**Automated (with more time)**

- Unit tests for title filtering and `fetchProducts` fallback behaviour
- A single Playwright smoke test: page loads, cards appear, search narrows results

## License

Assignment submission — not licensed for redistribution.
