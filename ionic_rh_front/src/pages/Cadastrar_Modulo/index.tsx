import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react, { useCallback, useEffect, useState } from 'react';
import * as S from './styles'
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { Select } from '@chakra-ui/react';

interface IModuloCadastro {
  nomemodulo: string;
  cursoid: number;
}
interface ICurso {
  curso_id: number;
  curso_nome: string;
}
function CadastrarCursoModulo() {

  const cookies = parseCookies();
  const navigate = useNavigate();
  const [cursos, setCursos] = useState<ICurso[]>([])

  const adicionarCurso = useCallback(async (data: IModuloCadastro) => {
    await api
      .post(`/curso/criar-modulo`, {
        cursoCursoId: data.cursoid,
        modulo_nome: data.nomemodulo,
      }, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        /*  */
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies]);

  const getCursos = useCallback(() => {
    api
      .get('/curso/ver-cursos', {
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
  }, [cookies]);

  const schema = yup.object({
    nomemodulo: yup.string().required('Necessário preencher o nome do curso'),
    cursoid: yup.string().required('Necessário preencher a descrição do curso'),
  });

  useEffect(() => {
    getCursos();
  }, []);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IModuloCadastro>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <h1>Cadastre um novo módulo</h1>
          <form onSubmit={handleSubmit(adicionarCurso)}>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Nome do módulo:"
                type="string"
                {...register('nomemodulo')}
              />
            </div>
            <div className="field">
              <Select
                placeholder={
                  'Selecione o curso'
                }
                {...register('cursoid')}>
                {cursos && cursos.map((curso, index) => {
                  return (
                    <option key={curso.curso_id} value={curso.curso_id} >
                      {curso.curso_nome}
                    </option>
                  )
                })}
              </Select>
            </div>
            {/*  */}
            <Button
              text="Cadastrar"
              color={theme.colors.primary}
              type="submit"
            />
          </form>
          <Button
              text="Voltar"
              color="red"
              onClick={() => {
                navigate('/cadastro_curso_adm');
              }}
            />
        </main>
      </S.Container>
    </>
  );
}

export default CadastrarCursoModulo
