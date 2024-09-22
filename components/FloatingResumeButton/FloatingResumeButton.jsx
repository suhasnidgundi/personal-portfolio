"use client";

import { useEffect, useState } from "react";
import { ActionIcon } from "@mantine/core";
import { IconPdf } from "@tabler/icons-react";
import Link from "next/link";

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
      component={Link}
      href="/resume/SuhasNidgundi_Resume.pdf"
    >
      <IconPdf size="3rem" />
    </ActionIcon>
  );
}
