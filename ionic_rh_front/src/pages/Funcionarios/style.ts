import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Container = styled(Flex)`
  background: #f4f4f5;
  margin-top: 3rem;
  overflow: hidden;

  .input {
    margin-left: 50px;
  }

  .search {
    flex-wrap: wrap;
  }

  .Table {
    display: flex;
    align-items: left;
    margin-top: 100px;
  }

  .TableTwo {
    display: flex;
    justify-content: center;
    margin-left: -20px;
  }

  .spinnerWrapper {
    margin-top: 30px;
  }

  .funcSpinnerWrapper {
    margin-top: 30px;
  }
`;

export const ContainerInput = styled.div`
  bottom: 90px;
`;
