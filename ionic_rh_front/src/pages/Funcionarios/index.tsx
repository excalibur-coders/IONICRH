import { useEffect, useState, useCallback, SetStateAction } from 'react';
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
import RespBar_adm from 'components/Respbar_adm';
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
  const [funcionariosPesquisados, setFuncionariosPesquisados] = useState<IFuncionarios[]>([]);
  const [searchInput, setSearchInput] = useState("");

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

    // Barra de Pesquisa //

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
      e.preventDefault();
      setSearchInput(e.target.value);
    };

    const sanitizeText = useCallback(
      text =>
        text
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase(),
      [],
    );

    useEffect(() => {
      if (searchInput.length > 0) {
        const funcionarioFiltrado = funcionarios.filter((funcionario) => (
          sanitizeText(funcionario?.user_nome)?.includes(sanitizeText(searchInput))
          // console.log(cargo.cargo_area?.match(searchInput));
          //setCargosPesquisados(cargo?.cargo_area?.match(searchInput));
        ));
        setFuncionariosPesquisados(funcionarioFiltrado);
      } else {
        setFuncionariosPesquisados(funcionarios);
      }
    }, [funcionarios, sanitizeText, searchInput]);

  return (
    <>
      <div>
        <RespBar_adm />
      </div>

      <S.Container>
        <div className="side">
          <Sidemenu />
        </div>

        <div className="Corpo">
          <br></br>
          <div className="container1">
            <HStack>
              <Box w="100px" fontSize={20}>
                <ArrowBackIcon w={7} h={7} />
                <button onClick={() => navigate(-1)}>Voltar</button>
              </Box>
            </HStack>
            <br></br>
            <HStack className="search">
              <Box fontSize="4xl" fontWeight="bold">
                Funcionários
              </Box>
              <Box>
                <InputGroup>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <InputLeftElement className="marginTop" children={<SearchIcon w={5} h={5} />} />
                  <Input className="padding-left40"
                    type="search"
                    onChange={handleChange}
                    value={searchInput}
                    fontSize={20}
                    size="lg"
                    width="50vw"
                    placeholder="Pesquisar"
                    labelText={''}
                  />
                </InputGroup>
              </Box>
            </HStack>
          </div>
          <br></br>
          <div className="container">
            <HStack className="TBody_2">
              <Box fontSize="2xl" fontWeight="bold">
                Nome
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Salário
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Departamento
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Cargo
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Perfil
              </Box>
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
                     {funcionariosPesquisados.map(funcionario => {
                      //console.log('bom dia', funcionario);
                      return (
                        <>
                          <Tr className="TBody_2">
                            <Td className="TBody_2" fontSize="md">
                              {funcionario.user_nome}
                            </Td>
                            <Td className="TBody_2">
                              {funcionario.contrato?.[0]
                                ?.contrato_faixa_salarial
                                ? funcionario.contrato?.[0]
                                    ?.contrato_faixa_salarial
                                : '-'}
                            </Td>
                            <Td className="TBody_2">
                              {funcionario.contrato?.[0]?.cargo.departamento
                                .dep_name
                                ? funcionario.contrato?.[0]?.cargo.departamento
                                    .dep_name
                                : '-'}
                            </Td>
                            <Td className="TBody_2">
                              {funcionario.contrato?.[0]?.cargo.cargo_area
                                ? funcionario.contrato?.[0]?.cargo.cargo_area
                                : '-'}
                            </Td>
                            <Td className="TBody_2">
                              <Link
                                href={`User/${funcionario.user_id}`}
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

export default Funcionarios;
