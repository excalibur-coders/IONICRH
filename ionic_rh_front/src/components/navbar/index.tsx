import { chakra } from '@chakra-ui/react';
import * as S from './styles';
import {Box, Flex, Heading, Spacer, Button, Link, IconButton, List, ListItem} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md';
import logo from 'assets/svg/ionicrh_logo_gray.svg';
import { theme } from 'theme';



function navbar() {
  return (
    <Box bg='#F4F4F5' boxShadow=' 2px 2px 2px 1px rgba(0, 0, 0, 0.2)'>
      <S.Container>
      <S.ContainerFlex>
            <img src={logo}/>
            <Box p='2'>
            <Heading  size='md'>
              <Spacer>
              <HStack spacing='600px'>
                    <Box w='200px'>
                    <Link href='#' size='lg' variant='ghost' fontSize='20px' ></Link>
                    </Box>
                <HStack spacing='5px'>
                <Box w='100px'>
                    <Link size='lg' variant='ghost' fontSize='20px'>Home</Link>
                    </Box>
                    <Box w='100px'>
                    <Link size='md' variant='ghost' fontSize='20px'></Link>
                    </Box>
                    <Spacer></Spacer>
                    <Box w='50px'>
                                  <Link href="../"><MdOutlineLogout/></Link>
                    </Box>
                    <Box w='50px'>
                                  <Link href="../"><MdAccountCircle/></Link>
                    </Box>
                </HStack>
              </HStack>

              </Spacer>
            </Heading>
          </Box>
      </S.ContainerFlex>
    </S.Container>
    </Box>

  );
};

export default navbar;
