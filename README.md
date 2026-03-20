# Netflix Clone with Next.js

A responsive Netflix-inspired homepage built with **Next.js App Router**, **Tailwind CSS**, **axios**, and live movie data from **TMDB**.

## Features

- Navbar with Netflix-style logo, search input, and profile icon.
- Hero banner with a featured movie pulled from TMDB.
- Reusable horizontal movie rows for Trending, Top Rated, Action, and Comedy.
- Dark #111 theme with bold typography inspired by Netflix.
- Large banner with a stronger gradient overlay and oversized title treatment.
- Smooth horizontal movie scrolling with hidden scrollbars and desktop row controls.
- Hover effects inspired by Netflix with scale 1.1 and stronger shadow.
- Clickable movie cards that open a richer detail modal with title, overview, poster, and metadata.
- Loading UI and responsive layout optimized for Vercel deployment.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- axios
- TMDB API

## Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Then set your TMDB API key:

```bash
TMDB_API_KEY=your_tmdb_api_key_here
```

## Run locally

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Add the `TMDB_API_KEY` environment variable in the Vercel project settings.
4. Deploy.

## Notes

- If `TMDB_API_KEY` is missing, the homepage now renders a built-in demo catalog with posters/backdrops so the UI still looks like a Netflix clone.
- TMDB API failures and timeouts now fall back safely to that demo catalog during build/runtime so Vercel deployments do not crash just because TMDB is temporarily unavailable.
- Next.js production builds are configured to skip ESLint blocking in Vercel because linting is already handled separately in CI.
- Vercel deployment should use the default Next.js output mode; self-hosting-only output settings are intentionally avoided here so the root route resolves correctly on Vercel.
- TMDB image URLs are built from `image.tmdb.org`, and TMDB requires attribution for API/image usage.
