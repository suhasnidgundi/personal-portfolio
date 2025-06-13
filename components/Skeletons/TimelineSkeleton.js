"use client";

import React from 'react';
import {
  Box,
  Card,
  Group,
  Stack,
  Skeleton,
  ThemeIcon,
  Timeline as MantineTimeline,
  rem
} from '@mantine/core';

const TimelineItemSkeleton = () => {
  return (
    <MantineTimeline.Item
      bullet={
        <ThemeIcon size={24} radius="xl">
          <Skeleton height={16} width={16} />
        </ThemeIcon>
      }
    >
      <Card withBorder p="md" radius="md" mb="md">
        <Group justify="space-between" align="flex-start" mb="sm">
          <Box style={{ flex: 1 }}>
            <Skeleton height={20} width="70%" mb="xs" />
            <Skeleton height={16} width="50%" mb="xs" />
            <Group gap="xs">
              <Skeleton height={14} width={80} />
              <Skeleton height={14} width={60} />
            </Group>
          </Box>
          <Skeleton height={24} width={80} radius="sm" />
        </Group>

        <Stack gap="xs">
          <Skeleton height={14} />
          <Skeleton height={14} />
          <Skeleton height={14} width="90%" />
        </Stack>

        <Group mt="md" gap="xs">
          <Skeleton height={20} width={60} radius="sm" />
          <Skeleton height={20} width={70} radius="sm" />
          <Skeleton height={20} width={50} radius="sm" />
        </Group>
      </Card>
    </MantineTimeline.Item>
  );
};

const TimelineSkeleton = () => {
  return (
    <Box>
      <MantineTimeline active={-1} bulletSize={24} lineWidth={2}>
        {Array.from({ length: 4 }).map((_, index) => (
          <TimelineItemSkeleton key={index} />
        ))}
      </MantineTimeline>
    </Box>
  );
};

export default TimelineSkeleton;