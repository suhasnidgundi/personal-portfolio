import ProjectCardSkeleton from "../projects/ProjectSkeleton";
import { fetchProjects } from "@/app/projects/page";
import ProjectCard from "../projects/ProjectCard";
import { Suspense } from "react";

export default async function Projects() {
  let projects = [];
  let error = null;

  try {
    projects = await fetchProjects();
  } catch (err) {
    console.log("Fetch Project Error : ", err);
    error = err;
  }

  return (
    <>
      <section id="projects">
        <h2>My projects</h2>
        <Suspense fallback={<ProjectCardSkeleton type="reversed" />}>
          {error ? (
            <div className="error-card">
              <h2>Oops! Something went wrong 😕</h2>
              <p style={{ textAlign: "center" }}>
                We couldnt fetch the projects. Please try again later. 🔄
              </p>
              <button
                onClick={async () => {
                  try {
                    projects = await fetchProjects();
                    error = null;
                  } catch (err) {
                    error = err.message;
                  }
                }}
                className="AccentButton"
              >
                Try Again 🔁
              </button>
            </div>
          ) : projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard
                key={project.$id}
                title={project.title}
                description={project.description}
                imageSrc={project.screenshots[0] || "/images/placeholder.svg"}
                link={project.slug || ""}
              />
            ))
          ) : (
            <div className="thank-you-card" style={{ borderColor: "grey" }}>
              <h2>No Projects</h2>
            </div>
          )}
        </Suspense>
      </section>
    </>
  );
}
