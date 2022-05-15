import { ReactNode, useState } from 'react';

import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';

import { parseCookies } from 'nookies';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';

import * as S from './styles';
import Button from 'components/Button';
import { tmpdir } from 'os';

import { AuthContext } from 'hooks/useAuth';
import { api } from 'services/api';
import { IUser } from 'interfaces/IUser';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

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
  cursoscomp: string;
  school_instituicao: string;
  school_formacao: string;
  school_inicio: string;
  school_termino: string;
  school_status: string;
  school_curso: string;
  idiomas: [
    {
      ingles: boolean;
      espanhol: boolean;
      outros: string;
    },
  ];
  /* contrato: string; */
  dependente_nome: string;
  dependente_nascimento: string;
  dependente_origin: string;
  dependente_nome2: string;
  dependente_nascimento2: string;
  dependente_origin2: string;
  dependente_nome3: string;
  dependente_nascimento3: string;
  dependente_origin3: string;
}

function Cadastro() {
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const onSubmit = useCallback(async (data: CadastroProps) => {
    const idiomasfalados: (string | boolean)[] = [];
    Object.values(data.idiomas[0]).forEach((value, index) => {
      idiomasfalados.push(value);
    });

    await api
      .put<CadastroProps>(
        '/user/auto-cadastro',
        {
          user_nome: data.nomecompleto,
          user_cpf: data.cpf,
          user_rg: data.rg,
          user_nacionalidade: data.nacionalidade,
          user_nascimento: data.nascimento,
          user_naturalidade: data.naturalidade,
          user_genero: data.genero,
          user_raca: data.etnia,
          user_estado_civil: data.estadocivil,
          /* user_tipo_contrato: data.contrato, */
          escolaridades: [
            {
              school_instituicao: data.school_instituicao,
              school_formacao: data.school_formacao,
              school_inicio: data.school_inicio,
              school_termino: data.school_termino,
              school_status: data.school_status,
              school_curso: data.school_curso,
            },
          ],
          enderecos: [
            {
              endereco_pais: data.nacionalidade,
              endereco_bairro: data.bairro,
              endereco_cidade: data.cidade,
              endereco_cep: data.cep,
              endereco_estado: data.estado,
              endereco_numero: data.numero,
              endereco_rua: data.rua,
            },
          ],
          idioma_falados: idiomasfalados,
          telefones: [
            {
              tell_ddd: data.telefone.split(' ')[0].replace(/([()])/g, ''),
              tell_numero: data.telefone.split(' ')[1].replace('-', ''),
            },
          ],
          dependentes: [
            {
              dependente_nome: data.dependente_nome,
              dependente_nascimento: data.dependente_nascimento,
              dependente_origin: data.dependente_origin,
            },
            {
              dependente_nome: data.dependente_nome2,
              dependente_nascimento: data.dependente_nascimento2,
              dependente_origin: data.dependente_origin2,
            },
            {
              dependente_nome: data.dependente_nome3,
              dependente_nascimento: data.dependente_nascimento3,
              dependente_origin: data.dependente_origin3,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${cookies['ionicookie.token']}`,
          },
        },
      )
      .then(({ data }) => {
        console.log(data);
        navigate('/Colab_home');
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const schema = yup
    .object({
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
      email: yup.string(),
      etnia: yup.string().required('Etnia obrigatória!'),
      nascimento: yup.string().required('Data de nascimento obrigatória!'),
      cpf: yup.string().required('CPF obrigatório!'),
      rg: yup.string().required('RG obrigatório!'),
      cep: yup.string().required('CEP obrigatório!'),
      telefone: yup.string().required('Telefone obrigatório!'),
      school_instituicao: yup.string().required('Instituição obrigatória!'),
      school_formacao: yup.string().required('Formação obrigatório!'),
      school_inicio: yup.string().required('Início obrigatório!'),
      school_termino: yup.string().required('Término obrigatório!'),
      school_status: yup.string().required('Status obrigatório!'),
      /* contrato: yup.string().required('Tipo contrato obrigatório!'), */
    })
    .required();

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
      <div className="header">
        <img src={IonicLogo} />
        <h1>Cadastro</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main">
          <div className="mainWrapper">
            <div className="leftWrapper">
              <div className="form">
                <h3>Informações Pessoais</h3>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Nome Completo"
                  type="text"
                  defaultValue={user?.user_nome}
                  error={errors.nomecompleto?.message}
                  {...register('nomecompleto')}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="E-mail"
                  type="text"
                  defaultValue={user?.user_email}
                  error={errors.email?.message}
                  {...register('email')}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nacionalidade"
                    type="text"
                    error={errors.nacionalidade?.message}
                    {...register('nacionalidade')}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Naturalidade"
                    type="text"
                    error={errors.naturalidade?.message}
                    {...register('naturalidade')}
                  />
                </div>

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    error={errors.nascimento?.message}
                    {...register('nascimento')}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Gênero
                    </label>
                    <select
                      className="genero"
                      id="lang"
                      {...register('genero')}
                    >
                      <option>Selecione seu Gênero</option>
                      <option value="masculino">Masculino</option>
                      <option value="feminino">Feminino</option>
                      <option value="outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="CPF"
                    mask="999.999.999-99"
                    type="text"
                    error={errors.cpf?.message}
                    {...register('cpf')}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="RG"
                    mask="99.999.999-9"
                    type="text"
                    error={errors.rg?.message}
                    {...register('rg')}
                  />
                </div>

                <div className="dropdown">
                  <label htmlFor="lang" className="dropdowntext">
                    Estado Civil
                  </label>
                  <select
                    className="estadocivil"
                    id="lang"
                    {...register('estadocivil')}
                  >
                    <option>Selecione seu estado civil</option>
                    <option value="solteiro">Solteiro(a)</option>
                    <option value="casado">Casado(a)</option>
                    <option value="divorciado">Divorciado(a)</option>
                    <option value="viuvo">Viúvo(a)</option>
                    <option value="separado">Separado(a) Judicialmente</option>
                  </select>
                </div>

                <div className="dropdown">
                  <label htmlFor="lang" className="dropdowntext">
                    Etnia
                  </label>
                  <select className="etnia" id="lang" {...register('etnia')}>
                    <option>Selecione seu etnia</option>
                    <option value="branco">Branco</option>
                    <option value="negro">Negro</option>
                    <option value="pardo">Pardo</option>
                    <option value="amarelo">Amarelo</option>
                    <option value="indigena">Indígena</option>
                  </select>
                </div>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Telefone"
                  type="text"
                  error={errors.telefone?.message}
                  mask="(99) 99999-9999"
                  {...register('telefone')}
                />

                <div className="anexoWrapper">
                  <div className="form">
                    <h6>Anexos</h6>
                    <h4>
                      Anexe abaixo os arquivos necessários: RG (Frente e Verso)
                    </h4>
                    <Button
                      text="Anexar arquivos"
                      color={theme.colors.primary}
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="centerWrapper">
              <div className="form">
                <h5>Escolaridade</h5>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Instituição"
                  type="text"
                  error={errors.school_instituicao?.message}
                  {...register('school_instituicao')}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Formação"
                  type="text"
                  error={errors.school_formacao?.message}
                  {...register('school_formacao')}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Início"
                  type="date"
                  error={errors.school_inicio?.message}
                  {...register('school_inicio')}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Termino"
                  type="date"
                  error={errors.school_termino?.message}
                  {...register('school_termino')}
                />

                <div className="dropdown">
                  <label htmlFor="lang" className="dropdowntext">
                    Status
                  </label>
                  <select
                    className="status"
                    id="lang"
                    {...register('school_status')}
                  >
                    <option>Selecione o status</option>
                    <option value="completo">Completo</option>
                    <option value="cursando">Cursando</option>
                    <option value="incompleto">Incompleto</option>
                  </select>
                </div>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Cursos Complementares"
                  {...register('school_curso')}
                />

                {/* <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Tipo de Contratação"
                  type="text"
                  error={errors.contrato?.message}
                  {...register('contrato')}
                /> */}

                <h2>Idiomas</h2>
                <CheckboxGroup colorScheme="blue">
                  <Stack spacing={[1, 5]} direction={['column', 'row']}>
                    <Checkbox
                      value="ingles"
                      {...register('idiomas.0.ingles')}
                      border="#000"
                    >
                      Inglês
                    </Checkbox>
                    <Checkbox
                      value="espanhol"
                      {...register('idiomas.0.espanhol')}
                      border="#000"
                    >
                      Espanhol
                    </Checkbox>
                    <Input
                      size="sm"
                      width="10rem"
                      fontSize={15}
                      labelText="Digite outro idioma:"
                      {...register('idiomas.0.outros')}
                    />
                  </Stack>
                </CheckboxGroup>
              </div>
            </div>

            <div className="rightWrapper">
              <div className="form">
                <h4>Endereço</h4>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Rua"
                  type="text"
                  error={errors.rua?.message}
                  {...register('rua')}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="CEP"
                    mask="99999-999"
                    type="text"
                    error={errors.cep?.message}
                    {...register('cep')}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Bairro"
                    type="text"
                    error={errors.bairro?.message}
                    {...register('bairro')}
                  />
                </div>

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Cidade"
                    type="text"
                    error={errors.cidade?.message}
                    {...register('cidade')}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Estado"
                    type="text"
                    error={errors.estado?.message}
                    {...register('estado')}
                  />
                </div>

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Número"
                    type="text"
                    error={errors.numero?.message}
                    {...register('numero')}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Complemento"
                    type="text"
                    error={errors.complemento?.message}
                    {...register('complemento')}
                  />
                </div>

                <h6>Dependentes</h6>
                <h1>Cadastre abaixo, até 3 dependentes</h1>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Nome"
                  type="text"
                  {...register('dependente_nome')}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento')}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin')}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irmão(ã)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">Mãe</option>
                      <option value="avo">Avô(ó)</option>
                      <option value="primo">Primo(a)</option>
                    </select>
                  </div>
                </div>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Nome"
                  type="text"
                  {...register('dependente_nome2')}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento2')}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin2')}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irmão(ã)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">Mãe</option>
                      <option value="avo">Avô(ó)</option>
                      <option value="primo">Primo(a)</option>
                    </select>
                  </div>
                </div>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Nome"
                  type="text"
                  {...register('dependente_nome3')}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento3')}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin3')}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irmão(ã)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">Mãe</option>
                      <option value="avo">Avô(ó)</option>
                      <option value="primo">Primo(a)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ButtonW">
            <Button
              text="Finalizar Cadastro"
              color={theme.colors.primary}
              type="submit"
            />
          </div>
        </div>
      </form>
    </S.Container>
  );
}

export default Cadastro;
