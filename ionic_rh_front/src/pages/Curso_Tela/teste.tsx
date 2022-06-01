import { theme } from 'theme';
import * as S from './styles';
import React from 'react';
import RespBar from 'components/RespBar';
import { AspectRatio, Box } from '@chakra-ui/react'
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


function Teste() {
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
  useEffect(() => {
    getAllCursos();
  }, [getAllCursos]);
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
                    modulo.docs_curso.map(doc => {
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
                                      {doc.docs_nome}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  {/* Retorno do video */}
                                  <video width="666" controls>
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
                    })
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
