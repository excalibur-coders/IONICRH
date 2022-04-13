import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
height:100vh;
display: flex;
flex-direction:column;
color: ${theme.colors.font};

  .centerWrapper{
    display: flex;
    flex-wrap: wrap;
    height:100%;

    .leftWrapper {
      width: 60%;
      position: relative;
      float: left;
      display: flex;
      flex-direction: column;

      img {
        width: 160px;
        margin: 5px 5px;
        margin-top:10px;
      }

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

          .formFooterLeft {
            display: flex;
            flex-direction: column;
          }
          
          span {
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
      position: relative;
      width: 40%;
      float: right;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${theme.colors.primary};

      img {
        width: 20rem;
      }
    }
  }

  @media(max-width: 768px) {
    .centerWrapper{
        .leftWrapper{
            width: 100%;
        }

        .rightWrapper{
            width: 100%;
            margin-top: 50px;
    }
  }

`;
