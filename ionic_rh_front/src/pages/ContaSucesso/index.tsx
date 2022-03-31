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

function ContaSucesso() {
  return (
    <S.Container>
      <div className='leftWrapper'>
        <img src={IonicLogo} />

        <div className='form'>
          <h1>Conta Criada com sucesso!</h1>
          <h2>Voltar ao Login</h2>

          <div className='registerWrapper'>
          <Link to="/"><Button text="Voltar" color={theme.colors.primary} /></Link>
          </div>
        </div>
      </div>

      <div className="rightWrapper">
        <img src={LogoGray} />
      </div>

    </S.Container>
  );
};

export default ContaSucesso;
