// import { Input, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function ResetarSenha() {
  return (
    <S.Container>
      <div className="centerWrapper">
        <div className="leftWrapper">
          <img src={IonicLogo} />

          <div className="form">
            <h1>Resetar Senha</h1>
            <Input
              size="sm"
              width="auto"
              fontSize={15}
              labelText="Nova Senha"
            />
            <Input
              size="sm"
              width="auto"
              fontSize={15}
              labelText="Repetir Senha"
            />
            <div className="formFooter">
              <Button
                text="Resetar a Senha"
                color={theme.colors.primary}
              ></Button>
            </div>

            <div className="registerWrapper">
              <span>
                <Link to="/">Voltar ao Login</Link>
              </span>
            </div>
          </div>
        </div>

        <div className="rightWrapper">
          <img src={LogoGray} />
        </div>
      </div>
    </S.Container>
  );
}

export default ResetarSenha;
