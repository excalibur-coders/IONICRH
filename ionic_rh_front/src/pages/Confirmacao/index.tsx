import { ReactNode } from 'react';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function Confirmacao() {
  return (
    <S.Container>
      <div className='leftWrapper'>
        <img src={IonicLogo} />
        <div className='text'>
          <h1>Cadastro realizado com sucesso !</h1>
          <h2>Voltar para pagina de Login</h2><br></br>
          <Button text="Voltar" color={theme.colors.primary}/>
        </div>
        

      </div>

      <div className="rightWrapper">
        <img src={LogoGray} />
      </div>

    </S.Container>

    );
};
export default Confirmacao;