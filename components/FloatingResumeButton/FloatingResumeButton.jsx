"use client";

import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconPdf } from "@tabler/icons-react";

export function FloatingResumeButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ActionIcon
      variant="filled"
      color="blue"
      size="xl"
      radius="xl"
      aria-label="View Resume"
    >
      <IconPdf size="1.4rem" />
    </ActionIcon>
  );
}
