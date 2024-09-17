import { Box, Flex, Text } from "@mantine/core";
import "./page.module.css";
import "@mantine/carousel/styles.css";
import ProjectCarousel from "@/components/ProjectCarousel/ProjectCarousel";

export const metadata = {
  title: "Home - Personal Portfolio",
  description: "",
};

export default function Home() {
  return (
    <>
      <Box my="5em">
        <Box style={{ height: "4em" }}></Box>
        <Flex
          justify="flex-start"
        
          direction="column"
          gap={10}
        >
          <Text fz={"xl"}>Hello World! My name is</Text>

          <Box
            style={{
              display: "inline-block",
            }}
          >
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="7rem"
              weight={700}
              style={{ display: "inline" }}
            >
              Suhas
            </Text>
          </Box>
          <Text fz={"xl"}>and I am an </Text>

          <Box
            style={{
              display: "inline-block",
            }}
          >
            <Text
              variant="gradient"
              gradient={{ from: "blue", to: "pink" }}
              size="4em"
              // fz="3em"
              weight={700}
              style={{ display: "inline" }}
            >
              Engineer
            </Text>
          </Box>
        </Flex>
        <ProjectCarousel />
      </Box>
    </>
  );
}
