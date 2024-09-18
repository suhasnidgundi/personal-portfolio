import { Box, Flex, Text, Image, Accordion, Container, Paper, AccordionItem, AccordionControl, AccordionPanel } from "@mantine/core";
import styles from './aboutMe.module.css';

const AboutMePage = () => {
  const accordionData = [
    {
      title: "Past",
      emoji: "🌱",
      content: "In the past, I focused on honing my skills in web development, working on various projects that challenged me to grow. I learned the fundamentals of HTML, CSS, and JavaScript, which laid the foundation for my current expertise."
    },
    {
      title: "Present",
      emoji: "💻",
      content: "Currently, I'm working as a full-stack developer, specializing in React and Node.js. I'm passionate about creating user-friendly interfaces and scalable backend solutions. I'm also exploring new technologies like GraphQL and serverless architecture."
    },
    {
      title: "Future",
      emoji: "🚀",
      content: "Looking ahead, I aim to deepen my knowledge in AI and machine learning, integrating these technologies into web applications. I also plan to contribute more to open-source projects and mentor aspiring developers in my community."
    }
  ];

  return (
    <Container size="md">
      <Box my="5em">
        <Flex direction="column" align="Left" gap="2em">
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

          <Flex gap="2em" align="center" direction={{ base: 'column', sm: 'row' }}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/profile_image.png"
                alt="Profile"
                radius="md"
                width={300}
                height={300}
                style={{ backgroundColor: 'transparent' }}
              />
            </div>
            <Box>
              <Text size="xl" weight={500} mb="md">
                Hello, I'm Suhas Nidgundi
              </Text>
              <Text>
                As a passionate web developer, I thrive on turning ideas into reality through code. 
                With a keen eye for design and a love for clean, efficient code, I create web experiences 
                that not only look great but also perform seamlessly. My journey in tech is driven by 
                an insatiable curiosity and a commitment to lifelong learning.
              </Text>
            </Box>
          </Flex>

          <Paper shadow="md" p="md" radius="md" style={{ width: '100%' }}>
            <Accordion variant="separated">
              {accordionData.map((item, index) => (
                <AccordionItem key={index} value={item.title}>
                  <AccordionControl>
                    <Flex align="center">
                      <Text mr="md" style={{ fontSize: '1.5rem' }}>{item.emoji}</Text>
                      <Text weight={500}>{item.title}</Text>
                    </Flex>
                  </AccordionControl>
                  <AccordionPanel>
                    <Text>{item.content}</Text>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Paper>
        </Flex>
      </Box>
    </Container>
  );
};

export default AboutMePage;