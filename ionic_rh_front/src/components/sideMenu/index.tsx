import { Link } from 'react-router-dom';
import { List, ListItem, ListIcon } from '@chakra-ui/react';
import temporary from '../../assets/svg/temporary.svg';

import * as S from './styles';
import { useState } from 'react';

function Sidemenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Container>
      <div className="contaiiner">
        <div className={`navigation ${isOpen && 'open'}`}>
          <ul>
            <li>
              <a href="">
                <span className="icon">
                  <img src={temporary} />
                </span>
                <span className="tittle">Cargos</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <img src={temporary} />
                </span>
                <span className="tittle">Departamentos</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <img src={temporary} />
                </span>
                <span className="tittle">Funcionarios</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="icon">
                  <img src={temporary} />
                </span>
                <span className="tittle">Organograma</span>
              </a>
            </li>
          </ul>
        </div>
        <div
          className={`toggle ${isOpen && 'open'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src={temporary} />
        </div>
      </div>
    </S.Container>
  );
}

export default Sidemenu;
