import styled from '@emotion/styled';
import { Flex } from '@chakra-ui/react';

export const Container = styled(Flex)`
  background: #f4f4f5;
  margin-top: 3rem;
  overflow: hidden;

  .Corpo {
    margin-left: 50px;
    width: 80vw;
    margin: 0 auto;
    height: 100vh;
  }

  .search {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .TableTwo {
    display: flex;
    justify-content: space-between;
    margin-left: -20px;
  }

  .TBody {
    width: 40vw;
    color: {theme.colors.primary};
  }

  .TBody_2 {
    width: 75vw;
    color: {theme.colors.primary};
    justify-content: space-around;
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

export const ContainerInput = styled.div`
  bottom: 90px;
`;
