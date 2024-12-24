
import './aboutMe.module.css';

import { Button, Group, Stack, Text, Container, SimpleGrid, Paper } from '@mantine/core';
import Image from 'next/image';

export default function AboutMePage() {
  return (
    <Container size="lg" py="xl">
      {/* Main Content */}
      <Stack spacing="xl" align="flex-start">
        {/* Introduction Text */}
        <Text
          size="xl"
          weight={500}
          style={{ fontSize: '2.5rem', lineHeight: 1.2 }}
        >
          It&apos;s so nice to meet you, I&apos;m Sangeetha :)
        </Text>

        {/* Buttons */}
        <Group>
          <Button
            variant="filled"
            size="lg"
            radius="md"
            styles={{
              root: {
                backgroundColor: '#1A1B1E',
                '&:hover': {
                  backgroundColor: '#2C2E33',
                },
              },
            }}
          >
            Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            radius="md"
            color="gray"
          >
            LinkedIn
          </Button>
        </Group>
      </Stack>
    </Container>
  );
}