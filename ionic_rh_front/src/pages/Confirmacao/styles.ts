//
import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
    height: 100vh;

    .leftWrapper {
      width: 60%;
  
      display: flex;
      flex-direction: column;

      .text {
        display: block;
        margin: auto;
        text-align: center;
        
        h1{
          font-size: 50px;
          font-family: coolvetica, sans-serif;
          font-style: normal;
          font-weight: 500;
          
        }

        h2{
          margin-left: auto;
          margin-right: auto;
          font-size: 30px;
          font-family: coolvetica, sans-serif;
          font-style: normal;
          font-weight: 500;
          
        }
        span {
          text-align: center;
          color: ${theme.colors.primary};
          font-size: 2.0em;
        }
      }

    .registerWrapper {
        display: flex;
        flex-direction: column;
        margin-top: 50px;

      }
    }
  
    .rightWrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40%;
      background: ${theme.colors.primary};
      img {
        width: 30rem;
      }
    }
  
    img {
      width: 120px;
      margin: 5px 5px;
    }

  @media(max-width: 700px) {
    diplay: flex;
    flex-direction: column;

    .leftWrapper {
      width:100%;
      display: flex;
      flex-direction: column;
      margin-bottom: 100px;

      
      .text {
        display: block;
        margin: auto;
        margin-top: 200px;
        text-align: center;
        margin-bottom: 25px;

        h1{
        font-size: 28px;
        
        }

       h2{
        margin-left: auto;
        margin-right: auto;
        font-size: 18px;
        }

        span {
          text-align: center;
          color: ${theme.colors.primary};
          font-size: 1.8em;
        }

      }
    }

  
    .rightWrapper {
      flex-direction: column;
      position: relative;
      width: 100%;
    }
  }
`