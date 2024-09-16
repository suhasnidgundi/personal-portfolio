"use client";

import React from "react";
import {
  Badge,
  Box,
  Card,
  Center,
  Flex,
  Group,
  Image,
  List,
  ListItem,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  Text,
  ThemeIcon,
} from "@mantine/core";

import { IconBriefcase2 } from "@tabler/icons-react";

const ProjectCard = ({
  id,
  image,
  description,
  tools,
  languages,
  technologies,
  name,
  links,
}) => {
  return (
    <Card padding="lg" radius="md">
      <Card.Section>{image}</Card.Section>

      <Tabs defaultValue="detail">
        <TabsList>
          <TabsTab value="detail" icon={<IconBriefcase2 size="0.8rem" />}>
            Detail
          </TabsTab>
          <TabsTab value="tools" icon={<IconBriefcase2 size="0.8rem" />}>
            Tools
          </TabsTab>
          {links != null && (
            <TabsTab value="links" icon={<IconBriefcase2 size="0.8rem" />}>
              More
            </TabsTab>
          )}
        </TabsList>

        <TabsPanel value="detail" pt="xs">
          <Box key={name}>
            <Group position="apart" mt="md" mb="xs">
              <Text weight={500}>{name}</Text>

              <Box>
                {tools?.map((technology, i) => {
                  return (
                    <Badge
                      key={technology.name}
                      color={technology.type === "language" ? "blue" : "green"}
                      variant="light"
                    >
                      {technology.name}
                    </Badge>
                  );
                })}
              </Box>
            </Group>
            <Text size="sm" color="dimmed">
              {description}
            </Text>
          </Box>
        </TabsPanel>

        <TabsPanel value="tools" pt="xs">
          <Flex
            mt={16}
            style={{
              marginTop: "16",
            }}
            gap={10}
            direction="row"
          >
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={10}>
                <Text>Technologies Used:</Text>
                <List
                  style={{
                    alignItems: "center",
                  }}
                >
                  {technologies?.map((technology) => {
                    return (
                      <ListItem
                        style={{
                          alignItems: "center",
                        }}
                        key={technology.name}
                        icon={
                          <ThemeIcon color="none" size={25} radius="xl">
                            {technology.icon}
                          </ThemeIcon>
                        }
                      >
                        <Center>
                          <Text>{technology.name}</Text>
                        </Center>
                      </ListItem>
                    );
                  })}
                </List>
              </Flex>
            </Box>
            <Box style={{ flexGrow: 1 }}>
              <Flex direction="column" gap={10}>
                <Text>Languages Used:</Text>
                <List>
                  {languages?.map((language) => {
                    return (
                      <ListItem
                        key={language.name}
                        icon={
                          <ThemeIcon color="none" size={25} radius="sm">
                            {language.icon}
                          </ThemeIcon>
                        }
                      >
                        <Center>
                          <Text>{language.name}</Text>
                        </Center>
                      </ListItem>
                    );
                  })}
                </List>
              </Flex>
            </Box>
          </Flex>
        </TabsPanel>

        {links != null && (
          <TabsPanel value="links" pt="xs">
            <Box mt={16}>{links}</Box>
          </TabsPanel>
        )}
      </Tabs>
    </Card>
  );
};

export default ProjectCard;
