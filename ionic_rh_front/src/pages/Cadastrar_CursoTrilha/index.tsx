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
  trilhaid: number;
  cursoid: number;
}
interface ICurso {
  curso_id: number;
  curso_nome: string;
}
interface ITrilha {
  trilha_id: number;
  trilha_nome: string;
}
function CadastrarCursoTrilha() {

  const cookies = parseCookies();
  const navigate = useNavigate();
  const [cursos, setCursos] = useState<ICurso[]>([])
  const [trilha, setTrilha] = useState<ITrilha[]>([])


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
  const getTrilha = useCallback(() => {
    api
      .get('/curso/ver-todas-trilhas', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setTrilha(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
  }, [cookies]);

  useEffect(() => {
    getCursos();
    getTrilha();
  }, []);


  const adicionarCurso = useCallback(async (data: IModuloCadastro) => {
    await api
      .post(`/curso/vincular-curso`, {
        cursoCursoId: data.cursoid,
        trilhaTrilhaId: data.trilhaid,
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



  const schema = yup.object({
    trilhaid: yup.string().required('Necessário preencher o nome do curso'),
    cursoid: yup.string().required('Necessário preencher a descrição do curso'),
  });




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
          <h1>Adicione um curso a uma trilha existente:</h1>
          <form onSubmit={handleSubmit(adicionarCurso)}>
            <Select
              placeholder={
                'Selecione a trilha'
              }
              {...register('trilhaid')}>
              {trilha && trilha.map((tri) => {
                return (
                  <option key={tri.trilha_id} value={tri.trilha_id} >
                    {tri.trilha_nome}
                  </option>
                )
              })}
            </Select>
            <div className="field">
              <Select
                placeholder={
                  'Selecione o curso'
                }
                {...register('cursoid')}>
                {cursos && cursos.map((curso) => {
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
            <br />
            <h4>Se preferir, crie uma nova trilha:</h4>
            <Button
              text="Criar trilha"
              color={theme.colors.primary}
              onClick={() => {
                navigate('/criar_trilha');
              }}
            />
        </main>
      </S.Container>
    </>
  );
}

export default CadastrarCursoTrilha;
