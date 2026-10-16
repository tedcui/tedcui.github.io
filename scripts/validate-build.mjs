import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const root = process.cwd();
const dist = resolve(root, "dist");
const requiredPages = [
  "index.html",
  "work/healthcare-ml/index.html",
  "work/bayesian-mmm/index.html",
  "work/experimentation/index.html",
  "work/inventory-optimization/index.html"
];

const errors = [];

function walk(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const fullPath = join(directory, entry);
    return statSync(fullPath).isDirectory() ? walk(fullPath) : [fullPath];
  });
}

if (!existsSync(dist)) {
  errors.push("dist/ does not exist");
} else {
  for (const page of requiredPages) {
    if (!existsSync(join(dist, page))) errors.push(`Missing required route: ${page}`);
  }

  const publicFiles = walk(dist).filter((file) => /\.(html|js|css|xml|txt|svg)$/i.test(file));

  for (const file of publicFiles) {
    const content = readFileSync(file, "utf8");
    if (/REPLACE_WITH_[A-Z_]+/.test(content)) {
      errors.push(`Unresolved publishing placeholder in ${file.slice(dist.length + 1)}`);
    }
  }

  const htmlFiles = publicFiles.filter((file) => file.endsWith(".html"));
  for (const file of htmlFiles) {
    const content = readFileSync(file, "utf8");
    const links = [...content.matchAll(/(?:href|src)=["']([^"']+)["']/g)].map((match) => match[1]);

    for (const link of links) {
      if (/^(?:https?:|mailto:|tel:|data:|#)/.test(link)) continue;

      const withoutHash = link.split("#")[0].split("?")[0];
      if (!withoutHash) continue;

      const candidate = withoutHash.startsWith("/")
        ? join(dist, withoutHash.replace(/^\/+/, ""))
        : resolve(dirname(file), withoutHash);
      const routeCandidate = withoutHash.endsWith("/") ? join(candidate, "index.html") : candidate;

      if (!existsSync(routeCandidate)) {
        errors.push(`${file.slice(dist.length + 1)} references missing asset or route: ${link}`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error("Build validation failed:\n");
  for (const error of [...new Set(errors)]) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Build validation passed: ${requiredPages.length} routes and public assets checked.`);
