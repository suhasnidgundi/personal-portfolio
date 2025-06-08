"use client";

import { usePathname } from 'next/navigation';
import {
  AppShell,
  Group,
  Text,
  Button,
  Container,
  Title,
  Flex
} from '@mantine/core';
import { IconLogout, IconSettings } from '@tabler/icons-react';
import { useAuth } from '@/hooks/useAuth';
import ProtectedRoute from '@/components/auth/ProtectedRoute';
import classes from './admin.module.css';
import { notifications } from '@mantine/notifications';


export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const isLoginPage = pathname === '/admin/login';

  const handleLogout = async () => {
    try {
      await logout();
      // Optionally redirect to home page after logout
      window.location.href = '/';
    } catch (error) {
      notifications.show({
        title: 'Logout Failed',
        message: 'An error occurred while logging out. Please try again.',
        color: 'red',
      });
      // Log the error for debugging purposes
      console.error('Logout error:', error);
    }
  };

  if (isLoginPage) {
    return children;
  }

  return (
    <ProtectedRoute>
      <AppShell
        header={{ height: 70 }}
        padding="md"
        className={classes.adminShell} // Apply custom CSS class
      >
        <AppShell.Header>
          <Container size="xl" h="100%">
            <Flex align="center" justify="space-between" h="100%">
              <Group>
                <IconSettings size={24} />
                <Title order={3}>Admin Dashboard</Title>
              </Group>

              <Group>
                <Text size="sm" c="dimmed">
                  Welcome, {user?.displayName || user?.email}
                </Text>
                <Button
                  variant="subtle"
                  leftSection={<IconLogout size={16} />}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </Group>
            </Flex>
          </Container>
        </AppShell.Header>

        <AppShell.Main>
          {children}
        </AppShell.Main>
      </AppShell>
    </ProtectedRoute>
  );
}