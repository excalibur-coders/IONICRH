import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#53C4CD',
    font: '#4D4E4F',
    border: '#050006',
    logo: '#00000094',
    red: '#ed5555'
  },

  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },

  styles: {
    global: {
      // '*': {
      //   transition: '0.4s',
      // },

      // html: {
      //   fontSize: '62.5%',
      // },

      body: {
        bg: '#f4f4f5',
        overflow: 'overlay',
      },
    },
  },
});
