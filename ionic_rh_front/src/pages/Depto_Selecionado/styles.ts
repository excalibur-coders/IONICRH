import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

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
  @media (max-width: 700px) {
    overflow-x: hidden;
    .container {
      width: 70vw;
      overflow-x: auto;
    }
    .container1 {
      width: 70vw;
      .input {
        margin-left: 0;
      }
    }
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
