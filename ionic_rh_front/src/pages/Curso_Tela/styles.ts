import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content: center;


  .position{
      padding: 0;
      display: flex;
      margin-left: 12vw;
      margin-right: 12vw;
      margin-top: 130px;
      gap: 6px;
      
    .video{
      border: 2px solid ${theme.colors.primary};
    }
 
    .list{
      width: 238px;
      height: 337px;
      overflow: auto;
      border: 1px solid ${theme.colors.primary};
      border-radius: 2%;

      ::-webkit-scrollbar{
        width: 12px;
      }
      ::-webkit-scrollbar-track{
        background: ${theme.colors.primary};
        border-radius: 30px;
      }
      ::-webkit-scrollbar-thumb{
        background: gray;
        border-radius: 30px;
      }


      h1{
          display: flex;
          justify-content: center;
          font-size: 1.4vw;
          margin-top: 18px;
          margin-bottom: 38px;
      }
      a{
          display: flex;
          justify-content: left;
          margin-top: 12px;
          padding-left: 8px;
          padding-right: 6px;
          padding-bottom: 5px;
          font-size: 1.2vw;
          border-bottom: 1px solid ${theme.colors.primary};
          line-height: normal;
          letter-spacing: normal;
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
          height: 188.8px;
          background-color: ;

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
            font-size: 1.9vw;
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