import { ReactNode } from 'react';
import {Flex, Box, Spacer, Icon, Link, Divider} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import { MdFilterList, MdList} from 'react-icons/md';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import * as S from './styles';



function PerfilAdmin(){
        return(
      <>
          <S.ContainerDiv>
          <div className="sidebar">navbar aqui</div>
          </S.ContainerDiv>


            <S.Container>
              <div >
                <Sidebar/>
              </div>

              <div>
                      <Box p='4'>
                        <Icon as={MdFilterList} w={5} h={5}/>
                        Filtrar
                      </Box>
                  <Flex>
                      <Box p='4'>
                        <S.ContainerInput>
                          <div>
                            <Input size='xs' width="200px" fontSize={15} placeholder="Nome, cargo ou departamento" labelText={""} />
                          </div>
                        </S.ContainerInput>
                      </Box>

                      <Box p='4'>
                        <SearchIcon w={5} h={5}/>
                      </Box>
                      <Spacer/>

                    </Flex>
                        <div className='Table'>
                              <TableContainer >
                                <Table variant='simple'size='lg'>
                                  <Thead>
                                    <Tr>
                                      <Th fontSize='2xl' color='black' >Departamentos</Th>
                                        <Th fontSize='2xl' color='black'>Listar</Th>
                                    </Tr>
                                    <Tr><Divider orientation="horizontal" color={theme.colors.font} /> </Tr>
                                </Thead>
                                  <Tbody>
                                    <Tr>
                                        <Td>TI</Td>
                                        <Td>
                                        <Icon w={5} h={5}as={MdList} color='#4D4E4F'/>
                                        </Td>
                                      </Tr>
                                    <Tr>
                                        <Td>RH</Td>
                                        <Td><Icon w={5} h={5} as={MdList}/></Td>
                                    </Tr>
                                    <Tr>
                                        <Td>ADM</Td>
                                        <Td><Icon w={5} h={5} as={MdList}/></Td>
                                    </Tr>
                                  </Tbody>
                                </Table>
                              </TableContainer>
                      </div>
              </div>






          </S.Container>



      </>
)

}

export default PerfilAdmin

