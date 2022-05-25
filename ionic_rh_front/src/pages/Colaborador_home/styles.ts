import { theme } from 'theme';
import { Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Container = styled(Flex)`
  display: flex;
  aling-items: center;
  flex-direction: column;
  margin-bottom: 25px;

  .welcome {
    display: flex;
    justify-content: center;
    margin-top: 100px;
    align-items: center;
    color: ${theme.colors.font};

    h1 {
      font-size: 90px;
    }

    h2 {
      font-size: 30px;
      margin-left: 32px;
    }
  }

  .blocs {
    margin: auto;
    width: 90vw;
  }
  .course {
    margin: auto;
    margin-top: 90px;
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    border-radius: 30px;
    background: ${theme.colors.secundary};
    color: ${theme.colors.font};
    justify-content: space-between;

    .leftcourse {
      margin-left: 25px;

      h1 {
        font-size: 95px;
      }

      h2 {
        font-size: 40px;
      }
    }

    .rightcourse {
      margin-right: 15px;
      display: flex;
      align-items: center;

      h1 {
        font-size: 50px;
      }
    }
  }

  .inferior {
    display: flex;
    margin-top: 90px;
    justify-content: space-between;
    align-items: center;

    .perfil {
      width: 20rem;
      height: 17rem;
      border-radius: 30px;
      background: ${theme.colors.secundary};

      .perfil_s {
        width: 100%;
        height: 50%;
        border-radius: 30px 30px 0px 0px;
        display: flex;
        align-items: center;

        h1 {
          margin: auto;
          margin-top: 5px;
          font-size: 45px;
          color: ${theme.colors.font};
        }
      }

      .perfil_i {
        width: 100%;
        height: 50%;
        border-radius: 0px 0px 30px 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
          font-size: 25px;
          color: ${theme.colors.font};
        }
      }
    }

    .projeto {
      width: 20rem;
      height: 17rem;
      border-radius: 30px;
      background: ${theme.colors.secundary};
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-top: 15px;
        font-size: 25px;
        color: ${theme.colors.font};
      }

      h2 {
        margin-top: 3px;
        font-size: 25px;
        color: ${theme.colors.font};
      }

      h3 {
        margin-top: 15px;
        font-size: 15px;
        color: ${theme.colors.font};
      }

      Button {
        margin-top: 50px;
      }
    }

    .others {
      width: 20rem;
      height: 17rem;
      border-radius: 30px;
      background: ${theme.colors.secundary};
      display: flex;
      flex-direction: column;
      align-items: center;

      h1 {
        margin-top: 15px;
        font-size: 25px;
        color: ${theme.colors.font};
      }

      h2 {
        margin-top: 3px;
        font-size: 25px;
        color: ${theme.colors.font};
      }

      a {
        margin-top: 50px;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 1075px) {
    .inferior {
      flex-direction: column;

      section {
        margin-top: 15px;
      }
    }
  }

  @media (max-width: 950px) {
    .welcome {
      flex-direction: column;
      text-align: center;
      h2 {
        margin-left: 0px;
      }
    }

    .course {
      .leftcourse {
        h1 {
          font-size: 60px;
        }

        h2 {
          font-size: 30px;
        }
      }

      .rightcourse {
        h1 {
          font-size: 40px;
        }
      }
    }
  }

  @media (max-width: 768px) {
    .course {
      display: flex;
      flex-direction: column;
      height: 20rem;
      align-items: center;
      margin-left: 0px;

      .leftcourse {
        margin: auto;
        h1 {
          font-size: 40px;
          text-align: center;
        }
        h2 {
          font-size: 20px;
          text-align: center;
        }
      }

      .rightcourse {
        margin: auto;

        h1 {
          font-size: 30px;
        }
      }
    }

    .inferior {
      .perfil {
        width: 100%;

        .myperfil {
          text-align: center;

          h1 {
            font-size: 30px;
          }
        }

        .perfil_i {
          h1 {
            font-size: 25px;
          }
        }
      }

      .projeto {
        width: 100%;
      }

      .others {
        width: 100%;
      }
    }
  }
`;
