# Development — Minimalist Simple Dev Theme

This document explains how to work on the theme and example site locally.

## Prerequisites

- Hugo (extended build recommended) — tested with Hugo v0.148+ extended.
- Node.js (LTS) and npm (for optional tooling such as Pagefind, PostCSS, etc.).
- A POSIX-like shell (macOS `zsh` is used in examples below).

## Repository layout (important)

- `src/` — canonical site/theme source (layouts, content, assets, static, archetypes, resources).
- `hugo.yml` (root) and `src/hugo.yml` — site configuration; the root `hugo.yml` contains module `mounts` that map `src/*` into Hugo's content/layouts/assets/static at runtime.
- `theme.yml` — theme metadata.
- `package.json` — npm scripts used to run and build the site.
- `.vscode/` — workspace settings and tasks (recommended but optional).

## Starting a development server

1. Install dependencies (if you plan to use the optional Node tooling):

   ```bash
   npm install
   ```

2. Run the dev server (this uses the site config in the repo root):

   ```bash
   npm run start:dev
   ```

   This command runs Hugo's development server and (by default) will serve drafts/future/expired content so you can preview in-progress posts.

## Notes about `src/` and runtime artifacts

- The repo uses `src/` as the canonical source. The root `hugo.yml` includes module mounts so Hugo reads `src/content`, `src/layouts`, `src/assets`, and `src/static` as if they were the site's `content`, `layouts`, `assets`, and `static` directories.
- During some advanced workflows or older scripts the project may create a `.build/` directory for generated runtime artifacts. If present, `.build` is used only for build outputs and can be safely ignored when editing source files.

## VS Code tasks

- The repository contains `.vscode/tasks.json` with tasks bound to the common npm scripts (`start:dev`, `build:prod`, `build:site`). Use the Tasks UI (Cmd+Shift+B) to run them quickly.
- `.vscode/settings.json` hides generated directories from the explorer and sets `SASS_PATH` for the integrated terminal to simplify SCSS imports.

## Pagefind local index (optional)

- To run the Pagefind index server locally after building the site:

  ```bash
  npm run pagefind:dev
  ```

  This serves a static index for the `public/` directory (or the directory you point Pagefind at) and provides a small UI to test search locally.

## Editing SCSS and JS

- SCSS is processed by Hugo Pipes via `toCSS` in templates. Ensure the `SASS_PATH` environment variable is set when invoking external tooling to resolve `node_modules` imports (the integrated terminal setting in `.vscode` sets this automatically).
- If you add PostCSS/Tailwind tooling, keep `postcss.config.js` consistent with `package.json` scripts and the `assets/` path you expect.

## Troubleshooting

- If Hugo cannot find `assets` imports like `node_modules/tailwindcss/base`, make sure `SASS_PATH` is set to the project `node_modules` directory or that a `src/node_modules` symlink exists for your environment.
- If you see `toCSS: type <nil> not supported in Resource transformations` during `--renderToMemory` runs, it's because templates expect Hugo Resource objects; run `hugo` with normal destination or ensure resources are available.

## Contributing

- Open issues for bugs and feature requests.
- Follow the coding style present in templates and SCSS when contributing changes.
- Update `CHANGELOG.md` and bump `package.json` `version` on release PRs.
