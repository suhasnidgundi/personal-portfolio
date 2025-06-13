"use client";

import {
  Container,
  Title,
  Text,
  Group,
  Stack,
  Grid,
  Card,
  Image,
  List,
  ThemeIcon,
  rem,
  Divider,
  useMantineTheme,
  Tabs,
  ActionIcon
} from "@mantine/core";
import { IconCheck, IconCode, IconDeviceDesktop, IconBriefcase, IconSchool, IconBrandLinkedin, IconBrandGithub, IconBrandInstagram, IconFileText } from "@tabler/icons-react";
import { portfolio } from "@/portfolioInfo";
import { Timeline } from "@/components/Timeline/Timeline";

const iconMap = {
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandInstagram,
  IconFileText
};


export default function AboutPage() {
  const theme = useMantineTheme();

  return (
    <Container size="lg">
      <Stack spacing="xl">
        {/* Hero Section */}
        <Grid gutter="xl" align="center">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack spacing="md">
              <Title order={1} fw={700}>About Me</Title>
              <Text size="lg" c="dimmed">
                Software Engineer & Developer passionate about creating impactful digital experiences
              </Text>
              <Text>
                Hello! I&apos;m Suhas Nidgundi, a software engineer with expertise in modern web technologies.
                I specialize in building responsive and performant applications using React, Next.js, and various
                backend technologies. With a strong foundation in both design and development,
                I create solutions that are not only functional but also deliver exceptional user experiences.
              </Text>
              <Text>
                My approach combines technical excellence with creative problem-solving, allowing me to
                tackle complex challenges and turn innovative ideas into reality. I&apos;m constantly learning
                and exploring new technologies to stay at the forefront of the rapidly evolving tech landscape.
              </Text>
            </Stack>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Card radius="md" p="xl" withBorder>
              <Card.Section>
                <Image
                  src="/images/suhasnidgundi_3.png"
                  height={300}
                  alt="Suhas Nidgundi"
                  fallbackSrc="https://placehold.co/600x400?text=Suhas+Nidgundi"
                />
              </Card.Section>
              <Stack mt="md">
                <Title order={3}>{portfolio.personalInfo.name}</Title>
                <Text c="dimmed" size="sm">
                  Software Engineer & Developer
                </Text>
                <Text>
                  <strong>Email:</strong> {portfolio.personalInfo.email}
                </Text>
                <Group mt="xs" spacing="xs">
                  {portfolio.socialLinks.map((link) => {
                    const IconComponent = iconMap[link.icon];
                    return (
                      <ActionIcon
                        key={link.name}
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                        size="lg"
                        radius="md"
                      >
                        <IconComponent size={20} />
                      </ActionIcon>
                    );
                  })}
                </Group>
              </Stack>
            </Card>
          </Grid.Col>
        </Grid>

        <Divider my="xl" />

        {/* Skills Section */}
        <Stack spacing="md">
          <Title order={2}>Skills & Expertise</Title>

          <Grid gutter="xl">
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder p="md" radius="md" h="100%">
                <ThemeIcon
                  size={56}
                  radius="md"
                  color={theme.primaryColor}
                  mb="md"
                >
                  <IconCode style={{ width: rem(32), height: rem(32) }} />
                </ThemeIcon>
                <Title order={4} mb="sm">Development</Title>
                <List spacing="sm" center>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    JavaScript/TypeScript
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    React & Next.js
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Node.js & API Development
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Database Design & Management
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder p="md" radius="md" h="100%">
                <ThemeIcon
                  size={56}
                  radius="md"
                  color={theme.primaryColor}
                  mb="md"
                >
                  <IconDeviceDesktop style={{ width: rem(32), height: rem(32) }} />
                </ThemeIcon>
                <Title order={4} mb="sm">Design</Title>
                <List spacing="sm" center>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    UI/UX Design
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Responsive Web Design
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    CSS/SCSS & Modern Frameworks
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Design Systems
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 4 }}>
              <Card withBorder p="md" radius="md" h="100%">
                <ThemeIcon
                  size={56}
                  radius="md"
                  color={theme.primaryColor}
                  mb="md"
                >
                  <IconCode style={{ width: rem(32), height: rem(32) }} />
                </ThemeIcon>
                <Title order={4} mb="sm">Tools & Practices</Title>
                <List spacing="sm" center>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Git Version Control
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    CI/CD Pipelines
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Agile Development
                  </List.Item>
                  <List.Item
                    icon={
                      <ThemeIcon color={theme.primaryColor} size={24} radius="xl">
                        <IconCheck style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Testing & Quality Assurance
                  </List.Item>
                </List>
              </Card>
            </Grid.Col>
          </Grid>
        </Stack>

        <Divider my="xl" />

        {/* Setup Section - Fun Addition */}
        <Stack spacing="md">
          <Title order={2}>My Setup</Title>
          <Text>
            Every developer has their unique workspace. Here&apos;s my current setup that powers my projects:
          </Text>

          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md" radius="md">
                <Stack spacing="xs">
                  <Group position="apart">
                    <Text fw={500}>Motherboard</Text>
                    <Text>{portfolio.setup.motherboard}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Processor</Text>
                    <Text>{portfolio.setup.processor}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Graphics Card</Text>
                    <Text>{portfolio.setup.graphicsCard}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>RAM</Text>
                    <Text>{portfolio.setup.ram}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Storage</Text>
                    <Text>{portfolio.setup.hdd}</Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder p="md" radius="md">
                <Stack spacing="xs">
                  <Group position="apart">
                    <Text fw={500}>Case</Text>
                    <Text>{portfolio.setup.case}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Monitor</Text>
                    <Text>{portfolio.setup.monitor}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Input Devices</Text>
                    <Text>{portfolio.setup.keyboardAndMouse}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Operating System</Text>
                    <Text>{portfolio.setup.os}</Text>
                  </Group>
                  <Group position="apart">
                    <Text fw={500}>Code Editor</Text>
                    <Text>{portfolio.setup.codeEditor}</Text>
                  </Group>
                </Stack>
              </Card>
            </Grid.Col>
          </Grid>

          <Text size="sm" c="dimmed" align="right">
            Last updated: {portfolio.setup.lastUpdated}
          </Text>
        </Stack>

        <Divider my="xl" />

        {/* Education & Experience Timeline Section */}
        <Stack spacing="md">
          <Title order={2}>My Journey</Title>
          <Text c="dimmed">
            Explore my educational background and professional experience through this interactive timeline.
          </Text>

          <Tabs defaultValue="experience" variant="pills" radius="md">
            <Tabs.List grow>
              <Tabs.Tab
                value="experience"
                leftSection={<IconBriefcase style={{ width: rem(16), height: rem(16) }} />}
              >
                Experience
              </Tabs.Tab>
              <Tabs.Tab
                value="education"
                leftSection={<IconSchool style={{ width: rem(20), height: rem(20) }} />}
              >
                Education
              </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="experience" pt="xl">
              <Timeline type="experience" />
            </Tabs.Panel>

            <Tabs.Panel value="education" pt="xl">
              <Timeline type="education" />
            </Tabs.Panel>
          </Tabs>
        </Stack>
      </Stack>
    </Container>
  );
}