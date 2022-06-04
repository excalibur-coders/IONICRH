import Consultor_nav from 'components/Consultor_nav';
import Input from '../../components/Input'
import Button from 'components/Button';
import { theme } from 'theme';
import * as yup from 'yup';
import react, { useCallback } from 'react';
import * as S from './styles'
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

interface ICursuCadastrado {
  nomecurso: string;
  descricaocurso: string;
  duracaocurso: number;
}

function Cadastrar_Curso() {

  const cookies = parseCookies();
  const navigate = useNavigate();

  const adicionarCurso = useCallback(async (data: ICursuCadastrado) => {
    await api
      .post(`/curso/criar-curso`, {
        curso_nome: data.nomecurso,
        curso_descricao: data.descricaocurso,
        curso_duracao: data.duracaocurso
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
    nomecurso: yup.string().required('Necessário preencher o nome do curso'),
    descricaocurso: yup.string().required('Necessário preencher a descrição do curso'),
    duracaocurso: yup.number().required('Necessário preencher a duração do curso')
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICursuCadastrado>({
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
          <h1>Cadastrar novo curso</h1>
          <form onSubmit={handleSubmit(adicionarCurso)}>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Nome do curso:"
                type="string"
                {...register('nomecurso')}
              />
            </div>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Descrição do curso:"
                type="string"
                {...register('descricaocurso')}
              />
            </div>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Duração do curso:"
                type="number"
                {...register('duracaocurso')}
              />
            </div>
            {/*             <h1> Upload dos arquivos </h1>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Modulo 1:"
                type="file"
                multiple
              />
            </div>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Modulo 2:"
                type="file"
                multiple
              />
            </div>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Modulo 3:"
                type="file"
                multiple
              />
            </div> */}
            <Button
              text="Cadastrar*"
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
            <p>* Após cadastro do curso, volte ao menu principal, para adicinoar módulos a este, se assim desejar.</p>
        </main>
      </S.Container>
    </>
  );
}

export default Cadastrar_Curso;
