import { useEffect, useState, useCallback, SetStateAction } from 'react';
import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { SearchIcon, ArrowBackIcon } from '@chakra-ui/icons';
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

interface ICargo {
  departamento: IDepartamento;
  cargo_id: number;
  headID?: string;
  cargo_nivel?: string;
  cargo_area?: string;
}

interface IDepartamento {
  dep_name?: string;
}



function Cargos() {

  const cookies = parseCookies();
  const navigate = useNavigate();

  const [cargos, setCargos] = useState<ICargo[]>([]);
  const [loading, setLoading] = useState(false);
  const [cargosPesquisados, setCargosPesquisados] = useState<ICargo[]>([]);
  const [searchInput, setSearchInput] = useState("");


  const getAllCargos = useCallback(() => {
    setLoading(true);
    api
      .get('/cargo/cargos', {
        headers: {
          Authorization: `Bearer ${cookies['ionicookie.token']}`,
        },
      })
      .then(({ data }) => {
        setCargos(data);
        setCargosPesquisados(data);
        console.log(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading, setCargos/* , setCargosPesquisados */]);

  useEffect(() => {
    getAllCargos();
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
      const cargosFiltrado = cargos.filter((cargo) => (
        sanitizeText(cargo.cargo_area)?.includes(sanitizeText(searchInput))
        // console.log(cargo.cargo_area?.match(searchInput));
        //setCargosPesquisados(cargo?.cargo_area?.match(searchInput));
      ));
      setCargosPesquisados(cargosFiltrado);
    } else {
      setCargosPesquisados(cargos);
    }
  }, [searchInput]);

  return (
    <>
      <div>
        <RespBar_adm />
      </div>

      <S.Container>
        <div className="sidebar">
          <Sidemenu />
        </div>

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
                Cargos
              </Box>
              <Box>
                <InputGroup>
                  {/* eslint-disable-next-line react/no-children-prop */}
                  <InputLeftElement className="marginTop" pointerEvents="none" children={<SearchIcon/>} />
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
              <Table variant="striped" size="lg" background="#00000029">
                <div className="TableTwo">
                  <Tbody>
                    <Thead>
                      <Tr>
                        <Th fontSize="2xl" fontWeight="bold">Cargo</Th>
                        <Th fontSize="2xl" fontWeight="bold">Departamento</Th>
                      </Tr>
                    </Thead>
                     {cargosPesquisados.map(cargos => (
                      <Tr key={cargos.cargo_id}>
                        <Td className="TBody" fontSize="xl">
                          {cargos.cargo_area}
                        </Td>
                        <Td className="TBody" fontSize="xl">
                          {cargos.departamento.dep_name}
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

export default Cargos;
