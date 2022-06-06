import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  width: 100%;
  display: flex;
  justify-content:center;

  main{
    margin-top: 3rem;

    .position{
      padding: 0;
      display: flex;
      flex-direction: column;
      margin-left: 12vw;
      margin-right: 12vw;
      gap: 6px;

      h1{
        margin-top: 8px;
        font-size: 45px;
      }

      h4{
          display: flex;
          justify-content: center;
          font-size: 28px;
          margin-top: 18px;
          margin-bottom: 38px;
      }

    .list{
      width: 800px;
      height: 550px;   //337px
      overflow: auto;
      box-shadow: 5px 27px 26px -39px;

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

      border-color: ${({ color }) => color};
      background: transparent;

      button{
          display: flex;
          width: 100%;
          justify-content: center;
          padding-left: 8px;
          padding-right: 6px;
          padding-bottom: 5px;
          padding-top: 8px;
          font-size: 20px;
          background: transparent;
          line-height: normal;
          letter-spacing: normal;
          text-decoration: none;
          transition-duration: 0.4s;
          cursor: pointer;
      } 

      .button1{
        background-color: white;
        color: black;
        border: 0.2px solid ${theme.colors.primary};
      }

      .button1:hover {
        background-color: ${theme.colors.primary};
        color: white;
      }

      
      .dropdown-btn {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 20px;
        display: flex;
        justify-content: center;
        border: none;
        background: none;
        width:100%;
        cursor: pointer;
        outline: none;
      }
      .dropdown-btn:hover {
        color: ${theme.colors.primary};
      }
      .BotoesVideo{
        display: flex;
        flex-direction: row;
        button{
          display: flex;
          width: 100%;
          justify-content: center;
          padding-left: 8px;
          padding-right: 6px;
          padding-bottom: 5px;
          padding-top: 8px;
          font-size: 20px;
          background: transparent;
          line-height: normal;
          letter-spacing: normal;
          text-decoration: none;
          transition-duration: 0.4s;
          cursor: pointer;
        } 

        .button1{
          background-color: white;
          color: black;
          border: 0.2px solid ${theme.colors.primary};
        }

        .button1:hover {
          background-color: ${theme.colors.primary};
          color: white;
        }
      }
    } 
  }
  .positionButton{
    width: 30%;
    float: left;
    margin-bottom: 18px;
    padding: 2px;
  }
  .descricao{
      width: 800px;

      .texto{
        margin-bottom: 25px;
        h1{
          font-size: 22px;
          padding: 5px 5px;
        }
        h2{
          font-size: 15px;
          padding: 5px 5px;
        }
      }
    }


    @media (max-width: 930px) {

      display: flex;
      justify-content: center;

      .position{
        display: flex;
        flex-direction: column;

        h1{
        margin-top: 8px;
        font-size: 35px;
      }

        .list{
          width: 100%;
          height: 100%;

          h2{
            display: flex;
            justify-content: center;
            font-size: 20px;
            margin-bottom: 38px;
          }
          button{
            display: flex;
            width: 100%;
            justify-content: center;
            padding-left: 8px;
            padding-right: 6px;
            padding-bottom: 5px;
            padding-top: 8px;
            font-size: 15px;
            border: 1px solid ${theme.colors.primary};
            border-color: ${({ color }) => color};
            background: transparent;
        }
    
      }

      .descricao{
      width: 85.1vw;

      .texto{
        margin-bottom: 25px;
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
  }
}
  `;
