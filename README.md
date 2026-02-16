# Time Is Money, Friend

> *"Time is money, friend!"* — every Goblin NPC in World of Warcraft

Browser extension that overrides "relevance" sort defaults to **newest/most recent** across search and shopping sites.

"Relevance" on most platforms doesn't mean relevant to *you* — it means relevant to *their bottom line*. Promoted listings, higher-margin products, sponsored results, and paid placements all get boosted under the "relevance" label. Sorting by newest strips that away and shows you what's actually there.

## What it does

- Replaces "relevance" sorting with recency across shopping, jobs, dev tools, property, and forums
- Per-site toggle — enable/disable and choose sort order for each site individually
- Works across 23 sites in 6 categories

### Supported sites

| Category | Sites |
|----------|-------|
| **Shopping** | Amazon (23 domains), eBay, Etsy, Walmart, Target, AliExpress, ASOS, Vinted, IKEA, Gumtree |
| **Jobs** | Indeed, LinkedIn Jobs, Reed |
| **Dev tools** | GitHub, Stack Overflow, Hacker News, npm, PyPI, Crates.io |
| **Property** | Rightmove, Zoopla |
| **Forums** | Reddit |

## Install

### Chrome
1. Go to `chrome://extensions/`
2. Enable **Developer mode** (top right)
3. Click **Load unpacked** and select this folder

### Firefox
1. Go to `about:debugging#/runtime/this-firefox`
2. Click **Load Temporary Add-on**
3. Select any file in this folder

## How it works

Manifest V3 content script with a configurable rules engine (`sites.js`). Each site has its own sort parameter name, values, and default. On page load, if no sort param is present (i.e. the site defaulted to "relevance"), the extension redirects with the recency sort applied. No external requests, no tracking — just a URL rewrite.

## Adding a site

Add an entry to `sites.js` and a matching URL pattern to `manifest.json`. Each site rule needs:

- `hostPattern` — regex matching the domain
- `searchPaths` or `pathPattern` — which paths to act on
- `sortParam` — the URL query parameter name for sort
- `sortOptions` — available sort values and labels
- `defaultSort` — the recency value to apply
