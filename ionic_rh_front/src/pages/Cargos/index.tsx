import { ReactNode } from 'react';
import { useEffect, useState, useCallback } from 'react';
import {Box, Icon, Link, Divider, Spinner} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon, ArrowForwardIcon} from '@chakra-ui/icons';
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




interface ICargo{
  departamento: IDepartamento
  cargo_head?: string;
  cargo_nivel?: string;
  cargo_area?: string;
}


interface IDepartamento{
  dep_name?: string;
}


function Cargos(){
  const cookies = parseCookies();

  const [cargos, setCargos] = useState<ICargo[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllCargos = useCallback(() => {
    setLoading(true);
    api.get('/cargo/cargos', {
      headers: {
        Authorization: `Bearer ${cookies['ionicookie.token']}`,
      }
    }).then(({data}) => {
      setCargos(data);
      console.log(data)
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
                  <Input size='2xs' width="940px" fontSize={20} placeholder="Nome, cargo ou departamento" labelText={""} />
                  </Box>
                  <Box w='100px'>
                  <SearchIcon w={5} h={5}/>
                  </Box>
                </HStack>

                        <div className='Table'>
                              <TableContainer >
                                <Table variant='striped'size='lg' colorScheme='black'>
{/*                                   <Thead>
                                    <Tr>
                                      <Th fontSize='2xl' color='black' >Cargos</Th>
                                        <Th fontSize='2xl' color='black'>Listar</Th>
                                    </Tr>
                                </Thead> */}
                                </Table>
                                <Divider orientation="horizontal" borderColor={theme.colors.font} variant='solid' w='90%' />
                                <Table variant='striped'size='lg' colorScheme="gray">
                                  <div className='TableTwo'>
                                    <Tbody>
                                    <Td fontSize='2xl'>Cargo</Td>
                                    <Td fontSize='2xl'>Departamento</Td>
                                    {
                                      cargos.map(cargos => (
                                          <Tr>
                                            <Td >{cargos.cargo_area}</Td>
                                            <Td>
                                            {cargos.cargo_area}
                                            </Td>
                                          </Tr>
                                        ))
                                      }
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

