# BrightPath — Basic Angular Static App

A responsive, static-content landing page built with standalone Angular components and plain CSS.

## Requirements
- Node.js (use a currently supported LTS release)
- npm

## Run locally
```bash
npm install
npm start
```
Open the local URL printed by Angular CLI (normally http://localhost:4200).

## Production build
```bash
npm run build
```
The production files are generated in `dist/angular-static-content-app/browser/`.

## Notes
- All page content is static and is defined in `src/main.ts`.
- Styling is in `src/styles.css`.
- No backend or database is required.
- The font is loaded from Google Fonts; the page still has fallback fonts if unavailable.
