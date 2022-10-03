import React from 'react';
import {
  Flex,
  Heading,
  Highlight,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import { IconButton, Container } from 'components';

const About = () => {
  const blue = useColorModeValue('blue.700', 'blue.400');

  return (
    <Container width="100%" id="about">
      <Heading size="4xl" as="h1" fontWeight="600">
        <Highlight query="Miguel" styles={{ color: blue }}>
          Pedro Miguel
        </Highlight>
      </Heading>

      <Text mt={3} fontSize="xl" fontWeight="600" textTransform="uppercase">
        <Highlight
          query="pedromrap@gmail.com"
          styles={{ color: blue, textDecoration: 'underline' }}
        >
          (61 ) 99520-0297 | (61) 3037-2653 · Brasília, DF · pedromrap@gmail.com
        </Highlight>
      </Text>

      <Text mt={6} fontSize="lg" maxWidth="1200px" width="100%">
        Desenvolvedor React com experiência nas principais tecnologias do
        mercado como: React Hooks, API Rest, Typescript, Git e SASS. Entusiasta
        na área de desenvolvimento web, tenho facilidade em aprender novas
        tecnologias, sempre em busca de novas experiências.
      </Text>

      <Flex alignItems="center" gap={6} mt={6}>
        <IconButton href="https://github.com/pedromiiguel">
          <FaGithub size={32} color="white" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/pedro-miiguel/">
          <FaLinkedinIn size={32} color="white" />
        </IconButton>
      </Flex>
    </Container>
  );
};

export default About;
