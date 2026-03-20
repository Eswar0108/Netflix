# Netflix Clone with Next.js

A responsive Netflix-inspired homepage built with **Next.js App Router**, **Tailwind CSS**, **axios**, and live movie data from **TMDB**.

## Features

- Navbar with Netflix-style logo, search input, and profile icon.
- Hero banner with a featured movie pulled from TMDB.
- Reusable horizontal movie rows for Trending, Top Rated, Action, and Comedy.
- Hover effects inspired by Netflix with scale and shadow.
- Clickable movie cards that open a detail modal with title and overview.
- Responsive layout optimized for Vercel deployment.

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

- If `TMDB_API_KEY` is missing, the homepage shows a fallback featured message instead of live movies.
- TMDB image URLs are built from `image.tmdb.org`, and TMDB requires attribution for API/image usage.
