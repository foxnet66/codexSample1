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

## Continuous Integration

The `pre-commit` hook runs ESLint and Prettier through `lint-staged`. Ensure dependencies are installed locally so Git hooks can execute when committing changes.

## License

MIT
