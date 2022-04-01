import { chakra } from '@chakra-ui/react';
import * as S from './styles';
import {Box, Flex, Heading, Spacer, Button, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';

function Colab_Nav() {
  return (
    <Box bg={theme.colors.background} boxShadow=' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)'>
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
                    <Button className='button' as={MdOutlineLogout} color={ theme.colors.font}></Button>
                    <Button className='button' as={MdAccountCircle} color={ theme.colors.font}></Button>
                  </S.ContainerButton>
                  </div>
            </Heading>
      </S.ContainerFlex>
    </S.Container>
    </Box>

  );
};

export default Colab_Nav;
