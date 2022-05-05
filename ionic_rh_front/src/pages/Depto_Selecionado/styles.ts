import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;

  .input {
    margin-left: 50px;
  }

  .Table {
    width: 90%;
    display: flex;
    align-items: left;
    margin-top: 100px;
  }

  .TableTwo {
    width: 70vw;
    display: flex;
  }
`;

export const ContainerDiv = styled.div`
  .filter {
    display: flex;
  }
`;

export const ContainerInput = styled.div`
  margin-left: 30px;
  bottom: 90px;
`;
