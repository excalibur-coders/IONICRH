import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled.div`
  font-family: ${theme.fonts.body};
  main {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.font};

    .welcome {
      display: flex;
      padding-top: 100px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      h1 {
        font-size: 70px;
      }
      h2 {
        font-size: 50px;
      }
    }

    .listar {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      align-items: center;

      a {
        display: flex;
        align-items: center;
        font-size: 50px;
        gap: 10px;
      }

      li {
        list-style: none;
      }

      .botoes {
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .left {
          ul {
            display: flex;
            flex-direction: row;
            gap: 50px;
          }
        }

        a {
          margin: 10px auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 400px;
          height: 5rem;
          border-radius: 50px;
          background: ${theme.colors.secundary};
          font-size: 35px;
        }

        a:hover {
          cursor: pointer;
          width: 450px;
          height: 6rem;
          font-size: 40px;
          background: ${theme.colors.primary};
          transition: 0.35s ease-in-out;
        }
      }
    }

    @media (max-width: 768px) {
      .welcome {
        h1 {
          font-size: 50px;
        }
        h2 {
          font-size: 40px;
        }
      }

      .listar {
        a {
          font-size: 40px;
        }
        .botoes {
          gap: 0px;
          flex-direction: column;

          .left {
            ul {
              display: flex;
              flex-direction: column;
              gap: 0;
            }
          }

          a {
            width: 300px;
            font-size: 25px;
          }
          a:hover {
            width: 350px;
            font-size: 30px;
          }
        }
      }
    }
  }
`;
