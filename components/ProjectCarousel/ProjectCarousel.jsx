"use client"

import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Carousel } from "@mantine/carousel";
import ProjectCardProps from "../ProjectCard/data";

const ProjectCarousel = () => {
  const slides = ProjectCardProps.map((item) => (
    <Carousel.Slide key={item.id}>
      <ProjectCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel withIndicators>
      {slides}
    </Carousel>
  );
};

export default ProjectCarousel;