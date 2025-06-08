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
  Grid,
  Loader,
  Center,
  Alert
} from '@mantine/core';
import { IconExternalLink, IconBrandGithub, IconAlertCircle } from '@tabler/icons-react';
import { useProjects } from '@/hooks/useProjects';
import classes from './ProjectsSection.module.css';

export function ProjectsSection() {
  const { projects, loading, error, getFeaturedProjects } = useProjects();

  // Get featured projects for homepage display
  const featuredProjects = getFeaturedProjects();

  if (loading) {
    return (
      <section id="projects" className={classes.section}>
        <Container size="lg" py={{ base: 60, md: 100 }}>
          <Center>
            <Loader size="xl" />
          </Center>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className={classes.section}>
        <Container size="lg" py={{ base: 60, md: 100 }}>
          <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
            Failed to load projects: {error}
          </Alert>
        </Container>
      </section>
    );
  }

  // If no featured projects, show all projects (fallback)
  const projectsToShow = featuredProjects.length > 0 ? featuredProjects : projects.slice(0, 6);

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
              {projectsToShow.map((project, index) => (
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
                            {project.links?.live && (
                              <Anchor
                                href={project.links.live}
                                target="_blank"
                                className={classes.projectLink}
                              >
                                <IconExternalLink size={16} />
                              </Anchor>
                            )}
                            {project.links?.github && (
                              <Anchor
                                href={project.links.github}
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
                        {project.technologies?.slice(0, 3).map((tech) => (
                          <Badge
                            key={tech}
                            variant="light"
                            size="xs"
                            className={classes.techBadge}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies?.length > 3 && (
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
              {projectsToShow.map((project, index) => (
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
                        {project.links?.live && (
                          <Anchor
                            href={project.links.live}
                            target="_blank"
                            className={classes.projectLink}
                          >
                            <IconExternalLink size={18} />
                          </Anchor>
                        )}
                        {project.links?.github && (
                          <Anchor
                            href={project.links.github}
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
                      {project.technologies?.map((tech) => (
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