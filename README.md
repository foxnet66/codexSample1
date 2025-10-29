# Next.js Starter Template

This repository contains a Next.js starter bootstrapped with TypeScript, Tailwind CSS, ESLint, Prettier, Husky, and lint-staged. It mirrors what `create-next-app` generates with additional automation for code quality and deployment guides for Vercel and Netlify.

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app in development mode. The entry page is located at `src/pages/index.tsx` and imports global styles from `src/styles/globals.css`.

## Project Structure

```
src/
  components/
  lib/
  pages/
  styles/
```

* `src/components/`: Shared UI components such as the base `Header` and `Layout`.
* `src/lib/`: Framework-agnostic utilities and configuration data.
* `src/pages/`: Next.js route handlers, including `_app.tsx` for global providers.
* `src/styles/`: Tailwind entry-point styles and other global CSS.

## Tooling

- **TypeScript** for type-safe development.
- **Tailwind CSS** configured through `tailwind.config.ts` and `postcss.config.js`.
- **ESLint** (`next lint`) extended with Prettier for formatting compatibility.
- **Prettier** plus `prettier-plugin-tailwindcss` to auto-sort Tailwind class names.
- **Husky + lint-staged** to run linting and formatting before each commit.

### Running Linting & Formatting

```bash
npm run lint      # Executes Next.js ESLint configuration
npm run lint-staged  # Manually trigger lint-staged on the entire project
```

## Deployment

### Vercel

1. Create a new project in the [Vercel dashboard](https://vercel.com/dashboard) and select **Import Git Repository**.
2. Choose the GitHub repository containing this project and grant access if prompted.
3. Vercel automatically detects Next.js, sets the build command to `npm run build`, and the output directory to `.next`.
4. Configure environment variables in the Vercel dashboard when needed.
5. Trigger deployments by pushing to the default branch or opening pull requests.

For local testing with Vercel CLI:

```bash
npm install -g vercel
vercel dev
```

### Netlify

1. In the [Netlify dashboard](https://app.netlify.com), click **Add new site** → **Import an existing project**.
2. Connect your GitHub account and select this repository.
3. Set the build command to `npm run build` and publish directory to `.next`. Enable **Next.js Runtime** for best support.
4. Optionally add environment variables in the site settings.
5. Deployments run automatically on each push to the connected branch.

Include a `netlify.toml` (already provided) to keep Netlify configuration in version control.

## Testing & Quality Gates

### Unit tests with React Testing Library

```bash
npm run test:unit           # Run the full Jest test suite once
npm run test:unit:watch     # Re-run tests on file changes
npm run test:unit:coverage  # Generate coverage reports in ./coverage
```

Unit tests are powered by Jest and React Testing Library. Custom matchers from `@testing-library/jest-dom` are configured in `jest.setup.ts`.

### End-to-end tests with Playwright

```bash
npm run test:e2e            # Executes Playwright against a local dev server
npm run test:e2e:headed     # Opens the UI while running tests
npm run test:e2e:report     # Re-opens the latest HTML report
```

Playwright automatically starts a development server locally and uses a production build when `CI=true`.

### Performance, SEO, and accessibility audits

```bash
npm run analyze:bundle      # Builds the app with the Next.js bundle analyzer enabled
npm run analyze:lighthouse  # Builds, serves, and runs a Lighthouse HTML report in ./lighthouse
```

The Lighthouse command exports an HTML report you can open locally. Bundle analysis relies on the `ANALYZE` environment variable handled in `next.config.ts`.

## Continuous Integration

Automated checks run in GitHub Actions (`.github/workflows/ci.yml`) on pushes and pull requests:

- Install dependencies with the cached Node.js setup.
- Run ESLint, Jest (with coverage), and Next.js build.
- Install Playwright browsers and execute the E2E suite.
- Spin up the production server to capture a Lighthouse report focused on performance, accessibility, and SEO.
- Upload coverage, Playwright, and Lighthouse artifacts for review.

The `pre-commit` hook still runs ESLint and Prettier through `lint-staged`. Ensure dependencies are installed locally so Git hooks can execute when committing changes.

## License

MIT
