import React from 'react';
import {
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react';
import { Container } from 'components';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Certificate = () => {
  const blue = useColorModeValue('blue.700', 'blue.400');

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

  const content = [
    {
      title: 'React Avançado: Crie aplicações com NextJS, Strapi e mais',
      subtitle: 'Udemy',
      href: 'https://www.udemy.com/certificate/UC-60970061-eacb-4038-9356-f4fa8ad1e604/'
    },
    {
      title: 'Ignite React Js',
      subtitle: 'Rocketseat',
      href: 'https://app.rocketseat.com.br/api/certificates/pdf/7701f2f1-4769-46ed-8156-32a6c78809b6'
    },
    {
      title: 'Javascript do básico ao avançado(c/Node.js e projetos)',
      subtitle: 'Udemy',
      href: 'https://udemy-certificate.s3.amazonaws.com/pdf/UC-e169c9eb-061d-4d0f-9345-ddc513681a68.pdf'
    },
    {
      title: 'Scrum Foundation Professional Certificate',
      subtitle: 'Certiprof',
      href: 'https://drive.google.com/file/d/1QrnT8nt4dYSH3b-n8mTLTXxfVQjU3QWP/view'
    }
  ];

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={cardVariants}>
        <Container gap={10} id="certificate">
          <Heading size="xl" as="h2">
            Certificados e cursos
          </Heading>
          <VStack alignItems="flex-start" spacing={16}>
            {content.map(({ title, subtitle, href }) => (
              <VStack alignItems="flex-start" spacing={2} key={title}>
                <Heading as="h5" size="md" color={blue}>
                  {title}
                </Heading>
                <Text fontSize="xl">{subtitle}</Text>
                <Button
                  as="a"
                  target="_blank"
                  href={href}
                  variant="link"
                  rightIcon={<FaExternalLinkAlt size={14} />}
                  colorScheme="blue"
                  color={blue}
                >
                  Credencial
                </Button>
              </VStack>
            ))}
          </VStack>
        </Container>
      </motion.div>
    </motion.div>
  );
};

export default Certificate;
