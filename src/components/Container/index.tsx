import { Flex, FlexProps, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
} & FlexProps;

export const Container = ({ children, ...rest }: ContainerProps) => {
  const color = useColorModeValue('gray.700', 'white');
  const borderColor = useColorModeValue('gray.300', 'gray.700');

  return (
    <Flex
      justifyContent="center"
      flexDirection="column"
      color={color}
      minHeight="100vh"
      borderBottom="1px solid"
      borderColor={borderColor}
      padding={{ base: 4, lg: 8 }}
      {...rest}
    >
      {children}
    </Flex>
  );
};
