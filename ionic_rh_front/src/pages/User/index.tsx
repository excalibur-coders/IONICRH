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

import Button from 'components/Button';
import { api } from 'services/api';

import { parseCookies } from 'nookies';

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
  docsavatar: IAvatar[];
  telefone: ITelefone[];
  idioma: IIdioma[];
  docs?: IDocs[];
  escolaridade: IEscolaridade[];
  endereco: IEndereco[];
  contrato: IContrato[];
  user_raca: string;
  user_rg: string;
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
  contrato_type?: string;
  contrato_data_adicao?: string;
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
  const [loading, setLoading] = useState(false);
  const { id, docs_id } = useParams();

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
  }, [cookies, id]);
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
                <h2>Gerar PDF</h2>
                <MdOutlinePictureAsPdf size="10%" color={theme.colors.red} />
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
                    <h2>Voltar</h2>
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
                        <span>Escolaridade: </span>
                      </div>
                    </div>

                    <div className="colunaDados2">
                      <div className="coluna2">
                        <span>
                          Idiomas: {user?.idioma?.[0]?.idioma_falados}{' '}
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
                <span>Turno: </span>
                <span>Status: </span>
                <span>Base: {user?.contrato?.[0]?.contrato_base} </span>
                <span>Head: {user?.contrato?.[0]?.cargo.cargo_head} </span>
                <span>Domínio: </span>
                <span>Nível: {user?.contrato?.[0]?.cargo.cargo_nivel} </span>
                <span>Curso: </span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna2">
                <span>
                  Tipo de Contrato: {user?.contrato?.[0]?.contrato_type}{' '}
                </span>
                <span>Natureza de contrato(PJ): </span>
                <span>Data de fundação(PJ): </span>
                <span>E-mail: {user?.user_email}</span>
                <span>
                  Data de admissão: {user?.contrato?.[0]?.contrato_data_adicao}{' '}
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
                  ,00
                </span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna3">
                <span>Termo de PJ: </span>
                <span>Data de desligamento: </span>
                <span>Tipo de desligamento: </span>
                <span>Pesquisa de desligamento: </span>
                <span>Distrato: </span>
                <h1>Benefícios</h1>
                <span>
                  Plano de saúde: R${' '}
                  {user?.contrato?.[0]?.contrato_plano_saude?.toLocaleString(
                    'pt-BR',
                  )}
                  ,00
                </span>
                <span>
                  Auxilio creche: R${' '}
                  {user?.contrato?.[0]?.contrato_auxilio_creche},00
                </span>
                <span>
                  Vale Transporte: R${' '}
                  {user?.contrato?.[0]?.contrato_vale_transporte},00{' '}
                </span>
                <span>
                  Vale alimentação: R${' '}
                  {user?.contrato?.[0]?.contrato_vale_alimentacao},00
                </span>
                <span>
                  Vale refeição: R${' '}
                  {user?.contrato?.[0]?.contrato_vale_refeicao},00{' '}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="Wrapper3">
          <div className="DadosFuncionais">
            <span>
              <Link to="/">Código de Conduto e Ética</Link>
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
      </S.Container>
    </>
  );
}

export default User;
