# Minimalist Simple Dev Theme — Documentation

This `docs/` directory contains developer and production documentation for the Minimalist Simple Dev Hugo theme. It is intended to help contributors and downstream users build, test and deploy the theme and example site.

Files in this directory

- `README.md` — this overview and quickstart
- `DEVELOPMENT.md` — developer workflow and local environment
- `PRODUCTION.md` — build, CI and deployment guidance

Quick links

- Project root: contains `hugo.yml` (site config), `theme.yml` (theme metadata), `src/` (theme/source content), and `package.json` (npm scripts).
- Primary npm scripts (see `package.json`):
  - `npm run start:dev` — start Hugo dev server (build drafts/future/expired).
  - `npm run build:prod` — production build (runs Hugo with `--minify`).
  - `npm run pagefind:dev` — run Pagefind indexer for local search during development.

Goals of this guide

- Make it trivial for a new contributor to run the site locally.
- Explain where generated/runtime artifacts live and how to keep `src/` source-only.
- Provide a reproducible production build and recommended CI steps.

If something in these docs looks out-of-date relative to the repo, open an issue or submit a PR with corrections.
