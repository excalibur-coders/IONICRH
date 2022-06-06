import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

  .input {
    margin-left: 50px;
    width: 60vw;
    margin: 0 auto;
    height: 100vh;
  }

  .TBody {
    width: 15vw;
    color: {theme.colors.primary};
    justify-content: space-around;
  }

  .TBody_2 {
    width: 65vw;
    color: {theme.colors.primary};
    justify-content: space-between;
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
