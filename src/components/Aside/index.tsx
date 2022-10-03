import React from 'react';
import {
  Avatar,
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  useBreakpointValue,
  useColorModeValue,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import { motion } from 'framer-motion';
import { ToggleThemeButton } from 'components/ToggleThemeButton';

const Aside = () => {
  const MotionFlex = motion(Flex);

  const bg = useColorModeValue('blue.700', 'blue.900');

  const data = {
    avatar: 'https://avatars.githubusercontent.com/u/62675614?v=4',
    name: 'Pedro Miguel'
  };

  const links = [
    { label: 'Sobre', href: '#about' },
    { label: 'Experiência', href: '#experience' },
    { label: 'Educação', href: '#education' },
    { label: 'Habilidades', href: '#skill' },
    { label: 'Projetos', href: '#project' },
    { label: 'Certificados', href: '#certificate' }
  ];

  const { isOpen, onToggle } = useDisclosure();

  const Aside = () => {
    return (
      <MotionFlex
        initial={{ x: -350, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          default: { ease: 'linear' }
        }}
        maxWidth="350px"
        w="100%"
        bg={bg}
        position="sticky"
        top={0}
        bottom={0}
        h="100vh"
        alignItems="center"
        justifyContent="center"
        gap={8}
        as="aside"
        flexDirection="column"
        padding={5}
        textAlign="center"
      >
        <ToggleThemeButton />
        <Box width="160px" height="160px">
          <Avatar
            size="full"
            name={data.name}
            src={data.avatar}
            border="0.5rem solid rgba(255, 255, 255, 0.205)"
            bg="rgba(255, 255, 255, 0.205)"
          />
        </Box>

        <Flex as="nav" flexDirection="column" gap={4} fontSize="lg">
          {links.map(({ label, href }) => (
            <Box
              key={href}
              as="a"
              href={href}
              color="white"
              opacity={0.5}
              textTransform="uppercase"
              fontWeight={600}
              transition="all 0.3s ease-in-out"
              _hover={{ opacity: 1 }}
            >
              {label}
            </Box>
          ))}
        </Flex>
      </MotionFlex>
    );
  };

  const MobileNav = () => {
    return (
      <>
        <Flex
          fontWeight={600}
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={4}
          bg="blue.700"
          color="white"
        >
          <Heading size="md" as="h4">
            {data.name}
          </Heading>
          <HStack spacing={6}>
            <ToggleThemeButton />
            <IconButton
              bg="transparent"
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              aria-label={'Toggle Navigation'}
              _hover={{ filter: 'brightness(0.8)' }}
            />
          </HStack>
        </Flex>
        <Collapse in={isOpen} animateOpacity color="blue.700">
          <VStack
            spacing={4}
            align="flex-start"
            bg="blue.700"
            py={2}
            px={4}
            color="white"
          >
            {links.map(({ label, href }) => (
              <Box
                h="2.5rem"
                as="a"
                href={href}
                textTransform="uppercase"
                key={href}
                onClick={() => {
                  setTimeout(() => {
                    onToggle();
                  }, 1000);
                }}
                fontWeight={600}
                opacity={0.7}
                transition="all 0.3s ease-in-out"
                _hover={{ opacity: 1 }}
              >
                {label}
              </Box>
            ))}
          </VStack>
        </Collapse>
      </>
    );
  };

  const isMobile = useBreakpointValue({
    base: true,
    md: false
  });

  return isMobile ? MobileNav() : Aside();
};

export default Aside;
