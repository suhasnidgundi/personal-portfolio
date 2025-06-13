"use client";

import React from 'react';
import {
  Container,
  Title,
  Text,
  Stack,
  Grid,
  Card,
  List,
  ThemeIcon,
  rem,
  Divider,
  Tabs,
  Group,
  Box,
  Skeleton
} from '@mantine/core';
import TimelineSkeleton from './TimelineSkeleton';

const SkillCardSkeleton = () => {
  return (
    <Card withBorder p="md" radius="md" h="100%">
      <Skeleton height={56} width={56} radius="md" mb="md" />
      <Skeleton height={20} width="60%" mb="sm" />
      <Stack gap="sm">
        {Array.from({ length: 4 }).map((_, index) => (
          <Group key={index} gap="sm">
            <Skeleton height={24} width={24} radius="xl" />
            <Skeleton height={16} width="70%" />
          </Group>
        ))}
      </Stack>
    </Card>
  );
};

const SetupCardSkeleton = () => {
  return (
    <Card withBorder p="md" radius="md">
      <Stack gap="xs">
        {Array.from({ length: 5 }).map((_, index) => (
          <Group key={index} justify="space-between">
            <Skeleton height={16} width="30%" />
            <Skeleton height={16} width="50%" />
          </Group>
        ))}
      </Stack>
    </Card>
  );
};

const AboutPageSkeleton = () => {
  return (
    <Container size="lg">
      <Stack spacing="xl">
        {/* Hero Section Skeleton */}
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack spacing="md">
              <Skeleton height={48} width="200px" />
              <Skeleton height={20} width="80%" />
              <Stack gap="xs">
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} width="90%" />
              </Stack>
              <Stack gap="xs">
                <Skeleton height={16} />
                <Skeleton height={16} />
                <Skeleton height={16} width="85%" />
              </Stack>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card radius="md" p="xl" withBorder>
              <Card.Section>
                <Skeleton height={300} />
              </Card.Section>
              <Stack mt="md">
                <Skeleton height={24} width="60%" />
                <Skeleton height={16} width="70%" />
                <Skeleton height={16} width="80%" />
                <Group mt="xs" gap="xs">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <Skeleton key={index} height={36} width={36} radius="md" />
                  ))}
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Divider my="xl" />

        {/* Skills Section Skeleton */}
        <Stack spacing="md">
          <Skeleton height={32} width="200px" />
          <Grid gutter="xl">
            {Array.from({ length: 3 }).map((_, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <SkillCardSkeleton />
              </Grid.Col>
            ))}
          </Grid>
        </Stack>

        <Divider my="xl" />

        {/* Setup Section Skeleton */}
        <Stack spacing="md">
          <Skeleton height={32} width="150px" />
          <Skeleton height={16} width="70%" />
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <SetupCardSkeleton />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <SetupCardSkeleton />
            </Grid.Col>
          </Grid>
          <Box ta="right">
            <Skeleton height={14} width={150} ml="auto" />
          </Box>
        </Stack>

        <Divider my="xl" />

        {/* Education & Experience Timeline Section Skeleton */}
        <Stack spacing="md">
          <Skeleton height={32} width="180px" />
          <Skeleton height={16} width="60%" />

          <Box>
            {/* Tabs Skeleton */}
            <Group justify="center" mb="xl">
              <Skeleton height={40} width={120} radius="md" />
              <Skeleton height={40} width={120} radius="md" />
            </Group>

            {/* Timeline Content Skeleton */}
            <TimelineSkeleton />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutPageSkeleton;