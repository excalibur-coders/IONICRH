import { ReactNode } from 'react';
import { theme } from 'theme';
import Colab_Nav from 'components/Colab_Nav';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
display: flex;
aling-items: center;
flex-direction: column;


    .welcome{
      display: flex;
      justify-content: center;
      margin-top: 30px;
      align-items: center;
      color: ${theme.colors.font};

      h1{
        font-size: 50px;
      }

      h2{

        margin-left: 32px;
      }
    }

    .course{
      width: 50rem;
      height: 10rem;
      display: flex;
      margin: auto;
      margin-top: 30px;
      align-items: center;
      border-radius: 30px;
      background: ${theme.colors.secundary};
      color: ${theme.colors.font};

      .leftcourse{
        margin-left: 25px;

        h1{
          font-size: 50px;
        }

        h2{
          font-size: 25px;
        }
      }

      .rightcourse{
        margin-left: 13rem;

        h1{
          font-size: 30px;
        }
      }
    }

    .inferior{
      display: flex;
      margin-top: 30px;
      justify-content: space-around;
      align-items: center;

      .perfil{
        width: 20rem;
        height: 17rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};
      }

      .projeto{
        width: 17rem;
        height: 15rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};
      }

      .others{
        width: 17rem;
        height: 15rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};
      }
    }
`;
