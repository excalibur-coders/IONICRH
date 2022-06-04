import styled from '@emotion/styled';
import { Input, Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled.div`
  padding: 18px;
  background-color: ${theme.colors.secundary};
  width: 60vw;
  height: 20vh;
  border-radius: 20px;
  margin: auto;
  align-items: center;
  display: flex;

  .texto {
    width: 70%;

    .tittle {
      h1 {
        font-size: 25px;
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

  @media (max-width: 768px) {
    width: 80vw;
    height: 100%;
    flex-direction: column;

    .texto {
      width: 100%;

      .tittle {
        h1 {
          font-size: 20px;
        }

        .desc {
          font-size: 5vw;
        }
      }

      .test {
        width: 100%;
      }
    }
  }
`;
