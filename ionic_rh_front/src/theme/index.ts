import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#53C4CD',
    secundary: '#ACD8DE',
    font: '#4D4E4F',
    border: '#050006',
    logo: '#00000094',
    red: '#ed5555'
  },

  fonts: {
    heading: 'Coolvetica',
    body: 'Coolvetica',
  },

  styles: {
    global: {
      '*': {
        fontFamily: 'Arial',
      },

      body: {
        bg: '#f4f4f5',
        overflow: 'overlay',
      },
    },
  },
});
