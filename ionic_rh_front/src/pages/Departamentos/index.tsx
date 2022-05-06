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
import Navbar from 'components/nav';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import { Table, Tbody, Tr, Td, TableContainer } from '@chakra-ui/react';
import { HStack } from '@chakra-ui/react';
import * as S from './styles';
import { api } from 'services/api';
import { parseCookies } from 'nookies';
import { AxiosError } from 'axios';

interface IDepartamentos {
  dep_name: string;
}

function Departamentos() {
  const cookies = parseCookies();

  const [departamentos, setDepartamentos] = useState<IDepartamentos[]>([]);
  const [loading, setLoading] = useState(false);

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
  }, [cookies]);

  useEffect(() => {
    getAllDepartamentos();
  }, [getAllDepartamentos]);

  return (
    <>
      <div>
        <Navbar></Navbar>
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
            Departamentos
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
          <Box fontSize="2xl" fontWeight="bold">
            Nome
          </Box>
          <Divider
            orientation="horizontal"
            borderColor={theme.colors.font}
            variant="solid"
            size="10rem"
          />
          <br></br>
          <TableContainer>
            <Table
              variant="striped"
              size="lg"
              className="Table"
              background="#DBDBDB"
            >
              <div className="TableTwo">
                <Tbody>
                  {departamentos.map(departamento => (
                    <Tr key={departamento.dep_name}>
                      <Td className="TBody" fontSize="2xl">
                        {departamento.dep_name}
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

export default Departamentos;
