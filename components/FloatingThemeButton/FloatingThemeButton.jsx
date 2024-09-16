"use client";

import { useEffect, useState } from "react";
import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";

export function FloatingThemeButton() {
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(nextColorScheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <ActionIcon
      onClick={toggleColorScheme}
      variant="filled"
      color="blue"
      size="4rem"
      radius="xl"
      aria-label="Toggle color scheme"
    >
      {colorScheme === "dark" ? (
        <IconSun size="3rem" />
      ) : (
        <IconMoon size="3rem" />
      )}
    </ActionIcon>
  );
}