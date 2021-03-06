import { ChangeEvent, useState } from 'react';

import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { theme } from 'theme';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { Radio, RadioGroup } from '@chakra-ui/react'

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
import React from 'react';

interface CadastroProps {
  contrato: any;
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
  //
  empresa_nome: string;
  empresa_cnpj: string;
  empresa_natureza: string;
  empresa_fundacao: string;
  empresa_etica: string;
}

function Cadastro() {
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [photo, setPhoto] = useState<File>();
  const [rgOrCpf, setRgOrCpf] = useState<File>();
  const [residency, setResidency] = useState<File>();
  const [avatar, setAvatar] = useState<File>();

  const handleSavePhoto = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setPhoto(e.target.files[0]);
  }, []);

  const handleSaveRgOrCpf = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setRgOrCpf(e.target.files[0]);
  }, []);

  const handleSaveResidency = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) setResidency(e.target.files[0]);
    },
    [],
  );
  const handleAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setAvatar(e.target.files[0]);
  }, []);

  const handleUploadAvatar = useCallback(async () => {
    const formData = new FormData();

    formData.append('avatar', avatar as string | Blob);

    console.log(formData.getAll('avatar'));

    await api
      .post('/user/adicionarAvatar', formData, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ status }) => {
        console.log('status: ', status);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, [avatar, cookies]);

  const handleUploadFile = useCallback(async () => {
    const formData = new FormData();

    formData.append('file', photo as string | Blob);
    formData.append('file', rgOrCpf as string | Blob);
    formData.append('file', residency as string | Blob);

    console.log(formData.getAll('file'));

    await api
      .post('/user/teste', formData, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ status }) => {
        console.log('status: ', status);
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }, [cookies, photo, residency, rgOrCpf]);

  const autoRegister = useCallback(
    async (data: CadastroProps, idiomasfalados: (string | boolean)[]) => {
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
                endereco_compl: data.complemento,
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
    },
    [cookies],
  );
  const registerPj = useCallback(
    async (data: CadastroProps) => {
      await api
        .put<CadastroProps>(
          '/user/adicionar-empresa-pj',
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
            pJuridica: [
              {
                pj_nome: data.empresa_nome,
                pj_cnjp: data.empresa_cnpj,
                pj_natureza_juridica: data.empresa_natureza,
                pj_fundacao: data.empresa_fundacao,
                pj_conduta_etica: data.empresa_etica,
              }
            ],
            enderecos: [
              {
                endereco_pais: data.nacionalidade,
                endereco_bairro: data.bairro,
                endereco_cidade: data.cidade,
                endereco_compl: data.complemento,
                endereco_cep: data.cep,
                endereco_estado: data.estado,
                endereco_numero: data.numero,
                endereco_rua: data.rua,
              },
            ],
            telefones: [
              {
                tell_ddd: data.telefone.split(' ')[0].replace(/([()])/g, ''),
                tell_numero: data.telefone.split(' ')[1].replace('-', ''),
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
    },
    [cookies],
  );
  const [value, setValue] = useState('1')

  const [radioValue, setRadioValue] = useState();

  const onSubmit = useCallback(
    async (data: CadastroProps) => {
      const idiomasfalados: (string | boolean)[] = [];
      Object.values(data.idiomas[0]).forEach((value, index) => {
        idiomasfalados.push(value);
      });

      if (value == 'clt') {
        autoRegister(data, idiomasfalados);
      } else if (value == 'pj') {
        registerPj(data)
      }
      handleUploadFile();
      handleUploadAvatar();


    },
    [value, handleUploadFile, handleUploadAvatar, autoRegister, registerPj],
  );

  const schema = yup
    .object({
      nomecompleto: yup.string().required('Nome completo obrigat??rio!'),
      nacionalidade: yup.string().required('Nacionalidade obrigat??ria!'),
      naturalidade: yup.string().required('Naturalidade obrigat??ria!'),
      estadocivil: yup.string().required('Estado civil obrigat??rio!'),
      rua: yup.string().required('Rua obrigat??ria!'),
      bairro: yup.string().required('Bairro obrigat??rio!'),
      cidade: yup.string().required('Cidade obrigat??ria!'),
      estado: yup.string().required('Estado obrigat??rio!'),
      numero: yup.string().required('N??mero obrigat??rio!'),
      complemento: yup.string().required('Complemento obrigat??rio!'),
      email: yup.string(),
      etnia: yup.string().required('Etnia obrigat??ria!'),
      nascimento: yup.string().required('Data de nascimento obrigat??ria!'),
      cpf: yup.string().required('CPF obrigat??rio!'),
      rg: yup.string().required('RG obrigat??rio!'),
      cep: yup.string().required('CEP obrigat??rio!'),
      telefone: yup.string().required('Telefone obrigat??rio!'),
      school_instituicao: yup.string().required('Institui????o obrigat??ria!'),
      school_formacao: yup.string().required('Forma????o obrigat??rio!'),
      school_inicio: yup.string().required('In??cio obrigat??rio!'),
      school_termino: yup.string().required('T??rmino obrigat??rio!'),
      school_status: yup.string().required('Status obrigat??rio!'),
      /* contrato: yup.string().required('Tipo contrato obrigat??rio!'), */
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
        <Button
              text="Voltar"
              color='#ff0000'
              onClick={() => navigate(-1)}
            />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="main">
          <div className="mainWrapper">
            <div className="leftWrapper">
              <div className="form">
                <h3>Informa????es Pessoais</h3>

                <div className='radio'>
                  <h1>Primeiramente, selecione o seu tipo contratual</h1>
                  <RadioGroup onChange={setValue} value={value}>
                    <Stack direction='row'>
                      <Radio value='pj' border="#000"><b>Pessoa Jur??dica</b></Radio>
                      <Radio value='clt' border="#000"><b>Pessoa F??sica</b></Radio>
                    </Stack>
                  </RadioGroup>
                </div>

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
                      G??nero
                    </label>
                    <select
                      className="genero"
                      id="lang"
                      {...register('genero')}
                    >
                      <option>Selecione seu G??nero</option>
                      <option value="homem(cis)">
                        Homem / Homem cisg??nero
                      </option>
                      <option value="mulher(cis)">
                        Mulher / Mulher cisg??nero
                      </option>
                      <option value="homem(trans)">Homem transg??nero</option>
                      <option value="mulher(trans)">Mulher trang??nero</option>
                      <option value="travesti">Travesti</option>
                      <option value="nao-binario">N??o bin??rio</option>
                      <option value="agenero">Ag??nero</option>
                      <option value="genero-fluido">Gender-fluid</option>
                      <option value="outro">Outro</option>
                      <option value="prefiro-nao-responder">
                        Prefiro n??o responder
                      </option>
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
                    <option value="viuvo">Vi??vo(a)</option>
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
                    <option value="indigena">Ind??gena</option>
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

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Historico Escolar"
                  type="file"
                  onChange={handleSavePhoto}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="RG/CPF"
                  type="file"
                  onChange={handleSaveRgOrCpf}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Comprovante Residencial"
                  type="file"
                  onChange={handleSaveResidency}
                />
                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Foto 3x4"
                  type="file"
                  onChange={handleAvatar}
                />
                {/* <div className="anexoWrapper">
                  <div className="form">
                    <h6>Anexos</h6>
                    <h4>
                      Anexe abaixo os arquivos necess??rios: RG (Frente e Verso)
                    </h4>
                    <Button
                      text="Anexar arquivos"
                      color={theme.colors.primary}
                      type="submit"
                    />
                  </div>
                </div> */}
              </div>
            </div>

            <div className="centerWrapper">
              <div className="form">
                <h5>Escolaridade</h5>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Institui????o"
                  type="text"
                  error={errors.school_instituicao?.message}
                  {...register('school_instituicao')}
                  disabled={value === 'pj' ? true : false}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Forma????o"
                  type="text"
                  error={errors.school_formacao?.message}
                  {...register('school_formacao')}
                  disabled={value === 'pj' ? true : false}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="In??cio"
                    type="date"
                    error={errors.school_inicio?.message}
                    {...register('school_inicio')}
                    disabled={value === 'pj' ? true : false}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Termino"
                    type="date"
                    error={errors.school_termino?.message}
                    {...register('school_termino')}
                    disabled={value === 'pj' ? true : false}
                  />
                </div>
                <div className="dropdown">
                  <label htmlFor="lang" className="dropdowntext">
                    Status
                  </label>
                  <select
                    className="status"
                    id="lang"
                    {...register('school_status')}
                    disabled={value === 'pj' ? true : false}
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
                  disabled={value === 'pj' ? true : false}
                />

                {/* <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Tipo de Contrata????o"
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
                      disabled={value === 'pj' ? true : false}
                    >
                      Ingl??s
                    </Checkbox>
                    <Checkbox
                      value="espanhol"
                      {...register('idiomas.0.espanhol')}
                      border="#000"
                      disabled={value === 'pj' ? true : false}
                    >
                      Espanhol
                    </Checkbox>
                    <Input
                      size="sm"
                      width="10rem"
                      fontSize={15}
                      labelText="Digite outro idioma:"
                      {...register('idiomas.0.outros')}
                      disabled={value === 'pj' ? true : false}
                    />
                  </Stack>
                </CheckboxGroup>

                <h6>Dados Contratuais</h6>

                <div className='form-row'>
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Empresa"
                    {...register('empresa_nome')}
                    disabled={value === 'clt' ? true : false}
                  />

                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="CNPJ"
                    mask='99.999.999/9999-99'
                    {...register('empresa_cnpj')}
                    disabled={value === 'clt' ? true : false}
                  />
                </div>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Natureza Jur??dica"
                  {...register('empresa_natureza')}
                  disabled={value === 'clt' ? true : false}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Funda????o"
                  {...register('empresa_fundacao')}
                  disabled={value === 'clt' ? true : false}
                />

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  labelText="Conduta ??tica"
                  {...register('empresa_etica')}
                  disabled={value === 'clt' ? true : false}
                />
              </div>
            </div>

            <div className="rightWrapper">
              <div className="form">
                <h4>Endere??o</h4>

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
                    labelText="N??mero"
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
                <h1>Cadastre abaixo, at?? 3 dependentes</h1>

                <Input
                  size="sm"
                  width="22rem"
                  fontSize={20}
                  fontWeight="bold"
                  labelText="Nome"
                  type="text"
                  {...register('dependente_nome')}
                  disabled={value === 'pj' ? true : false}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento')}
                    disabled={value === 'pj' ? true : false}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin')}
                      disabled={value === 'pj' ? true : false}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irm??o(??)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">M??e</option>
                      <option value="avo">Av??(??)</option>
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
                  disabled={value === 'pj' ? true : false}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento2')}
                    disabled={value === 'pj' ? true : false}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin2')}
                      disabled={value === 'pj' ? true : false}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irm??o(??)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">M??e</option>
                      <option value="avo">Av??(??)</option>
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
                  disabled={value === 'pj' ? true : false}
                />

                <div className="form-row">
                  <Input
                    size="sm"
                    width="10rem"
                    fontSize={20}
                    labelText="Nascimento"
                    type="date"
                    {...register('dependente_nascimento3')}
                    disabled={value === 'pj' ? true : false}
                  />

                  <div className="dropdown">
                    <label htmlFor="lang" className="dropdowntext">
                      Parentesco
                    </label>
                    <select
                      className="parentesco"
                      id="lang"
                      {...register('dependente_origin3')}
                      disabled={value === 'pj' ? true : false}
                    >
                      <option>Selecione o Parentesco</option>
                      <option value="irmao">Irm??o(??)</option>
                      <option value="pai">Pai</option>
                      <option value="mae">M??e</option>
                      <option value="avo">Av??(??)</option>
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
