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
    margin-left: 30px;
  }

  .TableTwo {
    width: 50%;
    display: flex;
    margin-left: 20px;
  }

  @media (max-width: 700px) {
    border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;
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
