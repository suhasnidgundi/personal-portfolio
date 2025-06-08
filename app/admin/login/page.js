"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
  Container,
  Paper,
  Title,
  TextInput,
  PasswordInput,
  Button,
  Stack,
  Group,
  Divider,
  Text,
  Center,
  Box
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconBrandGoogle, IconLogin } from '@tabler/icons-react';
import { useAuth } from '@/hooks/useAuth';

export default function AdminLogin() {
  const [emailLoading, setEmailLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const { user, isAdmin, loginWithEmail, loginWithGoogle } = useAuth();
  const router = useRouter();

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
    },
  });

  useEffect(() => {
    if (isAdmin) {
      router.push('/admin/projects');
    }
  }, [isAdmin, router]);

  const handleEmailLogin = async (values) => {
    setEmailLoading(true);
    try {
      await loginWithEmail(values.email, values.password);
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setEmailLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      await loginWithGoogle();
    } catch (error) {
      console.error('Google login error:', error);
    } finally {
      setGoogleLoading(false);
    }
  };

  if (isAdmin) {
    return (
      <Container size="sm" py={100}>
        <Center>
          <Text>Redirecting to admin dashboard...</Text>
        </Center>
      </Container>
    );
  }

  return (
    <Container size="sm" py={100}>
      <Paper p="xl" withBorder>
        <Stack gap="lg">
          <Box ta="center">
            <Title order={2} mb="xs">
              Admin Login
            </Title>
            <Text c="dimmed" size="sm">
              Sign in to access the admin dashboard
            </Text>
          </Box>

          <form onSubmit={form.onSubmit(handleEmailLogin)}>
            <Stack gap="md">
              <TextInput
                label="Email"
                placeholder="admin@example.com"
                required
                {...form.getInputProps('email')}
              />
              <PasswordInput
                label="Password"
                placeholder="Your password"
                required
                {...form.getInputProps('password')}
              />
              <Button
                type="submit"
                fullWidth
                leftSection={<IconLogin size={16} />}
                loading={emailLoading}
                disabled={googleLoading}
              >
                Sign In with Email
              </Button>
            </Stack>
          </form>

          <Divider label="or" labelPosition="center" />

          <Button
            fullWidth
            variant="outline"
            leftSection={<IconBrandGoogle size={16} />}
            onClick={handleGoogleLogin}
            loading={googleLoading}
            disabled={emailLoading}
          >
            Sign In with Google
          </Button>

          <Text size="xs" c="dimmed" ta="center">
            Only authorized admin accounts can access the dashboard.
          </Text>
        </Stack>
      </Paper>
    </Container>
  );
}