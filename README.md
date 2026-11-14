# WrongHow

WrongHow is a parody, wiki-style website full of fictional how-to articles and
ridiculous explanations. It is for entertainment, not real-world advice.

**Live site:** https://izacsmith.github.io/wrongwiki

## Features

- Browse, search, and filter fictional articles by category.
- Read article steps and discover related guides.
- Jump to a random article from the header.
- See a daily featured article selected from
  [`src/data/questionableAdvice.json`](src/data/questionableAdvice.json).
- Customize the site in Settings: dark mode, reduced motion, and whether to
  show related articles.
- Create a pretend local profile with a display name and icon. The profile
  appears in the header and on the homepage.
- Responsive layouts and page transitions that respect reduced-motion
  preferences.

## Static hosting and privacy

The site is a static React app and does not require a backend, database, or
account service. Routes use hash based URLs so they work on GitHub Pages.

Settings and pretend profile details are saved in the current browser using
`localStorage`. They are not uploaded or synced to other devices. The pretend
profile is not a real account: it does not ask for a password or email.

Article data is stored in JSON. Some article thumbnails currently use remote
image URLs; to host all assets on GitHub, add image files to `public/` and use
their paths in the article data.

## Article data

Add or edit articles in [`src/data/articles.json`](src/data/articles.json).
Each article has a unique `id`, `title`, `description`, `category`, `author`,
`image`, `views`, and a `steps` array. Each step has a `title` and
`description`. Keep IDs unique because routes and daily advice entries refer to
them.

The daily feature rotates through the entries in
[`src/data/questionableAdvice.json`](src/data/questionableAdvice.json), one per
UTC day. Each entry contains an `articleId` that must match an article ID and a
short `tagline`.

## Run locally

Requires Node.js 22 and npm.

```sh
npm ci
npm run dev
```

Other useful commands:

```sh
npm run lint
npm run build
npm run preview
```

`npm run preview` serves the production build after `npm run build`.

## Disclaimer

All articles are fictional and intended for entertainment. Do not treat them
as factual information or practical instructions.
