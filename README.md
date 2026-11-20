# Portfolio of Haider Ali Bhatti

Personal portfolio of Haider Ali Bhatti, a Game Developer with 5+ years of experience building mobile games in Unity and C#.

**Live site:** https://haiderbhattijkd.github.io/

## Sections

- **Home** – intro and social links
- **About me** – background and main skills (Unity, C#, Unreal Engine, C++)
- **Experience** – work history as a timeline
- **Games** – published games on Google Play, with gameplay clips, role and stats
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

## Editing your experience

Jobs are listed in [`src/data/experience.ts`](src/data/experience.ts), newest first. A job without an `end` date shows as "Present" with a highlighted dot. Titles in `games` that match a title in `projects.ts` link to the Play Store.

```ts
{
  role: "Unity Game Developer",
  company: "Studio name",
  companyUrl: "https://...",   // optional
  location: "Lahore, Pakistan",  // optional
  start: "Jan 2022",
  end: "Mar 2024",             // leave out for your current job
  highlights: ["Built the vehicle physics used across 3 racing games"],
  tech: ["Unity", "C#", "Firebase"],
  games: ["Rider 3D"],
},
```

## Adding a game

Games are listed in [`src/data/projects.ts`](src/data/projects.ts). Add an entry to the `projects` array and put its icon in `src/assets/`.

Every field except `title`, `icon`, `link`, `description` and `tech` is optional, and a card only shows what you fill in:

```ts
{
  title: "Rider 3D",
  icon: rider3dIcon,
  link: "https://play.google.com/store/apps/details?id=...",
  description: "Fallback text, shown until you add highlights.",
  tech: ["Unity 3D", "C#"],
  video: "rider-3d.mp4",      // file in public/media/
  poster: "rider-3d.jpg",     // still frame in public/media/
  role: "Lead Unity Developer",
  team: "3-person team",
  downloads: "1M+",           // shown as "1M+ downloads"
  rating: "4.3",              // shown as "★ 4.3"
  highlights: [
    "Built the bike physics and wheelie/stunt system",
    "Traffic AI with object pooling, steady 60 FPS on low-end Android",
  ],
},
```

### Gameplay clips

Put clips and their poster frames in `public/media/`. Without a clip, the card shows the game icon instead.

- MP4 (H.264), 10–20 seconds, no audio, 1280×720 or smaller, ideally under 3 MB each.
- The poster is a JPG of a good frame. It shows while the clip loads and for visitors who have reduced motion turned on.
- Clips play only while they're on screen and loop silently.

With [ffmpeg](https://ffmpeg.org/) you can make both from a screen recording:

```bash
ffmpeg -ss 5 -t 15 -i recording.mp4 -vf "scale=1280:-2,fps=30" -c:v libx264 -crf 28 -preset slow -an -movflags +faststart public/media/rider-3d.mp4
ffmpeg -ss 8 -i recording.mp4 -frames:v 1 -vf "scale=1280:-2" -q:v 4 public/media/rider-3d.jpg
```
