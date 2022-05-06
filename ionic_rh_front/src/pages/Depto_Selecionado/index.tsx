import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { useEffect, useState, useCallback } from 'react';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { Table, Tbody, Tr, Td } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './styles';
import { api } from 'services/api';

import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

/* interface IDepartamento {
  cargo: ICargo;
  dep_id: number;
  dep_name: string;
}

interface ICargo {
  cargo_area: string;
  contrato: IContrato;
}
interface IContrato {
  contrato_faixa_salarial: number;
  user: IFuncionarios;
}
interface IFuncionarios {
  user_nome: string;
}
 */
interface IFuncionarios {
  user_nome: string;
  contrato: IContrato;
}
interface IContrato {
  contrato_faixa_salarial: number;
  cargo: ICargo;
}
interface ICargo {
  cargo_area: string;
  departamento: IDepartamento;
}
interface IDepartamento {
  dep_id: number;
  dep_name: string;
}

function DeptoTI() {
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { id } = useParams();
  const [departamentos, setDepartamentos] = useState<IFuncionarios[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllDepartamentos = useCallback(() => {
    setLoading(false);
    api
      .get(`/departamentos/departamentos-filtro/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        console.log('Boa noite', data);
        setDepartamentos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setDepartamentos]);

  useEffect(() => {
    getAllDepartamentos();
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
          <HStack>
            <Box w="100px" fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <Link href="/home">Voltar</Link>
            </Box>
          </HStack>
          <br></br>
          <Box fontSize="4xl" fontWeight="bold">
            Departamento - TI
          </Box>
          <br></br>
          <HStack>
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
          </HStack>
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
          <Table variant="striped" size="lg">
            <div className="TableTwo">
              <Tbody>
                {/* Fazer um For / Map */}
                {/* {funcionarios.map(funcionario => {
                  //console.log('bom dia', funcionario);
                    <>
                      <Tr>
                        <Td fontSize="md">
                          {funcionario.cargo.contrato.user.user_nome}
                        </Td>
                        <Td>
                          <Link
                            href="/funcionarios"
                            fontSize="xl"
                            color={theme.colors.primary}
                            Ver
                            <ArrowForwardIcon color={theme.colors.primary} />
                          </Link>
                        </Td>
                      </Tr>
                    </>
                  );
                })} */}
              </Tbody>
            </div>
          </Table>
        </div>
      </S.Container>
    </>
  );
}

export default DeptoTI;
