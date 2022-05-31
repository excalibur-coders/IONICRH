import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;

  main {
    margin: 4rem auto;
    display: flex;
    flex-direction: column;

    .linha {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 90vw;
      gap: 10px;
      
      .porcent_obrigatorio {
        margin: auto;
        border: 1px solid grey;
        border-radius: 20px;
        background-color: white;
        width: 90vw;
        padding-top: 10px;

        h1 {
          text-align: center;
          font-size: 30px;
        }

        .test {
          width: 50%;
          height: 25px;
          margin: 15px auto;
        }
      }

      .porcent_geral {
        margin: auto;
        border: 1px solid grey;
        border-radius: 20px;
        background-color: white;
        width: 90vw;
        padding-top: 10px;

        h1 {
          text-align: center;
          font-size: 30px;
        }

        .test {
          width: 50%;
          height: 25px;
          margin: 15px auto;
        }
      }
    }

    .cards {
      background-color: white;
      margin-top: 40px;
      width: 90vw;
      display: flex;
      flex-direction: column;
      gap: 50px;
      padding: 15px;
      text-align: center;
      border: 1px solid grey;
      border-radius: 20px;

      h2 {
        margin: 0 auto;
        font-size: 50px;
      }
    }

    @media (max-width: 768px) {
      align-items: center;
      justify-content: center;

      .linha {
        margin: auto;
        flex-direction: column;
        height: 50vh;
        width: 90vw;

        .porcent_obrigatorio,
        .porcent_geral {
          h1 {
            font-size: 20px;
          }
        }
      }

      .cards {
        h2 {
          font-size: 10vw;
        }
      }
    }
  }
`;
