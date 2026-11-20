# Portfolio of Haider Ali Bhatti

Personal portfolio of Haider Ali Bhatti, a Game Developer with 4+ years of experience building mobile games in Unity and C#.

**Live site:** https://haiderbhattijkd.github.io/

## Sections

- **Home** – intro and social links
- **About me** – background and main skills (Unity, C#, Unreal Engine, C++)
- **Projects** – published games on Google Play
- **Contact** – email, phone and a contact form (powered by [Formspree](https://formspree.io/))

## Tech stack

- React + TypeScript (Create React App)
- styled-components
- react-tsparticles, react-animate-on-scroll
- Formspree for the contact form
- Hosted on GitHub Pages

## Running locally

```bash
npm install
npm start
```

The site opens at http://localhost:3000.

## Deploying

The site is served from the `gh-pages` branch. To publish a new version (this builds the site first):

```bash
npm run deploy
```

## Adding a project

Add an entry to the `projects` array in [`src/components/Project/Project.tsx`](src/components/Project/Project.tsx) and put its icon in `src/assets/`.
