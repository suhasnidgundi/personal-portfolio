"use client"

import React from 'react';
import { Stack, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from "@mantine/hooks";
import { FloatingThemeButton } from '@/components/FloatingThemeButton/FloatingThemeButton';
import { FloatingResumeButton } from '@/components/FloatingResumeButton/FloatingResumeButton';

export function FloatingButtonsColumn() {
  const theme = useMantineTheme();
  
  // Adjust this breakpoint to match when your nav links disappear
  const isNavHidden = useMediaQuery(`(max-width: ${theme.breakpoints.xs})`);

  if (!isNavHidden) {
    return null;
  }

  return (
    <Stack
      spacing="md"
      style={{
        position: 'fixed',
        bottom: '5em',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <FloatingThemeButton />
      <FloatingResumeButton />
    </Stack>
  );
}