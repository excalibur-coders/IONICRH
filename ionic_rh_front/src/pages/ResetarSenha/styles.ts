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
    position: relative;
    float: left;
    width: 60%;
    display: flex;
    flex-direction: column;

    img {
      width: 120px;
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
    position: relative;
    width: 40%;
    float: right;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primary};

    img {
      width: 30rem;
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
