# Ted Cui — Portfolio

A static, responsive portfolio for a Senior Full-Stack Data Scientist. The site is built around four sanitized case studies and a decision-system narrative: frame the question, build the analysis, ship the system, measure the result, and improve the decision.

## Stack

- React + TypeScript
- Vite multi-page build
- Maintainable custom CSS
- Lucide icons
- GitHub Actions + GitHub Pages

The case studies are generated as real static routes, so every page supports direct loading, refreshes, page-specific metadata, and clean URLs without a hash router.

## Local development

Prerequisites: Node.js 22 or later and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL. The homepage and case-study routes are available at:

```text
/
/work/healthcare-ml/
/work/bayesian-mmm/
/work/experimentation/
/work/inventory-optimization/
```

## Production build

```bash
npm run build
```

The command type-checks the application, builds all static routes into `dist/`, rejects unresolved `REPLACE_WITH_...` tokens, and verifies required routes and local assets.

To inspect the build locally:

```bash
npm run preview
```

## Update contact and portfolio URLs

Edit `src/config/site.ts`.

- `github` is currently configured from this repository’s verified GitHub owner.
- Set `email`, `linkedin`, and `resume` to full URLs or an email address. The two public healthcare demo URLs are grouped under `healthcareDashboards`.
- Keep an unavailable destination as `null`; the UI will omit or clearly disable that action instead of rendering a broken link.
- Update `canonicalUrl` if the site moves to a custom domain.

## Update projects

Project cards and case-study pages share `src/data/projects.ts`. Each project contains:

- context and business decision
- Ted’s role and ownership boundary
- constraints and workflow steps
- approach and method rationale
- validation notes
- shipped outputs
- impact and limitations
- metric values and evidence labels

Keep every claim accurate, sanitized, and attributable. Distinguish observed outcomes from model estimates, forecasts, and annualized opportunities.

The HTML entry and Vite input for a new project must also be added to:

1. `work/<project-slug>/index.html`
2. `vite.config.ts`
3. `scripts/validate-build.mjs`
4. `public/sitemap.xml`

## Replace the résumé

Add the file at `public/resume.pdf`, then set:

```ts
resume: "/resume.pdf"
```

If the site is deployed under a repository subpath, use the configured base-path helper or a full public URL.

## Set the healthcare dashboard URLs

The two connected healthcare demos are configured in `src/config/site.ts`:

```ts
healthcareDashboards: {
  pipeline: "https://tedcui.github.io/healthcare-data-pipeline/",
  outreach: "https://tedcui.github.io/care-risk-outreach/"
}
```

The healthcare case study presents them as one sequence: the pipeline produces a governed patient-month feature layer, and the outreach dashboard turns risk-ready data into a capacity-aware action plan. External demos open in a new tab with `rel="noopener noreferrer"`.

## GitHub Pages deployment

The workflow at `.github/workflows/deploy.yml` runs on every push to `main`:

```text
checkout → npm ci → build + validate → upload dist/ → deploy
```

In the repository settings, select **GitHub Actions** as the Pages source. This repository is a user Pages repository (`tedcui.github.io`), so Vite defaults to the root base path `/`.

For a project repository instead, set the build environment variable to the repository path, including leading and trailing slashes:

```text
VITE_BASE_PATH=/REPOSITORY_NAME/
```

## Custom domain

1. Configure the custom domain in GitHub Pages settings.
2. Add `public/CNAME` containing only the domain, such as `tedcui.com`.
3. Update `canonicalUrl` in `src/config/site.ts`.
4. Update canonical and Open Graph URLs in the five HTML entry files.
5. Update URLs in `public/sitemap.xml` and `public/robots.txt`.

The application does not hard-code a repository subpath in its React components.

## Content and privacy review

Before publishing, confirm every metric, role description, employer reference, and validation statement. Never add proprietary code, private URLs, patient or customer records, production credentials, or internal architecture. Use synthetic data for any future screenshots or interactive demonstrations.
