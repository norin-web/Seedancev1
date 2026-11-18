# Seedance — promo site

React 18 + TypeScript + Vite 6 + Tailwind CSS 4 + React Router 7.

## Run

```bash
pnpm install
pnpm dev        # local dev server
pnpm build      # production build into dist/
```

## Deploy

Every push to `main` builds the site and publishes it to GitHub Pages
(`.github/workflows/deploy.yml`). In the repository settings, Pages →
Source must be **GitHub Actions**. The workflow copies `index.html` to
`404.html` so deep links open the React app.

### `base` and the custom domain

- Custom domain `seedanc.sbs` (current): `base: "/"` in `vite.config.ts`
  and `public/CNAME` with the bare domain.
- If the domain is removed: `base: "/Seedancev1/"` and delete
  `public/CNAME` in the same commit. A wrong `base` gives a blank page.

## Where things live

- `src/app/content/site.ts` — every fact about the app: name, App Store
  ID, email, features, FAQ. Pages read only from here.
- `src/app/content/legal.ts` — Privacy Policy and Terms of Use, verbatim.
- `src/styles/index.css` — design tokens (`:root`) and all layout.
- Images in `public/images/`, always referenced through `img()` from
  `src/app/utils/img.ts` so they work under any `base`.

## Reveal animations

Content is hidden only under `html.js` and only until it enters the
viewport (`utils/useReveal.ts`). Fallbacks are gated on real geometry, so
nothing stays invisible in a background tab and the page never plays every
animation at once.
