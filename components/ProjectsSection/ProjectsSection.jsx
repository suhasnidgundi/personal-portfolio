"use client";

import { 
  Container, 
  Title, 
  Text, 
  Box, 
  Stack, 
  Group, 
  Badge, 
  Anchor,
  Divider,
  Paper,
  Grid
} from '@mantine/core';
import { IconExternalLink, IconBrandGithub } from '@tabler/icons-react';
import classes from './ProjectsSection.module.css';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with modern UI/UX, secure payment integration, and real-time inventory management. Features include user authentication, shopping cart, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "JWT"],
    liveDemo: "https://example-ecommerce.com",
    github: "https://github.com/suhasnidgundi/ecommerce-platform"
  },
  {
    id: 2,
    title: "Task Management Dashboard",
    description: "Collaborative project management tool with drag-and-drop functionality, team collaboration features, and progress tracking. Built with modern React patterns and responsive design.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    liveDemo: "https://task-manager-demo.com",
    github: "https://github.com/suhasnidgundi/task-dashboard"
  },
  {
    id: 3,
    title: "Weather Analytics App",
    description: "Real-time weather monitoring application with data visualization, location-based forecasts, and historical weather data analysis using modern web technologies.",
    technologies: ["React", "D3.js", "Weather API", "Chart.js", "PWA"],
    liveDemo: "https://weather-analytics.com",
    github: "https://github.com/suhasnidgundi/weather-app"
  },
  {
    id: 4,
    title: "Social Media Aggregator",
    description: "Unified dashboard for managing multiple social media accounts with post scheduling, analytics tracking, and engagement monitoring across different platforms.",
    technologies: ["Vue.js", "Express.js", "Redis", "Social APIs", "Docker"],
    github: "https://github.com/suhasnidgundi/social-aggregator"
  },
  {
    id: 5,
    title: "Learning Management System",
    description: "Educational platform with course creation tools, progress tracking, interactive quizzes, and student-teacher communication features for online learning.",
    technologies: ["React", "Firebase", "Material-UI", "Video.js", "Stripe"],
    liveDemo: "https://lms-platform.com",
    github: "https://github.com/suhasnidgundi/lms-platform"
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description: "Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools for informed investment decisions.",
    technologies: ["React Native", "Redux", "CoinGecko API", "Firebase", "Chart.js"],
    liveDemo: "https://crypto-tracker-demo.com",
    github: "https://github.com/suhasnidgundi/crypto-tracker"
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className={classes.section}>
      <Container size="lg" py={{ base: 60, md: 100 }}>
        <Stack gap="xl">
          {/* Section Header */}
          <Box className={classes.header}>
            <Title 
              order={2} 
              fz={{ base: '2.5rem', md: '3.5rem' }} 
              fw={300}
              mb="md"
              className={classes.title}
            >
              Top Projects
            </Title>
            <Text 
              fz={{ base: '1.1rem', md: '1.3rem' }} 
              c="dimmed" 
              maw={600}
              className={classes.subtitle}
            >
              A selection of projects that showcase my passion for creating 
              innovative solutions and exploring new technologies.
            </Text>
          </Box>

          <Divider my="xl" />

          {/* Projects Grid */}
          <Box className={classes.projectsContainer}>
            {/* Grid for Desktop and Tablet */}
            <Grid gutter="xl" className={classes.desktopGrid}>
              {projectsData.map((project, index) => (
                <Grid.Col 
                  key={project.id}
                  span={{ base: 12, sm: 6, lg: 4 }}
                  className={classes.gridCol}
                >
                  <Paper 
                    className={classes.projectCard}
                    p="lg"
                    radius="md"
                    withBorder
                    h="100%"
                  >
                    <Stack gap="md" h="100%">
                      {/* Project Header */}
                      <Box style={{ flex: 1 }}>
                        <Group justify="space-between" align="flex-start" mb="xs">
                          <Title 
                            order={3} 
                            fz="1.3rem"
                            fw={500}
                            className={classes.projectTitle}
                            lineClamp={2}
                          >
                            {project.title}
                          </Title>
                          
                          {/* Project Links */}
                          <Group gap="xs" className={classes.projectLinks}>
                            {project.liveDemo && (
                              <Anchor 
                                href={project.liveDemo}
                                target="_blank"
                                className={classes.projectLink}
                              >
                                <IconExternalLink size={16} />
                              </Anchor>
                            )}
                            {project.github && (
                              <Anchor 
                                href={project.github}
                                target="_blank"
                                className={classes.projectLink}
                              >
                                <IconBrandGithub size={16} />
                              </Anchor>
                            )}
                          </Group>
                        </Group>
                        
                        <Text 
                          fz="0.9rem" 
                          c="dimmed"
                          lh={1.5}
                          className={classes.projectDescription}
                          lineClamp={4}
                        >
                          {project.description}
                        </Text>
                      </Box>

                      {/* Technologies */}
                      <Group gap="xs" className={classes.techStack}>
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="light"
                            size="xs"
                            className={classes.techBadge}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge
                            variant="outline"
                            size="xs"
                            className={classes.techBadgeMore}
                          >
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </Group>
                    </Stack>
                  </Paper>
                </Grid.Col>
              ))}
            </Grid>

            {/* Stack for Mobile */}
            <Stack gap="xl" className={classes.mobileStack}>
              {projectsData.map((project, index) => (
                <Paper 
                  key={project.id}
                  className={classes.projectCard}
                  p="xl"
                  radius="md"
                  withBorder
                >
                  <Stack gap="md">
                    {/* Project Header */}
                    <Group justify="space-between" align="flex-start">
                      <Box style={{ flex: 1 }}>
                        <Title 
                          order={3} 
                          fz="1.4rem"
                          fw={500}
                          mb="xs"
                          className={classes.projectTitle}
                        >
                          {project.title}
                        </Title>
                        <Text 
                          fz="1rem" 
                          c="dimmed"
                          lh={1.6}
                          className={classes.projectDescription}
                        >
                          {project.description}
                        </Text>
                      </Box>
                      
                      {/* Project Links */}
                      <Group gap="xs" className={classes.projectLinks}>
                        {project.liveDemo && (
                          <Anchor 
                            href={project.liveDemo}
                            target="_blank"
                            className={classes.projectLink}
                          >
                            <IconExternalLink size={18} />
                          </Anchor>
                        )}
                        {project.github && (
                          <Anchor 
                            href={project.github}
                            target="_blank"
                            className={classes.projectLink}
                          >
                            <IconBrandGithub size={18} />
                          </Anchor>
                        )}
                      </Group>
                    </Group>

                    {/* Technologies */}
                    <Group gap="xs" className={classes.techStack}>
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="light"
                          size="sm"
                          className={classes.techBadge}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Paper>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </section>
  );
}