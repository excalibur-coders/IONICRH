import * as S from './styles';
import { Box, Heading, Spacer, Button, Link } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import { MdAccountCircle, MdOutlineLogout } from 'react-icons/md';
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';
import { AuthContext } from 'hooks/useAuth';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function navbar() {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <Box bg="#F4F4F5" boxShadow=" 2px 2px 2px 1px rgba(0, 0, 0, 0.2)">
      <S.Container>
        <S.ContainerFlex>
          <img src={logo} />
          <Box p="2">
            <Heading size="md">
              <Spacer>
                <HStack spacing="600px">
                  <Box w="200px">
                    <Link
                      href="#"
                      size="lg"
                      variant="ghost"
                      fontSize="20px"
                    ></Link>
                  </Box>
                  <HStack spacing="5px">
                    <Box w="100px">
                      <Link size="lg" variant="ghost" fontSize="20px">
                        Home
                      </Link>
                    </Box>
                    <Box w="100px">
                      <Link size="md" variant="ghost" fontSize="20px"></Link>
                    </Box>
                    <Spacer></Spacer>
                    <Box w="50px">
                      <Button
                        className="button"
                        as={MdOutlineLogout}
                        color={theme.colors.font}
                        onClick={() => {
                          signOut();
                          navigate('/');
                        }}
                      />
                    </Box>
                    <Box w="50px">
                      <Button
                        className="button"
                        href="Colab_user"
                        as={MdAccountCircle}
                        color={theme.colors.font}
                        onClick={() => {
                          navigate('/Colab_user');
                        }}
                      />
                    </Box>
                  </HStack>
                </HStack>
              </Spacer>
            </Heading>
          </Box>
        </S.ContainerFlex>
      </S.Container>
    </Box>
  );
}

export default navbar;
