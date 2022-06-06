import { MdAccountCircle } from 'react-icons/md';
import { theme } from 'theme';
import RespBar_adm from 'components/Respbar_adm';
import * as S from './styles';
// import { Input, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlinePictureAsPdf } from 'react-icons/md';
import { Divider } from '@chakra-ui/react';
import fileDownload from 'js-file-download';
import { FaArrowLeft } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button';
import { api } from 'services/api';
import perfil_funcionarioPDF from 'utils/Gerar_pdf';
import { parseCookies } from 'nookies';


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
  docsavatar: IAvatar[];
  telefone: ITelefone[];
  idioma: IIdioma[];
  docs?: IDocs[];
  escolaridade: IEscolaridade[];
  endereco: IEndereco[];
  contrato: IContrato[];
  emp_pj: IPj[];
  desligamento: IDesligamento[];
  user_raca: string;
  user_rg: string;
  user_role: string;
}
interface IDesligamento {
  pesq_id: number;
  pesq_desligamento: string;
  pesq_userDesligado: boolean;
}
interface IPj {
  pj_id: number;
  pj_nome: string;
  pj_cnjp: string;
  pj_natureza_juridica: string;
  pj_fundacao: string;
  pj_conduta_etica: string;
}
interface IIdioma {
  idioma_falados: string;
}
interface ITelefone {
  tell_ddd?: string;
  tell_numero?: string;
}
interface IAvatar {
  avatar_nome: string;
  avatar_url: string;
  avatar_type: string;
  avatar_header: string;
}
interface IDocs {
  docs_id: number;
  docs_nome: string;
  docs_url: string;
  docs_type: string;
  docs_header: string;
  docs_key: string;
}
interface IEndereco {
  endereco_rua?: string;
  endereco_id?: number;
  endereco_pais?: string;
  endereco_bairro?: string;
  endereco_cidade?: string;
  endereco_cep?: string;
  endereco_estado?: string;
  endereco_numero?: string;
  endereco_compl?: string;
}

interface IContrato {
  cargo: ICargo;
  contrato_turno: string;
  contrato_nivel: string;
  contrato_matricula?: string;
  contrato_auxilio_creche?: number;
  contrato_base?: string;
  contrato_data_desligamento?: string;
  contrato_distrato?: string;
  contrato_dominio?: string;
  contrato_faixa_salarial?: number;
  contrato_id?: number;
  contrato_plano_saude?: number;
  contrato_tempo_de_casa?: string;
  contrato_tempo_formalizacao?: string;
  contrato_termos?: string;
  contrato_vale_alimentacao?: number;
  contrato_vale_refeicao?: number;
  contrato_vale_transporte?: number;
  contrato_tipo?: string;
  contrato_adimissao?: string;
  emp_contratante: IEmpContratante;
}

interface IEmpContratante {
  contratante_nome?: string;
}

interface ICargo {
  departamento: IDepartamento;
  cargo_head?: string;
  cargo_nivel?: string;
  cargo_area?: string;
}

interface IDepartamento {
  dep_name?: string;
}

interface IEscolaridade {
  school_curso: string;
  school_formacao?: string;
  school_status?: string;
  school_instituicao?: string;
  school_inicio?: string;
  school_termino?: string;
}

