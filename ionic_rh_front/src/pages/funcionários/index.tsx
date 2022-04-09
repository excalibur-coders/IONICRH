import { ReactNode } from 'react';
import { theme } from 'theme';
import {Flex, Box, Spacer, Icon, Link, Divider} from '@chakra-ui/react';
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons';
import Sidebar from 'components/Sidebar';
import Input from 'components/Input';
import Navbar from 'components/navbar';
import { MdFilterList, MdList, MdOutlineAccountBox} from 'react-icons/md';
import {Table, Thead, Tbody, Tr, Th, Td,TableContainer} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import * as S from './style';

function Funcionarios(){
  return (
    <>
     <div><Navbar/></div>

      <S.Container>
              <div >
                  <Sidebar/>
              </div>

            <div className='input'>
              <br></br>
              <HStack spacing='600px'>
                  <Box w='100px' fontSize={20}>
                  <Icon as={MdFilterList} w={9} h={5}/>
                          Filtrar
                  </Box>
                  <Box w='100px' fontSize={20}>
                  <ArrowBackIcon w={7} h={7}/>
                    <Link href='/home'>Voltar</Link>
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
                                <Table variant='simple'size='md'>
                                  <Thead>
                                    <Tr>
                                      <Th fontSize='2xl' color='black' >#Nome</Th>
                                        <Th fontSize='2xl' color='black'>Salário</Th>
                                        <Th fontSize='2xl' color='black'>Departamento</Th>
                                        <Th fontSize='2xl' color='black'>Cargo</Th>
                                        <Th fontSize='2xl' color='black'>Perfil</Th>
                                    </Tr>
                                </Thead>
                                </Table>
                                <Divider orientation="horizontal" borderColor={theme.colors.font} variant='solid' size='10rem' />
                                <Table variant='simple'size='lg'>
                                  <div className='TableTwo'>
                                    <Tbody>
                                      <Tr>
                                          <Td  fontSize='xl'>Lucas Costa</Td>
                                          <Td>R$ 5000,00</Td>
                                          <Td>TI</Td>
                                          <Td></Td>
                                          <Td></Td>
                                          <Td>DevPleno</Td>
                                          <Td><Link href="/perfil" fontSize='4xl'><MdOutlineAccountBox color='#4D4E4F'/></Link></Td>
                                        </Tr>
                                      <Tr>
                                          <Td fontSize='xl'>Priscila Silva</Td>
                                          <Td>R$ 7000,00</Td>
                                          <Td>TI</Td>
                                          <Td></Td>
                                          <Td></Td>
                                          <Td>Product Owner</Td>
                                          <Td><Link href="/perfil" fontSize='4xl'><MdOutlineAccountBox color='#4D4E4F'/></Link></Td>
                                      </Tr>
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

export default Funcionarios;
