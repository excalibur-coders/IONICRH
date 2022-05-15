import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  margin-top: 3rem;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.background};
  .Center {
    margin: 0 auto;
    h3 {
      font-family: coolvetica, sans-serif;
      text-align: center;
      margin-top: 18px;
      margin-bottom: 28px;
      font-size: 2.8vw;
      font-weight: bold;
    }
  }
`;
