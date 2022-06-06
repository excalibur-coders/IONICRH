// import { Input, Stack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';

import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import logoresponsive from 'assets/svg/logoresponsive.png';
import { theme } from 'theme';

import * as S from './styles';

// console.log(theme.colors.primary);

function ContaSucesso() {
  const navigate = useNavigate();

  return (
    <S.Container>
      <div className="leftWrapper">
        <img src={IonicLogo} />
        <div className="text">
          <h1>Conta criada com Sucesso !</h1>
          <span>
            <button onClick={() => navigate(-2)}>Voltar</button>
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

export default ContaSucesso;
