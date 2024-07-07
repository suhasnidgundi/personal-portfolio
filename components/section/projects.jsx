import ProjectCardSkeleton from "../projects/ProjectSkeleton";
import { fetchProjects } from "@/app/projects/page";
import ProjectCard from "../projects/ProjectCard";
import { Suspense } from "react";

export default async function Projects() {
  const projects = await fetchProjects();
  return (
    <>
      <section id="projects">
        <h2>My projects</h2>
        <Suspense fallback={<ProjectCardSkeleton type="reversed" />}>
          {projects.map((project) => (
            <ProjectCard
              key={project.$id}
              title={project.title}
              description={project.description}
              imageSrc={project.screenshots[0] || "/images/placeholder.svg"}
              link="{project.slug}"
            />
          ))}
        </Suspense>
      </section>
    </>
  );
}
