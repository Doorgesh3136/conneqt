# Conneqt

The Conneqt website: the transparent platform connecting donors with verified students worldwide.

Live at <https://webluxe.github.io/conneqt/>

## Where everything is

```
conneqt/
├── index.html            built: the page visitors open
├── sw.js                 built: keeps the site fast and working offline (must stay in this folder)
├── site.webmanifest      the icons phones use for a home screen shortcut
├── assets/               everything visitors download
│   ├── css/style.css     built: all the styles
│   ├── js/main.js        built: all the behaviour and animation
│   ├── images/           pictures, one folder per page
│   ├── icons/            the website icon, in every size
│   ├── fonts/            fonts for phones and tablets
│   └── vendor/           GSAP, ScrollTrigger and Lenis (outside libraries, do not edit)
├── src/                  everything you edit
│   ├── pages/            one folder per tab: its text, layout and animation
│   │   ├── home/
│   │   ├── problem/      includes the five animated scenes
│   │   ├── how-it-works/
│   │   ├── partners/
│   │   ├── early-access/
│   │   ├── become-a-donor/
│   │   ├── login/
│   │   ├── help/
│   │   └── legal/
│   ├── layout/           what every page shares: head, menu, intro, page wipe, footer
│   ├── scripts/          behaviour shared by the whole site
│   ├── styles/           the look of the site, oldest layer first
│   ├── index.html        the list of files that make up the page, in order
│   ├── style.css         the list of style files, in order
│   ├── main.js           the list of script files, in order
│   └── sw.js             the service worker
└── tools/build.mjs       joins src/ into the built files
```

## Changing the site

1. Edit the files in `src/`. To change a picture, replace it in `assets/images/`.
2. Run `node tools/build.mjs`. It needs [Node.js](https://nodejs.org/) and nothing else.
3. Commit everything, then push to `main`. GitHub Pages publishes it within a minute or two.

Never edit the built files by hand, because the next build replaces them. They are marked at the top.

## Why it is built this way

**One download.** However many files there are in `src/`, visitors get one stylesheet and one script, so phones load the site as fast as ever.

**Order matters.** Later styles override earlier ones, so the styles live in the order they load, not page by page. Moving a rule to a different place can change how something looks. In `src/style.css`, the lines that are not `@include` wrap the files between them in a screen-size rule.

**Every animation always plays**, for every visitor. The site ignores device settings like "remove animations" and data saver on purpose. Please do not add them back.

**Versions are automatic.** Each build gives the files a new version number, so browsers and the offline cache never mix old and new files.
