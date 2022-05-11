import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  height: 100vh;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  color: ${theme.colors.font};
  .Wrapper {
    .centerWrapper {
      display: flex;
      flex-wrap: wrap;

      .leftWrapper {
        position: relative;
        float: left;
        width: 30%;
        text-align: center;

        .foto {
          border: 1px solid black;
          border-radius: 90px;
          width: 150px;
          height: 150px;
          margin: 0 auto;
          margin-top: 40px;
          box-shadow: 0 0 1em black;
        }

        .User {
          margin: 0 auto;
          margin-top: 20px;

          h1 {
            text-align: center;
            font-weight: bold;
            font-size: 30px;
            margin-bottom: 20px;
          }

          Button {
            margin-bottom: 20px;
          }
        }

        .pdf {
          box-sizing: border-box;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-around;
          margin-bottom: 20px;

          h2 {
            font-weight: bold;
            font-size: 15px;
            margin-bottom: 20px;
            margin-top: 20px;
          }
        }
      }

      .rightWrapper {
        position: relative;
        width: 60%;
        float: right;

        .centerRightWrapper {
          margin: 0 auto;
          padding: 0.2%;
          overflow: hidden;

          .dadosIniciais {
            box-sizing: border-box;
            padding: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px;

            .dadosTexto {
              h1 {
                text-align: left;
                font-weight: bold;
                font-size: 20px;
                padding: 10px;
                margin-bottom: 10px;
              }
            }

            .dadosVoltar {
              display: inline-flex;

              .seta {
                width: 30px;
                height: 30px;
              }

              h2 {
                text-align: right;
                font-weight: bold;
                font-size: 20px;
                cursor: pointer;
              }

              h2:hover {
                text-decoration: underline;
              }
            }
          }

          .Dados {
            margin: 0 auto;
            margin-top: 30px;

            .centerDados {
              .colunaDados {
                width: 30%;
                margin-right: 3%;
                float: left;

                .coluna1,
                .coluna2,
                .coluna3 {
                  display: flex;
                  flex-direction: column;
                  padding: 0 30px;
                }
              }

              .colunaDados2 {
                width: 45%;
                margin-right: 3%;
                float: left;

                .coluna1,
                .coluna2 {
                  display: flex;
                  flex-direction: column;
                  padding: 0 30px;
                }
              }
            }
          }

          .endereco {
            margin: 0 auto;
            margin-top: 30px;

            .enderecoTexto {
              width: 100%;

              h1 {
                text-align: left;
                font-weight: bold;
                font-size: 20px;
                padding: 10px;
                margin-bottom: 10px;
              }
            }

            .centerEndereco {
              .colunaEndereco {
                width: 30%;
                margin-right: 3%;
                float: left;

                .coluna1,
                .coluna2,
                .coluna3 {
                  display: flex;
                  flex-direction: column;
                  padding: 0 30px;
                }
              }
            }
          }
        }
      }
    }
  }

  .Wrapper2 {
    padding: 20px 0;

    .centerWrapper2 {
      margin: 0 auto;
      padding: 0.2%;
      overflow: hidden;

      .DadosFuncionais {
        width: 100%;

        h1 {
          text-align: left;
          font-weight: bold;
          font-size: 20px;
          padding: 10px;
          margin-bottom: 10px;
        }
      }

      .coluna {
        width: 30%;
        margin-right: 3%;
        float: left;

        .coluna1,
        .coluna2,
        .coluna3 {
          display: flex;
          flex-direction: column;
          padding: 0 30px;
        }

        .coluna3 h1 {
          font-weight: bold;
          font-size: 20px;
        }
      }
    }
  }

  .Wrapper3 {
    .DadosFuncionais {
      span {
        text-align: left;
        font-weight: bold;
        font-size: 25px;
        padding: 10px;
        color: ${theme.colors.primary};
      }
    }
  }

  @media (max-width: 768px) {
    .Wrapper {
      .centerWrapper {
        .leftWrapper {
          width: 100%;
        }

        .rightWrapper {
          width: 100%;

          .centerRightWrapper {
            .Dados {
              .centerDados {
                .colunaDados {
                  float: none;
                  width: 100%;
                }

                .colunaDados2 {
                  float: none;
                  width: 100%;
                }
              }
            }

            .endereco {
              .centerEndereco {
                .colunaEndereco {
                  float: none;
                  width: 100%;
                }
              }
            }
          }
        }

        .divider {
          width: 100%;
        }
      }
    }

    .Wrapper2 {
      .centerWrapper2 {
        .coluna {
          float: none;
          width: 100%;
        }
      }
    }
  }
`;
