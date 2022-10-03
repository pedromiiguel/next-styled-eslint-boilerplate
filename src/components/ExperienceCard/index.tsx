import React from 'react';
import {
  Grid,
  GridItem,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

type ExperienceCardProps = {
  title: string;
  subtitle: string;
  description: string;
  date: string;
};

export const ExperienceCard = ({
  title,
  subtitle,
  description,
  date
}: ExperienceCardProps) => {
  const color = useColorModeValue('gray.900', 'white');
  const blue = useColorModeValue('blue.700', 'blue.400');

  return (
    <Grid
      templateAreas={{
        lg: `"title date"
    "subtitle subtitle"
    "description description"
    "description description"
    `,

        base: `"title"
      "subtitle"
      "description"
      "date"
      `
      }}
      mt={6}
      gap={2}
    >
      <GridItem area={'title'}>
        <Heading size="lg" as="h3" color={color}>
          {title}
        </Heading>
      </GridItem>
      <GridItem
        area={'date'}
        justifySelf={{ md: 'flex-start', lg: 'flex-end' }}
        fontWeight={600}
      >
        <Text fontSize="lg" color={blue}>
          {date}
        </Text>
      </GridItem>
      <GridItem area={'subtitle'}>
        <Heading size="sm" as="h4" color={blue} textTransform="uppercase">
          {subtitle}
        </Heading>
      </GridItem>
      <GridItem area={'description'}>
        <Text fontSize="lg" maxWidth="1200px">
          {description}
        </Text>
      </GridItem>
    </Grid>
  );
};
