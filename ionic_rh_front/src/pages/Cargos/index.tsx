import { ReactNode } from 'react';
import { useEffect, useState, useCallback } from 'react';
import {Box, Icon, Link, Divider, Spinner} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { MdFilterList, MdList} from 'react-icons/md';
import {Table, Thead, Tbody,Tr, Th, Td,TableContainer} from '@chakra-ui/react'
import { HStack } from '@chakra-ui/react'
import * as S from './styles';
import { api } from 'services/api';

import { parseCookies } from "nookies";
import { AxiosError } from 'axios';


interface ICargos {
  cargo_area: string;
}

function Cargos(){
  const cookies = parseCookies();

  const [cargos, setCargos] = useState<ICargos[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllCargos = useCallback(() => {
    setLoading(true);
    api.get('/cargo/cargo', {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      }
    }).then(({data}) => {
      setCargos(data);
    }).catch((error: Error | AxiosError) => {
      console.log(error);
    })
    setTimeout(() => {
      setLoading(false);
    }, 5000);

  }, [setLoading, setCargos]);

  useEffect(() => {
    getAllCargos();
  }, []);


        return(
    <>


       <div><Navbar/></div>


        <S.Container>
              <div >
                  <Sidebar/>
              </div>

            <div className='input'>
              <br></br>
              <HStack spacing='800px'>
                  <Box w='100px' fontSize={20}>
                  <Icon as={MdFilterList} w={9} h={5}/>
                          Filtrar
                  </Box>
                  <Box w='100px' fontSize={20}>
                  <ArrowBackIcon w={7} h={7}/>
                    <Link href='/'>Voltar</Link>
                  </Box>
                </HStack>
                <br></br>
                <HStack spacing='200px'>
                  <Box w='10px' >
                  <Input size='xs' width="200px" fontSize={20} placeholder="Nome, cargo ou departamento" labelText={""} />
                  </Box>
                  <Box w='100px'>
                  <SearchIcon w={5} h={5}/>
                  </Box>
                </HStack>

                        <div className='Table'>
                              <TableContainer >
                                <Table variant='simple'size='lg'>
                                  <Thead>
                                    <Tr>
                                      <Th fontSize='2xl' color='black' >Cargos</Th>
                                        <Th fontSize='2xl' color='black'>Listar</Th>
                                    </Tr>
                                </Thead>
                                </Table>
                                <Divider orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='10rem' />
                                <Table variant='simple'size='lg'>
                                  <div className='TableTwo'>
                                    <Tbody>
                                    {!loading ? (
                                      cargos.map(cargos => (
                                          <Tr>
                                            <Td fontSize='2xl'>{cargos.cargo_area}</Td>
                                            <Td></Td>
                                            <Td>
                                              <Link href="/funcionarios" fontSize='4xl'><MdList color='#4D4E4F' /></Link>
                                            </Td>
                                          </Tr>
                                        ))
                                      ) : (
                                        <div className='spinnerWrapper'>
                                          <Spinner size='md' />
                                        </div>
                                      )}
                              </Tbody>
                                  </div>
                            </Table>
                          </TableContainer>
                        </div>
                          </div>

                    </S.Container>



    </>
)

}

export default Cargos

