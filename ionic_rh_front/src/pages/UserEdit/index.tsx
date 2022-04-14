import { chakra } from '@chakra-ui/react';
import {Box, Flex, Heading, Spacer, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import Nav from 'components/nav';
import * as S from './styles';
// import { Input, Stack } from '@chakra-ui/react';
import { ReactNode, useEffect, useState, useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { Divider } from '@chakra-ui/react';
import { FaArrowLeft} from "react-icons/fa";
import Button from 'components/Button';
import { useForm } from 'react-hook-form';

import {useSearchParams, useParams} from 'react-router-dom';

import { api } from 'services/api';

import  {parseCookies} from "nookies";
import { AxiosError } from 'axios';

import {AuthContext} from 'hooks/useAuth'

// console.log(theme.colors.primary);

interface IUser {

  user_id: number;
  user_email: string;
  user_nome?: string;
  user_nacionalidade?: string;
  user_naturalidade?: string;
  user_nascimento?: string;
  user_genero?: string;
  user_cpf?: string;
  user_estado_civil?: string;
  telefone: ITelefone[]
  idioma: IIdioma[]
  documentos?: number;
  escolaridade: IEscolaridade[]
  endereco: IEndereco[]
  contrato: IContrato[]
  user_raca: string;
  user_rg: string;
}

interface IContrato{
  cargo: ICargo
  contrato_matricula?: string;
  contrato_auxilio_creche?: number;
  contrato_base?: string;
  contrato_data_desligamento?: string;
  contrato_distrato?: string;
  contrato_dominio?: string;
  contrato_faixa_salarial?: number;
  contrato_id?: number;
  contrato_plano_saude?: number;
  contrato_tempo_de_casa?: string
  contrato_tempo_formalizacao?: string;
  contrato_termos?: string
  contrato_vale_alimentacao?: number;
  contrato_vale_refeicao?: number;
  contrato_vale_transporte?: number;
  contrato_type?: string;
  contrato_data_adicao?: string;
  emp_contratante: IEmpContratante
}

interface IEmpContratante{
  contratante_nome?: string;
}

interface ICargo{
  departamento: IDepartamento
  cargo_head?: string;
  cargo_nivel?: string;
  cargo_area?: string;
}


interface IDepartamento{
  dep_name?: string;
}


interface IEscolaridade{
  school_formacao?: string;
  school_status?: string;
  school_instituicao?: string;
  school_inicio?: string;
  school_termino?: string;
}

interface IIdioma{
  idioma_falados: string;
}

interface ITelefone{
  tell_ddd?: string;
  tell_numero?: string;
}

interface IEndereco{
  endereco_rua?: string;
  endereco_id?: number,
  endereco_pais?: string;
  endereco_bairro?: string;
  endereco_cidade?: string;
  endereco_cep?: string;
  endereco_estado?: string;
  endereco_numero?: string;
  endereco_compl?: string;
}

interface IFormProps {
  user_id: number;
  user_email: string;
  user_nome?: string;
  user_nacionalidade?: string;
  user_naturalidade?: string;
  user_nascimento?: string;
  user_genero?: string;
  user_cpf?: string;
  user_estado_civil?: string;
  telefone?: string;
  idioma_falados: string;
  documentos?: number;
  school_formacao?: string;
  school_status?: string;
  school_instituicao?: string;
  school_inicio?: string;
  school_termino?: string;
  endereco_rua?: string;
  endereco_id?: number,
  endereco_pais?: string;
  endereco_bairro?: string;
  endereco_cidade?: string;
  endereco_cep?: string;
  endereco_estado?: string;
  endereco_numero?: string;
  endereco_compl?: string;
  dep_name?: string;
  cargo_head?: string;
  cargo_nivel?: string;
  cargo_area?: string;
  contrato_matricula?: string;
  contrato_auxilio_creche?: number;
  contrato_base?: string;
  contrato_data_desligamento?: string;
  contrato_distrato?: string;
  contrato_dominio?: string;
  contrato_faixa_salarial?: number;
  contrato_id?: number;
  contrato_plano_saude?: number;
  contrato_tempo_de_casa?: string
  contrato_tempo_formalizacao?: string;
  contrato_termos?: string
  contrato_vale_alimentacao?: number;
  contrato_vale_refeicao?: number;
  contrato_vale_transporte?: number;
  contrato_type?: string;
  contrato_data_adicao?: string;
  contratante_nome?: string;
  user_raca: string;
  user_rg: string;
}


  function UserEdit() {

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormProps>({
      mode: 'onBlur',
      //resolver: yupResolver(schema),
    });


  const cookies = parseCookies();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const {id} = useParams()

  const getUserInfo = () => {
    api.get(`/user/user-info/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      }
    }).then(({data}) => {
      console.log(data.contrato[0].cargo.departamento.dep_name)
      setUser(data);
    }).catch((error: Error | AxiosError) => {
      console.log(error);
    })
  }

  useEffect(() => {
    getUserInfo()
  } , [])

  const onSubmit = useCallback(async (data) => {
    console.log(data);
  }, []);




    return (
      <>
          <Nav></Nav>

        <S.Container>
              <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="Wrapper">
                          <div className="centerWrapper">

                              <div className="leftWrapper">
                                <div className='foto'>
                                  <MdAccountCircle  size='100%'/>
                                </div>

                                <div className='User'>
                                    <h1>User</h1>
                                </div>

                                <div className='button'>
                                  {/*<Link to='/UserEdit'>*/}
                                    <Button type='submit' text="Salvar" color={theme.colors.primary} />
                                  {/*</Link>/*/}
                                  <Link to='User/:id'><Button text="Cancelar" color={theme.colors.red} /></Link>
                                </div>

                                <div className='voltarSeta'>
                                  {/*<div className='seta'>
                                    <FaArrowLeft  size='100%'/>
                                  </div>*/}

                                    <div className='voltar'>
                                        <Link to='User/:id'><h2>Voltar</h2> </Link>
                                    </div>
                                </div>

                              </div>

                              <div className='rightWrapper'>
                                <div className='centerRightWrapper'>
                                  <div className='Dados'>

                                    <div className='DadosTexto'>
                                      <h1>Dados Pessoais</h1>
                                    </div>

                                    <div className='centerDados'>
                                      <div className='colunaDados'>
                                        <div className='coluna1'>
                                          <span>RG:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('user_rg')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaDados'>
                                        <div className='coluna2'>
                                          <span>CPF:</span>
                                            <Input
                                              size='xs'
                                              placeholder=''
                                              width="auto"
                                              fontSize={15}
                                              {...register('user_cpf')}
                                            />
                                        </div>
                                      </div>

                                      <div className='colunaDados'>
                                        <div className='coluna3'>
                                          <span>Telefone:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('telefone')}
                                          />
                                        </div>
                                      </div>

                                    </div>

                                    <div className='centerDados'>

                                      <div className='colunaDados'>
                                        <div className='coluna1'>
                                          <span>Data de Nascimento:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('user_nascimento')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaDados'>
                                        <div className='coluna2'>
                                          <span>Gênero:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('user_genero')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaDados'>
                                        <div className='coluna3'>
                                          <span>Estado Civil:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('user_rg')}
                                          />
                                        </div>
                                      </div>

                                    </div>

                                    <div className='centerDados'>

                                      <div className='colunaDados2'>
                                        <div className='coluna1'>
                                          <span>Escolaridade:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaDados2'>
                                        <div className='coluna2'>
                                          <span>Linguas:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('idioma_falados')}
                                          />
                                        </div>
                                      </div>

                                    </div>

                                  </div>

                                </div>

                                <Divider orientation="horizontal" boxShadow=' 1px 1px 1px 1px rgba(0, 0, 0, 0.4)'  />

                                <div className='centerRightWrapper'>
                                  <div className='endereco'>

                                    <div className='enderecoTexto'>
                                      <h1>Endereço</h1>
                                    </div>

                                    <div className='centerEndereco'>
                                      <div className='colunaEndereco'>
                                        <div className='coluna1'>
                                          <span>Rua/Av:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_rua')}

                                          />
                                        </div>
                                      </div>

                                      <div className='colunaEndereco'>
                                        <div className='coluna2'>
                                          <span>N°:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_numero')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaEndereco'>
                                        <div className='coluna3'>
                                          <span>Compl:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_compl')}
                                          />
                                        </div>
                                      </div>

                                    </div>

                                    <div className='centerEndereco'>

                                      <div className='colunaEndereco'>
                                        <div className='coluna1'>
                                          <span>Cidade:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_cidade')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaEndereco'>
                                        <div className='coluna2'>
                                          <span>Estado:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_estado')}
                                          />
                                        </div>
                                      </div>

                                      <div className='colunaEndereco'>
                                        <div className='coluna3'>
                                          <span>CEP:</span>
                                          <Input
                                            size='xs'
                                            placeholder=''
                                            width="auto"
                                            fontSize={15}
                                            {...register('endereco_cep')}
                                          />
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>

                              </div>
                              <Divider className='divider' orientation="horizontal"boxShadow=' 1px 1px 1px 1px rgba(0, 0, 0, 0.4)' w='90%' />

                          </div>

                      </div>

                      <div className='Wrapper2'>
                        <div className='centerWrapper2'>
                            <div className='DadosFuncionais'>
                              <h1>Dados Funcionais:</h1>
                            </div>

                            <div className='coluna'>
                              <div className='colunaFuncionais'>
                                <div className='coluna1'>
                                  <span>Matricula:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                    {...register('contrato_matricula')}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Departamento: </span>
                                  <Input
                                    size='xs'
                                    width="auto"
                                    fontSize={15}
                                    defaultValue={user?.contrato[0].cargo.departamento.dep_name}
                                    {...register('dep_name')}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Cargo:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Turno::</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Status:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Base:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Head:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Domínio:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Nível:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna1'>
                                  <span>Curso:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className='coluna'>
                            <div className='colunaFuncionais'>
                                <div className='coluna2'>
                                  <span>Tipo de Contrato:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Natureza de contrato(PJ):</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Data de fundação(PJ):</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>E-mail:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Data de admissão:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Empresa contratada:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Tempo de formalização:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Tempo de casa:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna2'>
                                  <span>Faixa salarial:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>
                              </div>
                            </div>

                            <div className='coluna'>
                            <div className='colunaFuncionais'>
                                <div className='coluna3'>
                                  <span>Termo de PJ:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Data de desligamento:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Tipo de desligamento:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Pesquisa de desligamento:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Distrato:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <h1>Benefícios</h1>
                                </div>


                                <div className='coluna3'>
                                  <span>Plano de saúde:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Auxilio creche:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Vale Transporte:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>

                                <div className='coluna3'>
                                  <span>Vale alimentação:</span>
                                  <Input
                                    size='xs'
                                    placeholder=''
                                    width="auto"
                                    fontSize={15}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className='Wrapper3'>
                        <div className='DadosFuncionais'>
                        <span><Link to="/">Código de Conduto e Ética</Link></span>
                        </div>
                      </div>
            </form>


        </S.Container>
      </>
    );
  };

  export default UserEdit;
