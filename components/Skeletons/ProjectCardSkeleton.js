"use client";

import React from 'react';
import {
  Card,
  Group,
  Box,
  Skeleton,
  Stack,
  keyframes
} from '@mantine/core';

// Optional: Add subtle shimmer animation
const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

const ProjectCardSkeleton = ({ animate = true }) => {
  const skeletonProps = animate ? {
    style: {
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%)',
      backgroundSize: '400px 100%',
      animation: `${shimmer} 1.5s ease-in-out infinite`,
    }
  } : {};

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Skeleton height={200} {...skeletonProps} />
      </Card.Section>

      <Box pt="md" pb="md" style={{ flex: 1 }}>
        <Group justify="space-between" mb={8}>
          <Skeleton height={24} width="70%" {...skeletonProps} />
        </Group>

        <Stack gap="xs" mb="md">
          <Skeleton height={16} {...skeletonProps} />
          <Skeleton height={16} {...skeletonProps} />
          <Skeleton height={16} width="80%" {...skeletonProps} />
        </Stack>

        <Group mt="auto">
          <Skeleton height={24} width={60} radius="sm" {...skeletonProps} />
          <Skeleton height={24} width={80} radius="sm" {...skeletonProps} />
          <Skeleton height={24} width={70} radius="sm" {...skeletonProps} />
        </Group>
      </Box>

      <Group
        gap="xs"
        justify="flex-end"
        mt="auto"
        pt="xs"
        style={{ borderTop: '1px solid var(--mantine-color-dark-4)' }}
      >
        <Skeleton height={36} width={36} radius="md" {...skeletonProps} />
        <Skeleton height={36} width={36} radius="md" {...skeletonProps} />
        <Skeleton height={36} width={36} radius="md" {...skeletonProps} />
      </Group>
    </Card>
  );
};

export default ProjectCardSkeleton;