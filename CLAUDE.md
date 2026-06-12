# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/Vanilla JS tax help center for Carmen & Pearl CPA's (Long Island + NYC). No build step, no package manager, no framework — all pages are plain `.html` files served directly.

## Local Development

Serve with any static file server from the repo root:

```bash
python -m http.server 8000
# or
npx serve .
```

No build, lint, or test commands exist.

## Architecture

### File Layout

```
index.html          # Homepage: search, topic cards, FAQ, deadlines preview
calculators.html    # Tax calculators (brackets, SE tax, estimated, withholding)
deadlines.html      # Deadline calendar with category filtering
css/styles.css      # Single stylesheet (~880 lines, CSS custom properties)
js/main.js          # All interactive behavior
js/search-data.js   # Search index (SEARCH_DATA global, 73 topics across 5 categories)
topics/             # One HTML file per topic category, accordion-based Q&A
```

### JavaScript Architecture (`js/main.js`)

All code runs under `DOMContentLoaded`. Key systems:

- **Accordion**: Click-to-expand Q&A panels; only one open at a time per page. On page load, reads `window.location.hash`, opens the matching accordion, and smooth-scrolls to it.
- **Search**: Real-time, client-side, minimum 2 chars. Scores results: question match = 3pts, keyword match = 2pts, answer text = 1pt. Returns top 8. Dismisses on outside click or Escape. Reads from `SEARCH_DATA` in `search-data.js`.
- **Calculators**: Four calculators on `calculators.html` using 2025 hardcoded tax data (brackets, standard deductions, SE tax rates, SS wage base $176,100).
- **Deadline filtering**: Toggles `.hidden` on `.deadline-card` elements by checking `data-tags`; also hides month headers when all cards in a month are hidden.
- **Collapsible sections** (`toggleSection()`): Used on the homepage to expand/collapse the "Calculators" and "Calendar" preview blocks.

### Search Data (`js/search-data.js`)

`SEARCH_DATA` is a global array. Shape:

```js
[{
  name: "Category Name",
  topics: [{ question: "", url: "topics/page.html#anchor", keywords: [] }]
}]
```

When adding new topic pages or Q&A items, add corresponding entries here so they appear in search results.

### CSS Conventions (`css/styles.css`)

- CSS custom properties on `:root` for colors, shadows, spacing — change theme values there.
- Primary color: `#26a69a` (teal). Urgency colors: red `#e53935`, orange `#f57c00`.
- Responsive breakpoints: 820px (single-column, hide phone numbers) and 560px (hide nav text).
- Class prefixes by feature: `acc-` (accordion), `bc-` (bracket calculator), `se-` (self-employment), `et-` (estimated tax), `wh-` (withholding), `dl-` (deadline).

### HTML Conventions

- All pages share an identical sticky header (logo, nav, phone links) and footer — copy from an existing page when adding a new one.
- Topic pages include a breadcrumb and page hero. Accordion items use `<button class="accordion-btn" aria-expanded="false" aria-controls="...">` paired with `<div class="accordion-body" id="...">`.
- Accordion anchors in `topics/*.html` must match the `url` fragment in `search-data.js`.
- Deadline cards use `data-tags="individual business ..."` for the filter system.

### Tax Data Currency

All tax figures (brackets, rates, deductions) are for **2025**. When updating for a new tax year, the values are hardcoded in `js/main.js` calculator functions — there is no external data source.
