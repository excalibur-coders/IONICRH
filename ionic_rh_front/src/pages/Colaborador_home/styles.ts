import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  display: flex;
  aling-items: center;
  flex-direction: column;
  margin-bottom: 25px;

  .welcome {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    align-items: center;
    color: ${theme.colors.font};
    text-align: center;
    gap: 30px;

    .text{

      h1 {

        font-size: 50px;
      }

      h2 {
        font-size: 25px;
      }
    }


  }

  .blocs {
    display: flex;
    margin: 25px auto;
    align-items: center;

    .course {
      margin: auto;
      width: 50vw;
      height: 15rem;
      display: flex;
      align-items: center;
      border-radius: 30px;
      background: ${theme.colors.secundary};
      color: ${theme.colors.font};
      justify-content: center;

      .leftcourse {
        margin-left: 25px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 100%;
        top: 0px;

        h1 {
          text-align: center;
          font-size: 50px;
        }

        a {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 10px;
          font-size: 25px;
        }

        a:hover{
          cursor: pointer;
          color: #000000;
          transition: 0.3s ease-in-out;
        }
      }
    }

    .perfil {
      margin: auto;
      width: 20rem;
      height: 15rem;

      border-radius: 30px;
      background: ${theme.colors.secundary};

      .perfil_s {
        width: 100%;
        height: 100%;
        border-radius: 30px 30px 0px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          margin: auto;
          margin-top: 5px;
          font-size: 45px;
          color: ${theme.colors.font};
        }

        a Button{
          display: flex;
          margin: auto;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 950px) {

    .blocs {

      .course {
        width: 50vw;
        .leftcourse {
        h1 {
          font-size: 25px;
        }

        h2 {
          font-size: 20px;
        }
      }

      .rightcourse {

        h1 {
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 768px) {

    .blocs{
      flex-direction: column;

      .course {
        display: flex;
        flex-direction: column;
        width: 20rem;
        height: 15rem;
        align-items: center;
        margin-top: 10px;

        .leftcourse {
          margin: auto;
          h1 {
            font-size: 40px;
            text-align: center;
          }
          h2 {
            font-size: 20px;
            text-align: center;
          }
        }
      }
    }

`;
