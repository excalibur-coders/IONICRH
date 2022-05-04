import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled.div`
  img {
    width: 120px;
    margin-top: 10px;
    margin: 5px 5px;
  }
`;

export const ContainerButton = styled.div`
  .button {
    width: 70px;
    margin-top: 10px;
    margin: 5px 5px;
    border-radius: 200px;
    opacity: 1;
  }
`;
export const ContainerFlex = styled(Flex)`
  justify-content: space-between;
`;
