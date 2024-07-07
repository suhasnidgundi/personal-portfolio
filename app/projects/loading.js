import ProjectCardSkeleton from "@/components/projects/ProjectSkeleton";

const loading = () => {
  return (
    <>
      <h1>Projects</h1>
      <ProjectCardSkeleton type="reversed" />
    </>
  );
};

export default loading;
