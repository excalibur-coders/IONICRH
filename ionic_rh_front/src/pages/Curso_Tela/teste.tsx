import { theme } from 'theme';
import * as S from './styles';
import React, { useContext } from 'react';
import RespBar from 'components/RespBar';
import { AspectRatio, Box, Button, Checkbox, Select } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { api } from 'services/api';
import ReactPlayer from 'react-player'
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
import { userInfo } from 'os';

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
interface IUser {
  user_id: number;
  concluiu: IConcluiu[];
}
interface IConcluiu {
  concluiu: boolean;
  userUserId: number;
  videoVideoId: number;
  docs: IDocs;
}

function Teste() {
  const cookies = parseCookies();
  const { id } = useParams();
  const [trilha, setCursos] = useState<ICurso[]>([]);
  const [concluiu, setConcluiu] = useState<IConcluiu>();

  const [currentUrlIndex, setCurrentUrlIndex] = React.useState(0)
  const [showNextButton, setShowNextButton] = React.useState(false)
  const navigate = useNavigate();

  /*   const getConcluiu = useCallback(() => {
      api
        .get(`/user/pegar-concluiu`, {
          headers: {
            Authorization: `Bearer ${cookies['ionicookie.token']}`,
          },
        })
        .then(({ data }) => {
          setConcluiu(data);
        })
        .catch((error: Error | AxiosError) => {
          console.log(error);
        });
    }, [cookies]); */

  const getAllCursos = useCallback(() => {
    api
      .get(`/curso/ver-curso/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setCursos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies, id]);


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

  /*const video = document.querySelector('#ytplayer')
    const btn = document.querySelector('#validaaula')*/

  useEffect(() => {
    getAllCursos();
    /* getConcluiu() */
  }, [getAllCursos]);

  return (
    <>
      <S.Container>
        <RespBar />
        <main>

          <div className='position'>

            {/* Retorno do nome do modulo */}
            {/* {trilha.map(curso => {
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
            })} */}

            {trilha.map(curso => {
              return (
                curso.modulosCurso.map(modulo => {
                  return (
                    <>
                      {modulo.docs_curso.map((m, i) => {
                        return (
                          <>
                            <h1 key={m.docs_id}>
                              <Link onClick={() => {
                                setCurrentUrlIndex(
                                  () => i
                                )
                              }
                              }>{m.docs_nome}</Link>
                              {modulo.docs_curso.filter(doc => {
                                return modulo.docs_curso[currentUrlIndex].docs_url == doc.docs_url
                              }).map(i => {
                                if (i.docs_nome == m.docs_nome) {
                                  return (
                                    <>
                                      <ReactPlayer id="myVideo" url={i.docs_url} controls onEnded={() => setShowNextButton(true)} />
                                      {showNextButton && (
                                        <>
                                          <button
                                            onClick={() => {
                                              setCurrentUrlIndex(
                                                prevUrlIndex => (prevUrlIndex + 1) % modulo.docs_curso.length
                                              )
                                              setShowNextButton(false)
                                            }}
                                          >
                                            Proximo Video
                                          </button>
                                          <button
                                            onClick={() => {
                                              setCurrentUrlIndex(
                                                prevUrlIndex => (prevUrlIndex - 1) % modulo.docs_curso.length
                                              )
                                              setShowNextButton(false)
                                            }}
                                          >
                                            {" "}Voltar Video
                                          </button>
                                        </>
                                      )}

                                    </>
                                  )
                                }
                              })}
                            </h1>
                          </>
                        )
                      })}

                    </>
                  )
                })
              )
            })}
          </div>
          <h1>Oi</h1>
          <button onClick={() => navigate(-1)}>Voltar</button>
        </main>
      </S.Container>
    </>
  )
}

export default Teste;
