import { Flex } from "@mantine/core";
import { IconBrandJavascript } from "@tabler/icons-react";
import { IconBrandPython } from "@tabler/icons-react";
import Link from "next/link";

const techIconSize = 25;
const ProjectCardProps = [
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
    description: `Cross-platform Soft Body Simulator in Python which incorporates a particle system with collision detection, utilizes both the spring-mass and pressure forces models, and employs an RK4 integrator to ensure precision.`,
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
        icon: <IconBrandJavascript size={techIconSize} />,
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
        <Link href="https://github.com/karmabadger/2d-softbody-simulations">
          Github
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
    description: `Cross-platform Soft Body Simulator in Python which incorporates a particle system with collision detection, utilizes both the spring-mass and pressure forces models, and employs an RK4 integrator to ensure precision.`,
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
        icon: <IconBrandJavascript size={techIconSize} />,
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
        <Link href="https://github.com/karmabadger/2d-softbody-simulations">
          Github
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
    description: `Cross-platform Soft Body Simulator in Python which incorporates a particle system with collision detection, utilizes both the spring-mass and pressure forces models, and employs an RK4 integrator to ensure precision.`,
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
        icon: <IconBrandJavascript size={techIconSize} />,
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
        <Link href="https://github.com/karmabadger/2d-softbody-simulations">
          Github
        </Link>
      </>
    ),
  },
];

export default ProjectCardProps;
