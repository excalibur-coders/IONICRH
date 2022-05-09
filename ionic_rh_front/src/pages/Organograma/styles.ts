import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  width: 100vw;
  height: 100vh;
  background-color: white;
  .Center {
    margin: 0 auto;
    h3 {
      text-align: center;
      margin-top: 18px;
      margin-bottom: 28px;
      font-size: 28px;
      font-weight: bold;
    }
  }
`;
