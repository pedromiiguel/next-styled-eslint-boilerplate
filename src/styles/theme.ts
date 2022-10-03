import { extendTheme, theme as base, type ThemeConfig } from '@chakra-ui/react';

const theme: ThemeConfig = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading: `Poppins ${base.fonts?.heading}, sans-serif`,
    body: `Poppins ${base.fonts?.body}, sans-serif`
  },

  styles: {
    global: {
      'html, body': {
        scrollBehavior: 'smooth',
        boxSizing: 'border-box'
      }
    }
  }
});

export default theme;
