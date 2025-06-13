"use client";

import React, { useState } from 'react';
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Badge,
  Group,
  ActionIcon,
  Box,
  Tabs,
  Loader,
  Center,
  Alert
} from '@mantine/core';
import {
  IconBrandGithub,
  IconExternalLink,
  IconCode,
  IconAlertCircle
} from '@tabler/icons-react';
import { useProjects } from '@/hooks/useProjects';
import ProjectPageSkeleton from '@/components/Skeletons/ProjectPageSkeleton';

const ProjectCard = ({ project }) => {
  const [mediaType, setMediaType] = useState('image');

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        {project.image && mediaType === 'image' && (
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
          />
        )}
        {project.video && mediaType === 'video' && (
          <video
            src={project.video}
            style={{
              width: '100%',
              height: '200px',
              objectFit: 'cover'
            }}
            autoPlay
            loop
            muted
          />
        )}
      </Card.Section>

      <Box pt="md" pb="md" style={{ flex: 1 }}>
        <Group justify="space-between" mb={8}>
          <Title order={3} size="h4" fw={500} lineClamp={1}>
            {project.title}
          </Title>
        </Group>

        <Text size="sm" c="dimmed" lineClamp={3} mb="md" style={{ flex: 1 }}>
          {project.description}
        </Text>

        <Group mt="auto">
          {project.tags?.map((tag) => (
            <Badge key={tag} size="sm" variant="light" radius="sm">
              {tag}
            </Badge>
          ))}
        </Group>
      </Box>

      <Group
        gap="xs"
        justify="flex-end"
        mt="auto"
        pt="xs"
        style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}
      >
        {project.links?.github && (
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
        {project.links?.demo && (
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
  const { projects, loading, error, getProjectsByTag, getAllTags } = useProjects();
  const [activeTab, setActiveTab] = useState('all');

  // Get unique tags from all projects
  const allTags = ['all', ...getAllTags()];

  // Filter projects based on active tag
  const filteredProjects = getProjectsByTag(activeTab);

  if (loading) {
    return <ProjectPageSkeleton />;
  }

  if (error) {
    return (
      <Container size="lg" py={40}>
        <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red">
          Failed to load projects: {error}
        </Alert>
      </Container>
    );
  }

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

      {filteredProjects.length === 0 && (
        <Center>
          <Text c="dimmed" size="lg">
            No projects found for the selected category.
          </Text>
        </Center>
      )}
    </Container>
  );
};

export default Projects;