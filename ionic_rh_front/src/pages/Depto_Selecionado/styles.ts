import styled from '@emotion/styled';
import { Flex, Box } from '@chakra-ui/react';
import { theme } from 'theme';

export const Container = styled(Flex)`
  backgroud: #00000029;
  margin-top: 3rem;
  overflow: hidden;

  .input {
    margin-left: 50px;
    width: 70vw;
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
