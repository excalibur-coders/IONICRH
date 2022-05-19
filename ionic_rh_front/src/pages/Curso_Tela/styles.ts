import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: center;


  .position{
      display: flex;
      margin-left: 12vw;
      margin-right: 12vw;
      margin-top: 130px;
      gap: 5px;
      
    .video{
      border: 2px solid ${theme.colors.primary};
    }
 
    .list{
      width: 238px;
      border: 2px solid ${theme.colors.primary};
      height: 337px;
      overflow: auto;

      h1{
          display: flex;
          justify-content: center;
          font-size: 1.4vw;
          margin-top: 18px;
          margin-bottom: 38px;
      }
      a{
          display: flex;
          justify-content: center;
          margin-top: 12px;
          font-size: 1.2vw;
          border-bottom: 1px solid ${theme.colors.primary};
      }
      
    } 
  }

  .descricao{
      margin-left: 12vw;
      margin-right: 12vw;
      margin-top: 20px;
      border: 2px solid ${theme.colors.primary};
      width: 913px;

      .texto{
        h1{
          font-size: 22px;
          padding: 5px 5px;
        }
        h2{
          font-size: 12px;
          padding: 5px 5px;
        }
      }
    }
    @media (max-width: 930px) {

      display: flex;
      align-items: center;

      .position{
        display: flex;
        flex-direction: column;
        margin-top: 130px;
        gap: 5px;
        width: 85.1vw;
        justify-content: center;

        .list{
          width: 100%;
          border: 2px solid ${theme.colors.primary};

          h1{
            display: flex;
            justify-content: center;
            font-size: 2vw;
            margin-top: 15px;
            margin-bottom: 38px;
          }
          a{
            display: flex;
            justify-content: center;
            margin-top: 12px;
            font-size: 1.8vw;
            border-bottom: 1px solid ${theme.colors.primary};
          }
      
        }
    
      }

      .descricao{
      margin-left: 12vw;
      margin-right: 12vw;
      margin-top: 20px;
      border: 2px solid ${theme.colors.primary};
      width: 85.1vw;

      .texto{
        margin-bottom: 50px;
        h1{
          font-size: 18px;
          padding: 5px 5px;
        }
        h2{
          font-size: 10px;
          padding: 5px 5px;
        }
      }
    }

    }
  `;