# Production Build & Deployment

This guide describes how to produce a production build of the example site and deploy it.

## Prerequisites

- Hugo (extended recommended)
- Node.js / npm (if you use extra toolchain like PostCSS, Tailwind, or Pagefind)
- CI runner (GitHub Actions, GitLab CI, CircleCI, etc.) or a static host (Netlify, Vercel, GitHub Pages)

## Build steps (simple)

1. Install dependencies (optional if you only use Hugo):

   ```bash
   npm ci
   ```

2. Run the production build which uses Hugo's `--minify` flag:

   ```bash
   npm run build:prod
   ```

This produces minified HTML/CSS/JS in the `public/` directory (or wherever your Hugo config points the destination). The current project stores canonical source under `src/` and uses module mounts in `hugo.yml` to map those files into the Hugo build.

## Recommended CI pipeline (GitHub Actions example)

A minimal pipeline:

- Checkout code
- Install Node (if needed) and cache `node_modules`
- Run `npm ci` (optional)
- Run `npm run build:prod`
- Archive or deploy the generated `public/` artifacts

## Tips for Netlify/Vercel/GitHub Pages

- Netlify
  - Set the build command to: `npm ci && npm run build:prod`
  - Set the publish directory to `public`
- Vercel
  - Configure a custom Build Command: `npm ci && npm run build:prod` and Output Directory: `public`
- GitHub Pages
  - Use an action that builds and then deploys the `public/` directory to `gh-pages` branch (or use Pages deployment from the `public` dir via a dedicated action).

## Advanced production steps (optional)

- Post-build asset processing (minification/obfuscation)
  - You can run post-processing tools (cssnano, javascript-obfuscator, html-minifier-terser) after Hugo completes. If you add this to `package.json`, ensure the pipeline runs `npm run build:prod` then the post-build scripts in sequence.
- Selector/Class obfuscation
  - If you implement a selector obfuscation step, make sure mapping files are carefully handled (store mapping in CI artifacts or a secure location if needed) — inconsistent mapping across releases will break cached client assets.

## Serving the built site

- `public/` contains the static site. Serve locally for verification:

   ```bash
   # Simple Python server
   python3 -m http.server --directory public 8080
   # or using a static file server of your choice
   ```

## Troubleshooting

- If the site works locally but not in your host, compare Hugo version and environment (PostCSS, Tailwind versions) between local and CI.
- Ensure `src/hugo.yml` (if used) is the intended config in CI; this repo keeps `src/hugo.yml` tracked so CI will pick it up.

## Security and best practices

- Do not commit `public/` generated site to the main branch unless you have a documented reason; prefer to generate during CI and publish artifacts.
- Pin Node dependencies (use `package-lock.json`) in CI to ensure reproducible builds.

## Next steps

- If you want, I can add a GitHub Actions workflow file that implements the minimal pipeline above — say "add CI" and I'll create it.
