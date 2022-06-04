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
import { useNavigate } from 'react-router-dom';
import Consultor_nav from 'components/Consultor_nav';

interface IFuncionarios {
  user_id: string;
  user_nome: string;
  contrato: IContrato[];
  dep_name: IDepartamento;
  cargo_area: ICargo;
  user_email: string;
}

interface IContrato {
  contrato_faixa_salarial: number;
  cargo: ICargo;
  contrato_matricula: string;
}

interface IDepartamento {
  dep_name: string;
}

interface ICargo {
  cargo_area: string;
  departamento: IDepartamento;
}

function Consultor_Funcionarios() {
  const cookies = parseCookies();
  const navigate = useNavigate();

  const [funcionarios, setFuncionarios] = useState<IFuncionarios[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllFuncionarios = useCallback(() => {
    setLoading(true);
    api
      .get('/user/listagen-user', {
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
                        <Th fontSize="2xl" fontWeight="bold">Matricula</Th>
                        <Th fontSize="2xl" fontWeight="bold">Email</Th>
                        <Th fontSize="2xl" fontWeight="bold">Trilha</Th>
                      </Tr>
                    </Thead>
                    {funcionarios.map(funcionario => {
                      //console.log('bom dia', funcionario);
                      return (
                        <>
                          <Tr className="TBody_2">
                            <Td className="TBody_2" fontSize="md">
                              {funcionario.user_nome}
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
                                href={`CURSOTELA/${funcionario.user_id}`}
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
                    })}
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
