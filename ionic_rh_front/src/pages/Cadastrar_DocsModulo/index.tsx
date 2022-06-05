import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react, { useCallback, useEffect, useState } from 'react';
import * as S from './styles'
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Select, Link } from '@chakra-ui/react';


interface ICurso {
  curso_id: number;
  curso_nome: string;
  curso_descricao: string;
  curso_criacao: string;
  curso_duracao: number;
  modulosCurso: IModulo[];
}
interface IModulo {
  modulo_id: number;
  modulo_nome: string;
  docs_curso: IDocs[];
}
interface IDocs {
  docs_id: number;
  docs_nome: string;
  docs_url: string;
  docs_type: string;
}

function CadastrarCursoModulo() {

  const cookies = parseCookies();
  const navigate = useNavigate();
  const { id } = useParams();
  const [cursos, setCursos] = useState<ICurso[]>([])

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

  useEffect(() => {
    getAllCursos();
  }, []);




  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <div className='position'>
            {cursos.map(c => {

              return (
                <>
                  <h1>{c.curso_nome}</h1>
                  {c.modulosCurso.map(m => {
                    return (
                      <span key={m.modulo_id}><br />{m.modulo_nome}
                        <Link onClick={() => {
                          navigate(`/editar_modulo/${m.modulo_id}`);
                        }}>Editar</Link>
                      </span>
                    )
                  })}
                </>
              )
            })}
          </div>

        </main>
      </S.Container>
    </>
  );
}

export default CadastrarCursoModulo
