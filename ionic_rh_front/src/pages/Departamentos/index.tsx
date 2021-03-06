import { useEffect, useState, useCallback, SetStateAction } from 'react';
import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
  Thead,
  Th,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { theme } from 'theme';
import RespBar_adm from 'components/Respbar_adm';
import Sidemenu from 'components/sideMenu';
import Input from 'components/Input';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './styles';
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

interface IDepartamentos {
  dep_name: string;
  dep_id: number;
}

function Departamentos() {
  const cookies = parseCookies();

  const [departamentosPesquisados, setDepartamentosPesquisados] = useState<IDepartamentos[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const [departamentos, setDepartamentos] = useState<IDepartamentos[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const getAllDepartamentos = useCallback(() => {
    setLoading(true);
    api
      .get('/departamentos/departamentos', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setDepartamentos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    getAllDepartamentos();
  }, [getAllDepartamentos]);


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
          const departamentoFiltrado = departamentos.filter((departamento) => (
            sanitizeText(departamento?.dep_name)?.includes(sanitizeText(searchInput))
          ));
          setDepartamentosPesquisados(departamentoFiltrado);
        } else {
          setDepartamentosPesquisados(departamentos);
        }
      }, [departamentos, sanitizeText, searchInput]);

  return (
    <>
      <div>
        <RespBar_adm />
      </div>

      <S.Container>
        <div>
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
                Departamentos
              </Box>
              <Box>
                <InputGroup>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <InputLeftElement  className="marginTop" children={<SearchIcon w={5} h={5} />} />
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
            <br></br>
            <TableContainer>
              <Table variant="striped" size="lg" background="#DBDBDB">
                <div className="TableTwo">
                  <Tbody>
                  <Thead>
                      <Tr>
                        <Th fontSize="2xl" fontWeight="bold">Nome</Th>
                      </Tr>
                    </Thead>
                    {departamentosPesquisados.map(departamento => (
                      <Tr key={departamento.dep_id}>
                        <Td className="TBody" fontSize="xl">
                          {departamento.dep_name}
                        </Td>
                        <Td>
                          <Link
                            fontSize="xl"
                            color={theme.colors.primary}
                            onClick={() => {
                              navigate(`/Departamento/${departamento.dep_id}`);
                            }}
                          >
                            Ver
                            <ArrowForwardIcon color={theme.colors.primary} />
                          </Link>
                        </Td>
                      </Tr>
                    ))}
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

export default Departamentos;
