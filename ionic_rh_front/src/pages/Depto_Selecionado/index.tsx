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
import Sidemenu from 'components/sideMenu';
import RespBar_adm from 'components/Respbar_adm';
import Input from 'components/Input';
import { Table, Thead, Tbody, Tr, Td, Th } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './styles';
import { api } from 'services/api';

import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { useNavigate, useParams } from 'react-router-dom';


interface IContrato {
  contrato_faixa_salarial: number;
  user: {
    user_nome: string;
    user_id: number;
  };
}

interface IFuncionarios {
  cargo?: ICargo[];
  dep_id: number;
  dep_name: string;
}
interface ICargo {
  cargo_area: string;
  contrato: IContrato[];
}

function DeptoTI() {
  const cookies = parseCookies();
  const navigate = useNavigate();
  const { id } = useParams();
  const [departamentos, setDepartamentos] = useState<IFuncionarios>();
  const [loading, setLoading] = useState(false);

  //const [funcionariosPesquisados, setFuncionariosPesquisados] = useState<IContrato[]>([]);
  //const [searchInput, setSearchInput] = useState("");

  const getAllDepartamentos = useCallback(() => {
    setLoading(false);
    api
      .get(`/departamentos/departamentos-filtro/${id}`, {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        /* console.log('Boa noite', data); */
        setDepartamentos(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [cookies, id]);

  useEffect(() => {
    getAllDepartamentos();
    departamentos?.cargo?.forEach(carg => {
      carg.contrato.forEach(contr => {
        console.log(contr.user);
      });
    });
  }, []);

/*         // Barra de Pesquisa //

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
            const funcionarioFiltrado = departamentos.filter((departamento) => (
              sanitizeText(user.user_nome)?.includes(sanitizeText(searchInput))
            ));
            setFuncionariosPesquisados(funcionarioFiltrado);
          } else {
            setFuncionariosPesquisados(funcioarios);
          }
        }, [departamentos, sanitizeText, searchInput]); */

  return (
    <>
      <div>
        <RespBar_adm />
      </div>

      <S.Container>
        <div>
          <Sidemenu />
        </div>

        <div className="input">
          <br></br>
          <div className="container1">
            <HStack>
              <Box w="100px" fontSize={20}>
                <ArrowBackIcon w={7} h={7} />
                <Link
                  onClick={() => {
                    navigate(-1);
                  }}
                >
                  Voltar
                </Link>
              </Box>
            </HStack>
            <br></br>
            <HStack className="search">
              <Box fontSize="4xl" fontWeight="bold">
                Departamento - <br></br> {departamentos?.dep_name}
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
          <div>
            <br></br>

            <div>
              <Table variant="striped" size="lg" background="#DBDBDB">
              <Thead>
                      <Tr>
                        <Th fontSize="2xl" fontWeight="bold">Nome</Th>
                        <Th fontSize="2xl" fontWeight="bold">Salário</Th>
                        <Th fontSize="2xl" fontWeight="bold">Cargo</Th>
                        <Th fontSize="2xl" fontWeight="bold">Perfil</Th>
                      </Tr>
                    </Thead>
                <Tbody>
                  {departamentos?.cargo?.map((carg, index) =>
                    carg.contrato.map(ctr => (
                      <Tr key={index}>
                        <Td className="TBody" fontSize="lg">
                          {ctr.user.user_nome}
                        </Td>
                        <Td className="TBody" fontSize="lg">
                          {ctr.contrato_faixa_salarial}
                        </Td>
                        <Td className="TBody" fontSize="xl">
                          {carg.cargo_area}
                        </Td>
                        <Td>
                          <Link
                            fontSize="xl"
                            color={theme.colors.primary}
                            onClick={() => {
                              navigate(`/user/${ctr.user.user_id}`);
                            }}
                          >
                            Ver
                            <ArrowForwardIcon color={theme.colors.primary} />
                          </Link>
                        </Td>
                      </Tr>
                    )),
                  )}
                </Tbody>
              </Table>
            </div>
          </div>
        </div>
      </S.Container>
    </>
  );
}

export default DeptoTI;
