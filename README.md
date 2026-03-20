# Netflix Clone

A more faithful Netflix-style clone built with plain HTML, CSS, and JavaScript. It recreates the familiar Netflix browsing feel with a billboard hero, multiple content rows, search, genre switching, continue-watching cards, a My List rail, and a slide-out details panel.

## Features

- Sticky Netflix-style navigation bar with search, profile chip, and quick actions.
- Large billboard hero with play, more info, and save-to-list interactions.
- Multiple content rails that feel closer to Netflix browsing rows.
- Search, genre filters, autoplay preview toggle, and random title action.
- Continue Watching and My List sections with live updates.
- Static deployment support for GitHub Pages and other free hosts.

## Run locally

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy for free on GitHub Pages

This project includes a GitHub Actions workflow that deploys the site to GitHub Pages.

1. Push the repo to GitHub.
2. In **Settings → Pages**, choose **Source: GitHub Actions**.
3. Push to the `main` branch.
4. GitHub Actions will publish the site automatically.

## Other free deployment options

- Netlify
- Vercel
- Cloudflare Pages

Because the project is fully static, no build command is required.
