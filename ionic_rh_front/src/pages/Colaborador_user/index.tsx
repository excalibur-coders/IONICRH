import RespBar from 'components/RespBar';
import { MdAccountCircle } from 'react-icons/md';
import { useEffect, useState, useContext } from 'react';
import { theme } from 'theme';
import { BsClipboardCheck } from 'react-icons/bs';
import { MdArrowForward } from 'react-icons/md';

import * as S from './styles';
import { Button } from '@chakra-ui/react';
import Footer from 'components/Footer';

import { useParams } from 'react-router-dom';

import { parseCookies } from 'nookies';
import { AuthContext } from 'hooks/useAuth';

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
  telefone: ITelefone[];
  idioma: IIdioma[];
  documentos: IDocs[];
  escolaridade: IEscolaridade;
  endereco: IEndereco[];
  contrato: IContrato[];
  user_raca: string;
  user_rg?: string;
}
interface IDocs {
  docs_nome: string;
  docs_url: string;
  docs_type: string;
  docs_header: string;
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
  contrato_turno?: string;
  empContratanteContratanteId?: number;
  cargoCargoId?: number;
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

interface IIdioma {
  idioma_falados: string;
}

interface ITelefone {
  tell_ddd?: string;
  tell_numero?: string;
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

function Colab_user() {
  const { user } = useContext(AuthContext);
  const cookies = parseCookies();
  // const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // Vereficar [False, False, False, True]

  /* for (let index = 0; index < 4; index++) {
    const tester = user?.docs?.[index]?.docs_header.includes('avatar');
    if (tester === true) {
      user?.docs?.[index]?.docs_url;
    }
  } */

  /* console.log(teste); */
  /* for (let index = 0; index < 4; index++) {
      if (teste?.includes('file')) {
        const avatar = console.log(user?.docs?.[index].docs_url)
      } */
  /* function avatar(header: any) {
    const teste = user?.docs?.map(i => i.docs_header);
    for (let index = 0; index < 4; index++) {
      if (teste) {
        const avatares = user?.docs?.[index].docs_url;
        return avatares;
      }
      return avatar;
    }
  } */
  /*
  } */

  /* console.log(teste); */

  // const getAllUser = useCallback(() => {
  //   setLoading(true);

  //     api.get(`user/usuario-perfil/${id}`, {
  //     headers: {
  //       Authorization: `Bearer ${cookies['ionicookie.token']}`,
  //     }
  //   }).then(({data}) => {
  //     console.log(data.user.user_name)
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
    // getAllUser();
  }, []);

  return (
    <>
      <S.Container>
        <RespBar />
        <main>
          <div className="Wrapper">
            <div className="centerWrapper">
              <div className="leftWrapper">
                <div className="foto">
                  <img
                    className="foto"
                    src={user?.docsavatar[0].avatar_url}
                    alt="profile picture"
                  />
                </div>

                <div className="User">
                  <h1>{user?.user_nome}</h1>
                </div>

                <div className="coluna">
                  <div className="coluna1">
                    <span>Cargo: {user?.contrato?.[0].cargo.cargo_area}</span>
                    <span>RG:{user?.user_rg}</span>
                    <span>CPF:{user?.user_cpf} </span>
                    <span>
                      Matrícula: {user?.contrato?.[0]?.contrato_matricula}
                    </span>
                    {/* user?.documentos?.[0].docs_type
                    user?.documentos?.map(docs => docs.docs_header*/}
                    <span>
                      Departamento:{' '}
                      {user?.contrato?.[0]?.cargo.departamento?.dep_name}
                    </span>
                  </div>
                </div>

                <div className="coluna">
                  <div className="coluna2">
                    <h2>Endereço</h2>
                    <span>Rua/Av: {user?.endereco?.[0]?.endereco_rua}</span>
                    <span>N: {user?.endereco?.[0]?.endereco_numero}</span>
                    <span>Compl: {user?.endereco?.[0]?.endereco_compl}</span>
                    <span>CEP: {user?.endereco?.[0]?.endereco_cep}</span>
                    <span>Bairro: {user?.endereco?.[0]?.endereco_bairro}</span>
                    <span>Estado: {user?.endereco?.[0]?.endereco_estado}</span>
                    <span>Cidade: {user?.endereco?.[0]?.endereco_cidade}</span>
                  </div>
                </div>
              </div>
              <div className="rightWrapper">
                <div className="linhaDados">
                  <div className="dadosUser1">
                    <span>E-mail: {user?.user_email}</span>
                    <span>Data de nascimento: {user?.user_nascimento}</span>
                    <span>
                      Telefone: ({user?.telefone?.[0].tell_ddd}){'   '}
                      {user?.telefone?.[0].tell_numero}{' '}
                    </span>
                    <span>
                      Tipo de contrato: {user?.contrato?.[0]?.contrato_tipo}
                    </span>
                  </div>
                  <div className="dadosUser2">
                    <span>Estado civil: {user?.user_estado_civil}</span>
                    <span>Sexo: {user?.user_genero}</span>
                    <span>
                      Escolaridade: {user?.escolaridade?.[0].school_instituicao}
                    </span>
                    <span>Turno: {user?.contrato?.[0]?.contrato_turno}</span>
                  </div>
                </div>
                <div className="cargo">
                  <h3>
                    <b>Descrição do cargo:</b> Informações e tarefas a serem
                    desempenhadas em uma função específica da empresa. Nessa
                    descrição de atividades são registrados o objetivo,
                    responsabilidades, escopo de trabalho, requisitos, condições
                    de trabalhos e outros.
                  </h3>
                </div>
                <h4>Cursos realizados:</h4>
                <div className="buttons_onboard">
                  <div>
                    <Button
                      className="button"
                      as={BsClipboardCheck}
                      color={theme.colors.font}
                    ></Button>
                    <small>Curso RDC-16</small>
                  </div>
                  <div>
                    <Button
                      className="button"
                      as={BsClipboardCheck}
                      color={theme.colors.font}
                    ></Button>
                    <small>Curso 2</small>
                  </div>
                  <div>
                    <Button
                      className="button"
                      as={BsClipboardCheck}
                      color={theme.colors.font}
                    ></Button>
                    <small>Curso 3</small>
                  </div>
                  <div>
                    <Button
                      className="button"
                      as={MdArrowForward}
                      color={theme.colors.font}
                    ></Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </S.Container>
    </>
  );
}

export default Colab_user;
