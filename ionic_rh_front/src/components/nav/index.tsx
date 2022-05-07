import * as S from './styles';
import { Box, Heading, Spacer, Button } from '@chakra-ui/react';
import { MdAccountCircle, MdOutlineLogout } from 'react-icons/md';
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { AuthContext } from 'hooks/useAuth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box
      bg={theme.colors.background}
      boxShadow=" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
    >
      <S.Container>
        <S.ContainerFlex>
          <img src={logo} />
          <Box p="2">
            <Heading size="md">
              <Spacer>
                <div className="teste">
                  <S.ContainerButton>
                    <Button
                      className="button"
                      as={MdOutlineLogout}
                      color={theme.colors.font}
                      onClick={() => {
                        signOut();
                        navigate('/');
                      }}
                    />
                    <Button
                      className="button"
                      href="Colab_user"
                      as={MdAccountCircle}
                      color={theme.colors.font}
                      onClick={() => {
                        navigate('/Colab_user');
                      }}
                    />
                  </S.ContainerButton>
                </div>
              </Spacer>
            </Heading>
          </Box>
        </S.ContainerFlex>
      </S.Container>
    </Box>
  );
}

export default Navbar;
