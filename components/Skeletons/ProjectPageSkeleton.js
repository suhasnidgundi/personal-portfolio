"use client";

import React from 'react';
import {
  Container,
  Title,
  Text,
  SimpleGrid,
  Card,
  Group,
  Box,
  Tabs,
  Skeleton,
  Stack
} from '@mantine/core';

const ProjectCardSkeleton = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Skeleton height={200} />
      </Card.Section>

      <Box pt="md" pb="md" style={{ flex: 1 }}>
        <Group justify="space-between" mb={8}>
          <Skeleton height={24} width="70%" />
        </Group>

        <Stack gap="xs" mb="md">
          <Skeleton height={16} />
          <Skeleton height={16} />
          <Skeleton height={16} width="80%" />
        </Stack>

        <Group mt="auto">
          <Skeleton height={24} width={60} radius="sm" />
          <Skeleton height={24} width={80} radius="sm" />
          <Skeleton height={24} width={70} radius="sm" />
        </Group>
      </Box>

      <Group
        gap="xs"
        justify="flex-end"
        mt="auto"
        pt="xs"
        style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}
      >
        <Skeleton height={36} width={36} radius="md" />
        <Skeleton height={36} width={36} radius="md" />
        <Skeleton height={36} width={36} radius="md" />
      </Group>
    </Card>
  );
};

const ProjectPageSkeleton = () => {
  return (
    <Container size="lg" py={40}>
      {/* Header Section Skeleton */}
      <Box mb={50} mt={10}>
        <Skeleton height={48} width="200px" mb={10} />
        <Skeleton height={20} width="60%" />
      </Box>

      {/* Tabs Skeleton */}
      <Box mb={30}>
        <Group gap="xs">
          <Skeleton height={36} width={60} radius="md" />
          <Skeleton height={36} width={80} radius="md" />
          <Skeleton height={36} width={70} radius="md" />
          <Skeleton height={36} width={90} radius="md" />
          <Skeleton height={36} width={75} radius="md" />
        </Group>
      </Box>

      {/* Projects Grid Skeleton */}
      <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 2, md: 3 }}
        spacing="lg"
        verticalSpacing="xl"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default ProjectPageSkeleton;