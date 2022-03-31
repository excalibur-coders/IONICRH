// import { Input, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function SenhaAlterada() {
  return (
    <S.Container>
      <div className='leftWrapper'>
        <img src={IonicLogo} />

        <div className='form'>
          <h1>Senha Alterada com sucesso!</h1>

          <div className='registerWrapper'>
            <span><Link to="/">Voltar ao Login</Link></span>
          </div>
        </div>
      </div>

      <div className="rightWrapper">
        <img src={LogoGray} />
      </div>

    </S.Container>
  );
};

export default SenhaAlterada;
