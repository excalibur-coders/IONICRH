import RespBar_adm from 'components/Respbar_adm';
import * as React from 'react';
import * as S from './styles';
import {
  MdMenuBook,
  MdOutlinePeopleAlt,
  MdOutlineApartment,
  MdVideoLibrary,
  MdDesignServices,
  MdOutlineVideoSettings,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Cadastro_Curso_adm() {
  return (
    <>
      <S.Container>
        <header>
          <RespBar_adm />
        </header>
        <main>
          <div className="welcome">
            <h2>Cadastre ou edite os cursos</h2>
          </div>
          <div className="listar">
            <div className="botoes">
              <div className="left">
                <ul>
                  <li>
                    <a>
                      <Link to={'/Cadastrar_curso'}>
                        <span className="icon">
                          <MdVideoLibrary size="40px" />
                        </span>
                        <span className="tittle">Cursos</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to={'/curso_trilha'}>
                        <span className="icon">
                          <MdDesignServices size="40px" />
                        </span>
                        <span className="tittle">Trilhas</span>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a>
                      <Link to={'/criar_modulos'}>
                        <span className="icon">
                          <MdMenuBook size="40px" />
                        </span>
                        <span className="tittle">Módulos</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to={'/modulo_docs'}>
                        <span className="icon">
                          <MdOutlineVideoSettings size="40px" />
                        </span>
                        <span className="tittle">Contéudo cursos</span>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </S.Container>
    </>
  );
}

export default Cadastro_Curso_adm;
