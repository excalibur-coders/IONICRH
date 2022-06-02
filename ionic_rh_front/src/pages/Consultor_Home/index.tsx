import Consultor_nav from 'components/Consultor_nav';
import * as React from 'react';
import * as S from './styles';
import {
  MdVideoLibrary,
  MdOutlinePeopleAlt,
  MdOutlinePlaylistAdd,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Consultor_Home() {
  return (
    <>
      <S.Container>
        <header>
          <Consultor_nav />
        </header>
        <main>
          <div className="welcome">
            <h1>Bem Vindo, Consultor!</h1>
          </div>
          <div className="listar">
            <div className="botoes">
              <div className="left">
                <ul>
                  <li>
                    <a>
                      <Link to={'/Consultor'}>
                        <span className="icon">
                          <MdVideoLibrary size="40px" />
                        </span>
                        <span className="tittle">Cursos</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                    <Link to={'/Consultor_funcionarios'}>
                        <span className="icon">
                          <MdOutlinePeopleAlt size="40px" />
                        </span>
                        <span className="tittle">Funcionarios</span>
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

export default Consultor_Home;
