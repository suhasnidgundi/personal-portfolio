import { Box, Flex, Text } from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <Box my="5em">
      <Flex direction="column" gap="2em">
        <Box style={{ display: "inline-block" }}>
          <Text
            variant="gradient"
            gradient={{ from: "blue", to: "pink" }}
            size="3rem"
            weight={700}
            style={{ display: "inline" }}
          >
            About Me
          </Text>
        </Box>
        <Box>
          <Text ta="justify">
            I&apos;m Wen, a passionate Software Engineer with over 7 years of
            experience in crafting exceptional digital experiences. Armed with a
            Computer Science degree from McGill University, I specialize in
            designing and implementing innovative full-stack web applications
            and blockchain solutions. But what truly sets my heart on fire is
            game development; it&apos;s where I transform my personal passion
            into captivating virtual worlds. Beyond the world of technology,
            I&apos;m a curious explorer. I delve into history, immerse myself in
            the intricacies of politics, and navigate the complexities of
            finance. When I&apos;m not busy coding, you&apos;ll find me on the
            tennis court or badminton court, or perhaps creating harmonious
            melodies through music. Join me on this exciting journey of
            innovation, creativity, and endless possibilities.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default page;
