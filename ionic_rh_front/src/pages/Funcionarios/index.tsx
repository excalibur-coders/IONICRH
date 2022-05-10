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
import RespBar from 'components/RespBar';
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
        <RespBar />
      </div>

      <S.Container>
        <div>
          <Sidemenu />
        </div>

        <div className="input">
          <br></br>
          <HStack>
            <Box w="100px" fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <Link href="/home">Voltar</Link>
            </Box>
          </HStack>
          <br></br>
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
                width="70vw"
                placeholder="       Pesquisar"
                labelText={''}
              />
            </InputGroup>
          </Box>
          <br></br>
          <HStack spacing="150px">
            <Box fontSize="2xl" fontWeight="bold">
              Nome
            </Box>
            <Box fontSize="2xl" fontWeight="bold">
              Salário
            </Box>
            <Box fontSize="2xl" fontWeight="bold">
              Departamento
            </Box>
            <HStack spacing="250px">
              <Box fontSize="2xl" fontWeight="bold">
                Cargo
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Perfil
              </Box>
            </HStack>
          </HStack>
          <Divider
            orientation="horizontal"
            borderColor={theme.colors.font}
            variant="solid"
            size="10rem"
          />
          <br></br>
          <TableContainer>
            <Table variant="striped" size="lg" background="#DBDBDB">
              <div className="TableTwo">
                <Tbody>
                  {funcionarios.map(funcionario => {
                    //console.log('bom dia', funcionario);
                    return (
                      <>
                        <Tr>
                          <Td fontSize="md">{funcionario.user_nome}</Td>
                          <Td>
                            {funcionario.contrato?.[0]?.contrato_faixa_salarial
                              ? funcionario.contrato?.[0]
                                  ?.contrato_faixa_salarial
                              : '-'}
                          </Td>
                          <Td></Td>
                          <Td>
                            {funcionario.contrato?.[0]?.cargo.departamento
                              .dep_name
                              ? funcionario.contrato?.[0]?.cargo.departamento
                                  .dep_name
                              : '-'}
                          </Td>
                          <Td></Td>
                          <Td>
                            {funcionario.contrato?.[0]?.cargo.cargo_area
                              ? funcionario.contrato?.[0]?.cargo.cargo_area
                              : '-'}
                          </Td>
                          <Td></Td>
                          <Td></Td>
                          <Td>
                            <Link
                              href="/funcionarios"
                              fontSize="xl"
                              color={theme.colors.primary}
                            >
                              Ver
                              <ArrowForwardIcon color={theme.colors.primary} />
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
      </S.Container>
    </>
  );
}

export default Funcionarios;
