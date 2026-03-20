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
- Clickable movie cards that open a richer detail modal with title, overview, poster, metadata, My List toggle, and set-as-featured action.
- Search, category filters, random “Play Something”, and persistent My List functionality.
- Continue Watching progress and Recommended For You rows driven by local state.
- Loading UI and responsive layout optimized for Vercel deployment.

## Tech Stack

- Next.js App Router
- Tailwind CSS
- axios
- TMDB API

## Generate a TMDB API key

According to TMDB's official docs, you create an API key from the **API** section inside your TMDB account settings page, and TMDB notes this flow works best on a desktop browser. Sources: https://developer.themoviedb.org/docs/getting-started and https://developer.themoviedb.org/docs/faq

1. Create or sign in to your TMDB account.
2. Open **Account Settings → API**.
3. Complete the API registration form and accept the terms.
4. Copy your API key.

## Environment Variables

Create a `.env.local` file:

```bash
cp .env.example .env.local
```

Then set either your TMDB API key or the recommended TMDB read access token:

```bash
TMDB_API_KEY=your_tmdb_api_key_here
TMDB_ACCESS_TOKEN=your_tmdb_read_access_token_here
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
3. Add either `TMDB_API_KEY` or `TMDB_ACCESS_TOKEN` in the Vercel project settings.
4. Deploy.

## Notes

- If `TMDB_API_KEY` is missing, the homepage now renders a built-in demo catalog with posters/backdrops so the UI still looks like a Netflix clone.
- TMDB API failures and timeouts now fall back safely to that demo catalog during build/runtime so Vercel deployments do not crash just because TMDB is temporarily unavailable.
- Next.js production builds are configured to skip ESLint blocking in Vercel because linting is already handled separately in CI.
- Vercel deployment should use the default Next.js output mode; self-hosting-only output settings are intentionally avoided here so the root route resolves correctly on Vercel.
- TMDB image URLs are built from `image.tmdb.org`, and TMDB requires attribution for API/image usage.
