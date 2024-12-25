"use client";

import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Tooltip,
  Drawer,
  Title,
  Stack,
  Text,
  Divider,
  Button,
  rem,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconSun,
  IconMoon,
  IconPdf,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import classes from "./HeaderSimple.module.css";
import Link from "next/link";
import GradientNavTitle from "../GradientNavTitle/GradientNavTitle";
import SocialIcons from "../social-icons/SocialIcons";
import { IconBrandInstagram } from "@tabler/icons-react";

const links = [
  { link: "/", label: "Home" },
  { link: "/about", label: "About Me" },
  { link: "/projects", label: "Projects" },
];

export function HeaderSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [drawerOpened, { open, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      style={{ fontSize: "1.5em" }}
      onClick={() => {
        setActive(link.link);
        close();
      }}
    >
      {link.label}
    </Link>
  ));

  const toggleColorScheme = () => {
    const nextColorScheme = colorScheme === "dark" ? "light" : "dark";
    setColorScheme(nextColorScheme);
  };

  if (!mounted) {
    return null;
  }

  return (
    <>
      <header className={classes.header}>
        <Container size="lg" className={classes.inner}>
          {/* <GradientNavTitle text="Suhas Nidgundi" /> */}
          <SocialIcons />
          <Group gap={5} visibleFrom="xs">
            {items}
            <Tooltip label="Change Theme">
              <ActionIcon
                onClick={toggleColorScheme}
                variant="default"
                size="2.5em"
                aria-label="Toggle color scheme"
              >
                {colorScheme === "dark" ? (
                  <IconSun size="2rem" />
                ) : (
                  <IconMoon size="2rem" />
                )}
              </ActionIcon>
            </Tooltip>
            <Tooltip label="View Resume">
              <ActionIcon
                variant="default"
                size="2.5rem"
                aria-label="Download resume"
                onClick={() => { document.location.href = "/resume.pdf";  }}
              >
                <IconPdf size="2rem" />
              </ActionIcon>
            </Tooltip>
          </Group>

          <Burger opened={opened} onClick={open} hiddenFrom="xs" size="lg" />
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={close}
        size="100%"
        padding="md"
        title={<GradientNavTitle text="Suhas Nidgundi" size="2.5em" />}
        className={classes.hiddenDesktop}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <Stack spacing="xl" align="center" mt="xl">
            {items}
          </Stack>

          <Divider my="sm" />

          <Text ta="center" mt="xl" fz="lg" fw={500}>
            Connect with me
          </Text>
          <Group justify="center" mt="lg">
            <ActionIcon size="4rem" variant="default" radius="xl">
              <IconBrandGithub size="3rem" />
            </ActionIcon>
            <ActionIcon size="4rem" variant="default" radius="xl">
              <IconBrandLinkedin size="3rem" />
            </ActionIcon>
            <ActionIcon size="4rem" variant="default" radius="xl">
              <IconBrandInstagram size="3rem" />
            </ActionIcon>
          </Group>
        </ScrollArea>
      </Drawer>
    </>
  );
}
