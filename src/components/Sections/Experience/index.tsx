import React from 'react';
import { Heading } from '@chakra-ui/react';

import { ExperienceCard, Container } from 'components';
import { motion } from 'framer-motion';
import { experiences } from './data';

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
      // viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <MotionContainer gap={10} id="experience">
          <Heading size="xl" as="h2">
            EXPERIÊNCIA
          </Heading>

          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              title={experience.title}
              subtitle={experience.subtitle}
              date={experience.date}
              description={experience.description}
            />
          ))}
        </MotionContainer>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
