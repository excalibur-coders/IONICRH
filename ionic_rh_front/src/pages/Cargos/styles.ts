import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;

  .input {
    margin-left: 50px;
  }

  .TBody {
    width: 35vw;
  }

  .TableTwo {
    display: flex;
  }

  @media (max-width: 700px) {
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
