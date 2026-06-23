# Furniture Factory Outlet World — site (frontend proof-of-concept)

This is the **flagship demo** of a five-site pitch. It's a front-end-only Astro
build whose centerpiece is the **catalog / inventory experience**. It's meant to
show the owner what a real store site can do. Nothing here is wired to a backend,
and a lot of the content is realistic placeholder data so the page looks live.

**Be honest with the owner about what's real and what isn't** — the checklist at
the bottom is the list of things to confirm or collect before this could launch.

## Stack
- Astro 6 + TypeScript (strict) + Tailwind CSS v4 (via `@tailwindcss/vite`).
- Static output. No backend, no analytics, no external network calls at runtime.
- Fonts: Fraunces (display) + Manrope (body) via Google Fonts.
- `npm install` then `npm run build`. Build output: **44 pages** (home, catalog,
  40 product pages, 404). Build passes clean.

> Note: `package.json` pins `vite` to `7.3.5` via `overrides`. This is required
> because the current `@tailwindcss/vite` otherwise pulls in vite 8, which is
> incompatible with Astro 6's rolldown bindings (`Missing field tsconfigPaths`).
> Revisit this pin when Astro/Tailwind catch up.

## Pages & routes
- `/` — editorial home (hero, value props, featured pieces, shop-by-room tiles,
  reviews strip, hours/location, footer).
- `/catalog` — the centerpiece. Live search, multi-filter, sort, URL-synced.
- `/product/[id]` — detail page per item (generated via `getStaticPaths`).

## What's REAL vs PLACEHOLDER

### Real / structural (safe)
- The site **architecture, design system, palette, and the catalog mechanics**
  (search, filtering, sorting, URL sync, related items) are real and working.
- Accessibility scaffolding is real: skip link, focus rings, semantic landmarks,
  keyboard-operable modal (Esc + focus trap), `prefers-reduced-motion`, alt text.

### Placeholder (must be confirmed/replaced) — all marked `// POC` / `// CONFIRM`
- **Business name** is used as given ("Furniture Factory Outlet World") but the
  spelling/branding has **not** been confirmed first-party.
- **Address** — street number is invented; only the Waxhaw, NC / Lancaster Hwy
  area is a guess from public sources.
- **Phone** — placeholder `(704) 555-0142`, not a real number.
- **Hours** — placeholder Thu–Sat schedule. Public sources *hint* at Thu–Sat but
  this is unconfirmed.
- **All prices, dimensions, materials, stock status** in `src/data/inventory.ts`
  are invented demo data (~40 items). This is NOT a real catalog.
- **Value props** (outlet pricing, delivery, financing, quality) — generic claims,
  no confirmed terms.
- **Reviews** — deliberately labeled placeholder quotes. We did **not** fabricate
  attributed real customer reviews.
- **Images** — there are no real photos. The hero and every product "photo" is a
  locally-generated, labeled placeholder SVG. Nothing is scraped or hotlinked.
- **Social** — no social network is named or linked in the visible copy. There's
  an empty `socialUrl` slot in `site.ts` for a confirmed profile later.

## Mocked (no backend) features
- **"Reserve this piece"** and **"Check availability"** buttons → open an
  accessible "Demo — full feature coming soon" modal. They validate nothing on a
  server and send nothing.
- Catalog filtering/sorting is **100% client-side** over the local dataset.
- No cart, no checkout, no inventory feed, no email/SMS capture.

## Where things live
- `src/data/site.ts` — single source of truth for copy/contact/hours (POC-marked).
- `src/data/inventory.ts` — the placeholder catalog dataset + helpers.
- `src/components/` — one component per section/widget.
- `src/pages/` — `index.astro`, `catalog.astro`, `product/[id].astro`.
- `src/assets/` — placeholder SVGs (OG image). `public/favicon.svg` — brand mark.

---

## Owner questions — confirm or collect before launch

### Identity & contact
- [ ] **Exact business name / branding** (logo, exact spelling, tagline).
- [ ] **Full street address** incl. the real street number on Lancaster Hwy.
- [ ] **Phone number** (and whether texts are OK).
- [ ] **Business email** for inquiries.
- [ ] **Real hours**, including any seasonal/holiday variation. (We assumed
      Thu–Sat — confirm or correct.)
- [ ] **Official social profile URL**, if any, to drop into the social slot.
- [ ] **Domain name** to set in `astro.config.mjs` (`site:`) so OG/JSON-LD URLs
      resolve correctly.

### Inventory (the big one)
- [ ] **Real product list** to replace the ~40 placeholder items: names, prices,
      categories, rooms, styles, colors, materials, dimensions, stock status.
- [ ] How will inventory **stay current**? Options: (A) we maintain it as a
      service, (B) a simple spreadsheet/admin the owner edits, (C) a feed/export
      from an existing POS/inventory system.
- [ ] Which items are truly **in stock / take-home** vs **made to order**.
- [ ] **Real product photos** (and permission to use them). At minimum: a hero
      shot per featured piece; ideally 3–4 angles each for the gallery.

### Commercial details
- [ ] **Outlet pricing** claim — is it factory-direct / overstock / clearance?
      Confirm the wording.
- [ ] **Delivery** — radius, fee structure, lead times, white-glove vs curbside.
- [ ] **Financing** — provider and the real plans/terms (or remove the claim).
- [ ] **Returns / warranty / haul-away** policy, if any.

### Trust & marketing
- [ ] **Real, permissioned customer reviews** to replace the placeholders (or
      connect a live Google reviews pull).
- [ ] **Storefront / interior photos** for the hero and visit section.
- [ ] Years in business / "established" line, if the owner wants one.

### Functionality to wire up (currently mocked)
- [ ] **Reserve this piece** — connect to email/SMS, a form service, or POS hold.
- [ ] **Check availability** — connect to real stock data.
- [ ] Decide whether to add a **contact / quote-request form**, financing
      pre-qualification, or an email/text deal signup (none built yet).

### Launch
- [ ] Buy/point the **domain**; set it in `astro.config.mjs`.
- [ ] Replace the **OG/share image** (`src/assets/og-placeholder.svg`) with a
      real branded image.
- [ ] Claim/verify the **Google Business Profile** so the site + Maps reinforce
      each other.
