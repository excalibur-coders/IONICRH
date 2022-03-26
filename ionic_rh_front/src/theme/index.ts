import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: 'blue',
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      '*': {
        transition: '0.4s',
      },

      html: {
        fontSize: '62.5%',
      },

      body: {
        bg: 'gray.100',
        overflow: 'overlay',
      },
    },
  },
});
