import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

  .input {
    margin-left: 50px;
  }

  .Table {
    width: 70vw;
  }

  .TBody {
    width: 70vw;
    color: {theme.colors.primary};
  }

  .TableTwo {
    display: flex;
    justify-content: left;
  }

  .spinnerWrapper {
    margin-top: 30px;
  }
  @media (max-width: 700px) {
    overflow-x: hidden;
    .container {
      width: 70vw;
      overflow-x: auto;
    }
    .container1 {
      .input {
        width: 70vw;
        margin-left: 0;
      }
    }
  }
`;

export const ContainerInput = styled.div`
  margin-left: 30px;
  bottom: 90px;
`;
