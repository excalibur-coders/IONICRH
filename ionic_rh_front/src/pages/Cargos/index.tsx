import { useEffect, useState, useCallback } from 'react';
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
          <HStack>
            <Box w="100px" fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <button onClick={() => navigate(-1)}>Voltar</button>
            </Box>
          </HStack>
          <br></br>
          <Box fontSize="4xl" fontWeight="bold">
            Cargos
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
          <HStack spacing="500px">
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
            <Table variant="striped" size="lg" background="#DBDBDB">
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
      </S.Container>
    </>
  );
}

export default Cargos;
