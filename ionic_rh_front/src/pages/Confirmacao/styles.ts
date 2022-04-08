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
          
        }

        h2{
          margin-left: auto;
          margin-right: auto;
          font-size: 30px;
          
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
        width: 30rem;
      }
    }
  
    img {
      width: 120px;
      margin: 5px 5px;
    }

`