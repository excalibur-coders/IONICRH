// import { Input, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import logoresponsive from 'assets/svg/logoresponsive.png';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function SenhaAlterada() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <div className="leftWrapper">
        <img src={IonicLogo} />
        <div className="text">
          <h1>Senha alterada com Sucesso !</h1>
          <span>
            <button onClick={() => navigate(-1)}>Voltar</button>
          </span>
        </div>
      </div>
      <div className="rightWrapper">
        <img src={LogoGray} />
        <img className="no" src={logoresponsive} />
      </div>
    </S.Container>
  );
}

export default SenhaAlterada;
