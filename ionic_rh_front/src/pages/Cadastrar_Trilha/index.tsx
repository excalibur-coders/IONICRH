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
  trilhanome: string;
}

function Cadastrar_Trilha() {

  const cookies = parseCookies();
  const navigate = useNavigate();

  const adicionarCurso = useCallback(async (data: ICursuCadastrado) => {
    await api
      .post(`/curso/criar-trilha`, {
        trilha_nome: data.trilhanome,
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
    trilhanome: yup.string().required('Necessário preencher o nome do curso'),
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
          <h1>Cadastre nova Trilha</h1>
          <form onSubmit={handleSubmit(adicionarCurso)}>
            <div className="field">
              <Input
                size="sm"
                width="22rem"
                fontSize={20}
                fontWeight="bold"
                labelText="Nome da Trilha:"
                type="string"
                {...register('trilhanome')}
              />
            </div>
            <Button
              text="Salvar"
              color={theme.colors.primary}
              type="submit"
            />
          </form>
          <div className="buttons">
            <Button
              text="Voltar"
              color="red"
              onClick={() => {
                navigate('/cadastro_curso_adm');
              }}
            />
              <Button
              text="Avançar"
              color={theme.colors.primary}
              onClick={() => {
                navigate('/Cadastrar_curso');
              }}
            />
          </div>
            <br />
            <p>Somente clique em `avançar` após salvar sua nova trilha</p>
        </main>
      </S.Container>
    </>
  );
}

export default Cadastrar_Trilha;
