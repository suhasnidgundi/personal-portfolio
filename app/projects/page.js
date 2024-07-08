import ProjectCard from "@/components/projects/ProjectCard";
import { getAllDocuments } from "@/utils/appwrite/databaseService";
import "@/styles/thank-you-card.css";

export const fetchProjects = async () => {
  try {
    const projects = await getAllDocuments();
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};

const ProjectsPage = async () => {
  const projects = await fetchProjects();
  console.log("Projects : ", projects.length);
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.length === 0 ? (
          <>
            <br />
            <div className="thank-you-card" style={{ borderColor: "grey" }}>
              <h2>No Project</h2>
            </div>
            <br />
          </>
        ) : (
          projects.map((project) => (
            <ProjectCard
              key={project.$id}
              title={project.title}
              description={project.description}
              imageSrc={project.screenshots[0] || "/images/placeholder.svg"}
              link={project.slug || "/default-path"} // Provide a fallback value for `link`
            />
          ))
        )}
      </ul>
    </>
  );
};

export default ProjectsPage;
