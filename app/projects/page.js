import ProjectCard from "@/components/projects/ProjectCard";
import { getAllDocuments } from "@/utils/appwrite/databaseService";

export const fetchProjects = async () => {
  try {
    const projects = await getAllDocuments();
    console.log("Project Screenshots : ", projects.screenshots);
    return projects;
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return [];
  }
};

const ProjectsPage = async () => {
  const projects = await fetchProjects();

  return (
    <>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <ProjectCard
            key={project.$id}
            title={project.title}
            description={project.description}
            imageSrc={project.screenshots[0] || "/images/placeholder.svg"}
            link="{project.slug}"
          />
        ))}
      </ul>
    </>
  );
};

export default ProjectsPage;
