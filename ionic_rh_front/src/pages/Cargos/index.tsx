import { ReactNode } from 'react';
import { useEffect, useState, useCallback } from 'react';
import {Box, Icon, Link, Divider, InputGroup, InputLeftElement} from '@chakra-ui/react';
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
                  <ArrowBackIcon w={7} h={7}/>
                    <Link href='/'>Voltar</Link>
                  </Box>
                </HStack>
                <br></br>
                <HStack spacing='200px'>
                </HStack>
                <br></br>
            <Box w='300px' fontSize={30}>
              Cargos
            </Box>
            <Box w='900px'>
                <InputGroup >
                    <InputLeftElement fontSize={20} pointerEvents='none' children={<SearchIcon color='gray.300' />}/>
                    <Input width="70vw" size='lg' placeholder="       Pesquisar"  fontSize={10}/>
                </InputGroup>
            </Box>
            <br></br><br></br>
            <HStack spacing='150px'>
              <Box w='300px'  fontSize='4xl'>
                Cargo
              </Box>
              <Box w='400px'  fontSize='4xl'>
                Departamento
              </Box>
            </HStack>
            <Divider orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='10rem' width="70vw" />
            <br></br>
                          <TableContainer >
                              <Table variant='striped'size='lg' colorScheme="gray">
                                  <div className='TableTwo'>
                                    <Tbody>
                                    {
                                      cargos.map(cargos => (
                                          <Tr>
                                            <Td >{cargos.cargo_area}</Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td>
                                            {cargos.cargo_area}
                                            </Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                            <Td></Td>
                                          </Tr>
                                        ))
                                      }
                                </Tbody>
                                  </div>
                            </Table>
                          </TableContainer>
                          </div>

        </S.Container>



    </>
)

}

export default Cargos

