"use client";

import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconFileCv } from "@tabler/icons-react";

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
      size="4rem"
      radius="xl"
      aria-label="View Resume"
      onClick={() => { document.location.href = "/resume.pdf"; }}
    >
      <IconFileCv size="3rem" />
    </ActionIcon>
  );
}
