import { ReactNode } from 'react';

import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'

import { parseCookies } from "nookies";

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as S from './styles';
import Button from 'components/Button';
import { tmpdir } from 'os';

import { AuthContext } from "hooks/useAuth";
import { api } from 'services/api';
import internal from 'stream';

interface CadastroProps {
  nomecompleto: string;
  nacionalidade: string;
  naturalidade: string;
  nascimento: string;
  genero: string;
  cpf: string;
  rg: string;
  estadocivil: string;
  rua: string;
  etnia: string;
  cep: string;
  bairro: string;
  cidade: string;
  estado: string;
  numero: string;
  complemento: string;
  email: string;
  telefone: string;
  formacao: string;
  cursoscomp: string;
  school_instituicao: string;
  school_formacao: string;
  school_inicio: string;
  school_termino: string;
  school_status: string;
  idiomas: string;
}

// console.log(theme.colors.primary);

function Cadastro() {

  const onSubmit = useCallback(async (data: CadastroProps) => {
 console.log(data);
    /*  await api.put<CadastroProps>("/user/update",{
       user_email: data.email,
       user_nome: data.nomecompleto,
       user_cpf: data.cpf,
       escolaridade:[{
         school_instituicao: data.school_instituicao,
         school_formacao: data.school_formacao,
         school_inicio: data.school_inicio,
         school_termino: data.school_termino,
         school_status: data.school_status
       }],
       endereco:[{
         endereco_pais: data.nacionalidade,
         endereco_bairro: data.bairro,
         endereco_cidade: data.cidade,
         endereco_cep: data.cep,
         endereco_estado: data.estado,
         endereco_numero: data.numero
       }],
       idioma_falados: data.idiomas,
       telefone:[{
         tell_ddd: data.telefone,
         tell_numero: data.telefone
       }]


     }, {
     headers: {
       Authorization: `Bearer ${cookies['ionicookie.token']}`,
     },
   }
   ) */
  }, []);

  const schema = yup.object({
    nomecompleto: yup.string().required('Nome completo obrigatório!'),
    nacionalidade: yup.string().required('Nacionalidade obrigatória!'),
    naturalidade: yup.string().required('Naturalidade obrigatória!'),
    estadocivil: yup.string().required('Estado civil obrigatório!'),
    rua: yup.string().required('Rua obrigatória!'),
    bairro: yup.string().required('Bairro obrigatório!'),
    cidade: yup.string().required('Cidade obrigatória!'),
    estado: yup.string().required('Estado obrigatório!'),
    numero: yup.string().required('Número obrigatório!'),
    complemento: yup.string().required('Complemento obrigatório!'),
    email: yup.string().required('E-mail obrigatório!'),
    formacao: yup.string().required('Formação obrigatória!'),
    etnia: yup.string().required('Etnia obrigatória!'),
    nascimento: yup.string().required('Data de nascimento obrigatória!'),
    cpf: yup.string().required('CPF obrigatório!'),
    rg: yup.string().required('RG obrigatório!'),
    cep: yup.string().required('CEP obrigatório!'),
    telefone: yup.string().required('Telefone obrigatório!'),
  }).required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CadastroProps>({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  return (
    <S.Container>

      <div className='header'>
        <img src={IonicLogo} />
        <h1>Cadastro</h1>
      </div>
      <div className='main'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mainWrapper">

            <div className='leftWrapper'>
              <div className='form'>
                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Nome Completo"
                  type="text"
                  error={errors.nomecompleto?.message}
                  {...register('nomecompleto')}
                />

                <div className='form-row'>
                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Nacionalidade"
                    type="text"
                    error={errors.nacionalidade?.message}
                    {...register('nacionalidade')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Naturalidade"
                    type="text"
                    error={errors.naturalidade?.message}
                    {...register('naturalidade')}
                  />

                </div>

                <div className='form-row'>

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Nascimento"
                    mask="99/99/9999"
                    type="text"
                    error={errors.nascimento?.message}
                    {...register('nascimento')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Gênero"
                  />

                </div>

                <div className='form-row'>
                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="CPF"
                    type="text"
                    error={errors.cpf?.message}
                    {...register('cpf')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="RG"
                    type="text"
                    error={errors.rg?.message}
                    {...register('rg')}
                  />

                </div>

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Estado Civil"
                  type="text"
                  error={errors.estadocivil?.message}
                  {...register('estadocivil')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Rua"
                  type="text"
                  error={errors.rua?.message}
                  {...register('rua')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Raça"
                  type="text"
                  error={errors.etnia?.message}
                  {...register('etnia')}
                />

                <div className='form-row'>
                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="CEP"
                    type="text"
                    error={errors.cep?.message}
                    {...register('cep')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Bairro"
                    type="text"
                    error={errors.bairro?.message}
                    {...register('bairro')}
                  />

                </div>
              </div>
            </div>

            <div className='rightWrapper'>
              <div className='form'>
                <div className='form-row'>
                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Cidade"
                    type="text"
                    error={errors.cidade?.message}
                    {...register('cidade')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Estado"
                    type="text"
                    error={errors.estado?.message}
                    {...register('estado')}
                  />

                </div>

                <div className='form-row'>
                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Número"
                    type="text"
                    error={errors.numero?.message}
                    {...register('numero')}
                  />

                  <Input
                    size='sm'
                    width="14rem"
                    fontSize={20}
                    labelText="Complemento"
                    type="text"
                    error={errors.complemento?.message}
                    {...register('complemento')}
                  />

                </div>

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="E-mail"
                  type="text"
                  error={errors.email?.message}
                  {...register('email')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Telefone"
                  type="text"
                  error={errors.telefone?.message}
                  mask="(99) 99999-9999"
                  {...register('telefone')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Instituição"
                  type="text"
                  error={errors.school_instituicao?.message}
                  {...register('school_instituicao')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Formação"
                  type="text"
                  error={errors.school_formacao?.message}
                  {...register('school_formacao')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Início"
                  type="text"
                  error={errors.school_inicio?.message}
                  {...register('school_inicio')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Termino"
                  type="text"
                  error={errors.school_termino?.message}
                  {...register('school_termino')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Status"
                  type="text"
                  error={errors.school_status?.message}
                  {...register('school_status')}
                />

                <Input
                  size='sm'
                  width="auto"
                  fontSize={20}
                  labelText="Cursos Complementares"
                />

                <h2>Idiomas</h2>
                <CheckboxGroup colorScheme='blue'>
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox value='ingles'>Inglês</Checkbox>
                    <Checkbox value='espanhol'>Espanhol</Checkbox>
                    <Checkbox value='outros'>Outros:</Checkbox>
                    <Input size='sm' width="auto" fontSize={15} labelText="" />
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>
          </div>
          <div className='ButtonW'>
            <Button
              text='Finalizar Cadastro'
              color={theme.colors.primary}
              type="submit"
            />
          </div>
        </form>
      </div>



    </S.Container >
  );
};

export default Cadastro;