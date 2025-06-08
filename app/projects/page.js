"use client";

import { useState } from 'react';
import {
  Box,
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Image,
  Group,
  Badge,
  ActionIcon,
  Tabs,
} from "@mantine/core";
import { IconBrandGithub, IconExternalLink, IconCode } from "@tabler/icons-react";
import './projects.module.css';

// Project data
const projects = [
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description: "A modern portfolio website built with Next.js and Mantine UI, featuring a clean design, dark mode support, and responsive layout.",
    image: "/images/portfolio.jpg",
    video: null,
    tags: ["Next.js", "Mantine", "React"],
    links: {
      github: "https://github.com/suhasnidgundi/personal-portfolio",
      demo: "https://suhasnidgundi.com"
    }
  },
  {
    id: "soft-body-simulation",
    title: "2D Soft Body Simulation",
    description: "Cross-platform Soft Body Simulator in Python utilizing spring-mass and pressure forces models for realistic physics simulations.",
    image: "/images/simulation-thumb.jpg",
    video: "/videos/10x10.mp4",
    tags: ["Python", "Taichi", "Physics"],
    links: {
      github: "https://github.com/suhasnidgundi/2d-softbody-simulations",
      demo: null
    }
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, secure payment integration, and real-time inventory management.",
    image: "/images/ecommerce.jpg",
    video: null,
    tags: ["React", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com/suhasnidgundi/ecommerce-platform",
      demo: "https://example-ecommerce.com"
    }
  },
  {
    id: "task-management",
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking.",
    image: "/images/tasks.jpg",
    video: null,
    tags: ["Next.js", "TypeScript", "Prisma"],
    links: {
      github: "https://github.com/suhasnidgundi/task-dashboard",
      demo: "https://task-manager-demo.com"
    }
  },
  {
    id: "weather-analytics",
    title: "Weather Analytics App",
    description: "Real-time weather monitoring application with data visualization, location-based forecasts, and historical weather data analysis.",
    image: "/images/weather.jpg",
    video: null,
    tags: ["React", "D3.js", "Weather API"],
    links: {
      github: "https://github.com/suhasnidgundi/weather-app",
      demo: "https://weather-analytics.com"
    }
  },
  {
    id: "crypto-tracker",
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools for investors.",
    image: "/images/crypto.jpg",
    video: null,
    tags: ["React Native", "Redux", "Firebase"],
    links: {
      github: "https://github.com/suhasnidgundi/crypto-tracker",
      demo: "https://crypto-tracker-demo.com"
    }
  }
];

const ProjectCard = ({ project }) => {
  const [mediaType, setMediaType] = useState(project.video ? 'video' : 'image');

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      border: '1px solid var(--mantine-color-dark-4)',
      background: 'var(--mantine-color-dark-7)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
      className="project-card"
    >
      <Card.Section>
        {mediaType === 'video' && project.video ? (
          <video
            autoPlay
            loop
            muted
            style={{
              width: '100%',
              height: '220px',
              objectFit: 'cover',
              borderBottom: '1px solid var(--mantine-color-dark-4)'
            }}
          >
            <source src={project.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={project.image}
            height={220}
            alt={project.title}
            style={{
              objectFit: 'cover',
              borderBottom: '1px solid var(--mantine-color-dark-4)'
            }}
          />
        )}
      </Card.Section>

      <Box pt="md" pb="md" style={{ flex: 1 }}>
        <Group justify="space-between" mb={8}>
          <Title order={3} size="h4" fw={500} lineClamp={1}>{project.title}</Title>
        </Group>

        <Text size="sm" c="dimmed" lineClamp={3} mb="md" style={{ flex: 1 }}>
          {project.description}
        </Text>

        <Group mt="auto">
          {project.tags.map((tag) => (
            <Badge key={tag} size="sm" variant="light" radius="sm">
              {tag}
            </Badge>
          ))}
        </Group>
      </Box>

      <Group gap="xs" justify="flex-end" mt="auto" pt="xs" style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}>
        {project.links.github && (
          <ActionIcon
            component="a"
            href={project.links.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            color="gray"
            aria-label="GitHub"
          >
            <IconBrandGithub size={18} />
          </ActionIcon>
        )}
        {project.links.demo && (
          <ActionIcon
            component="a"
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            variant="subtle"
            color="gray"
            aria-label="Live demo"
          >
            <IconExternalLink size={18} />
          </ActionIcon>
        )}
        {project.video && (
          <ActionIcon
            onClick={() => setMediaType(mediaType === 'video' ? 'image' : 'video')}
            variant="subtle"
            color="gray"
            aria-label="Toggle media"
          >
            <IconCode size={18} />
          </ActionIcon>
        )}
      </Group>
    </Card>
  );
};

const Projects = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Get unique tags from all projects
  const allTags = ['all', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on active tag
  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(activeTab));

  return (
    <Container size="lg" py={40}>
      <Box mb={50} mt={10}>
        <Title order={1} size="h1" mb={10}>
          Projects
        </Title>
        <Text c="dimmed" size="lg" maw={700}>
          A collection of projects showcasing my skills and interests in software development.
        </Text>
      </Box>

      <Tabs value={activeTab} onChange={setActiveTab} mb={30}>
        <Tabs.List>
          {allTags.map(tag => (
            <Tabs.Tab key={tag} value={tag} style={{ textTransform: 'capitalize' }}>
              {tag}
            </Tabs.Tab>
          ))}
        </Tabs.List>
      </Tabs>

      <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 2, md: 3 }}
        spacing="lg"
        verticalSpacing="xl"
      >
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Projects;