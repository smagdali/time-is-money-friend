# Time Is Money Friend

Browser extension (Manifest V3, vanilla JS) that overrides search sort order to "newest first" on 35+ websites. v0.5.1. Supports Chrome and Firefox (gecko manifest).

## Structure

- `manifest.json` — Chrome manifest
- `popup.html`, `popup.css`, `popup.js` — extension popup UI
- `content.js` — content script injected into supported sites
- `sites.js` — site configuration (the key data file)
- `icons/` — extension icons

## Dev Workflow

1. Chrome: Open `chrome://extensions`, enable Developer Mode, "Load unpacked" pointing to repo root
2. Firefox: Open `about:debugging#/runtime/this-firefox`, "Load Temporary Add-on", select manifest.json
3. No build step. No dependencies. No test framework.

## Code Quality

- MUST use `const` by default, `let` only when reassignment is needed. NEVER use `var`.
- MUST use `===` and `!==` for all comparisons. NEVER use `==` or `!=`.
- MUST use camelCase for variables and functions.
- MUST use meaningful, descriptive names. No single-letter variables outside loop indices.
- NEVER commit `console.log` debug statements.
- NEVER use emoji in code or comments.

## Extension Rules

- MUST follow Manifest V3 conventions. NEVER use Manifest V2 APIs.
- MUST request minimal permissions.

## sites.js

This is the central configuration file. Each site entry MUST follow a consistent structure. When adding a new site, copy an existing entry and adapt it. NEVER change the entry format without updating all existing entries to match.
