import { chakra } from '@chakra-ui/react';
import * as S from './styles';
import {Box, Flex, Heading, Spacer, Button, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';

function Colab_Nav() {
  return (
    <div className='navbar'>
    <Box bg="#f4f4f5" width='100%' boxShadow=' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)' position='fixed'>
      <S.Container>
      <S.ContainerFlex>
            <img src={logo}/>
                   <div className='colab_routes' >
                    <a href="/Colab_home">Home</a>
                    <a href="/Colab_onboard">Onboard</a>
                  </div>
            <Heading  size='md'>
                  <div className='buttons_colab'>
                  <S.ContainerButton>
                    <a href=''><Button className='button' as={MdOutlineLogout} color={ theme.colors.font}></Button></a>
                    <a href='Colab_user'><Button className='button' href="Colab_user" as={MdAccountCircle} color={theme.colors.font}></Button></a>
                  </S.ContainerButton>
                  </div>
            </Heading>
      </S.ContainerFlex>
    </S.Container>
    </Box>
    </div>

  );
};

export default Colab_Nav;
