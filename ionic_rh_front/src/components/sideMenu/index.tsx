import { Link } from 'react-router-dom';
import { List, ListItem, ListIcon, Button } from '@chakra-ui/react';
import * as S from './styles';
import { useState } from 'react';
import {
  MdOutlineBusinessCenter,
  MdOutlinePeopleAlt,
  MdOutlineApartment,
  MdSchema,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlinePlaylistAdd,
  MdFormatListBulleted,
  MdAdminPanelSettings,
  MdOutlinePersonPin,
  MdOutlineDesktopMac,
} from 'react-icons/md';
function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <div className="contaiiner">
        <div className={`navigation ${isOpen && 'open'}`}>
          <ul>
            <li>
              <a>
                <Link to={'/Cadastrar'}>
                  <span className="icon">
                    <MdOutlinePlaylistAdd size="35px" />
                  </span>
                  <span className="tittle">Cadastrar</span>
                </Link>
              </a>
            </li>
            <li>
              <a>
                <span className="icon">
                  <MdFormatListBulleted size="35px" />
                </span>
                <span className="tittle">Listar</span>
              </a>
              <ul>
                <li>
                  <a>
                    <Link to={'/Cargos'}>
                      <span className="icon">
                        <MdOutlineBusinessCenter size="25px" />
                      </span>
                      <span className="tittle">Cargos</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={'/Departamentos'}>
                      <span className="icon">
                        <MdOutlineApartment size="25px" />
                      </span>
                      <span className="tittle">Departamentos</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={'/Funcionarios'}>
                      <span className="icon">
                        <MdOutlinePeopleAlt size="25px" />
                      </span>
                      <span className="tittle">Funcionarios</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a>
                <span className="icon">
                  <MdSchema size="35px" />
                </span>
                <span className="tittle">Organograma</span>
              </a>
              <ul>
                <li>
                  <a>
                    <Link to={'/Organograma/marketing'}>
                      <span className="icon">
                        <MdAdminPanelSettings size="25px" />
                      </span>
                      <span className="tittle">Marketing Institucional</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={'/Organograma/administrative'}>
                      <span className="icon">
                        <MdOutlinePersonPin size="25px" />
                      </span>
                      <span className="tittle">{'Administrative & Financial'}</span>
                    </Link>
                  </a>
                </li>
                <li>
                  <a>
                    <Link to={'/Organograma/ti'}>
                      <span className="icon">
                        <MdOutlineDesktopMac size="25px" />
                      </span>
                      <span className="tittle">IT Infrastructure Ops</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div
          className={`toggle ${isOpen && 'open'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="after">
            <MdKeyboardArrowRight size="25px" />
          </span>
          <span className="before">
            <MdKeyboardArrowLeft size="25px" />
          </span>
        </div>
      </div>
    </S.Container>
  );
}

export default Sidemenu;
