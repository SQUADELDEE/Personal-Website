# Personal Website

Portfolio site built with [Astro](https://astro.build) and Tailwind, deployed to GitHub Pages at
https://squadeldee.github.io/Personal-Website.

## Structure

- `src/data/projects.ts` — software project entries (title, description, GIF/screenshot path, GitHub link)
- `src/data/games.ts` — Godot games, embedded via iframe from their own GitHub Pages URLs
- `src/data/mods.ts` — Minecraft mods (screenshot/GIF + CurseForge link)
- `public/media/` — images and GIFs referenced by the data files above

To add a new entry, add an object to the relevant array in `src/data/`. Media files go in
`public/media/<software|mods>/` and are referenced with a leading `/`, e.g. `/media/software/my-project.gif`.

## Commands

| Command           | Action                                       |
| :----------------- | :-------------------------------------------- |
| `npm install`       | Install dependencies                          |
| `npm run dev`       | Start local dev server at `localhost:4321`    |
| `npm run build`     | Build production site to `./dist/`            |
| `npm run preview`   | Preview the production build locally          |

Requires Node 18+ (Node 22 recommended).

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages.
Enable Pages once, under the repo's Settings → Pages → Source → "GitHub Actions".
