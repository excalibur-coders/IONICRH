import { ReactNode } from 'react';
import { theme } from 'theme';
import Colab_Nav from 'components/Colab_Nav';
import {Flex} from '@chakra-ui/react';
import styled from '@emotion/styled'

export const Container = styled(Flex)`
display: flex;
aling-items: center;
flex-direction: column;
margin-bottom: 25px;


    .welcome{
      display: flex;
      justify-content: center;
      margin-top: 100px;
      align-items: center;
      color: ${theme.colors.font};

      h1{
        font-size: 90px;
      }

      h2{
        font-size: 30px;
        margin-left: 32px;
      }
    }

    .course{
      margin: auto;
      margin-top: 90px;
      width: 75rem;
      height: 15rem;
      display: flex;
      align-items: center;
      border-radius: 30px;
      background: ${theme.colors.secundary};
      color: ${theme.colors.font};
      justify-content: space-between;

      .leftcourse{
        margin-left: 25px;

        h1{
          font-size: 95px;
        }

        h2{
          font-size: 40px;
        }
      }

      .rightcourse{
        margin-right: 15px;
        display: flex;
        align-items: center;

        h1{
          font-size: 50px;
        }
      }
    }

    .inferior{
      display: flex;
      margin-top: 90px;
      justify-content: space-around;
      align-items: center;

      .perfil{
        width: 20rem;
        height: 17rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};

        .perfil_s{
          width: 100%;
          height: 50%;
          border-radius: 30px 30px 0px 0px;
          display: flex;
          align-items: center;

          h1{
            margin: auto;
            margin-top: 5px;
            font-size: 50px;
            color: ${theme.colors.font};
          }

        }

        .perfil_i{
          width: 100%;
          height: 50%;
          border-radius: 0px 0px 30px 30px;
          display: flex;
          flex-direction: column;
          align-items: center;

          h1{
            font-size: 25px;
            color: ${theme.colors.font}
          }
        }
      }

      .projeto{
        width: 20rem;
        height: 17rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
          margin-top: 15px;
          font-size: 25px;
          color: ${theme.colors.font};
        }

        h2{
        margin-top: 3px;
        font-size: 25px;
        color: ${theme.colors.font};
        }

        h3{
        margin-top: 15px;
        font-size: 15px;
        color: ${theme.colors.font};
        }

        Button{
          margin-top: 50px;
        }

      }

      .others{
        width: 20rem;
        height: 17rem;
        border-radius: 30px;
        background: ${theme.colors.secundary};
        display: flex;
        flex-direction: column;
        align-items: center;

        h1{
          margin-top: 15px;
          font-size: 25px;
          color: ${theme.colors.font};
        }

        h2{
        margin-top: 3px;
        font-size: 25px;
        color: ${theme.colors.font};
        }

        a{
          margin-top: 50px;
        }
      }
    }
`;
