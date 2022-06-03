import { theme } from 'theme';
import * as S from './styles';
import RespBar from 'components/RespBar';
import { AspectRatio, Box } from '@chakra-ui/react'
import { useNavigate, useParams } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
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


function Cursos() {
  const cookies = parseCookies();
  const { user } = useContext(AuthContext);
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
  }, []);
  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <div className='position'>
            {trilha.map(trilha => {
              return (
                trilha.juntos.map(curso => {
                  {
                    if (user?.user_role == "Administrador") {
                      return (
                        <>
                          <Link key={curso.curso_id} onClick={() => {
                            navigate(`/curso_modulos/${curso.curso_id}`);
                          }}>{curso.curso_nome}
                          </Link>
                          <Link onClick={() => {
                            navigate(`/modulo_docs/${curso.curso_id}`);
                          }} >Editar</Link>
                        </>
                      )
                    }
                  }
                  return (
                    <>
                      <Link key={curso.curso_id} onClick={() => {
                        navigate(`/curso_modulos/${curso.curso_id}`);
                      }}>{curso.curso_nome}
                      </Link>
                    </>
                  )
                })
              )
            }
            )}
          </div>
        </main>
      </S.Container>
    </>
  )
}

export default Cursos;
