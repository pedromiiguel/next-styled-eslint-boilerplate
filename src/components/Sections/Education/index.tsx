import React from 'react';
import { Heading } from '@chakra-ui/react';

import { ExperienceCard, Container } from 'components';
import { motion } from 'framer-motion';

const Education = () => {
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
        <Container gap={10} id="education">
          <Heading size="xl" as="h2">
            Educação
          </Heading>
          <ExperienceCard
            title="Instituto Federal de Brasília"
            subtitle="Tecnólogo em Sistemas para Internet"
            date="Dezembro 2019 - Novembro 2021"
            description="Status: Concluído"
          />
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Education;
