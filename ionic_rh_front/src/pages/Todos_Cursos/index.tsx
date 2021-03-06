import { useEffect, useState, useCallback, SetStateAction } from 'react';
import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { theme } from 'theme';
import Input from 'components/Input';
import RespBar_adm from 'components/Respbar_adm';
import Sidemenu from 'components/sideMenu';
import { Table, Thead, Th, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './styles';
import { api } from 'services/api';

import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

interface ICurso {
  curso_nome: string;
  curso_id: number;
}

interface ITrilha {
  curso: ICurso;
  trilha_id: number;
  trilha_nome: string;
  juntos: ICurso[];
  userUserId: number;
}


function Todos_Cursos() {

  const cookies = parseCookies();
  const navigate = useNavigate();

  const [cursos, setCursos] = useState<ICurso[]>([]);
  const [loading, setLoading] = useState(false);
  //const [cargosPesquisados, setCargosPesquisados] = useState<ICurso[]>([]);
  //const [searchInput, setSearchInput] = useState("");


  const getAllCursos = useCallback(() => {
    setLoading(true);
    api
      .get('/curso/ver-cursos', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setCursos(data);
        //setCargosPesquisados(data);
        console.log(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading, setCursos/* , setCargosPesquisados */]);

  useEffect(() => {
    getAllCursos();
  }, []);

  console.log(cursos?.[0]?.curso_nome);

  // Barra de Pesquisa //

/*   const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
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
      const cargosFiltrado = cargos.filter((cargo) => (
        sanitizeText(cargo.cargo_area)?.includes(sanitizeText(searchInput))
        // console.log(cargo.cargo_area?.match(searchInput));
        //setCargosPesquisados(cargo?.cargo_area?.match(searchInput));
      ));
      setCargosPesquisados(cargosFiltrado);
    } else {
      setCargosPesquisados(cargos);
    }
  }, [searchInput]); */

  return (
    <>
      <div>
        <RespBar_adm />
      </div>

      <S.Container>

        <div className="input">
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
                Cursos
              </Box>
            </HStack>
          </div>
          <br></br>
          <div className="container">
            <br></br>
            <TableContainer>
              <Table variant="striped" size="lg" background="#00000029">
                <div className="TableTwo">
                  <Tbody>
                    <Thead>
                      <Tr>
                        <Th fontSize="2xl" fontWeight="bold">Nome</Th>
                        <Th fontSize="2xl" fontWeight="bold">Participantes</Th>
                      </Tr>
                    </Thead>
                     {cursos.map(cursos => (
                      <Tr key={cursos.curso_nome}>
                        <Td className="TBody" fontSize="xl">
                          {cursos.curso_nome}
                        </Td>
                        <Td>
                          <Link
                            fontSize="xl"
                            color={theme.colors.primary}
                            onClick={() => {
                              navigate(`/Consultor_Funcionarios/${cursos.curso_id}`);
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

export default Todos_Cursos;
