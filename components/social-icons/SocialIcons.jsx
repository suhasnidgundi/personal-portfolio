import React from "react";
import { ActionIcon, Flex, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const SocialIcon = ({ IconComponent, size, color, variant, stroke }) => {
  return (
    <ActionIcon size={size} color={color} variant={variant}>
      <IconComponent
        style={{ width: rem(size), height: rem(size) }}
        stroke={stroke}
      />
    </ActionIcon>
  );
};

const socialLinks = [
  {
    IconComponent: IconBrandLinkedin,
    url: "https://www.linkedin.com/in/suhasnidgundi",
  },
  { IconComponent: IconBrandGithub, url: "https://github.com/suhasnidgundi" },
  {
    IconComponent: IconBrandInstagram,
    url: "https://www.instagram.com/suhasnidgundi",
  },
];

const SocialIcons = () => {
  return (
    <Flex>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcon
            IconComponent={link.IconComponent}
            size="2.5rem"
            color="gray"
            variant="subtle"
            stroke={1.5}
          />
        </a>
      ))}
    </Flex>
  );
};

export default SocialIcons;
