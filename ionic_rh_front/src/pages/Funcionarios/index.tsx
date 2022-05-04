import { useEffect, useState, useCallback } from 'react';
import { theme } from 'theme';
import { Box, Icon, Link, Divider, Spinner } from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon } from '@chakra-ui/icons';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { MdFilterList, MdOutlineAccountBox } from 'react-icons/md';
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

interface IFuncionarios {
  user_id: string;
  user_nome: string;
  contrato: IContrato[];
  dep_name: IDepartamento;
  cargo_area: ICargo;
}

interface IContrato {
  contrato_faixa_salarial: number;
  cargo: ICargo;
}

interface IDepartamento {
  dep_name: string;
}

interface ICargo {
  cargo_area: string;
  departamento: IDepartamento;
}

function Funcionarios() {
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
        <Navbar />
      </div>

      <S.Container>
        <div>
          <Sidebar />
        </div>

        <div className="input">
          <br></br>
          <HStack spacing="600px">
            <Box w="100px" fontSize={20}>
              <Icon as={MdFilterList} w={9} h={5} />
              Filtrar
            </Box>
            <Box w="100px" fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <Link href="/home">Voltar</Link>
            </Box>
          </HStack>
          <br></br>
          <HStack spacing="200px">
            <Box w="10px">
              <Input
                size="xs"
                width="200px"
                fontSize={20}
                placeholder="Nome, cargo ou departamento"
                labelText={''}
              />
            </Box>
            <Box w="100px">
              <SearchIcon w={5} h={5} />
            </Box>
          </HStack>

          <div className="Table">
            <TableContainer>
              <Table variant="simple" size="md">
                <Thead>
                  <Tr>
                    <Th fontSize="2xl" color="black">
                      #Nome
                    </Th>
                    <Th fontSize="2xl" color="black">
                      Salário
                    </Th>
                    <Th fontSize="2xl" color="black">
                      Departamento
                    </Th>
                    <Th fontSize="2xl" color="black">
                      Cargo
                    </Th>
                    <Th fontSize="2xl" color="black">
                      Perfil
                    </Th>
                  </Tr>
                </Thead>
              </Table>
              <Divider
                orientation="horizontal"
                borderColor={theme.colors.font}
                variant="solid"
                size="10rem"
              />
              <Table variant="simple" size="lg">
                <div className="TableTwo">
                  <Tbody>
                    {!loading ? (
                      funcionarios.map(funcionario => {
                        console.log('bom dia', funcionario);
                        return (
                          <>
                            <Tr>
                              <Td fontSize="xl">{funcionario.user_nome}</Td>
                              {/* <Td fontSize='xl'>R$ 2000,00</Td>
                          <Td fontSize='xl'>T.I</Td>
                          <Td fontSize='xl'>Desenvolvedor</Td> */}
                              <Td>
                                {funcionario.contrato?.[0]
                                  ?.contrato_faixa_salarial
                                  ? funcionario.contrato?.[0]
                                      ?.contrato_faixa_salarial
                                  : '-'}
                              </Td>
                              <Td>
                                {funcionario.contrato?.[0]?.cargo.departamento
                                  .dep_name
                                  ? funcionario.contrato?.[0]?.cargo
                                      .departamento.dep_name
                                  : '-'}
                              </Td>
                              <Td>
                                {funcionario.contrato?.[0]?.cargo.cargo_area
                                  ? funcionario.contrato?.[0]?.cargo.cargo_area
                                  : '-'}
                              </Td>
                              <Td>
                                <Link href="/perfil" fontSize="4xl">
                                  <MdOutlineAccountBox color="#4D4E4F" />
                                </Link>
                              </Td>
                            </Tr>
                          </>
                        );
                      })
                    ) : (
                      <div className="spinnerWrapper">
                        <Spinner size="md" />
                      </div>
                    )}
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

export default Funcionarios;
