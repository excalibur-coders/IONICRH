import { useEffect, useState, useCallback } from 'react';
import { Box, Icon, Link, Divider, Stack, InputLeftElement, InputGroup} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { MdFilterList, MdList} from 'react-icons/md';
import {Table, Thead, Tbody, Tr, Th, Td,TableContainer} from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import * as S from './styles';
import { api } from 'services/api';

import { parseCookies } from "nookies";
import { AxiosError } from 'axios';

interface IDepartamentos {
  dep_name: string;
}

function Departamentos(){
  const cookies = parseCookies();

  const [departamentos, setDepartamentos] = useState<IDepartamentos[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllDepartamentos = useCallback(() => {
    setLoading(true);
    api.get('/departamentos/departamentos', {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      }
    }).then(({data}) => {
      setDepartamentos(data);
    }).catch((error: Error | AxiosError) => {
      console.log(error);
    })
    setTimeout(() => {
      setLoading(false);
    }, 5000);

  }, [setLoading, setDepartamentos]);

  useEffect(() => {
    getAllDepartamentos();
  }, []);

  return (
    <>
      <div><Navbar /></div>

      <S.Container>
        <div >
          <Sidebar />
        </div>

        <div className='input' >
          <br></br>
          <HStack spacing='600px'>
            <Box w='100px' fontSize={20}>
              <ArrowBackIcon w={7} h={7} />
              <Link href='/home'>Voltar</Link>
            </Box>
          </HStack>
          <br></br>
            <Box w='300px' fontSize={30}>
              Departamentos
            </Box>
            <Box w='900px'>
                <InputGroup >
                    <InputLeftElement fontSize={20} pointerEvents='none' children={<SearchIcon color='gray.300' />}/>
                    <Input width="70vw" size='lg' placeholder="       Pesquisar"  fontSize={10}/>
                </InputGroup>
            </Box>
            <br></br><br></br>
            <Box w='300px'  fontSize='4xl'>
              Nome
            </Box>
            <Divider orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='10rem' width="70vw" />
            <br></br>
            <TableContainer >
                <Table variant='striped'size='lg'>
                  <div className='TableTwo'>
                    <Tbody>
                          {departamentos.map(departamento => (
                            <Tr>
                              <Td fontSize='2xl'>{departamento.dep_name}</Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td></Td>
                              <Td>
                              <Link href="/funcionarios" fontSize='xl' color={theme.colors.primary}>Ver<ArrowForwardIcon color={theme.colors.primary}  /></Link>
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
  )

}

export default Departamentos
