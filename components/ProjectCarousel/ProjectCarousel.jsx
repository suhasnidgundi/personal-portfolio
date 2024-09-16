"use client";

import { portfolio } from "@/portfolioInfo";
import { Container, Flex, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { Carousel } from "@mantine/carousel";

const ProjectCarousel = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  const { projects } = portfolio;

  const slides = projects.map((item) => (
    <Carousel.Slide key={item.title}>
      {/* <ProjectCard {...item} /> */}
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators>
      {slides}
    </Carousel>
  );
};

export default ProjectCarousel;
