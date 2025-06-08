import { Flex } from "@mantine/core";
import { IconBrandJavascript, IconBrandPython, IconBrandReact, IconBrandNextjs, IconBrandMantine, IconBrandNodejs } from "@tabler/icons-react";
import Link from "next/link";

const techIconSize = 25;
const ProjectCardProps = [
  {
    id: "personal-portfolio",
    name: "Personal Portfolio",
    image: (
      <img
        src="/images/portfolio-thumbnail.jpg"
        alt="Portfolio Website"
        style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
      />
    ),
    description: "A modern portfolio website built with Next.js and Mantine UI, featuring a clean design, dark mode support, and responsive layout for showcasing projects and skills.",
    tools: [
      {
        name: "JavaScript",
        type: "language",
      },
      {
        name: "Next.js",
        type: "technology",
      },
      {
        name: "Mantine UI",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Next.js",
        icon: <IconBrandNextjs size={techIconSize} />,
      },
      {
        name: "Mantine UI",
        icon: <IconBrandMantine size={techIconSize} />,
      },
      {
        name: "React",
        icon: <IconBrandReact size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <IconBrandJavascript size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/suhasnidgundi/personal-portfolio" style={{ marginRight: '15px' }}>
          GitHub
        </Link>
        <Link href="https://suhasnidgundi.com">
          Live Demo
        </Link>
      </>
    ),
  },
  {
    id: "soft-body-simulation",
    name: "2D Soft Body Simulation",
    image: (
      <Flex direction="row">
        <video
          style={{
            flex: 1,
            maxWidth: "50%",
          }}
          autoPlay
          loop
          muted
        >
          <source src="/videos/10x10.mp4" type="video/mp4" />
        </video>
        <video
          style={{
            flex: 1,
            maxWidth: "50%",
          }}
          autoPlay
          loop
          muted
        >
          <source src="/videos/ball_8_fall.mp4" type="video/mp4" />
        </video>
      </Flex>
    ),
    description: "Cross-platform Soft Body Simulator in Python which incorporates a particle system with collision detection, utilizes both the spring-mass and pressure forces models, and employs advanced physics algorithms for realistic simulations.",
    tools: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "Taichi",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "Taichi",
        icon: <IconBrandPython size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "Python",
        icon: <IconBrandPython size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/suhasnidgundi/2d-softbody-simulations">
          GitHub
        </Link>
      </>
    ),
  },
  {
    id: "api-management-tool",
    name: "API Management Platform",
    image: (
      <img
        src="/images/api-management-thumbnail.jpg"
        alt="API Management Tool"
        style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover' }}
      />
    ),
    description: "A comprehensive API management platform that enables developers to design, build, test, and document APIs. Features include request validation, authentication mechanisms, rate limiting, and detailed analytics.",
    tools: [
      {
        name: "JavaScript",
        type: "language",
      },
      {
        name: "Node.js",
        type: "technology",
      },
      {
        name: "React",
        type: "technology",
      },
    ],
    technologies: [
      {
        name: "React",
        icon: <IconBrandReact size={techIconSize} />,
      },
      {
        name: "Node.js",
        icon: <IconBrandNodejs size={techIconSize} />,
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: <IconBrandJavascript size={techIconSize} />,
      },
    ],
    links: (
      <>
        <Link href="https://github.com/suhasnidgundi/api-management-platform" style={{ marginRight: '15px' }}>
          GitHub
        </Link>
        <Link href="#">
          Demo
        </Link>
      </>
    ),
  },
];

export default ProjectCardProps;