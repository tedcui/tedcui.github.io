export const siteConfig = {
  name: "Ted Cui",
  title: "Full-Stack Data Scientist",
  description:
    "Senior Data Scientist specializing in experimentation, causal inference, applied machine learning, forecasting, optimization, analytics engineering, AI-assisted decision support, and production decision systems.",
  location: "Pittsburgh, Pennsylvania",
  canonicalUrl: "https://tedcui.github.io",
  email: null as string | null,
  linkedin: null as string | null,
  resume: null as string | null,
  healthcareDashboards: {
    pipeline: "https://tedcui.github.io/healthcare-data-pipeline/",
    outreach: "https://tedcui.github.io/care-risk-outreach/"
  }
};

export function sitePath(path = ""): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\//, "")}`;
}
