import { useEffect, useState, useCallback } from 'react';
import {
  Box,
  Link,
  Divider,
  InputGroup,
  InputLeftElement,
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
  }, [cookies]);

  useEffect(() => {
    getAllDepartamentos();
  }, [getAllDepartamentos]);

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
          <HStack>
            <Box w="100px" fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <button onClick={() => navigate(-1)}>Voltar</button>
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
                    <Tr key={departamento.dep_id}>
                      <Td className="TBody" fontSize="2xl">
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
      </S.Container>
    </>
  );
}

export default Departamentos;
