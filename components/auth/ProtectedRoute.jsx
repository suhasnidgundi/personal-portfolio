"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { 
  Container, 
  Paper, 
  Text, 
  Loader, 
  Center,
  Stack
} from '@mantine/core';

export default function ProtectedRoute({ children }) {
  const { user, isAdmin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAdmin) {
      router.push('/admin/login');
    }
  }, [user, isAdmin, loading, router]);

  if (loading) {
    return (
      <Container size="sm" py={100}>
        <Center>
          <Stack align="center" gap="md">
            <Loader size="xl" />
            <Text size="lg" c="dimmed">
              Checking authentication...
            </Text>
          </Stack>
        </Center>
      </Container>
    );
  }

  if (!isAdmin) {
    return (
      <Container size="sm" py={100}>
        <Paper p="xl" withBorder>
          <Center>
            <Stack align="center" gap="md">
              <Text size="xl" fw={500}>
                Access Denied
              </Text>
              <Text c="dimmed" ta="center">
                You need admin privileges to access this page.
              </Text>
            </Stack>
          </Center>
        </Paper>
      </Container>
    );
  }

  return children;
}