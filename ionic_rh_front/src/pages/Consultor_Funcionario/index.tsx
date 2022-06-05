import { useEffect, useState, useCallback } from 'react';
import { theme } from 'theme';
import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import Input from 'components/Input';
import Sidemenu from 'components/sideMenu';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './style';
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Consultor_nav from 'components/Consultor_nav';

interface ITrilha {
  trilha_id: number;
  trilha_nome: string;
  junto: IUser[];
  juntos: ICurso[];
}
interface ICurso {
  curso_id: number;
  curso_nome: string;
}

interface IUser {
  user_nome: string;
  user_email: string;
}

function Consultor_Funcionarios() {
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { id } = useParams();

  const [funcionarios, setFuncionarios] = useState<ITrilha[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllFuncionarios = useCallback(() => {
    setLoading(true);
    api
      .get(`/curso/ver-trilhas/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setFuncionarios(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading, setFuncionarios]);

  useEffect(() => {
    getAllFuncionarios();
  }, []);

  return (
    <>
      <div>
        <Consultor_nav/>
      </div>

      <S.Container>

        <div className="Corpo">
          <br></br>
          <div className="container1">
            <HStack className="search">
              <Box fontSize="4xl" fontWeight="bold">
                Funcionários
              </Box>
              <Box>
                <InputGroup>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <InputLeftElement children={<SearchIcon w={5} h={5} />} />
                  <Input
                    fontSize={20}
                    size="lg"
                    width="50vw"
                    placeholder="       Pesquisar"
                    labelText={''}
                  />
                </InputGroup>
              </Box>
            </HStack>
          </div>
          <br></br>
          <div className="container">
            <br></br>
            <TableContainer>
              <Table variant="striped" size="lg" background="#DBDBDB">
                <div className="TableTwo">
                  <Tbody>
                  <Thead>
                      <Tr>
                        <Th fontSize="2xl" fontWeight="bold">Nome</Th>
                        <Th fontSize="2xl" fontWeight="bold">E-mail</Th>
                        <Th fontSize="2xl" fontWeight="bold">Progresso</Th>
                      </Tr>
                    </Thead>
                    {funcionarios.map((funcionario) => {
                      funcionario.junto.map((user) => {
                        return (
                          <Tr key={user.user_nome} className="TBody_2">
                            <Td className="TBody_2" fontSize="md">
                              {user.user_nome}
                            </Td>
                          </Tr>)
                      })
                    })}
{/*                     {funcionarios.map(funcionario => {
                      return (
                        <>
                          <Tr className="TBody_2">
                            <Td className="TBody_2" fontSize="md">
                              {funcionario.junto.map(user =>
                                user.user_nome)}
                            </Td>
                            <Td className="TBody_2">
                              {funcionario.contrato?.[0]?.contrato_matricula
                                ? funcionario.contrato?.[0]?.contrato_matricula
                                : '-'}
                            </Td>
                            <Td className="TBody_2">
                              {funcionario.user_email
                                ? funcionario.user_email
                                : '-'}
                            </Td>
                            <Td className="TBody_2">
                              <Link
                                href={`CURSOTELA/${funcionario.userUserId}`}
                                fontSize="xl"
                                color={theme.colors.primary}
                              >
                                Ver
                                <ArrowForwardIcon
                                  color={theme.colors.primary}
                                />
                              </Link>
                            </Td>
                          </Tr>
                        </>
                      );
                    })} */}
                  </Tbody>
                </div>
              </Table>
            </TableContainer>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default Consultor_Funcionarios;
