import { theme } from 'theme';
import * as S from './styles';
import RespBar from 'components/RespBar';
import { AspectRatio, Box, Button } from '@chakra-ui/react'
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
import Footer from 'components/Footer';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdMenuBook } from 'react-icons/md';

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


function Cursos() {
  const cookies = parseCookies();
  const { id } = useParams();
  const navigate = useNavigate();

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
          <h1>Cursos</h1>
          <div className='buttons_onboard'>
            {trilha.map(trilha => {
              return (
                trilha.juntos.map(curso => {
                  return (
                    <>
                      <div>
                      <Link key={curso.curso_id} onClick={() => {
                        navigate(`/curso_modulos/${curso.curso_id}`);
                      }}>
                      <Button
                        className="button"
                        as={MdMenuBook}
                        color={theme.colors.font}
                      ></Button>
                      <small key={curso.curso_nome}>{curso.curso_nome}</small>
                      </Link>
                      </div>
                    </>
                  )
                })
              )
            }
            )}
          </div>
        </main>        
        <footer>
          <Footer />
        </footer>
      </S.Container>      
    </>
  )
}

export default Cursos;
