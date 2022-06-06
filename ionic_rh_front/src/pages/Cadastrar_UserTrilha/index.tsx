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
  userid: number;
}
interface ITrilha {
  trilha_id: number;
  trilha_nome: string;
}
interface IUser {
  user_id: number;
  user_nome: string;
  user_role: string;

}
function CadastrarUserTrilha() {

  const cookies = parseCookies();
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser[]>([])
  const [trilha, setTrilha] = useState<ITrilha[]>([])


  const getUser = useCallback(() => {
    api
      .get('/user/listagen-user', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setUser(data);
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
    getUser();
    getTrilha();
  }, []);


  const adicionarTrilhaUser = useCallback(async (data: IModuloCadastro) => {
    await api
      .post(`/curso/vincular-user`, {
        userUserId: data.userid,
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
    userid: yup.string().required('Necessário preencher o nome do curso'),
    trilhaid: yup.string().required('Necessário preencher a descrição do curso'),
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
          <h1>Colaborador Trilha</h1>
          <form onSubmit={handleSubmit(adicionarTrilhaUser)}>
            <Select
              placeholder={
                'Selecione o usuario'
              }
              {...register('userid')}>
              {user && user.filter(u => !(u.user_role == "Administrador")).map(user => {
                return (
                  <option key={user.user_id} value={user.user_id} >
                    [{user.user_role}] - {user.user_nome}
                  </option>
                )
              })}
            </Select>
            <div className="field">
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
            </div>
            {/*  */}
            <Button
              text="Cadastrar"
              color={theme.colors.primary}
              type="submit"
            />
          </form>
        </main>
      </S.Container>
    </>
  );
}

export default CadastrarUserTrilha;
