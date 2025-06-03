"use client"; 


import { Container, Text, Title, Flex, ActionIcon } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
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
            fz={{ base: '3rem', md: '6rem' }}
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
            fz={{ base: '1.2rem', md: '2rem' }}
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
      <Flex
        justify="center"
        w="100%"
        mt="xl"
      >
        <Flex
          align="center"
          gap="sm"
          px="xl"
          py="md"
          onClick={() => {
            window.scrollTo({
              top: window.innerHeight,
              behavior: 'smooth'
            });
          }}
          style={{
            cursor: 'pointer',
            borderRadius: '2rem',
            background: 'var(--mantine-color-dark-8)',
            border: '2px solid var(--mantine-color-gray-7)',
            color: 'var(--mantine-color-gray-0)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            position: 'relative',
            overflow: 'hidden',
          }}
          sx={{
            '&:hover': {
              transform: 'translateY(-3px) scale(1.05)',
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
              background: 'var(--mantine-color-dark-7)',
              borderColor: 'var(--mantine-color-gray-6)',
            },
            '&:active': {
              transform: 'translateY(-1px) scale(1.02)',
            },
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
              transition: 'left 0.5s',
            },
            '&:hover::before': {
              left: '100%',
            }
          }}
        >
          <Text
            fz={{ base: '1rem', md: '1.2rem' }}
            fw={500}
            style={{ 
              color: 'inherit',
              transition: 'all 0.3s ease',
            }}
          >
            Dive in
          </Text>
          <IconChevronDown 
            size={20} 
            stroke={2} 
            style={{
              transition: 'transform 0.3s ease',
            }}
          />
        </Flex>
      </Flex>
      </Flex>
    </Container>
  );
};

export default Home;