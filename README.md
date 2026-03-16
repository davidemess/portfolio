# Davide Messori — Portfolio

Personal portfolio website built with [Astro](https://astro.build), deployed on GitHub Pages.

**Live site:** [davidemess.github.io/portfolio](https://davidemess.github.io/portfolio/)

## Tech Stack

- **Framework:** Astro 5
- **Styling:** Vanilla CSS (CSS custom properties, no framework)
- **Deployment:** GitHub Actions → GitHub Pages

## Project Structure

```
src/
├── components/     # UI components (Hero, Nav, About, Skills, Projects, ...)
├── data/           # Content: config.json, projects.ts, skills.ts, timeline.ts
├── layouts/        # Base layout (Layout.astro)
├── pages/          # Routes (index.astro)
└── types/          # TypeScript types
public/
└── images/         # Static assets (avatar, etc.)
```

## Getting Started

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Configuration

All personal content (bio, skills, projects, timeline, socials) lives in [src/data/config.json](src/data/config.json). Edit that file to update the site content without touching any component.

## Deployment

Pushing to `master` triggers the GitHub Actions workflow which builds the site and deploys to GitHub Pages automatically.
