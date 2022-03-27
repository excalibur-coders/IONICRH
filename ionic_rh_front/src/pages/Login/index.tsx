import { ReactNode } from 'react';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function Login() {
  return (
    <S.Container>
      <div className='leftWrapper'>
        <img src={IonicLogo} />

        <div className='form'>
          <h1>Login</h1>
          <Input size='sm' width="auto" fontSize={15} labelText="E-mail" />
          <Input size='sm' width="auto" fontSize={15} labelText="Senha" />
          <div className="formFooter">
            <a href="">Esqueceu sua senha?</a>
            <Button text="Logar" color={theme.colors.primary} />
          </div>

          <div className='registerWrapper'>
            <span>Não tem uma conta?</span>
            <span>Cadastrar-se</span>
          </div>
        </div>
      </div>

      <div className="rightWrapper">
        <img src={LogoGray} />
      </div>

    </S.Container>
  );
};

export default Login;
