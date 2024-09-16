import ProjectCardProps from "@/components/ProjectCard/data";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { Box, Flex } from "@mantine/core";
import React from "react";

const ProjectCards = () => {
  return (
    <Flex justify="flex-start" direction="column" gap={20}>
      {ProjectCardProps.map((project) => {
        return (
          <Box id={project?.id} key={project?.id}>
            <ProjectCard
              id={project?.id}
              name={project?.name}
              image={project?.image}
              description={project?.description}
              tools={project?.tools}
              technologies={project?.technologies}
              languages={project?.languages}
              links={project?.links}
            />
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProjectCards;
