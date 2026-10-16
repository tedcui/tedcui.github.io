export const siteConfig = {
  name: "Ted Cui",
  title: "Senior Full-Stack Data Scientist",
  description:
    "Senior Data Scientist specializing in experimentation, causal inference, applied machine learning, forecasting, optimization, analytics engineering, and production decision systems.",
  location: "Pittsburgh, Pennsylvania",
  canonicalUrl: "https://tedcui.github.io",
  github: "https://github.com/tedcui",
  email: null as string | null,
  linkedin: null as string | null,
  resume: null as string | null,
  healthcareDashboard: null as string | null
};

export function sitePath(path = ""): string {
  const base = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  return `${base}${path.replace(/^\//, "")}`;
}
