import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export const ToggleThemeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      onClick={toggleColorMode}
      // position="absolute"
      // top={4}
      // right={4}
      bg="transparent"
      colorScheme="blue"
      color="white"
    >
      {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
