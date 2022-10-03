import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
  Box,
  Collapse,
  Flex,
  Heading,
  HStack,
  IconButton,
  useDisclosure,
  VStack
} from '@chakra-ui/react';
import { data, links } from 'components/Aside/content';
import { ToggleThemeButton } from 'components/ToggleThemeButton';
import React from 'react';

const Menu = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box position="fixed" top={0} left={0} right={0}>
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
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
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
    </Box>
  );
};

export default Menu;
