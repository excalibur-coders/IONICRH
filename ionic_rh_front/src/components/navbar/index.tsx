import { chakra } from '@chakra-ui/react';
import * as S from './styles';
import {Box, Flex, Heading, Spacer, Button, ListIcon} from '@chakra-ui/react';
import {MdAccountCircle, MdOutlineLogout} from 'react-icons/md'

function navbar() {
  return (
    <S.Container>
      <Flex>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <Box>
    <Button colorScheme='teal' as={MdOutlineLogout}>


    </Button>
    <Button colorScheme='teal' as={MdAccountCircle}>

    </Button>
  </Box>
</Flex>
    </S.Container>
  );
};

export default navbar;