function User() {
  // const {user} = useContext(AuthContext)
  const cookies = parseCookies();
  const [user, setUser] = useState<IUser>();
  const [usuario_perfil, setUsuario_pdf] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id, docs_id } = useParams();
  const navigate = useNavigate();
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

  //Vereficar o ERRO DE DOWNLOAD
  const downloadFile = (
    docs_id: number,
    docs_nome: string,
    docs_type: string,
  ) => {
    api
      .get(`/user/docs/download/${docs_id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
        responseType: 'blob',
      })
      .then(res => {
        console.log('Baixar', id);
        const unirarq = docs_nome + docs_type;
        fileDownload(res.data, unirarq);
      })
      .catch(err => {
        console.log(err);
      });
  };
  useEffect(() => {
    // getUserInfo()
    api
      .get(`/user/usuario-perfil/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        /* console.log('ola', data); */
        setUser(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  /* useEffect(() => {
    // getUserInfo()
    api
      .get(`/docs/download/${id}/${docs}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        console.log('ola', data);
        setUser(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [cookies, id, docs]); */

  return (
    <>
      <RespBar_adm />
      <S.Container>
        <div className="Wrapper">
          <div className="centerWrapper">
            <div className="leftWrapper">
              {user?.docsavatar[0]?.avatar_url ?
                <img
                  className="foto"
                  src={user?.docsavatar[0].avatar_url}
                  alt="profile picture"
                />
                : <div className="foto" />
              }

              <div className="User">
                <h1>{user?.user_nome}</h1>
                <Link to={`/UserEdit/${user?.user_id}`}>
                  <Button text="Editar Usuário" color={theme.colors.primary} />
                </Link>
              </div>

              <div className="pdf">
              <Button
                text='Gerar PDF'
                onClick={(e) => perfil_funcionarioPDF(user)}
                color={theme.colors.red}
              />

              </div>
            </div>

            <div className="rightWrapper">
              <div className="centerRightWrapper">
                <div className="dadosIniciais">
                  <div className="dadosTexto">
                    <h1>Dados Pessoais</h1>
                  </div>

                  <div className="dadosVoltar">
                    <FaArrowLeft className="seta" size="100%" />
                    <h2 onClick={() => navigate(-1)}>Voltar</h2>
                  </div>
                </div>

                <div className="Dados">
                  <div className="centerDados">
                    <div className="colunaDados">
                      <div className="coluna1">
                        <span>RG: {user?.user_rg}</span>
                      </div>
                    </div>
                    <div className="colunaDados">
                      <div className="coluna2">
                        <span>CPF: {user?.user_cpf}</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna3">
                        <span>
                          Telefone: ({user?.telefone?.[0]?.tell_ddd}){' '}
                          {user?.telefone?.[0]?.tell_numero}{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="centerDados">
                    <div className="colunaDados">
                      <div className="coluna1">
                        <span>Data de Nascimento: {user?.user_nascimento}</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna2">
                        <span>Genero: {user?.user_genero}</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna3">
                        <span>Estado Civil: {user?.user_estado_civil}</span>
                      </div>
                    </div>
                  </div>

                  <div className="centerDados">
                    <div className="colunaDados2">
                      <div className="coluna1">
                        <span>Escolaridade: {user?.escolaridade[0].school_formacao} </span>
                        <span>Instituição: {user?.escolaridade[0].school_instituicao} </span>
                        <span>Status: {user?.escolaridade[0].school_status} </span>
                        <span>Curso: {user?.escolaridade[0].school_curso} </span>
                      </div>
                    </div>

                    <div className="colunaDados2">
                      <div className="coluna2">
                        <span>
                          Idiomas: {user?.idioma.map(idioma => {
                            return (
                              <span key={idioma.idioma_falados}><br />{idioma.idioma_falados}{' '}</span>
                            )
                          })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Divider
                orientation="horizontal"
                boxShadow=" 1px 1px 1px 1px rgba(0, 0, 0, 0.4)"
              />

              <div className="centerRightWrapper">
                <div className="endereco">
                  <div className="enderecoTexto">
                    <h1>Endereço</h1>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>
                          Rua/Av: {user?.endereco?.[0]?.endereco_rua}{' '}
                        </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>N°: {user?.endereco?.[0]?.endereco_numero} </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>
                          Compl: {user?.endereco?.[0]?.endereco_compl}{' '}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>
                          Cidade: {user?.endereco?.[0]?.endereco_cidade}{' '}
                        </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>
                          Estado: {user?.endereco?.[0]?.endereco_estado}{' '}
                        </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>CEP: {user?.endereco?.[0]?.endereco_cep} </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Divider
              className="divider"
              orientation="horizontal"
              boxShadow=" 1px 1px 1px 1px rgba(0, 0, 0, 0.4)"
              w="90%"
            />
          </div>
        </div>
        {user && user.contrato.map(x => {
          return (
            <>
              <div className="Wrapper2">
                <div className="centerWrapper2">
                  <div className="DadosFuncionais">
                    <h1>Dados Funcionais:</h1>
                  </div>

                  <div className="coluna">
                    <div className="coluna1">
                      <span>
                        Matricula: {user?.contrato?.[0]?.contrato_matricula}{' '}
                      </span>
                      <span>
                        Departamento:{' '}
                        {user?.contrato?.[0]?.cargo.departamento?.dep_name}{' '}
                      </span>
                      <span>Cargo: {user?.contrato?.[0]?.cargo.cargo_area}</span>
                      <span>Trilha de Aprendizado: {user?.contrato?.[0]?.cargo.cargo_area}</span>
                      <span>Tipo de perfil: {user?.user_role}</span>
                      <span>Turno: {user?.contrato[0].contrato_turno}</span>
                      <span>Base: {user?.contrato?.[0]?.contrato_base} </span>
                      {/* <span>Head: {user?.contrato?.[0]?.cargo.cargo_head} </span> */}
                      <span>Domínio: {user?.contrato[0].contrato_dominio} </span>
                      <span>Nível: {user?.contrato?.[0]?.contrato_nivel} </span>
                      <span>Curso: {user?.escolaridade[0].school_curso} </span>
                    </div>
                  </div>

                  <div className="coluna">
                    <div className="coluna2">
                      <span>
                        Tipo de Contrato: {user?.contrato?.[0]?.contrato_tipo}{' '}
                      </span>
                      {user && user.emp_pj.map(i => {
                        return (
                          <>
                            <span key={i.pj_id}>Natureza de contrato(PJ): {i.pj_conduta_etica} </span>
                            <span key={i.pj_id}>Data de fundação(PJ): {i.pj_fundacao} </span>
                            <span>Termo de PJ: {i.pj_natureza_juridica}</span>
                          </>
                        )
                      })}


                      <span>E-mail: {user?.user_email}</span>
                      <span>
                        Data de admissão: {user?.contrato?.[0]?.contrato_adimissao}{' '}
                      </span>
                      <span>
                        Empresa contratada:{' '}
                        {user?.contrato?.[0]?.emp_contratante.contratante_nome}
                      </span>
                      <span>Tempo de formalização </span>
                      <span>
                        Tempo de casa: {user?.contrato?.[0]?.contrato_tempo_de_casa}{' '}
                        anos{' '}
                      </span>
                      <span>
                        Faixa salarial: R${' '}
                        {user?.contrato?.[0]?.contrato_faixa_salarial?.toLocaleString(
                          'pt-BR',
                        )}
                      </span>
                    </div>
                  </div>

                  <div className="coluna">
                    <div className="coluna3">
                      {user && user.desligamento.map(i => {
                        return (
                          <>
                            <span key={user?.user_id}>Data de desligamento:  {user.contrato[0].contrato_data_desligamento} </span>
                            <span key={user?.user_id}>Pesquisa de desligamento: {i.pesq_desligamento} </span>
                            <span key={user?.user_id}>Distrato: {user.contrato[0].contrato_distrato} </span>
                          </>
                        )
                      })}

                      <h1>Benefícios</h1>
                      <span>
                        Plano de saúde: R${' '}
                        {user?.contrato?.[0]?.contrato_plano_saude?.toLocaleString(
                          'pt-BR',
                        )}
                      </span>
                      <span>
                        Auxilio creche: R${' '}
                        {user?.contrato?.[0]?.contrato_auxilio_creche?.toLocaleString(
                          'pt-BR',
                        )}
                      </span>
                      <span>
                        Vale Transporte: R${' '}
                        {user?.contrato?.[0]?.contrato_vale_transporte?.toLocaleString(
                          'pt-BR',
                        )}{' '}
                      </span>
                      <span>
                        Vale alimentação: R${' '}
                        {user?.contrato?.[0]?.contrato_vale_alimentacao?.toLocaleString(
                          'pt-BR',
                        )}
                      </span>
                      <span>
                        Vale refeição: R${' '}
                        {user?.contrato?.[0]?.contrato_vale_refeicao?.toLocaleString(
                          'pt-BR',
                        )}{' '}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="Wrapper3">
                <div className="DadosFuncionais">
                  <span>
                    <Link to="/">Código de Conduta e Ética</Link>
                  </span>
                  <div className="docsMother">
                    {user?.docs?.map(element => (
                      <>
                        <div className="docsConfig">
                          <div className="docsImgDiv">
                            <img
                              width={250}
                              key={element.docs_header}
                              src={element.docs_url}
                            />
                          </div>
                          <div className="docsLink">
                            <span>{element.docs_nome + element.docs_type}</span>
                            <a
                              href={element.docs_url}
                              onClick={() =>
                                downloadFile(
                                  element.docs_id,
                                  element.docs_nome,
                                  element.docs_type,
                                )
                              }
                              rel="noreferrer"
                              target="_blank"
                            >
                              Download
                            </a>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )
        })}

      </S.Container>
    </>
  );
}

export default User;
