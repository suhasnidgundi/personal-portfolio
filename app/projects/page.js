import ProjectCards from "@/components/ProjectCard";
import { Box, Flex, Text } from "@mantine/core";

const Projects = () => {
  return (
    <Box my="5em">
      <Flex direction="column" gap="2em">
        <Box style={{ display: "inline-block" }}>
          <Text
            variant="gradient"
            gradient={{ from: "blue", to: "pink" }}
            size="3rem"
            weight={700}
            style={{ display: "inline" }}
          >
            Projects
          </Text>
        </Box>
        <Box>
          <ProjectCards />
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
