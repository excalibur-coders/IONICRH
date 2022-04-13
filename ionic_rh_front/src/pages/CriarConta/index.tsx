// import { Input, Stack } from '@chakra-ui/react';
import { useCallback, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

import { parseCookies } from "nookies";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';

import * as S from './styles';
import Button from 'components/Button';

import { AuthContext } from "hooks/useAuth";
import { api } from 'services/api';

// console.log(theme.colors.primary);

interface InputsProps {
  nome: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

function CriarConta() {
  const [errorMessage, setErrorMessage]=useState('')

  const onSubmit = useCallback(async (data: InputsProps) => {
    console.log(data)
    if(data.password===data.passwordConfirmation){
      await api.post<InputsProps>('/user/cadastro', {
      user_nome: data.nome,
      user_email: data.email,
      password: data.password,
    }).then(({data}) => {console.log(data);}).catch(error => {
      console.log(error)
    });}
    else {
      setErrorMessage('Senhas Divergentes')
    }

  }, []);

  const schema = yup.object({
    nome: yup.string().required ('Nome Obrigatório !!'),
    email: yup.string().required('E-mail obrigatório'),
    password: yup.string().required('Senha obrigatória!'),
    passwordConfirmation: yup.string().required('Confirmação de Senha obrigatória !!!'),
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

          <div className='form'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <h1>Criar Conta</h1>
              <Input size='sm' width="auto" fontSize={15} labelText="Nome" type='text' error={errors.nome?.message} {...register('nome')}/>
              <Input size='sm' width="auto" fontSize={15} labelText="E-mail" type='text' error={errors.email?.message} {...register('email')} />
              <Input size='sm' width="auto" fontSize={15} labelText="Senha" type='password' error={errors.password?.message} {...register('password')} />
              <Input size='sm' width="auto" fontSize={15} labelText="Repetir a Senha" type='password' error={errors.passwordConfirmation?.message} {...register('passwordConfirmation')} />
              <div className="formFooter">
              <div className="formFooterLeft">
                <Checkbox isInvalid>Eu li e concordo com os:</Checkbox>
                <span>Termos e condições</span>
              </div>
              <div>
                <Button text="Criar" color={theme.colors.primary} type='submit' />
              </div>
            </div>
            </form>
          
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
