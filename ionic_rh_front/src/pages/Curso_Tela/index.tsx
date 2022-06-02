import { theme } from 'theme';
import * as S from './styles';
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
  docs_curso: IDocs[];
}
interface IDocs {
  docs_id: number;
  docs_nome: string;
  docs_url: string;
  docs_type: string;
}


function Cursos() {
  const cookies = parseCookies();
  const { id } = useParams();
  const [trilha, setCursos] = useState<ITrilha[]>([]);
  const getAllCursos = useCallback(() => {
    api
      .get(`/curso/ver-trilha/${id}`, {
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
            {trilha.map(trilha => {
              return (
                <>
                  <h1>{trilha.trilha_nome}</h1>
                  <div className="list">
                    {trilha.juntos.map(curso => {
                      return (
                        <>
                          <Accordion allowToggle>
                            <h2>

                              {curso.curso_nome}

                            </h2>
                            <div className="video">
                              {curso.docs_curso.map(doc => {
                                if (doc.docs_type == ".mp4") {
                                  return (
                                    <>
                                      <AccordionItem>
                                        <AccordionButton>
                                          <Box flex='1' textAlign='left'>
                                            {doc.docs_nome}
                                          </Box>
                                        </AccordionButton>
                                        <AccordionPanel pb={1}>
                                          <video width="666" controls>
                                            <source src={doc.docs_url} type="video/mp4" />
                                          </video>
                                        </AccordionPanel>
                                      </AccordionItem>
                                    </>
                                  )
                                } else if (doc.docs_type == ".jpeg" || doc.docs_type == ".png") {
                                  return (
                                    <>
                                      <AccordionItem>
                                        <AccordionButton>
                                          <Box flex='1' textAlign='left'>
                                            {doc.docs_nome}
                                          </Box>
                                        </AccordionButton>
                                        <AccordionPanel pb={1}>
                                          <img src={doc.docs_url} alt="" width={500} />
                                        </AccordionPanel>
                                      </AccordionItem>
                                    </>
                                  )
                                }
                              })}
                            </div>
                          </Accordion>
                        </>
                      )

                    })}
                  </div>
                </>
              )
            })}
          </div>
        </main>
      </S.Container>
    </>
  )
}

export default Cursos;
