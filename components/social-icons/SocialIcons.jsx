import React from "react";
import { ActionIcon, Flex, rem } from "@mantine/core";
import { IconBrandInstagram } from "@tabler/icons-react";
import { IconBrandGithub } from "@tabler/icons-react";
import { IconBrandLinkedin } from "@tabler/icons-react";

const margin = 2;

const SocialIcons = () => {
  return (
      <Flex>
        <ActionIcon size="2.5rem" color="gray" variant="subtle" onClick={() => window.open("https://www.linkedin.com/in/suhasnidgundi/", "_blank")}>
          <IconBrandLinkedin
            style={{ width: rem(50), height: rem(50) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="2.5rem" color="gray" variant="subtle" onClick={() => window.open("https://github.com/suhasnidgundi/", "_blank")}>
          <IconBrandGithub
            style={{ width: rem(50), height: rem(50) }}
            stroke={1.5}
          />
        </ActionIcon>
        <ActionIcon size="2.5rem" color="gray" variant="subtle" onClick={() => window.open("https://www.instagram.com/just.another.suhas", "_blank")}>
          <IconBrandInstagram
            style={{ width: rem(50), height: rem(50) }}
            stroke={1.5}
          />
        </ActionIcon>
      </Flex>
  );
};

export default SocialIcons;
