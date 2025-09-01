# Changelog

All notable changes to this project are documented in this file.

This project adheres to "Keep a Changelog" (<https://keepachangelog.com/en/1.0.0/>)
and follows Semantic Versioning.

## [0.4.0] - 2025-09-01

### Added

- Static HTML asset integrity tests: `test/static.test.js` verifies that local assets referenced by generated HTML exist and are reachable.
- NPM scripts for testing: `test:static` and `test:unit`.

### Changed

- Developer workflow: improved start process (`start` delegates to `start:dev`) and simplified cache cleanup scripts (`clear:cache`, `clear:all`) targeting `.build`.

### Dependencies

- Dev: added `jsdom` and `minimist` to support static HTML integrity tests and CLI args.

### Links

- Commit: [66e876d](https://github.com/lbenicio/minimalist-simple-dev-theme/commit/66e876d5cd48d7fdf544cde67d278bf461040f82)

## [0.3.5] - 2025-08-31

### Changed

- Bump package version to `0.3.5` and update changelog.

### Added

- VS Code workspace settings and recommended extensions in `.vscode/` to improve developer experience.

### Changed

- Added Hugo module mounts to `hugo.yml` and `theme.yml` so source files under `src/` are used as the site inputs when running Hugo from the repo root.
- Updated `start:dev` npm script to place runtime outputs under `./.build` and manage `src/resources` via a local symlink during development.
- Bumped `package.json` version to `0.3.3`.

### Fixed

- Re-tracked `src/hugo.yml` in git so the test/production config stays available to other contributors.

## [0.3.4] - 2025-08-31

### Added

- VS Code workspace settings and recommended extensions in `.vscode/` to improve developer experience.

### Changed

- Added Hugo module mounts to `hugo.yml` and `theme.yml` so source files under `src/` are used as the site inputs when running Hugo from the repo root.
- Updated `start:dev` npm script to place runtime outputs under `./.build` and manage `src/resources` via a local symlink during development.
- Bumped `package.json` version to `0.3.3`.

### Fixed

- Re-tracked `src/hugo.yml` in git so the test/production config stays available to other contributors.

## [0.3.3] - 2025-08-31

### Added

- Documentation: added `docs/` with development and production guides.

### Fixed

- GitHub Actions: notification workflow fixed to use push-safe context fields and added permissions/concurrency to workflows.

## [0.3.1] - 2025-08-31

### Changed

- Replace deprecated Hugo site config key `paginate` with `pagination.pagerSize` in theme/site example config.
- Bump theme `version` to `0.3.1`.

### Fixed

- Remove Hugo deprecation warning by updating pagination config.

### Updated

- Add Dependabot ignore entries for `tailwindcss`, `postcss`, and `autoprefixer` to reduce noisy dependency PRs from the theme's `npm` updates.

## [0.3.0]

### Changed

- add custom sitemap

## [0.2.0]

### Changed

- Add image to post listing
- fix XML rendering
- add custom sitemap

## [0.1.10]

### Changed

- Remove search bar from post listing
- Remove image tag on post listing

## [0.1.7]

### Changed

- fix search bar position and placement
- render html in post listing
- fix double search bar

## [0.1.6]

### Changed

- add placeholder
- add auth header
- fix layout css issues

## [0.1.5]

### Changed

- refactor newsletter form
- add subscribe shortcode
- fix double data declaration
- enable theme conditional param
- send sub list as int
- don't stringify payload
- add contact shortcode

## [0.1.3]

### Changed

- add bluesky icon
- update fontawesome
- fix iframe self-closing tag
- fix fork icon
- update subscribe form to use native theme instead of iframe
- switch to api endpoint for subscribe form
- fix main spacing on mobile
- add subscribe shortcode

## [0.1.2]

### Changed

- add pagefind
- add subscribe form

## [0.1.1]

### Changed

- change project structure
- fix summary generation
- add taxonomy for categories
- fix forkme flag
- add custom 404 page
- style socials shortcode

## [0.1.0]

### Changed

- remove duplicate layout files
- separate single and list layout for blog or pages
- move content to articles
- remove social network mentions

## [0.0.2]

### Changed

- add social partials
- switch toml to yaml

## [0.0.1]

### Changed

- Initial release
