# StreamSphere

A simple Netflix-style clone built with plain HTML, CSS, and JavaScript so it can be deployed for free on static hosts like GitHub Pages, Netlify, Cloudflare Pages, or Vercel.

## Features

- Hero banner with featured content and call-to-action buttons.
- Search bar and genre chips for quick catalog filtering.
- Interactive catalog cards with play, info, and watchlist actions.
- “My List” section that updates instantly as titles are saved.
- Fully static front-end with no build step required.

## Run locally

Because the app is static, you can open `index.html` directly or serve the folder locally.

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Free deployment options

- **GitHub Pages:** Push the repository and enable Pages for the root directory.
- **Netlify / Cloudflare Pages / Vercel:** Import the repo and deploy as a static site with no build command.

## Files

- `index.html` – page structure and modal/template markup.
- `styles.css` – all layout, theme, and responsive styling.
- `script.js` – mock catalog data and interactive actions.
