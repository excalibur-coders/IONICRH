import { theme } from 'theme';
import * as S from './styles';
import React, { useContext } from 'react';
import RespBar from 'components/RespBar';
import { AspectRatio, Box, Button, Checkbox } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { api } from 'services/api';
import {
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { AuthContext } from 'hooks/useAuth';

interface ITrilha {
  trilha_id: number;
  trilha_nome: string;
  juntos: ICurso[];
  userUserId: number;
}
interface ICurso {
  curso_id: number;
  curso_nome: string;
  curso_descricao: string;
  curso_criacao: string;
  curso_duracao: number;
  modulosCurso: IModulo[];
}
interface IDocs {
  docs_id: number;
  docs_nome: string;
  docs_url: string;
  docs_type: string;
}
interface IModulo {
  modulo_id: number;
  modulo_nome: string;
  docs_curso: IDocs[];
}

interface IForm {
  userUserId: number;
  videoVideoId: number;
  concluiu: boolean;
}

function Teste() {
  const { user } = useContext(AuthContext);
  const cookies = parseCookies();
  const { id } = useParams();
  const [trilha, setCursos] = useState<ICurso[]>([]);

  const navigate = useNavigate();

  const getAllCursos = useCallback(() => {
    api
      .get(`/curso/ver-curso/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        /* console.log('Boa noite', data); */
        setCursos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies, id]);
  /*
  const media = document.getElementById('myVideo');
  const output = document.getElementById('output');
    media?.addEventListener("playing", () => {
    output?.innerHTML;
    });

    media?.addEventListener("pause", () => {
      output?.innerHTML;
    });

    media?.addEventListener("seeking", () => {
      output?.innerHTML;
    });

    media?.addEventListener("volumechange", () => {
      output?.innerHTML;
    }); */
  /* const video = document.querySelector('video');
  let timeStarted = -1;
  let timePlayed = 0;
  const duration = 0; */

  // eslint-disable-next-line react-hooks/exhaustive-deps
  /* function videoStoppedPlaying(event: any) {
    if (timeStarted > 0) {
      const playedFor = new Date().getTime() / 1000 - timeStarted;
      timeStarted = -1;
      timePlayed += playedFor;
    }
    const determinacao: any = document.getElementById("played")?.innerHTML
    determinacao + Math.round(timePlayed) + " ";
    if (timePlayed >= duration && event.type == "ended") {
      testando()
    }
  } */
  useEffect(() => {
    getAllCursos();

  }, [getAllCursos]);

  /* const onSubmit = useCallback(
    async () => {
      testando(Number(id))
    },
    [testando],
  ); */
  /*   const {
      handleSubmit,
      setValue
    } = useForm()
    const setUserValues = useCallback(
      (data: ICurso) => {
        setValue('videoVideoId',data.curso_id)
      },
      [setValue]
    ) */
  const testando = useCallback(async (docs_id: number) => {
    await api
      .post(`/departamentos/teste/${docs_id}`, {
      }, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then()
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies]);
  const testando2 = useCallback(async (modulo_id: number) => {
    await api
      .post(`/departamentos/teste2/${modulo_id}`, {
      }, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then()
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies]);


  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <div className='position'>
            {/* Retorno do nome do modulo */}
            {trilha.map(curso => {
              return (
                <>
                  <h1>{curso.curso_nome}</h1>
                  {curso.modulosCurso.map(modulo => {
                    return (
                      <>
                        <h1>
                          {modulo.modulo_nome}
                          <form method='post'>
                            <button type="reset"
                              onClick={() =>
                                testando2(
                                  modulo.modulo_id
                                )
                              }
                            >
                              Assistido
                            </button>
                          </form>
                        </h1>
                      </>
                    )
                  })}
                </>
              )
            })}
            {trilha.map(curso => {
              return (
                curso.modulosCurso.map(modulo => {
                  return (
                    <>
                      {modulo.docs_curso.map(doc => {
                        if (doc.docs_type == '.mp4') {
                          return (
                            /* Retorno de video */
                            <>
                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton>
                                      <Box flex='1' textAlign='left'>
                                        {/* Nome do Modulo */}
                                        <form method='post'>
                                          <button type="reset"
                                            onClick={() =>
                                              testando(
                                                doc.docs_id
                                              )
                                            }
                                          >
                                            Assistido
                                          </button>
                                        </form>
                                        {doc.docs_nome}
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>

                                  <AccordionPanel pb={4}>
                                    {/* Retorno do video */}
                                    <div id="output"></div>
                                    <video id="myVideo" width="666" height="176" controls>
                                      <source src={doc.docs_url} type="video/mp4" />
                                    </video>
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            </>
                          )
                        } else if (doc.docs_type == ".jpeg" || doc.docs_type == ".png") {
                          return (
                            /* Retorno de imagens */
                            <>
                              <Accordion allowToggle>
                                <AccordionItem>
                                  <h2>
                                    <AccordionButton>
                                      <Box flex='1' textAlign='left'>
                                        {/* Nome do Modulo */}
                                        {doc.docs_nome}
                                      </Box>
                                      <AccordionIcon />
                                    </AccordionButton>
                                  </h2>
                                  <AccordionPanel pb={4}>
                                    {/* Retorno da imagem */}
                                    <img src={doc.docs_url} width={666} />
                                  </AccordionPanel>
                                </AccordionItem>
                              </Accordion>
                            </>
                          )
                        }
                      })}
                    </>
                  )
                })
              )
            })}
          </div>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </main>
      </S.Container>
    </>
  )
}

export default Teste;
