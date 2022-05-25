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
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
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
        console.log(data);
      })
      .catch((error: Error | AxiosError) => {
        console.log(error);
      });
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [setLoading, setCargos]);

  useEffect(() => {
    getAllCargos();
  }, []);

  // Barra de Pesquisa //

/*   const [searchInput, setSearchInput] = useState("");
  const cargosPesquisados = getAllCargos;

  const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  if (searchInput.length > 0) {
    cargosPesquisados.filter((cargo: string) => {
      return cargo.match(searchInput);
  });
  } */

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
                  <InputLeftElement children={<SearchIcon w={5} h={5} />} />
                  <Input
                    type="search"
/*                     onChange={handleChange}
                    value={searchInput} */
                    id="myInput"
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
            <HStack spacing="32vw">
              <Box fontSize="2xl" fontWeight="bold">
                Cargo
              </Box>
              <Box fontSize="2xl" fontWeight="bold">
                Departamento
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
              <Table variant="striped" size="lg" background="#00000029">
                <div className="TableTwo">
                  <Tbody>
                    {cargos.map(cargos => (
                      <Tr key={cargos.cargo_id}>
                        <Td className="TBody" fontSize="2xl">
                          {cargos.cargo_area}
                        </Td>
                        <Td className="TBody" fontSize="2xl">
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
