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
    <Container width="100%" id="about" mt="40px">
      <Heading size="4xl" as="h1" fontWeight="600">
        <Highlight query="Miguel" styles={{ color: blue }}>
          Pedro Miguel
        </Highlight>
      </Heading>

      <Text mt={3} fontSize="xl" fontWeight="600" textTransform="uppercase">
        <Highlight
          query="pedro.miigueel7@gmail.com"
          styles={{ color: blue, textDecoration: 'underline' }}
        >
          (61) 99520-0297 | (61) 3037-2653 · Brasília, DF ·
          pedro.miigueel7@gmail.com
        </Highlight>
      </Text>

      <Text mt={6} fontSize="lg" maxWidth="1200px" width="100%">
        Desenvolvedor front-end com experiência nas principais tecnologias do
        mercado, incluindo React Hooks, API Rest, Typescript, Git Flow, Sass e
        Styled components. Sou um entusiasta na área de desenvolvimento web
        mobile, estou sempre em busca de novas experiências. Possuo facilidade
        em aprender novas tecnologias e acredito que a atualização constante é
        fundamental para o desenvolvimento de soluções web inovadoras e de alta
        qualidade. Estou comprometido em criar interfaces de usuário incríveis e
        otimizadas, trabalhando em equipe para atender às necessidades do
        projeto. Busco novas oportunidades que me permitam aplicar minhas
        habilidades e continuar aprendendo e evoluindo como desenvolvedor
        front-end.
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
