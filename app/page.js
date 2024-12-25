import { Container, Text, Title, Image, Flex } from '@mantine/core';
import Link from 'next/link';

const Home = () => {
  return (
    <Container
      size="lg"
      pt={{ base: 60, md: 120 }}
      px={{ base: 'md', md: 'lg' }}
    >
      <Flex
        direction="column"
        align={{ base: 'center', md: 'flex-start' }}
        gap="xl"
      >
        <Flex
          align="center"
          gap="md"
          justify={{ base: 'center', md: 'flex-start' }}
          w="fit-content"
          style={{ alignSelf: 'start' }}
        >
          {/* <Image
            src="/images/profile_image.png"
            alt="Designer Profile"
            w="auto"
            h={{ base: 60, md: 120 }}
            styles={{
              root: {
                borderRadius: '50%',
                backgroundColor: '#E6F3F3'
              }
            }}
          /> */}
          <Title
            order={1}
            fz={{ base: '1.5rem', md: '6rem' }}
            fw={400}
            style={{ letterSpacing: '-0.02em' }}
          >
            engineer.
          </Title>
        </Flex>

        <Flex
          direction="column"
          gap="xl"
          w="fit-content"
        >
          <Text
            fz={{ base: '1rem', md: '2rem' }}
            lh={1.6}
            fw={300}
            maw="120rem"
            ta={{ base: 'left', md: 'left' }}
          >

            Suhas, a computer engineering student, is passionate about technology and innovation. He develops solutions that blend imagination and functionality, driven by a commitment to learning, simplicity, and impactful problem-solving.
          </Text>

          <Text
            fz={{ base: '0.8rem', md: '1.5rem' }}
            fw={500}
            ta={{ base: 'left', md: 'left' }}
          >
            Student @ <Link style={{ textDecoration: "none" }} href="https://www.dypcoei.edu.in/">DYPCOEI</Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Home;