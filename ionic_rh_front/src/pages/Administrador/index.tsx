import { MdAccountCircle } from 'react-icons/md';
import { theme } from 'theme';
import RespBar_adm from 'components/Respbar_adm';
import * as S from './styles';
// import { Input, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { MdOutlinePictureAsPdf } from 'react-icons/md';
import { Divider } from '@chakra-ui/react';
import { FaArrowLeft } from 'react-icons/fa';

import Button from 'components/Button';
import { useState, useContext } from 'react';

import { useParams } from 'react-router-dom';

import { parseCookies } from 'nookies';
import { AuthContext } from 'hooks/useAuth';

// console.log(theme.colors.primary);

function Administrador() {
  const { user } = useContext(AuthContext);
  const cookies = parseCookies();
  // const [user, setUser] = useState<IUser>();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  return (
    <>
      <RespBar_adm />
      <S.Container>
        <div className="Wrapper">
          <div className="centerWrapper">
            <div className="leftWrapper">
              <img
                className="foto"
                src={user?.docsavatar[0].avatar_url}
                alt="fotoProfile"
              />

              <div className="User">
                <h1>{user?.user_nome}</h1>
                <Link to="/AdministradorEdit">
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
                          Telefone: ({user?.telefone?.[0].tell_ddd}){'   '}
                          {user?.telefone?.[0].tell_numero}{' '}
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
                        <span>Sexo: {user?.user_genero}</span>
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
                        <span>
                          Escolaridade:{' '}
                          {user?.escolaridade?.[0]?.school_instituicao} <br />
                          Curso: {user?.escolaridade?.[0].school_curso}
                          <br />
                          Status: {user?.escolaridade?.[0].school_status}
                        </span>
                      </div>
                    </div>

                    <div className="colunaDados2">
                      <div className="coluna2">
                        <span>Linguas:{user?.idioma?.[0].idioma_falados}</span>
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
                    <h1>Endereço </h1>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>Rua/Av:{user?.endereco?.[0].endereco_rua}</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>N°:{user?.endereco?.[0].endereco_numero}</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>Compl:{user?.endereco?.[0].endereco_compl}</span>
                      </div>
                    </div>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>
                          Cidade:{user?.endereco?.[0].endereco_cidade}
                        </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>
                          Estado:{user?.endereco?.[0].endereco_estado}
                        </span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>CEP:{user?.endereco?.[0].endereco_cep}</span>
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
                <span>Matricula: {user?.contrato?.[0].contrato_matricula}</span>
                <span>
                  Departamento:{' '}
                  {user?.contrato?.[0].cargo?.departamento?.dep_name}
                </span>
                <span>Cargo: {user?.contrato?.[0].cargo?.cargo_area}</span>
                <span>Turno: {user?.contrato?.[0].contrato_turno}</span>
                <span>Base: {user?.contrato?.[0].contrato_base}</span>
                <span>Head: {user?.contrato?.[0].cargo?.cargo_head}</span>
                <span>
                  Domínio:{' '}
                  <a href="">{`https://${user?.contrato?.[0].contrato_dominio}`}</a>
                </span>
                <span>Nivel: {user?.contrato?.[0].contrato_nivel}</span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna2">
                <span>
                  Tipo de Contrato: {user?.contrato?.[0].contrato_tipo}
                </span>
                <span>E-mail: {user?.user_email}</span>
                <span>
                  Data de admissão: {user?.contrato?.[0].contrato_adimissao}
                </span>
                <span>
                  Empresa contratada:{' '}
                  {user?.contrato?.[0].emp_contratante.contratante_nome}
                </span>
                <span>
                  Tempo de formalização:{' '}
                  {user?.contrato?.[0].contrato_tempo_formalizacao}
                </span>
                <span>
                  Tempo de casa: {user?.contrato?.[0].contrato_tempo_de_casa}
                </span>
                <span>
                  Faixa salarial: R$
                  {user?.contrato?.[0].contrato_faixa_salarial}
                </span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna3">
                <h1>Benefícios</h1>
                <span>
                  Plano de saúde: R$
                  {user?.contrato?.[0].contrato_plano_saude}
                </span>
                <span>
                  Auxilio creche: R$
                  {user?.contrato?.[0].contrato_auxilio_creche}
                </span>
                <span>
                  Vale Transporte: R$
                  {user?.contrato?.[0].contrato_vale_transporte}
                </span>
                <span>
                  Vale alimentação: R$
                  {user?.contrato?.[0].contrato_vale_alimentacao}
                </span>
                <span>
                  Vale Refeição: R$
                  {user?.contrato?.[0].contrato_vale_refeicao}
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
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default Administrador;
