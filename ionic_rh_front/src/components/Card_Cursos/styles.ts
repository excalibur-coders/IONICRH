import styled from '@emotion/styled';
import { Input, Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled.div`
  padding: 18px;
  background-color: ${theme.colors.primary};
  width: 50vw;
  height: 18vh;
  border-radius: 20px;
  margin: auto;
  display: flex;

  .texto {
    width: 70%;

    .tittle {
      h1 {
        font-size: 30px;
      }

      .desc {
        font-size: 10px;
      }
    }
  }

  .test {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
