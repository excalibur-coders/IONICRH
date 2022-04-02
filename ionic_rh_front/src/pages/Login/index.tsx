import { useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';


import { api } from 'api/api';
import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as S from './styles';
import Button from 'components/Button';

interface InputsProps {
  email: string;
  password: string;
}


function Login() {
  const onSubmit = useCallback((data: InputsProps) => {
    console.log('data', data);
  }, []);

  const schema = yup.object({
    email: yup.string().required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória!'),
  }).required();


  const {
    control,
    register,
    unregister,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsProps>();
  // useForm<InputsProps>({
  //   resolver: yupResolver(schema),
  // });

  return (
    <S.Container>
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
          </div>

          <div className='registerWrapper'>
            <span>Não tem uma conta?</span>
            <span>Cadastrar-se</span>
          </div>
        </form>
      </div>

      <div className="rightWrapper">
        <img src={LogoGray} />
      </div>

    </S.Container>
  );
};

export default Login;
