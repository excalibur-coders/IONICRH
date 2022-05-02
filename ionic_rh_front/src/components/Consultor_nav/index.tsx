import { chakra } from '@chakra-ui/react';
import * as S from './styles';
import {Box, Flex, Heading, Spacer, Button, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { useContext, useState } from 'react';
import {AuthContext} from 'hooks/useAuth'
import { useNavigate } from 'react-router-dom';

function Consultor_nav (){
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { signOut } = useContext(AuthContext)
  return (
    <S.Navbar>
        <a href="/Colab_home"><img src={logo}/></a>
      <S.Navlist>
          <ul className={`nav_menu ${isOpen && "open"}`}>
            <li className='nav_item'><a href='/Colab_home'>Home</a></li>
            <li className='nav_item0'><a href='/Colab_user'>Perfil</a></li>
            <li className='nav_item0'><a href=''>Sair</a></li>
          </ul>
          <div className={`nav_toggler ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <div className='bar'></div>
          </div>
      </S.Navlist>
      <S.Navbutton>
        <div className=''>
          <Button
            className='button'
            href="Colab_user"
            as={MdAccountCircle}
            color={theme.colors.font}
            onClick={() => {
                navigate('/Colab_user');
            }}
          />
            <Button
              className='button'
              as={MdOutlineLogout}
              color={ theme.colors.font}
              onClick={() => {
                signOut();
                navigate('/');
              }}
            />
        </div>
      </S.Navbutton>
    </S.Navbar>
  );
};

export default Consultor_nav;