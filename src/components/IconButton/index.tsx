import React from 'react';
import { Box } from '@chakra-ui/react';

type IconButtonProps = {
  children: React.ReactNode;
  href: string;
};

export const IconButton = ({ children, href }: IconButtonProps) => {
  return (
    <Box
      borderRadius="50%"
      bg="blue.700"
      p={4}
      as="a"
      href={href}
      target="_blank"
      cursor="pointer"
      transition="all 0.3s ease-in-out"
      _hover={{ filter: 'brightness(0.8)' }}
    >
      {children}
    </Box>
  );
};
