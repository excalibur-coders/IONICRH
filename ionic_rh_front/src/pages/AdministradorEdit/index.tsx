import { MdAccountCircle } from 'react-icons/md';
import { theme } from 'theme';
import RespBar_adm from 'components/Respbar_adm';
import * as S from './styles';
// import { Input, Stack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { Divider } from '@chakra-ui/react';
import { useState, useContext } from 'react';
import { AuthContext } from 'hooks/useAuth';
import { FaArrowLeft } from 'react-icons/fa';

import Button from 'components/Button';

// console.log(theme.colors.primary);

function AdministradorEdit() {
  const { user } = useContext(AuthContext);
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
                <h1>Administrador</h1>
              </div>

              <div className="button">
                <Button text="Salvar" color={theme.colors.primary} />
                <Button text="Cancelar" color={theme.colors.red} />
              </div>

              <div className="voltarSeta">
                <div className="seta">
                  <FaArrowLeft size="100%" />
                </div>

                <div className="voltar">
                  <Link to="/Administrador">
                    <h2>Voltar</h2>{' '}
                  </Link>
                </div>
              </div>
            </div>

            <div className="rightWrapper">
              <div className="centerRightWrapper">
                <div className="Dados">
                  <div className="DadosTexto">
                    <h1>Dados Pessoais</h1>
                  </div>

                  <div className="centerDados">
                    <div className="colunaDados">
                      <div className="coluna1">
                        <span>RG:</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna2">
                        <span>CPF:</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna3">
                        <span>Telefone:</span>
                      </div>
                    </div>
                  </div>

                  <div className="centerDados">
                    <div className="colunaDados">
                      <div className="coluna1">
                        <span>Data de Nascimento:</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna2">
                        <span>Sexo:</span>
                      </div>
                    </div>

                    <div className="colunaDados">
                      <div className="coluna3">
                        <span>Estado Civil:</span>
                      </div>
                    </div>
                  </div>

                  <div className="centerDados">
                    <div className="colunaDados2">
                      <div className="coluna1">
                        <span>Escolaridade:</span>
                      </div>
                    </div>

                    <div className="colunaDados2">
                      <div className="coluna2">
                        <span>Linguas:</span>
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
                    <h1>Endere??o</h1>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>Rua/Av:</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>N??:</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>Compl:</span>
                      </div>
                    </div>
                  </div>

                  <div className="centerEndereco">
                    <div className="colunaEndereco">
                      <div className="coluna1">
                        <span>Cidade:</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna2">
                        <span>Estado:</span>
                      </div>
                    </div>

                    <div className="colunaEndereco">
                      <div className="coluna3">
                        <span>CEP:</span>
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
                <span>Matricula:</span>
                <span>Departamento:</span>
                <span>Cargo:</span>
                <span>Turno:</span>
                <span>Status:</span>
                <span>Base:</span>
                <span>Head:</span>
                <span>Dom??nio:</span>
                <span>N??vel:</span>
                <span>Curso:</span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna2">
                <span>Tipo de Contrato:</span>
                <span>Natureza de contrato(PJ):</span>
                <span>Data de funda????o(PJ):</span>
                <span>E-mail:</span>
                <span>Data de admiss??o:</span>
                <span>Empresa contratada:</span>
                <span>Tempo de formaliza????o</span>
                <span>Tempo de casa:</span>
                <span>Faixa salarial:</span>
              </div>
            </div>

            <div className="coluna">
              <div className="coluna3">
                <span>Termo de PJ:</span>
                <span>Data de desligamento:</span>
                <span>Tipo de desligamento:</span>
                <span>Pesquisa de desligamento:</span>
                <span>Distrato:</span>
                <h1>Benef??cios</h1>
                <span>Plano de sa??de:</span>
                <span>Auxilio creche:</span>
                <span>Vale Transporte:</span>
                <span>Vale alimenta????o:</span>
              </div>
            </div>
          </div>
        </div>

        <div className="Wrapper3">
          <div className="DadosFuncionais">
            <span>
              <Link to="https://drive.google.com/drive/folders/1uCtcnSF6MzcH3uf1snDYsbrWUKH-Iz_j">C??digo de Conduta e ??tica</Link>
            </span>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default AdministradorEdit;
