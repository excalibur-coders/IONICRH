import RespBar_adm from 'components/Respbar_adm';
import * as React from 'react';
import * as S from './styles';
import {
  MdOutlineBusinessCenter,
  MdOutlinePeopleAlt,
  MdOutlineApartment,
  MdSchema,
} from 'react-icons/md';
import { Link } from 'react-router-dom';

function Adm_Home() {
  return (
    <>
      <S.Container>
        <header>
          <RespBar_adm />
        </header>
        <main>
          <div className="welcome">
            <h1>Home</h1>
            <h2>Bem vindo Administrador</h2>
          </div>
          <div className="listar">
            <a>
              <span className="tittle"> Suas opções</span>
            </a>
            <div className="botoes">
              <div className="left">
                <ul>
                  <li>
                    <a>
                      <Link to={'/Cargos'}>
                        <span className="icon">
                          <MdOutlineBusinessCenter size="40px" />
                        </span>
                        <span className="tittle">Cargos</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to={'/Departamentos'}>
                        <span className="icon">
                          <MdOutlineApartment size="40px" />
                        </span>
                        <span className="tittle">Departamentos</span>
                      </Link>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <a>
                      <Link to={'/Funcionarios'}>
                        <span className="icon">
                          <MdOutlinePeopleAlt size="40px" />
                        </span>
                        <span className="tittle">Funcionarios</span>
                      </Link>
                    </a>
                  </li>
                  <li>
                    <a>
                      <Link to={'/Organograma'}>
                        <span className="icon">
                          <MdSchema size="40px" />
                        </span>
                        <span className="tittle">Organograma</span>
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

export default Adm_Home;
