import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import { parseCookies } from "nookies";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as S from './styles';
import Button from 'components/Button';

import { AuthContext } from "hooks/useAuth";
import { api } from 'services/api';

interface InputsProps {
  email: string;
  password: string;
}

function Login() {
  const cookies = parseCookies();

  const { signIn } = useContext(AuthContext);

  const authRoute = () => {
    api.get('/departamentos', {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      }
    }).then(({data}) => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
  }

  const onSubmit = useCallback(async (data: InputsProps) => {
    await signIn(data);
  }, []);

  const schema = yup.object({
    email: yup.string().required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória!'),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <S.Container>
      <div className='centerWrapper'>
        <div className='leftWrapper'>
          <img src={IonicLogo} />

          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login</h1>

            <Input
              size='sm'
              width="auto"
              fontSize={15}
              labelText="E-mail"
              type="text"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              size='sm'
              width="auto"
              fontSize={15}
              labelText="Senha"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />

            <div className="formFooter">
              <a href="">Esqueceu sua senha?</a>
              <Button
                text="Logar"
                color={theme.colors.primary}
                type="submit"
              />
              <Button
                text="rota autenticação"
                color={theme.colors.primary}
                onClick={() => authRoute()}
              />
            </div>

            <div className='registerWrapper'>
              <span>Não tem uma conta?</span>
              <span><Link to="/cadastro">Cadastrar-se</Link></span>
            </div>
          </form>
        </div>

        <div className='rightWrapper'>
          <img src={LogoGray} />
        </div>
      </div>

    </S.Container>
  );
};

export default Login;
