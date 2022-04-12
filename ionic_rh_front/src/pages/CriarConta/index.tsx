// import { Input, Stack } from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

// console.log(theme.colors.primary);

function CriarConta() {
  return (
    <S.Container>
      <div className='centerWrapper'>
        <div className='leftWrapper'>
          <img src={IonicLogo} />

          <div className='form'>
            <h1>Criar Conta</h1>
            <Input size='sm' width="auto" fontSize={15} labelText="Nome" />
            <Input size='sm' width="auto" fontSize={15} labelText="E-mail" />
            <Input size='sm' width="auto" fontSize={15} labelText="Senha" />
            <Input size='sm' width="auto" fontSize={15} labelText="Repetir a Senha" />
            <div className="formFooter">
              <div className="formFooterLeft">
                <Checkbox isInvalid>Eu li e concordo com os:</Checkbox>
                <span>Termos e condições</span>
              </div>
              <div>
                <Button text="Criar" color={theme.colors.primary} />
              </div>
            </div>

            <div className='registerWrapper'>
              <span>Já tem uma conta?</span>
              <span><Link to="/">Entre aqui</Link></span>

            </div>
          </div>
        </div>

        <div className="rightWrapper">
          <img src={LogoGray} />
        </div>
      </div>


    </S.Container>
  );
};

export default CriarConta;
