import { chakra } from '@chakra-ui/react';
import {Box, Flex, Heading, Spacer, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import Nav from 'components/nav';
import * as S from './styles';
// import { Input, Stack } from '@chakra-ui/react';
import { ReactNode, useEffect, useState, useCallback, useContext} from 'react';
import { Link } from 'react-router-dom';
import Input from 'components/Input';
import IonicLogo from 'assets/svg/ionicrh_logo_gray.svg';
import LogoGray from 'assets/svg/logo-gray.svg';
import { MdOutlinePictureAsPdf } from "react-icons/md";
import { Divider } from '@chakra-ui/react';
import { FaArrowLeft} from "react-icons/fa";


import {useSearchParams, useParams} from 'react-router-dom';


import Button from 'components/Button';
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

function User(){

  // const {user} = useContext(AuthContext)
  const cookies = parseCookies();
  const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const {id} = useParams()
  // const getAllUser = useCallback(() => {
  //   setLoading(true);

  //     api.get(`/user/usuario-perfil/1`, {
  //     headers: {
  //       Authorization: `Bearer ${cookies['ionicookie.token']}`,
  //     }
  //   }).then(({data}) => {
  //     console.log(data)
  //     setUser(data);
  //   }).catch((error: Error | AxiosError) => {
  //     console.log(error);
  //   })
  //   console.log(id)
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 5000);

  // }, [setLoading, setUser]);

  useEffect(() => {
    // getUserInfo()
    api
      .get(`/user/usuario-perfil/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        console.log("ola" , data)
        setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


    return (
      <>
      <Nav></Nav>
      <S.Container>
        <div className="Wrapper">
            <div className="centerWrapper">

                <div className="leftWrapper">
                  <div className='foto'>
                    <MdAccountCircle  size='100%'/>
                  </div>

                  <div className='User'>
                      <h1>{user?.user_nome}</h1>
                      <Link to='/UserEdit/'><Button text="Editar Usuário" color={theme.colors.primary} /></Link>
                  </div>

                  <div className='pdf'>
                    <h2>Gerar PDF</h2>
                    <MdOutlinePictureAsPdf size='10%'color={theme.colors.red} />
                  </div>
                </div>

                <div className='rightWrapper'>
                  <div className='centerRightWrapper'>


                    <div className='dadosIniciais'>
                      <div className='dadosTexto'>
                        <h1>Dados Pessoais</h1>
                      </div>

                      <div className='dadosVoltar'>
                        <FaArrowLeft className='seta' size='100%'/>
                        <h2>Voltar</h2>
                      </div>

                    </div>


                    <div className='Dados'>
                      <div className='centerDados'>
                        <div className='colunaDados'>
                          <div className='coluna1'>
                            <span>RG: {user?.user_rg}</span>
                          </div>
                        </div>
                          <div className='colunaDados'>
                          <div className='coluna2'>
                            <span>CPF: {user?.user_cpf}</span>
                          </div>
                        </div>


                        <div className='colunaDados'>
                          <div className='coluna3'>
                            <span>Telefone: ({user?.telefone?.[0]?.tell_ddd}) {user?.telefone?.[0]?.tell_numero} </span>
                          </div>
                        </div>

        </div>

                      <div className='centerDados'>

                        <div className='colunaDados'>
                          <div className='coluna1'>
                            <span>Data de Nascimento: {user?.user_nascimento}</span>
                          </div>
                        </div>

                        <div className='colunaDados'>
                          <div className='coluna2'>
                            <span>Genero: {user?.user_genero}</span>
                          </div>
                        </div>

                        <div className='colunaDados'>
                          <div className='coluna3'>
                            <span>Estado Civil: {user?.user_estado_civil}</span>
                          </div>
                        </div>

                      </div>

                      <div className='centerDados'>

                        <div className='colunaDados2'>
                          <div className='coluna1'>
                            <span>Escolaridade: </span>
                          </div>
                        </div>

                        <div className='colunaDados2'>
                          <div className='coluna2'>
                             <span>Idiomas: {user?.idioma?.[0]?.idioma_falados} </span>
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
                               <span>Rua/Av: {user?.endereco?.[0]?.endereco_rua} </span>
                          </div>
                        </div>

                        <div className='colunaEndereco'>
                          <div className='coluna2'>
                            <span>N°: {user?.endereco?.[0]?.endereco_numero} </span>
                          </div>
                        </div>

                        <div className='colunaEndereco'>
                          <div className='coluna3'>
                            <span>Compl: {user?.endereco?.[0]?.endereco_compl} </span>
                          </div>
                        </div>

                      </div>

                      <div className='centerEndereco'>

                        <div className='colunaEndereco'>
                          <div className='coluna1'>
                            <span>Cidade: {user?.endereco?.[0]?.endereco_cidade} </span>
                          </div>
                        </div>

                        <div className='colunaEndereco'>
                          <div className='coluna2'>
                            <span>Estado: {user?.endereco?.[0]?.endereco_estado} </span>
                          </div>
                        </div>

                        <div className='colunaEndereco'>
                          <div className='coluna3'>
                            <span>CEP: {user?.endereco?.[0]?.endereco_cep} </span>
                          </div>
                        </div>

                      </div>

                    </div>
                  </div>

                </div>
                <Divider className='divider' orientation="horizontal"  boxShadow=' 1px 1px 1px 1px rgba(0, 0, 0, 0.4)' w='90%' />

            </div>
        </div>

        <div className='Wrapper2'>
          <div className='centerWrapper2'>
              <div className='DadosFuncionais'>
                <h1>Dados Funcionais:</h1>
              </div>

              <div className='coluna'>
                <div className='coluna1'>
                  <span>Matricula: {user?.contrato?.[0]?.contrato_matricula} </span>
                 <span>Departamento: {user?.contrato?.[0]?.cargo.departamento?.dep_name} </span>
                  <span>Cargo: {user?.contrato?.[0]?.contrato_base}</span>
                  <span>Turno: </span>
                  <span>Status: </span>
                  <span>Base: </span>
                  <span>Head: {user?.contrato?.[0]?.cargo.cargo_head} </span>
                  <span>Domínio: </span>
                  <span>Nível: {user?.contrato?.[0]?.cargo.cargo_nivel} </span>
                  <span>Curso: </span>
                </div>
              </div>

              <div className='coluna'>
                <div className='coluna2'>
                  <span>Tipo de Contrato: {user?.contrato?.[0]?.contrato_type} </span>
                  <span>Natureza de contrato(PJ): </span>
                  <span>Data de fundação(PJ): </span>
                  <span>E-mail: {user?.user_email}</span>
                  <span>Data de admissão: {user?.contrato?.[0]?.contrato_data_adicao} </span>
                  <span>Empresa contratada: {user?.contrato?.[0]?.emp_contratante.contratante_nome}</span>
                  <span>Tempo de formalização </span>
                  <span>Tempo de casa: {user?.contrato?.[0]?.contrato_tempo_de_casa} anos </span>
                  <span>Faixa salarial: R$ {user?.contrato?.[0]?.contrato_faixa_salarial?.toLocaleString('pt-BR')},00</span>
                </div>
              </div>

              <div className='coluna'>
                <div className='coluna3'>
                  <span>Termo de PJ: </span>
                  <span>Data de desligamento: </span>
                  <span>Tipo de desligamento: </span>
                  <span>Pesquisa de desligamento: </span>
                  <span>Distrato: </span>
                  <h1>Benefícios</h1>
                  <span>Plano de saúde: R$ {user?.contrato?.[0]?.contrato_plano_saude?.toLocaleString('pt-BR')},00</span>
                  <span>Auxilio creche: R$ {user?.contrato?.[0]?.contrato_auxilio_creche},00</span>
                  <span>Vale Transporte: R$ {user?.contrato?.[0]?.contrato_vale_transporte},00 </span>
                  <span>Vale alimentação: R$ {user?.contrato?.[0]?.contrato_vale_alimentacao},00</span>
                  <span>Vale refeição: R$ {user?.contrato?.[0]?.contrato_vale_refeicao},00 </span>
                </div>
              </div>
            </div>
        </div>

        <div className='Wrapper3'>
          <div className='DadosFuncionais'>
          <span><Link to="/">Código de Conduto e Ética</Link></span>
          </div>
        </div>

      </S.Container>
      </>
    );
  };

  export default User
