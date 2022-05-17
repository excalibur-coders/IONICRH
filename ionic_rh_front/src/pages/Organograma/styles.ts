import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  margin-top: 3rem;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.background};

  /* .Center {
    margin: 0 auto;
    margin-top: 50px;
    h3 {
      font-family: coolvetica, sans-serif;
      text-align: center;
      margin-top: 18px;
      margin-bottom: 28px;
      font-size: 2.8vw;
      font-weight: bold;
    }
  } */

  .backgroundLogo {
    opacity: .2;
  }
`;

export const CenterContainer = styled(Flex)`
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1;

    img {
      position: absolute;

      opacity: .15;
      width: 800px;
    }


    h3 {
      font-family: coolvetica, sans-serif;
      text-align: center;
      margin-top: 18px;
      margin-bottom: 28px;
      font-size: 2.8vw;
      font-weight: bold;
      z-index: 10;
      color: #505050;
    }
`;
