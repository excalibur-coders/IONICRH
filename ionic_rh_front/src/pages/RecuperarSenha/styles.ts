import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  height: 100vh;

  .leftWrapper {
    width: 60%;

    display: flex;
    flex-direction: column;

    .form {
      width: 20rem;
      margin: 0 auto;
      margin-top: 80px;

      h1 {
        margin: 50px;

        text-align: center;
        font-weight: bold;
        font-size: 20px;
      }

      .formFooter {
        display: flex;
        justify-content: space-between;

        margin-top: 10px;

        a {
          color: ${theme.colors.primary};
        }
      }
    }

    .registerWrapper {
      display: flex;
      flex-direction: column;

      margin-top: 50px;

      span {
        text-align: center;
      }

      span:last-child {
        text-align: center;
        color: ${theme.colors.primary};
      }
    }
  }

  .rightWrapper {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40%;

    background: ${theme.colors.primary};

    img {
      width: 20rem;
    }
  }

  img {
    width: 120px;
    margin: 5px 5px;
    margin-top:10px;
  }

  @media(max-width: 700px) {
    .leftWrapper {
      border:1px solid red;
      width:100%;
      display: flex;
      flex-direction: column;
    }

    .rightWrapper {
      border:1px solid black;
      flex-direction: column;
      position: relative;
    }
  }


`;