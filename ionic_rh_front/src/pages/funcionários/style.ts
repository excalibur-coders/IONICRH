import { ReactNode } from 'react';
import Navbar from 'components/navbar';
import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`


background: #00000029;

.input{
margin-left: 50px;
}

.Table{
  display: flex;
  align-items: left;
  margin-top: 100px;
}

.TableTwo{
  display: flex;
  justify-content: center;
  border: 1px solid red;
}

.spinnerWrapper {
  margin-top: 30px;
}

.funcSpinnerWrapper {
  margin-top: 30px;
}

`;

export const ContainerInput = styled.div`

margin-left: 30px;
bottom: 90px;

`;
