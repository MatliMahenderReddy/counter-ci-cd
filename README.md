# Counter CI/CD App

A simple React + Vite counter app with a GitHub Actions CI workflow.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## CI

The workflow in `.github/workflows/ci.yml` runs on pushes to `main` and pull requests targeting `main`. It installs dependencies and verifies that the Vite production build succeeds.

## Deploy

Import this repository into Vercel. Use the Vite preset, build command `npm run build`, and output directory `dist`. Vercel can deploy automatically when changes are pushed to the connected production branch.
