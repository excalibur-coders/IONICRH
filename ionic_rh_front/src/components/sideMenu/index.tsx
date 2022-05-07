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
                <Link to={'/Cargos'}>
                  <span className="icon">
                    <MdOutlineBusinessCenter size="35px" />
                  </span>
                  <span className="tittle">Cargos</span>
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={'/Departamentos'}>
                  <span className="icon">
                    <MdOutlineApartment size="35px" />
                  </span>
                  <span className="tittle">Departamentos</span>
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={'/Funcionarios'}>
                  <span className="icon">
                    <MdOutlinePeopleAlt size="35px" />
                  </span>
                  <span className="tittle">Funcionarios</span>
                </Link>
              </a>
            </li>
            <li>
              <a>
                <Link to={''}>
                  <span className="icon">
                    <MdSchema size="35px" />
                  </span>
                  <span className="tittle">Organograma</span>
                </Link>
              </a>
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
