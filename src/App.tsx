import { CaseStudyPage } from "./pages/CaseStudyPage";
import { HomePage } from "./pages/HomePage";
import { getProject } from "./data/projects";

export default function App() {
  const page = document.body.dataset.page;

  if (page?.startsWith("work/")) {
    const project = getProject(page.slice("work/".length));
    if (project) return <CaseStudyPage project={project} />;
  }

  return <HomePage />;
}
