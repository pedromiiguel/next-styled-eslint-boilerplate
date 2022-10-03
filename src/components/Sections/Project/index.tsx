import React from 'react';
import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
  Link
} from '@chakra-ui/react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { Container } from 'components';
import { motion } from 'framer-motion';
import content from './data';

const Project = () => {
  const MotionFlex = motion(Flex);

  const containerVariant = {
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
    <Container gap={10} id="project" overflow="hidden">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        variants={containerVariant}
      >
        <Heading size="xl" as="h2">
          Projetos
        </Heading>
      </motion.div>

      <VStack spacing={32}>
        {content.map(
          ({ title, src, description, techs, href, github }, index) => {
            const order = index % 2 === 0 ? 2 : 0;

            return (
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                key={title}
              >
                <MotionFlex
                  variants={{
                    offscreen: {
                      x: order ? '-200' : '200',
                      opacity: 0
                    },
                    onscreen: {
                      x: 0,
                      opacity: 1,
                      transition: {
                        default: { ease: 'linear' },
                        duration: 0.8
                      }
                    }
                  }}
                  alignItems="center"
                  flexDirection={{ base: 'column', md: 'row' }}
                  justifyContent="space-between"
                  gap={8}
                >
                  <Box
                    width={{ base: '100%', md: '50%' }}
                    rounded={'lg'}
                    padding={2}
                    border="1px solid"
                    borderColor="gray.300"
                    as="a"
                    target="_blank"
                    href={href}
                    cursor="pointer"
                    order={order}
                  >
                    <Image
                      transition="transform 0.2s ease-in-out"
                      _hover={{ transform: 'scale(1.02)' }}
                      src={src}
                      objectFit="contain"
                      width="100%"
                      rounded="md"
                    />
                  </Box>
                  <VStack
                    order={{ base: order + 1, md: 1 }}
                    align="flex-start"
                    spacing={4}
                    width={{ base: '100%', md: '50%' }}
                  >
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      width="100%"
                    >
                      <Heading as="h6" size="xs">
                        {title}
                      </Heading>
                      <Flex gap={2}>
                        <Link
                          href={href}
                          target="_blank"
                          rel="noopener"
                          cursor="pointer"
                        >
                          <FaExternalLinkAlt size={16} />
                        </Link>

                        <Link
                          href={github}
                          target="_blank"
                          rel="noopener"
                          cursor="pointer"
                        >
                          <FaGithub size={16} />
                        </Link>
                      </Flex>
                    </Flex>

                    <Text mt={2} fontSize="sm">
                      {description}
                    </Text>
                    <Stack direction="row" flexWrap="wrap" gap={2}>
                      {techs.map(({ name, color }) => (
                        <Badge key={name} rounded="sm" colorScheme={color}>
                          {name}
                        </Badge>
                      ))}
                    </Stack>
                  </VStack>
                </MotionFlex>
              </motion.div>
            );
          }
        )}
      </VStack>
    </Container>
  );
};

export default Project;
