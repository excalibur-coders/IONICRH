import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  margin-top: 3rem;

  .sidebar {
    height: 100%;
    position: fixed;
    z-index: 1000;
  }

  .marginTop{
    margin-top: 3px;
  }

  .padding-left40{
    padding-left: 40px;
  }

  .input {
    margin-left: 50px;
    width: 70vw;
    margin: 0 auto;
    height: 100vh;
  }

  .TBody {
    width: 75vw;
    color: {theme.colors.primary};
    justify-content: space-around;
  }

  .TableTwo {
    display: flex;
    justify-content: space-between;
    margin-left: -20px;
  }

  .search {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
