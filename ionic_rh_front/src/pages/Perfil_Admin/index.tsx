import { ReactNode } from 'react';
import {Flex, Box, Spacer, Icon, Link, Divider} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons';
import { theme } from 'theme';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { MdFilterList, MdList} from 'react-icons/md';
import {
  Table, Thead, Tbody,
  Tr, Th, Td,TableContainer} from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator,
} from '@chakra-ui/react'
import * as S from './styles';



function PerfilAdmin(){
        return(
    <>


       <div><Navbar/></div>


        <S.Container>
              <div >
                  <Sidebar/>
              </div>

              <div>
                      <Box p='4'>
                        <Icon as={MdFilterList} w={5} h={5}/>
                        Filtrar
                      </Box>
                      <div className='back'>
                        <Box p='4'>
                          <ArrowBackIcon w={4} h={4}/>
                          Voltar
                        </Box>
                      </div>

                      <div className='input' >
                        <Grid templateColumns='repeat(5, 1fr)' gap={4}>
                        <Input size='xs' width="200px" fontSize={20} placeholder="Nome, cargo ou departamento" labelText={""} />
                        <SearchIcon w={5} h={5}/>
                        </Grid>
                      </div>
                        <div className='Table'>
                              <TableContainer >
                                <Table variant='simple'size='lg'>
                                  <Thead>
                                    <Tr>
                                      <Th fontSize='2xl' color='black' >Departamentos</Th>
                                        <Th fontSize='2xl' color='black'>Listar</Th>
                                    </Tr>
                                </Thead>
                                </Table>
                                <Divider w='100%' orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='5rem' />

                                <Table variant='simple'size='lg'>
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
                                <Divider w='100%' orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='5rem' />

                              </TableContainer>
                        </div>
              </div>

        </S.Container>



    </>
)

}

export default PerfilAdmin

