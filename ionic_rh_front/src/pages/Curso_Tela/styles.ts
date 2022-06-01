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
      height: 337px;   //337px
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
    } 

    /* .vertical-menu {              //UMA IDEIA PRA UM MENU COM VÁRIOS BOTÕES P/ CADA CURSO, CADA BOTÃO 
      width: 238px;                  //ABRIRIA E AO ABRIR SERIAM MOSTRADOS OS MODULOS DO CURSO 
      height: 200px;                 //NESSA IDEIA A CLASS LIST ALI DE CIMA DEIXA DE EXISTIR E A VERTICAL MENU
      overflow-y: auto;              //ENTRA NO LUGAR
    
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
    }
    .dropdown-btn {
      padding: 6px 8px 6px 16px;
      text-decoration: none;
      font-size: 20px;
      color: #818181;
      display: block;
      border: none;
      background: none;
      width:100%;
      text-align: left;
      cursor: pointer;
      outline: none;
} 
    .vertical-menu a {
      background-color: #eee; 
      color: black; 
      display: block; 
      padding: 12px; 
      text-decoration: none; 
    }

    .vertical-menu a:hover {
      background-color: #ccc;
    }

    .vertical-menu a.active {
      background-color: #04AA6D;
      color: white;
    }*/


  }

  .descricao{
      margin-left: 12vw;
      margin-right: 12vw;
      margin-top: 20px;
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