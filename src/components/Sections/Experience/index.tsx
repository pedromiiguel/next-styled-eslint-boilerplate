import React from 'react';
import { Heading } from '@chakra-ui/react';

import { ExperienceCard, Container } from 'components';
import { motion } from 'framer-motion';

const Experience = () => {
  const MotionContainer = motion(Container);

  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        duration: 0.8
      }
    }
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <MotionContainer gap={10} id="experience">
          <Heading size="xl" as="h2">
            EXPERIÊNCIA
          </Heading>

          <ExperienceCard
            title="React js Developer"
            subtitle="Pixter"
            date="Dezembro 2021 - Presente"
            description="Desenvolvedor FrontEnd atuando no projeto carro fácil da Porto Seguros utilizando a stack: ReactJs, NextJs, Redux Toolkit, Styled Components, Firebase, React Hook form."
          />

          <ExperienceCard
            title="Desenvolvedor React"
            subtitle="Supera Inovação em Tecnologia"
            date="Julho 2021 - Dezembro 2021"
            description="Desenvolvedor React trabalhando com tecnologias como: ReactJs, React Native, SASS, Styled Components, Typescript, NextJs, ChakraUi."
          />

          <ExperienceCard
            title="Estagiário de TI"
            subtitle="Defensoria Pública da União"
            date="Janeiro 2021 - Julho 2021"
            description="Durante esse estágio atuei na manutenção do site da DPU, em um sistema de cursos utilizando o Moodle e também com o Open Journal Systems(OJS)."
          />
        </MotionContainer>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
