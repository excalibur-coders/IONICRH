import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`

.input{
  top: 52px
  bottom: 800px;
  left: 291px;
}

`;

export const ContainerDiv = styled.div`

.sidebar{
  width: 100%;
  height: 50px;
  display: fixed;
  background: ${theme.colors.font};
}

.filter{
  display: flex;
}

`;
