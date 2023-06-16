import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';

import {
  About,
  Certificate,
  Education,
  Experience,
  Project,
  Skill
} from 'components/Sections';
import Aside from 'components/Aside';
import Menu from 'components/Menu';

export default function Home() {
  const isMobile = useBreakpointValue(
    {
      base: true,
      md: false
    },
    {
      fallback: 'md'
    }
  );

  return (
    <>
      <Head>
        <title>Pedro Miguel - Portfólio</title>
        <meta
          name="description"
          content="Desenvolvedor React com experiência nas principais tecnologias do mercado como: React Hooks, API Rest, Typescript, Git e SASS. Entusiasta na área de desenvolvimento web, tenho facilidade em aprender novas tecnologias, sempre em busca de novas experiências."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        marginLeft={{
          base: 0,
          md: 350
        }}
        flexDirection={{
          base: 'column',
          md: 'row'
        }}
        position="relative"
      >
        {isMobile ? <Menu /> : <Aside />}
        <Flex flexDirection="column" zIndex={10}>
          <About />
          <Experience />
          <Education />
          <Skill />
          <Project />
          <Certificate />
        </Flex>
      </Flex>
    </>
  );
}
